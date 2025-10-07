import React from "react";

import styles from "./PanelLayout.module.css";
import connectToDB from "@/configs/db";
import { authAdmin, authConsultant, authUser } from "@/utils/authUser";
import UserModel from "@/models/User";
import ConsultantModel from "@/models/Consultant";
import Wrapper from "./Wrapper";
import NotificationModel from "@/models/Notification";

async function PanelLayout({ children }) {
  connectToDB();
  const user = await authUser();
  const consultant = await authConsultant();
  const admin = await authAdmin();
  const consultantInfo = await ConsultantModel.findOne({ user: user._id });
  const notifications = await NotificationModel.find({isRead: false})

  return (
    <div className={styles.layoutContainer}>
      <Wrapper
        user={user}
        consultant={consultant}
        consultantInfo={consultantInfo}
        admin={admin}
        notifications={notifications}
      >{children}</Wrapper>
      {/* <main className={styles.mainContent}>{children}</main> */}
    </div>
  );
}

export default PanelLayout;
