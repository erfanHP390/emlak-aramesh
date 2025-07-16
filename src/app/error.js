"use client"
import React from "react";
import styles from "./Error.module.css";

function error() {
  return (
    <div className={styles.creativeError}>
      <div className={styles.errorContainer}>
        {/* Broken House Illustration */}
        <div className={styles.errorIllustration}>
          <div className={`${styles.brokenHouse} Anjoman_ExtraBold`}>
            <div className={`${styles.housePart} ${styles.houseBase}`}></div>
            <div
              className={`${styles.housePart} ${styles.houseRoofLeft}`}
            ></div>
            <div
              className={`${styles.housePart} ${styles.houseRoofRight}`}
            ></div>
            <div className={`${styles.crack} ${styles.crack1}`}></div>
            <div className={`${styles.crack} ${styles.crack2}`}></div>
            <div className={`${styles.fallingBrick} ${styles.brick1}`}></div>
            <div className={`${styles.fallingBrick} ${styles.brick2}`}></div>
          </div>
        </div>

        {/* Error Content */}
        <div className={styles.errorCode}>{errorCode}</div>
        <h1 className={`${styles.errorTitle} Anjoman_Bold`}>{errorTitle}</h1>
        <p className={`${styles.errorMessage} Anjoman_Regular`}>
          متأسفیم! به نظر می‌رسد مشکلی در سیستم رخ داده است. تیم فنی ما در حال
          بررسی و تعمیر این مشکل است.
          <br />
          لطفاً چند دقیقه دیگر مجدداً تلاش کنید یا از دکمه‌های زیر استفاده
          نمایید.
        </p>

        {/* Action Buttons */}
        <div className={styles.errorActions}>
          <button
            className={`${styles.errorButton} Anjoman_Medium`}
            onClick={() => (window.location.href = "/")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            بازگشت به خانه
          </button>

          <button
            className={`${styles.errorButton} Anjoman_Medium`}
            onClick={() => window.location.reload()}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            تلاش مجدد
          </button>

          <button
            className={`${styles.errorButton} Anjoman_Medium`}
            onClick={() => (window.location.href = "/contact")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92H19C18.45 20.92 18 20.47 18 19.92V16.92C18 16.37 18.45 15.92 19 15.92H21C21.55 15.92 22 16.37 22 16.92ZM16 3.99999H4C2.9 3.99999 2 4.89999 2 5.99999V15.92H4V13.92H16V15.92H18V5.99999C18 4.89999 17.1 3.99999 16 3.99999ZM16 11.92H4V5.99999H16V11.92Z"
                fill="currentColor"
              />
            </svg>
            گزارش مشکل
          </button>
        </div>
      </div>
    </div>
  );
}

export default error;
