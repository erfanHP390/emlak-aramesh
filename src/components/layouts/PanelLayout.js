import React from "react";

import styles from "./PanelLayout.module.css";
import connectToDB from "@/configs/db";
import { authAdmin, authConsultant, authUser } from "@/utils/authUser";
import UserModel from "@/models/User";
import ConsultantModel from "@/models/Consultant";
import Wrapper from "./Wrapper";

async function PanelLayout({ children }) {
  connectToDB();
  const user = await authUser();
  const consultant = await authConsultant();
  const admin = await authAdmin();
  const consultantInfo = await ConsultantModel.findOne({ user: user._id });

  return (
    <div className={styles.layoutContainer}>
      <Wrapper
        user={user}
        consultant={consultant}
        consultantInfo={consultantInfo}
        admin={admin}
      >{children}</Wrapper>
      {/* <main className={styles.mainContent}>{children}</main> */}
    </div>
  );
}

export default PanelLayout;
