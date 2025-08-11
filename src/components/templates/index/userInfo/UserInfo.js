"use client";
import React from "react";
import CountUp from "react-countup";
import styles from "./UserInfo.module.css";

export const toPersianStrDigits = (str) => {
  return str?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
};

export function toPersianNumDigits(num) {
  return num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

function UserInfo({ consultant, reqBuys }) {
  return (
    <div className={styles.userInfoContainer}>
      {/* بخش باکس‌های اطلاعاتی */}
      {/* <div className={styles.infoBoxesGrid}>
        Box 1: تعداد مشتریان
        <div className={`${styles.infoBox} ${styles.infoBox1}`}>
          <h6 className={styles.boxTitle}>تعداد مشتریان</h6>
          <div className={styles.boxContent}>
            <span className={styles.boxNumber}>
              <CountUp
                end={consultant.clients?.length || 0}
                duration={2.5}
                formattingFn={(val) => toPersianNumDigits(val.toLocaleString())}
              />
            </span>
            <span className={`${styles.boxIcon} mdi mdi-account-group`} />
          </div>
        </div>

        Box 2: املاک ثبت شده
        <div className={`${styles.infoBox} ${styles.infoBox2}`}>
          <h6 className={styles.boxTitle}>املاک ثبت شده</h6>
          <div className={styles.boxContent}>
            <span className={styles.boxNumber}>
              <CountUp
                end={consultant.houses?.length || 0}
                duration={2.5}
                formattingFn={(val) => toPersianNumDigits(val.toLocaleString())}
              />
            </span>
            <span className={`${styles.boxIcon} mdi mdi-home-city`} />
          </div>
        </div>

        Box 3: کد مشاور
        <div className={`${styles.infoBox} ${styles.infoBox3}`}>
          <h6 className={styles.boxTitle}>کد مشاور</h6>
          <div className={styles.boxContent}>
            <span className={styles.boxNumber}>
              {toPersianStrDigits(consultant.hisCode)}
            </span>
            <span className={`${styles.boxIcon} mdi mdi-identifier`} />
          </div>
        </div>

        Box 4: درخواست‌ها
        <div className={`${styles.infoBox} ${styles.infoBox4}`}>
          <h6 className={styles.boxTitle}>درخواست‌ها</h6>
          <div className={styles.boxContent}>
            <span className={styles.boxNumber}>
              <CountUp
                end={reqBuys?.length || 0}
                duration={2.5}
                formattingFn={(val) => toPersianNumDigits(val.toLocaleString())}
              />
            </span>
            <span className={`${styles.boxIcon} mdi mdi-clipboard-list`} />
          </div>
        </div>
</div>       */}

      {/* کارت پروفایل مشاور */}
      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <div className={styles.profileOverlay}>
            <div className={styles.avatarContainer}>
              <img
                src={consultant.img || "/images/abstract-user-flat-4.svg"}
                alt="پروفایل مشاور"
                className={styles.avatar}
              />
            </div>
            <h3 className={styles.userName}>
              {consultant.firstName} {consultant.lastName}
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
                formattingFn={(val) => toPersianNumDigits(val.toLocaleString())}
              />
            </div>
            <div className={styles.statLabel}>املاک</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statValue}>
              <CountUp
                end={consultant.clients?.length || 0}
                duration={2}
                formattingFn={(val) => toPersianNumDigits(val.toLocaleString())}
              />
            </div>
            <div className={styles.statLabel}>مشتریان</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statValue}>
              <CountUp
                end={reqBuys?.length || 0}
                duration={2}
                formattingFn={(val) => toPersianNumDigits(val.toLocaleString())}
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
