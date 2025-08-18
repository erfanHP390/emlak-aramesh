"use client";
import React, { useState } from "react";
import styles from "./ConsultantTabs.module.css";
import TimeLineTab from "../timeLineTab/TimeLineTab";
import EditConsultantInfo from "../editConsultantInfo/EditConsultantInfo";
import HouseTabs from "../houseTabs/HouseTabs";

function ConsultantTabs({
  consultant = {},
  clients = [],
  reqBuys = [],
  houses = [],
}) {
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
            type="button"
          >
            فعالیت ها
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            className={`${styles.navLink} ${
              activeTab === "myHouses" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("myHouses")}
            type="button"
          >
            ملک های من
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            className={`${styles.navLink} ${
              activeTab === "settings" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("settings")}
            type="button"
          >
            تنظیمات
          </button>
        </li>
      </ul>

      <div className={styles.tabContent}>
        {activeTab === "timeline" && (
          <div className={`${styles.tabPane} ${styles.active}`}>
            <TimeLineTab clients={clients} reqBuys={reqBuys} />
          </div>
        )}
        {activeTab === "myHouses" && (
          <div className={`${styles.tabPane} ${styles.active}`}>
            <HouseTabs houses={houses} />
          </div>
        )}
        {activeTab === "settings" && (
          <div className={`${styles.tabPane} ${styles.active}`}>
            <EditConsultantInfo consultant={consultant} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ConsultantTabs;
