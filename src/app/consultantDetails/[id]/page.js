import PanelLayout from "@/components/layouts/PanelLayout";
import ConsultantCallInfo from "@/components/templates/consultantDetails/consultantCallInfo/ConsultantCallInfo";
import ConsultantInfo from "@/components/templates/consultantDetails/consultantInfo/ConsultantInfo";
import ConsultantTabs from "@/components/templates/consultantDetails/ConsultantTabs/ConsultantTabs";
import React from "react";
import styles from "@/styles/consultantDetails.module.css";
import connectToDB from "@/configs/db";
import ConsultantModel from "@/models/Consultant";
import { authConsultant, authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import ReqBuyModel from "@/models/ReqBuy";
import ClientModel from "@/models/Client";

export const dynamic = "force-dynamic";

async function Page({ params }) {
    await connectToDB();

    const consultant = await ConsultantModel.findOne({ _id: params.id })
      .populate("clients")
      .populate("houses")
      .lean();

    if (!consultant) {
      redirect("/dashboard");
      return null;
    }

    const [reqBuys, clients, user, consultantLoggedIn] = await Promise.all([
      ReqBuyModel.find({ consultant: params.id }).populate("houses").lean(),
      ClientModel.find({ consultant: params.id }).populate("houses").lean(),
      authUser(),
      authConsultant(),
    ]);

    if (!user) {
      redirect("/login");
      return null;
    }

    if (!consultantLoggedIn) {
      redirect("/allConsultants");
      return null;
    }

    const consultantData = JSON.parse(JSON.stringify(consultant));
    const clientsData = JSON.parse(JSON.stringify(clients || []));
    const housesData = JSON.parse(JSON.stringify(consultant.houses || []));
    const reqBuysData = JSON.parse(JSON.stringify(reqBuys || []));

    return (
      <PanelLayout>
        <div className={styles.contentWrapper}>
          <div className={styles.containerFull}>
            <section className={styles.content}>
              <div className={styles.row}>
                <div
                  className={`${styles.col12} ${styles.colLg5} ${styles.colXl4}`}
                >
                  <ConsultantInfo
                    consultant={consultantData}
                    clients={consultantData.clients || []}
                    houses={housesData}
                  />
                  <ConsultantCallInfo consultant={consultantData} />
                </div>
                <div
                  className={`${styles.col12} ${styles.colLg7} ${styles.colXl8}`}
                >
                  <ConsultantTabs
                    houses={housesData}
                    consultant={consultantData}
                    clients={clientsData}
                    reqBuys={reqBuysData}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </PanelLayout>
    );
}

export default Page;
