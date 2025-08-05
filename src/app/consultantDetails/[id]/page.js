import PanelLayout from "@/components/layouts/PanelLayout";
import ConsultantCallInfo from "@/components/templates/consultantDetails/consultantCallInfo/ConsultantCallInfo";
import ConsultantInfo from "@/components/templates/consultantDetails/consultantInfo/ConsultantInfo";
import ConsultantTabs from "@/components/templates/consultantDetails/ConsultantTabs/ConsultantTabs";
import React from "react";
import styles from "@/styles/consultantDetails.module.css";
import connectToDB from "@/configs/db";
import ConsultantModel from "@/models/Consultant"

async function Page({params}) {

  connectToDB()
  const consultant = await ConsultantModel.findOne({_id: params.id})
    .populate('clients')
    .populate('houses')
    .lean();

  return (
    <PanelLayout>
      <div className={styles.contentWrapper}>
        <div className={styles.containerFull}>
          {/* Main content */}
          <section className={styles.content}>
            <div className={styles.row}>
              <div className={`${styles.col12} ${styles.colLg5} ${styles.colXl4}`}>
                <ConsultantInfo consultant={JSON.parse(JSON.stringify(consultant))} clients={JSON.parse(JSON.stringify(consultant.clients))}  houses={JSON.parse(JSON.stringify(consultant.houses))}  />
                <ConsultantCallInfo consultant={JSON.parse(JSON.stringify(consultant))} />
              </div>
              <div className={`${styles.col12} ${styles.colLg7} ${styles.colXl8}`}>
                <ConsultantTabs />
                {/* /.nav-tabs-custom */}
              </div>
            </div>
          </section>
          {/* /.content */}
        </div>
      </div>
    </PanelLayout>
  );
}

export default Page;