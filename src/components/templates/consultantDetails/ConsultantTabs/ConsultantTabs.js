"use client"
import React, { useState } from "react";
import styles from "./ConsultantTabs.module.css";
import TimeLineTab from "../timeLineTab/TimeLineTab";
import EditConsultantInfo from "../editConsultantInfo/EditConsultantInfo";

function ConsultantTabs() {
  const [activeTab, setActiveTab] = useState("timeline");

  return (
    <div className={styles.navTabsCustom}>
      <ul className={styles.navTabs}>
        <li className={styles.navItem}>
          <button
            className={`${styles.navLink} ${
              activeTab === "timeline" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("timeline")}
          >
            تایم لاین
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            className={`${styles.navLink} ${
              activeTab === "settings" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("settings")}
          >
            تنظیمات
          </button>
        </li>
      </ul>
      <div className={styles.tabContent}>
        <div
          className={`${styles.tabPane} ${
            activeTab === "timeline" ? styles.active : ""
          }`}
        >
          <TimeLineTab />
        </div>
        <div
          className={`${styles.tabPane} ${
            activeTab === "settings" ? styles.active : ""
          }`}
        >
          <EditConsultantInfo />
        </div>
      </div>
    </div>
  );
}

export default ConsultantTabs;
