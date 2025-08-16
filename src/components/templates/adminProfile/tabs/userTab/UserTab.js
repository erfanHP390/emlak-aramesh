"use client";
import React, { useState } from "react";
import styles from "../../../consultantDetails/timeLineTab/TimeLineTab.module.css";
import {
  FaUser,
  FaEnvelope,
  FaShieldAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa";
import { toPersianStrDigits } from "@/components/templates/index/userInfo/UserInfo";

function UserTab({ users: initialUsers = [] }) {
  const [visibleUsers, setVisibleUsers] = useState(3);
  const [users, setUsers] = useState(initialUsers.slice(0, visibleUsers));

  const formatDate = (dateString) => {
    if (!dateString) return "تاریخ نامعلوم";
    const date = new Date(dateString);
    return date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const loadMoreUsers = () => {
    const newVisibleUsers = visibleUsers + 3;
    setVisibleUsers(newVisibleUsers);
    setUsers(initialUsers.slice(0, newVisibleUsers));
  };

  const getUserRoleTitle = (role) => {
    switch (role) {
      case "ADMIN":
        return "مدیر";
      case "CONSULTANT":
        return "مشاور";
      case "USER":
        return "کاربر";
      default:
        return "نقش نامعلوم";
    }
  };

  const getUserRoleIcon = (role) => {
    switch (role) {
      case "ADMIN":
        return <FaUserShield className={styles.icon} />;
      case "CONSULTANT":
        return <FaUserTie className={styles.icon} />;
      case "USER":
        return <FaUser className={styles.icon} />;
      default:
        return <FaUser className={styles.icon} />;
    }
  };

  const safeInitialUsers = Array.isArray(initialUsers) ? initialUsers : [];

  return (
    <>
      <div className={`${styles.tabPane} ${styles.active}`} id="usertimeline">
        <div className={styles.section}>
          <h2 className={`${styles.sectionTitle} Anjoman_Bold`}>
            <FaUser className={styles.icon} /> کاربران
          </h2>

          {safeInitialUsers.length > 0 ? (
            <>
              <div className={styles.cardsContainer}>
                {users.map((user) => (
                  <div
                    key={user._id?.$oid || Math.random()}
                    className={styles.card}
                  >
                    <div className={styles.cardHeader}>
                      <h3 className={`${styles.clientName} Anjoman_SemiBold`}>
                        {user.name || "نام نامعلوم"}
                      </h3>
                      <span
                        className={
                          user.isAccept
                            ? styles.badgeSuccess
                            : styles.badgeDanger
                        }
                      >
                        {user.isAccept ? "تایید شده" : "تایید نشده"}
                      </span>
                    </div>

                    <div className={styles.cardBody}>
                      <p className={styles.cardText}>
                        <span className={styles.label}>ایمیل:</span>
                        <span className={`${styles.value} ${styles.value_set}`}>
                          <FaEnvelope className={styles.icon} />{" "}
                          {user.email || "ثبت نشده"}
                        </span>
                      </p>

                      <p className={styles.cardText}>
                        <span className={styles.label}>نقش:</span>
                        <span className={styles.value}>
                          {getUserRoleIcon(user.role)}
                          {getUserRoleTitle(user.role)}
                        </span>
                      </p>

                      <p className={styles.cardText}>
                        <span className={styles.label}>کد صنفی:</span>
                        <span className={styles.value}>
                          {user.guildID
                            ? toPersianStrDigits(Number(user.guildID))
                            : "ثبت نشده"}
                        </span>
                      </p>

                      <p className={styles.cardText}>
                        <span className={styles.label}>وضعیت:</span>
                        <span className={styles.value}>
                          {user.isAccept ? (
                            <FaCheckCircle
                              className={styles.icon}
                              style={{ color: "#22c55e" }}
                            />
                          ) : (
                            <FaTimesCircle
                              className={styles.icon}
                              style={{ color: "#ef4444" }}
                            />
                          )}
                          {user.isAccept ? "فعال" : "غیرفعال"}
                        </span>
                      </p>
                    </div>

                    <div className={styles.cardFooter}>
                      <span className={styles.date}>
                        <FaCalendarAlt className={styles.icon} />{" "}
                        {formatDate(user.createdAt)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {visibleUsers < safeInitialUsers.length && (
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.loadMoreBtn}
                    onClick={loadMoreUsers}
                  >
                    نمایش کاربران بیشتر
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className={styles.noData}>کاربری یافت نشد</p>
          )}
        </div>
      </div>
    </>
  );
}

export default UserTab;
