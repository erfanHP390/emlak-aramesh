import React from "react";
import Sidebar from "../modules/sidebar/Sidebar";
import Topbar from "../modules/topbar/Topbar";
import styles from "./PanelLayout.module.css";

function PanelLayout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Topbar />
      <Sidebar />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}

export default PanelLayout;