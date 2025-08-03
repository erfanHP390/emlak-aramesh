import PanelLayout from "@/components/layouts/PanelLayout";
import React from "react";
import styles from "@/styles/allConsultants.module.css"
import connectToDB from "@/configs/db";
import ConsultantModel from "@/models/Consultant"
import CardConsultant from "@/components/modules/cardConsultant/CardConsultant";

async function page() {

    connectToDB()
    const consultants = await  ConsultantModel.find({})

  return (
    <PanelLayout>
      <div className={styles.contentWrapper}>
        <div className={styles.containerFull}>
          <section className={styles.contentSection}>
            <div className={styles.consultantsRow}>
             <CardConsultant />
            </div>
          </section>
        </div>
      </div>
    </PanelLayout>
  );
}

export default page;