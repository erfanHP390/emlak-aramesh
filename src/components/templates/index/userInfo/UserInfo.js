"use client";
import React from "react";
import CountUp from "react-countup";
import styles from "./UserInfo.module.css";

export const toPersianStrDigits = (str) => {
  if (!str) return "";
  return str.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
};

export function toPersianNumDigits(num) {
  if (!num) return "۰";
  return num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

function UserInfo({ consultant = {}, reqBuys = [] }) {
  if (!consultant) {
    return (
      <div className={styles.userInfoContainer}>
        در حال بارگذاری اطلاعات مشاور...
      </div>
    );
  }

  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <div className={styles.profileOverlay}>
            <div className={styles.avatarContainer}>
              <img
                src={consultant.img || "/images/abstract-user-flat-4.svg"}
                alt="پروفایل مشاور"
                className={styles.avatar}
                onError={(e) => {
                  e.target.src = "/images/abstract-user-flat-4.svg";
                }}
              />
            </div>
            <h3 className={styles.userName}>
              {consultant.firstName || ""} {consultant.lastName || ""}
            </h3>
            <p className={styles.userCode}>
              کد مشاور: {toPersianStrDigits(consultant.hisCode)}
            </p>
          </div>
        </div>

        <div className={styles.profileStats}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>
              <CountUp
                end={consultant.houses?.length || 0}
                duration={2}
                formattingFn={(val) => toPersianNumDigits(val)}
              />
            </div>
            <div className={styles.statLabel}>املاک</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statValue}>
              <CountUp
                end={consultant.clients?.length || 0}
                duration={2}
                formattingFn={(val) => toPersianNumDigits(val)}
              />
            </div>
            <div className={styles.statLabel}>مشتریان</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statValue}>
              <CountUp
                end={reqBuys?.length || 0}
                duration={2}
                formattingFn={(val) => toPersianNumDigits(val)}
              />
            </div>
            <div className={styles.statLabel}>درخواست‌ها</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
