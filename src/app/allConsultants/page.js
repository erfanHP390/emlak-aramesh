import PanelLayout from "@/components/layouts/PanelLayout";
import React from "react";
import styles from "@/styles/allConsultants.module.css"
import connectToDB from "@/configs/db";
import ConsultantModel from "@/models/Consultant"
import CardConsultant from "@/components/modules/cardConsultant/CardConsultant";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";

async function Page() {
  try {
    await connectToDB();
    const user = await authUser()
    const consultants = await ConsultantModel.find({}).lean();

    if(!user) {
      redirect("/login")
    }

    return (
      <PanelLayout>
        <div className={styles.contentWrapper}>
          <div className={styles.containerFull}>
            <section className={styles.contentSection}>
              <div className={styles.consultantsRow}>
                {consultants.length > 0 ? (
                  consultants.map(consultant => (
                    <CardConsultant 
                      key={consultant._id.toString()}  
                      {...consultant} 
                      image={consultant.img}   
                    />
                  ))
                ) : (
                  <div className={styles.noConsultants}>
                    <p>هیچ مشاوری یافت نشد</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </PanelLayout>
    );
  } catch (error) {
    console.error("Error fetching consultants:", error);
    return (
      <PanelLayout>
        <div className={styles.contentWrapper}>
          <div className={styles.containerFull}>
            <section className={styles.contentSection}>
              <div className={styles.errorMessage}>
                <p>خطا در بارگذاری اطلاعات مشاوران</p>
              </div>
            </section>
          </div>
        </div>
      </PanelLayout>
    );
  }
}

export default Page;