import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import React from "react";
import styles from "@/styles/dashboard.module.css";
import PanelLayout from "@/components/layouts/PanelLayout";
import Status from "@/components/templates/index/status/Status";
import ChartContact from "@/components/templates/index/chartContact/ChartContact";

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
                    <ChartContact />
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