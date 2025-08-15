import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import React from "react";
import UserModel from "@/models/User";
import styles from "@/styles/consultantDetails.module.css";
import PanelLayout from "@/components/layouts/PanelLayout";
import UserInfo from "@/components/templates/userProfile/userInfo/UserInfo";
import UserCallInfo from "@/components/templates/userProfile/userCallInfo/UserCallInfo";
import UserTabs from "@/components/templates/userProfile/userTabs/UserTabs";

async function page({ params }) {
  connectToDB();

  const userLoggedIn = await authUser();

  if (!userLoggedIn) {
    redirect("/login");
  }

  const user = await UserModel.findOne({ _id: params.id }).lean();

  if (!user) {
    redirect("/houseList");
  }

  return (
    <PanelLayout>
      <div className={styles.contentWrapper}>
        <div className={styles.containerFull}>
          {/* Main content */}
          <section className={styles.content}>
            <div className={styles.row}>
              <div
                className={`${styles.col12} ${styles.colLg5} ${styles.colXl4}`}
              >
                <UserInfo user={JSON.parse(JSON.stringify(user))} />
                <UserCallInfo user={JSON.parse(JSON.stringify(user))} />
              </div>
              <div
                className={`${styles.col12} ${styles.colLg7} ${styles.colXl8}`}
              >
                <UserTabs user={JSON.parse(JSON.stringify(user))} />
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
