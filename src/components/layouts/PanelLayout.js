import React from "react";
import Sidebar from "../modules/sidebar/Sidebar";
import Topbar from "../modules/topbar/Topbar";
import styles from "./PanelLayout.module.css";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";

async function PanelLayout({ children }) {

  connectToDB()
  const user = await authUser()

  return (
    <div className={styles.layoutContainer}>
      <Topbar />
      <Sidebar  user={user} />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}

export default PanelLayout;