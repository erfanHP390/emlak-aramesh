"use client";
import React from "react";
import styles from "./Error.module.css";

function Error({ error, reset }) {
  const errorCode = error?.statusCode || 500;
  const errorTitle = error?.message || "خطای داخلی سرور";

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
        <div className={styles.errorCode}>خطای سرور</div>
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
            {/* خانه آیکون */}
            <svg /* ... */>...</svg>
            بازگشت به خانه
          </button>

          <button
            className={`${styles.errorButton} Anjoman_Medium`}
            onClick={() => reset?.()}
          >
            {/* آیکون تلاش مجدد */}
            <svg /* ... */>...</svg>
            تلاش مجدد
          </button>

          <button
            className={`${styles.errorButton} Anjoman_Medium`}
            onClick={() => (window.location.href = "/contact")}
          >
            {/* آیکون گزارش مشکل */}
            <svg /* ... */>...</svg>
            گزارش مشکل
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
