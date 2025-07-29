import React from "react";
import Sidebar from "../modules/sidebar/Sidebar";
import Topbar from "../modules/topbar/Topbar";
import styles from "./PanelLayout.module.css";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import UserModel from "@/models/User"
import ConsultantModel from "@/models/Consultant"

async function PanelLayout({ children }) {

  connectToDB()
  const user = await authUser()
  const consultant = await ConsultantModel.findOne({ email : user.email})

  return (
    <div className={styles.layoutContainer}>
      <Topbar />
      <Sidebar  user={user}  consultant={consultant} />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}

export default PanelLayout;