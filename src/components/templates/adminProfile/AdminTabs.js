"use client";
import React, { useState } from "react";
import styles from "../consultantDetails/ConsultantTabs/ConsultantTabs.module.css";
import HouseTabs from "../consultantDetails/houseTabs/HouseTabs";

function AdminTabs({houses}) {
  const [activeTab, setActiveTab] = useState("houses");

  return (
    <div className={styles.navTabsCustom}>
      <ul className={styles.navTabs}>
        <li className={styles.navItem}>
          <button
            className={`${styles.navLink} ${
              activeTab === "houses" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("houses")}
          >
            خانه ها
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
            activeTab === "houses" ? styles.active : ""
          }`}
        >
            <HouseTabs houses={houses} />
        </div>
        <div
          className={`${styles.tabPane} ${
            activeTab === "myHouses" ? styles.active : ""
          }`}
        ></div>
        <div
          className={`${styles.tabPane} ${
            activeTab === "settings" ? styles.active : ""
          }`}
        ></div>
      </div>
    </div>
  );
}

export default AdminTabs;
