"use client";
import React from "react";
import CountUp from "react-countup";
import styles from "./UserInfo.module.css";

function UserInfo() {
  return (
    <div className={`${styles.colXl4} ${styles.col12}`}>
      <div className={styles.row}>
        {/* Box 1 */}
        <div className={`${styles.colMd6} ${styles.col12}`}>
          <div
            className={`${styles.box} ${styles.boxBody} ${styles.pb10} ${styles.bs4} ${styles.borderInfoHover} ${styles.pullUp}`}
          >
            <h6 className={styles.textUppercase}>در انتظار</h6>
            <div className={styles.dFlex}>
              <span className={styles.fs30}>
                <CountUp
                  end={154}
                  duration={2.5}
                  className={styles.countUpContainer}
                />
              </span>
              <span
                className={`${styles.fs30} ${styles.textInfo} mdi mdi-city`}
              />
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className={`${styles.colMd6} ${styles.col12}`}>
          <div
            className={`${styles.box} ${styles.boxBody} ${styles.pb10} ${styles.bs4} ${styles.borderPrimaryHover} ${styles.pullUp}`}
          >
            <h6 className={styles.textUppercase}>کامل شده</h6>
            <div className={styles.dFlex}>
              <span className={styles.fs30}>
                <CountUp
                  end={412}
                  duration={2.5}
                  className={styles.countUpContainer}
                />
              </span>
              <span
                className={`${styles.fs30} ${styles.textPrimary} mdi mdi-seal`}
              />
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className={`${styles.colMd6} ${styles.col12}`}>
          <div
            className={`${styles.box} ${styles.boxBody} ${styles.pb10} ${styles.bs4} ${styles.borderDangerHover} ${styles.pullUp}`}
          >
            <h6 className={styles.textUppercase}>بازرگانی</h6>
            <div className={styles.dFlex}>
              <span className={styles.fs30}>
                <CountUp
                  end={125}
                  duration={2.5}
                  className={styles.countUpContainer}
                />
              </span>
              <span
                className={`${styles.fs30} ${styles.textDanger} mdi mdi-city`}
              />
            </div>
          </div>
        </div>

        {/* Box 4 */}
        <div className={`${styles.colMd6} ${styles.col12}`}>
          <div
            className={`${styles.box} ${styles.boxBody} ${styles.pb10} ${styles.bs4} ${styles.borderWarningHover} ${styles.pullUp}`}
          >
            <h6 className={styles.textUppercase}>بررسی شده</h6>
            <div className={styles.dFlex}>
              <span className={styles.fs30}>
                <CountUp
                  end={256}
                  duration={2.5}
                  className={styles.countUpContainer}
                />
              </span>
              <span
                className={`${styles.fs30} ${styles.textWarning} mdi mdi-home`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* User Widget */}
      <div className={`${styles.box} ${styles.widgetUser4}`}>
        <div
          className={styles.widgetUserHeader}
          style={{ background: 'url("images/photo1.png") center center' }}
        >
          <div className={styles.overlay}>
            <div className={styles.widgetUserImage}>
              <img
                className={styles.roundedCircle}
                src="images/user1-128x128.jpg"
                alt="User Avatar"
              />
            </div>
            <h3 className={styles.widgetUserUsername}>مختار مینائی</h3>
            <h6 className={styles.widgetUserDesc}>فول استک</h6>
          </div>
        </div>
        <div className={styles.boxFooter}>
          <div className={styles.row}>
            <div className={`${styles.colSm4} ${styles.borderStart}`}>
              <div className={styles.descriptionBlock}>
                <h5 className={styles.descriptionHeader}>
                  <CountUp end={12000} duration={3} separator="," />
                </h5>
                <span className={styles.descriptionText}>کل</span>
              </div>
            </div>
            <div className={`${styles.colSm4} ${styles.borderStart}`}>
              <div className={styles.descriptionBlock}>
                <h5 className={styles.descriptionHeader}>
                  <CountUp end={550} duration={3} />
                </h5>
                <span className={styles.descriptionText}>پروژه ها</span>
              </div>
            </div>
            <div className={styles.colSm4}>
              <div className={styles.descriptionBlock}>
                <h5 className={styles.descriptionHeader}>
                  <CountUp end={1158} duration={3} />
                </h5>
                <span className={styles.descriptionText}>سفارشی</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
