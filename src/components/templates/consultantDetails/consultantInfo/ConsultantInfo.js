"use client";
import React from "react";
import styles from "./ConsultantInfo.module.css";
import { toPersianDigits } from "@/utils/constants";
import { IoCall } from "react-icons/io5";

function ConsultantInfo({ consultant = {}, clients = [], houses = [] }) {
  const {
    firstName = "",
    lastName = "",
    hisCode = 0,
    img = "/images/abstract-user-flat-4.svg",
    description = "توضیحاتی وارد نشده است",
  } = consultant || {};

  if (!consultant) {
    return <div className={styles.box}>در حال بارگذاری اطلاعات مشاور...</div>;
  }

  return (
    <div className={styles.box}>
      <div className={styles.boxBody}>
        <div className={styles.profileSection}>
          <div className={styles.avatarWrapper}>
            <img
              src={img}
              alt="user profile"
              className={styles.profileImage}
              width={150}
              height={150}
              onError={(e) => {
                e.target.src = "/images/abstract-user-flat-4.svg";
              }}
            />
          </div>
          <div className={styles.userInfo}>
            <h3 className={`${styles.userName} Anjoman_SemiBold`}>
              {`${firstName} ${lastName}`}
            </h3>
            <h6 className={`${styles.userLocation} Anjoman_Regular`}>
              {`کد مشاور: ${toPersianDigits(Number(hisCode))}`}
            </h6>
            <button className={`${styles.callButton} Anjoman_Medium`}>
              <IoCall className={`ti-plus ${styles.callIcon}`} /> تماس
            </button>
          </div>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <h2 className={`${styles.statNumber} Anjoman_Bold`}>
              {toPersianDigits(houses?.length || 0)}
            </h2>
            <h6 className={`${styles.statLabel} Anjoman_Regular`}>
              ملک های ثبت شده
            </h6>
          </div>
          <div className={styles.statItem}>
            <h2 className={`${styles.statNumber} Anjoman_Bold`}>
              {toPersianDigits(clients?.length || 0)}
            </h2>
            <h6 className={`${styles.statLabel} Anjoman_Regular`}>مشتریان</h6>
          </div>
        </div>
      </div>

      <div className={styles.boxFooter}>
        <p className={`${styles.infoText} Anjoman_Regular`}>{description}</p>
      </div>
    </div>
  );
}

export default ConsultantInfo;
