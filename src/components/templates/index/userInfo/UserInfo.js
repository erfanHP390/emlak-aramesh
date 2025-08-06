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
    <div className={`${styles.colXl4} ${styles.col12}`}>
      <div className={styles.row}>
        {/* Box: تعداد مشتریان */}
        <div className={`${styles.colMd6} ${styles.col12}`}>
          <div
            className={`${styles.box} ${styles.boxBody} ${styles.pb10} ${styles.bs4} ${styles.borderInfoHover} ${styles.pullUp}`}
          >
            <h6 className={styles.textUppercase}>تعداد مشتریان</h6>
            <div className={styles.dFlex}>
              <span className={styles.fs30}>
                <CountUp
                  end={consultant.clients?.length || 0}
                  duration={2.5}
                  formattingFn={(val) =>
                    toPersianNumDigits(val.toLocaleString())
                  }
                  className={styles.countUpContainer}
                />
              </span>
              <span
                className={`${styles.fs30} ${styles.textInfo} mdi mdi-city`}
              />
            </div>
          </div>
        </div>

        {/* Box: املاک ثبت شده */}
        <div className={`${styles.colMd6} ${styles.col12}`}>
          <div
            className={`${styles.box} ${styles.boxBody} ${styles.pb10} ${styles.bs4} ${styles.borderPrimaryHover} ${styles.pullUp}`}
          >
            <h6 className={styles.textUppercase}>املاک ثبت شده</h6>
            <div className={styles.dFlex}>
              <span className={styles.fs30}>
                <CountUp
                  end={consultant.houses?.length || 0}
                  duration={2.5}
                  formattingFn={(val) =>
                    toPersianNumDigits(val.toLocaleString())
                  }
                  className={styles.countUpContainer}
                />
              </span>
              <span
                className={`${styles.fs30} ${styles.textPrimary} mdi mdi-seal`}
              />
            </div>
          </div>
        </div>

        {/* Box: کد مشاور */}
        <div className={`${styles.colMd6} ${styles.col12}`}>
          <div
            className={`${styles.box} ${styles.boxBody} ${styles.pb10} ${styles.bs4} ${styles.borderDangerHover} ${styles.pullUp}`}
          >
            <h6 className={styles.textUppercase}>کد شما</h6>
            <div className={styles.dFlex}>
              <span className={styles.fs30}>
                {toPersianStrDigits(consultant.hisCode)}
              </span>
              <span
                className={`${styles.fs30} ${styles.textDanger} mdi mdi-city`}
              />
            </div>
          </div>
        </div>

        {/* Box: تعداد درخواست‌ها */}
        <div className={`${styles.colMd6} ${styles.col12}`}>
          <div
            className={`${styles.box} ${styles.boxBody} ${styles.pb10} ${styles.bs4} ${styles.borderWarningHover} ${styles.pullUp}`}
          >
            <h6 className={styles.textUppercase}>درخواست‌ها</h6>
            <div className={styles.dFlex}>
              <span className={styles.fs30}>
                <CountUp
                  end={reqBuys?.length || 0}
                  duration={2.5}
                  formattingFn={(val) =>
                    toPersianNumDigits(val.toLocaleString())
                  }
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

      {/* اطلاعات کامل مشاور */}
      <div className={`${styles.box} ${styles.widgetUser4}`}>
        <div className={`${styles.widgetUserHeader} info-bg`}>
          <div className={styles.overlay}>
            <div className={styles.widgetUserImage}>
              <img
                className={styles.roundedCircle}
                src={consultant.img || "/images/abstract-user-flat-4.svg"}
                alt="User Avatar"
              />
            </div>
            <h3 className={styles.widgetUserUsername}>
              {consultant.firstName} {consultant.lastName}
            </h3>
            <h6 className={styles.widgetUserDesc}>
              {toPersianStrDigits(consultant.hisCode)}
            </h6>
          </div>
        </div>

        <div className={styles.boxFooter}>
          <div className={styles.row}>
            <div className={`${styles.colSm4} ${styles.borderStart}`}>
              <div className={styles.descriptionBlock}>
                <h5 className={styles.descriptionHeader}>
                  <CountUp
                    end={consultant.houses?.length || 0}
                    duration={3}
                    formattingFn={(val) =>
                      toPersianNumDigits(val.toLocaleString())
                    }
                  />
                </h5>
                <span className={styles.descriptionText}>املاک</span>
              </div>
            </div>
            <div className={`${styles.colSm4} ${styles.borderStart}`}>
              <div className={styles.descriptionBlock}>
                <h5 className={styles.descriptionHeader}>
                  <CountUp
                    end={consultant.clients?.length || 0}
                    duration={3}
                    formattingFn={(val) =>
                      toPersianNumDigits(val.toLocaleString())
                    }
                  />
                </h5>
                <span className={styles.descriptionText}>مشتریان</span>
              </div>
            </div>
            <div className={styles.colSm4}>
              <div className={styles.descriptionBlock}>
                <h5 className={styles.descriptionHeader}>
                  <CountUp
                    end={reqBuys?.length || 0}
                    duration={3}
                    formattingFn={(val) =>
                      toPersianNumDigits(val.toLocaleString())
                    }
                  />
                </h5>
                <span className={styles.descriptionText}>درخواست‌ها</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
