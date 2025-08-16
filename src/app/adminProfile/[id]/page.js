import PanelLayout from "@/components/layouts/PanelLayout";
import React from "react";
import styles from "@/styles/adminProfile.module.css";
import AdminTabs from "@/components/templates/adminProfile/AdminTabs";
import { redirect } from "next/navigation";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import HouseModel from "@/models/House"
import ClientModel from "@/models/Client"

async function page({ params }) {
  connectToDB();

  const userAdmin = await UserModel.findOne({ _id: params.id });

  if (userAdmin.role === "USER") {

    redirect(`/userProfile/${params.id}`);

  } else if (userAdmin.role === "CONSULTANT") {

    redirect(`/consultantDetails/${params.id}`);

  } else if(!userAdmin) {
    redirect("/dashboard")
  }

  const houses = await HouseModel.find({agencyID: userAdmin.guildID}).lean()
  const clients = await ClientModel.find({  })
    .populate("houses") 
    .lean();



  return (
    <PanelLayout>
      <div className={styles.contentWrapper}>
        <div className={styles.containerFull}>
          {/* Main content */}
          <section className={styles.content}>
            <div className={styles.row}>
              <div
                className={`${styles.col12} ${styles.colLg7} ${styles.colXl8}`}
              >
                <AdminTabs
                houses={JSON.parse(JSON.stringify(houses))}
                clients={JSON.parse(JSON.stringify(clients))}
                />
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

export default page;
