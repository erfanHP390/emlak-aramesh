"use client";
import React, { useState } from "react";
import Topbar from "../modules/topbar/Topbar";
import Sidebar from "../modules/sidebar/Sidebar";
import styles from "./PanelLayout.module.css";

function Wrapper({ user, consultant, consultantInfo, admin, children , notifications }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar
        user={user}
        consultant={consultant}
        consultantInfo={consultantInfo}
        admin={admin}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className={`${styles.mainContent} ${!isSidebarOpen ? styles.fullWidth : ''}`}>
        <Topbar
          user={user}
          consultant={consultant}
          consultantInfo={consultantInfo}
          admin={admin}
          notifications={notifications}
          toggleSidebar={toggleSidebar}
        />
        {children}
      </div>
    </>
  );
}

export default Wrapper;