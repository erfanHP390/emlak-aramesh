"use client";
import React, { useState } from "react";
import styles from "./ConsultantTabs.module.css";
import TimeLineTab from "../timeLineTab/TimeLineTab";
import EditConsultantInfo from "../editConsultantInfo/EditConsultantInfo";
import HouseTabs from "../houseTabs/HouseTabs";

function ConsultantTabs({ consultant, clients, reqBuys, houses }) {
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
                فعالیت ها
              </button>
            </li>
            <li className={styles.navItem}>
              <button
                className={`${styles.navLink} ${
                  activeTab === "myHouses" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("myHouses")}
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
              <TimeLineTab clients={clients} reqBuys={reqBuys} />
            </div>
            <div
              className={`${styles.tabPane} ${
                activeTab === "myHouses" ? styles.active : ""
              }`}
            >
              <HouseTabs houses={houses}  />
            </div>
            <div
              className={`${styles.tabPane} ${
                activeTab === "settings" ? styles.active : ""
              }`}
            >
              <EditConsultantInfo consultant={consultant}  />
            </div>
          </div>
    </div>
  );
}

export default ConsultantTabs;
