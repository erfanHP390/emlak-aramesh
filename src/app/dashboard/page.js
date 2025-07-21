import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import React from "react";
import styles from "@/styles/dashboard.module.css";
import PanelLayout from "@/components/layouts/PanelLayout";
import Status from "@/components/templates/index/status/Status";
import ChartContact from "@/components/templates/index/chartContact/ChartContact";
import Reservation from "@/components/templates/index/reservation/Reservation";
import UserInfo from "@/components/templates/index/userInfo/UserInfo";
import VisitTable from "@/components/templates/index/visitTable/VisitTable";

async function page() {
  connectToDB();
  const user = await authUser();

  if (!user) {
    redirect("/login");
  }

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
                      <UserInfo user={user} />
                    </div>
                    <div className={styles.visitTable_wrapper}>
                      <VisitTable />
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