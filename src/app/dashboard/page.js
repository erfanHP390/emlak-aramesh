import connectToDB from "@/configs/db";
import { authConsultant, authUser } from "@/utils/authUser";
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

async function page() {
  connectToDB();
  const user = await authUser();
  const consultantLoggedIn = await authConsultant()
  const clients = await ClientModel.find({});
  const consultant = await ConsultantModel.findOne({ user: user._id })
    .populate("clients")
    .populate("houses")
    .lean();

    if(!consultantLoggedIn) {
      redirect("/houseList")
    }

  const reqBuys = await ReqBuyModel.find({ consultant: consultant._id })
    .populate("consultant")
    .lean();

  if (!user) {
    redirect("/login");
  };
  

  return (
    <>
      <PanelLayout>
        <>
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
                    <div className={styles.userInfo_wrapper}>
                      {
                        consultant && (<UserInfo
                        consultant={JSON.parse(JSON.stringify(consultant))}
                        reqBuys={JSON.parse(JSON.stringify(reqBuys))}
                        clients={JSON.parse(JSON.stringify(consultant.clients))}  houses={JSON.parse(JSON.stringify(consultant.houses))}
                      />)
                      }

                    </div>
                    <div className={styles.visitTable_wrapper}>
                      <VisitTable clients={clients} />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
      </PanelLayout>
    </>
  );
}

export default page;
