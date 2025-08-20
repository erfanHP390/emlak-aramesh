"use client"
import React, { useEffect, useState } from "react";
import styles from "../../consultantDetails/ConsultantTabs/ConsultantTabs.module.css";
import EditUserInfo from "./editUserInfo/EditUserInfo";
import TimeLineTab from "../../consultantDetails/timeLineTab/TimeLineTab";
import HouseTabs from "../../consultantDetails/houseTabs/HouseTabs";

function UserTabs({ user , clients , reqBuys , clientHouses }) {
  
  const [reqHouses, setReqHouses] = useState([]);
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const housesFromReqBuys = reqBuys.flatMap(req => req.houses || []);
    const combinedHouses = [...housesFromReqBuys, ...clientHouses];
    
    const uniqueHouses = combinedHouses.filter((house, index, self) =>
      index === self.findIndex((h) => h._id === house._id)
    );
    
    setAllHouses(uniqueHouses);
  }, [reqBuys, clientHouses]);

  const [activeTab, setActiveTab] = useState("timeline");

  return (
    <>
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
              ملک های خریداری شده
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
            <HouseTabs houses={allHouses} />
          </div>
          <div
            className={`${styles.tabPane} ${
              activeTab === "settings" ? styles.active : ""
            }`}
          >
            <EditUserInfo user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserTabs;