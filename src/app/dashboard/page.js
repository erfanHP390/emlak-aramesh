import connectToDB from "@/configs/db";
import { authAdmin, authConsultant, authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import React from "react";
import styles from "@/styles/dashboard.module.css";
import PanelLayout from "@/components/layouts/PanelLayout";
import Status from "@/components/templates/index/status/Status";
import ChartContact from "@/components/templates/index/chartContact/ChartContact";
import Reservation from "@/components/templates/index/reservation/Reservation";
import UserInfo from "@/components/templates/index/userInfo/UserInfo";
import VisitTable from "@/components/templates/index/visitTable/VisitTable";
import ClientModel from "@/models/Client";
import ConsultantModel from "@/models/Consultant";
import ReqBuyModel from "@/models/ReqBuy";


async function Page() {
  await connectToDB();

  const user = await authUser();
  if (!user) {
    redirect("/login");
  }

  const [consultantLoggedIn, admin] = await Promise.all([
    authConsultant(),
    authAdmin(),
  ]);

  if (!consultantLoggedIn && !admin) {
    redirect("/houseList");
  }

  const [clients, consultant] = await Promise.all([
    ClientModel.find({}).populate("houses").lean(),
    ConsultantModel.findOne({ user: user._id })
      .populate("clients")
      .populate("houses")
      .lean(),
  ]);

  let reqBuys = [];
  if (consultant) {
    reqBuys = await ReqBuyModel.find({ consultant: consultant._id })
      .populate("consultant")
      .lean();
  }

  const consultantData = consultant
    ? JSON.parse(JSON.stringify(consultant))
    : null;
  const reqBuysData = JSON.parse(JSON.stringify(reqBuys));
  const clientsData = JSON.parse(JSON.stringify(clients));

  return (
    <PanelLayout>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.containerFull}>
            <section className={styles.content}>
              <div className={styles.row}>
                <Status />
              </div>
              <div className={styles.row_secondary}>
                <ChartContact />
                <Reservation />
              </div>
              <div className={styles.row_third}>
                {consultantData && (
                  <div className={styles.userInfo_wrapper}>
                    <UserInfo
                      consultant={consultantData}
                      reqBuys={reqBuysData}
                      clients={consultantData.clients || []}
                      houses={consultantData.houses || []}
                    />
                  </div>
                )}
                <div className={styles.visitTable_wrapper}>
                  <VisitTable clients={clientsData} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PanelLayout>
  );
}

export default Page;
