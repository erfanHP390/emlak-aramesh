"use client";
import React, { useState } from "react";
import styles from "../consultantDetails/ConsultantTabs/ConsultantTabs.module.css";
import HouseTabs from "../consultantDetails/houseTabs/HouseTabs";
import ClientTab from "./tabs/clientTab/ClientTab";
import ReqBuysTab from "./tabs/reqBuysTab/ReqBuysTab";
import ContactTabs from "./tabs/contactTabs/ContactTabs";
import ConsultantTab from "./tabs/consultantTab/ConsultantTab";
import UserTab from "./tabs/userTab/UserTab";

function AdminTabs({
  houses = [],
  clients = [],
  reqBuys = [],
  contacts = [],
  consultants = [],
  users = [],
}) {
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
              activeTab === "clients" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("clients")}
          >
            مشتریان
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            className={`${styles.navLink} ${
              activeTab === "reqBuys" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("reqBuys")}
          >
            درخواست ها
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            className={`${styles.navLink} ${
              activeTab === "contacts" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("contacts")}
          >
            پیام ها
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            className={`${styles.navLink} ${
              activeTab === "consultants" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("consultants")}
          >
            مشاوران
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            className={`${styles.navLink} ${
              activeTab === "users" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("users")}
          >
            کاربران
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
            activeTab === "clients" ? styles.active : ""
          }`}
        >
          <ClientTab clients={clients} />
        </div>
        <div
          className={`${styles.tabPane} ${
            activeTab === "reqBuys" ? styles.active : ""
          }`}
        >
          <ReqBuysTab reqBuys={reqBuys} />
        </div>
        <div
          className={`${styles.tabPane} ${
            activeTab === "contacts" ? styles.active : ""
          }`}
        >
          <ContactTabs contacts={contacts} />
        </div>
        <div
          className={`${styles.tabPane} ${
            activeTab === "consultants" ? styles.active : ""
          }`}
        >
          <ConsultantTab consultants={consultants} />
        </div>
        <div
          className={`${styles.tabPane} ${
            activeTab === "users" ? styles.active : ""
          }`}
        >
          <UserTab users={users} />
        </div>
      </div>
    </div>
  );
}

export default AdminTabs;
