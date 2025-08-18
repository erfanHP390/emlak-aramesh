"use client";
import React, { useState } from "react";
import styles from "../../../consultantDetails/timeLineTab/TimeLineTab.module.css";
import {
  FaMapMarkerAlt,
  FaClock,
  FaHome,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function ReqBuysTab({ reqBuys: initialReqBuys = [] }) {
  const [visibleReqBuys, setVisibleReqBuys] = useState(3);
  const [reqBuys, setReqBuys] = useState(
    initialReqBuys.slice(0, visibleReqBuys)
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
  };

  const toPersianStrDigits = (str) => {
    return str?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const loadMoreReqBuys = () => {
    const newVisibleReqBuys = visibleReqBuys + 2;
    setVisibleReqBuys(newVisibleReqBuys);
    setReqBuys(initialReqBuys.slice(0, newVisibleReqBuys));
  };

  return (
    <>
      <div className={`${styles.tabPane} ${styles.active}`} id="usertimeline">
        <div className={styles.section}>
          <h2 className={`${styles.sectionTitle} Anjoman_Bold`}>
            <FaEnvelope className={styles.icon} /> درخواست‌های خرید
          </h2>

          {reqBuys.length > 0 ? (
            <>
              <div className={styles.cardsContainer}>
                {reqBuys.map((req) => (
                  <div key={req._id} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <h3 className={`${styles.clientName} Anjoman_SemiBold`}>
                        {req.name}
                      </h3>
                      <span className={styles.badgeInfo}>درخواست جدید</span>
                    </div>

                    <div className={styles.cardBody}>
                      <p className={styles.cardText}>
                        <span className={styles.label}>تلفن:</span>
                        <span className={styles.value}>
                          <FaPhone className={styles.icon} />{" "}
                          {toPersianStrDigits(req.phone)}
                        </span>
                      </p>
                      <p className={styles.cardText}>
                        <span className={styles.label}>ایمیل:</span>
                        <span className={`${styles.value} ${styles.value_set}`}>
                          <FaEnvelope className={styles.icon} /> {req.email}
                        </span>
                      </p>
                      <p className={styles.cardText}>
                        <span className={styles.label}>توضیحات:</span>
                        <span
                          className={`${styles.value} ${styles["fix-set"]}`}
                        >
                          {req.description}
                        </span>
                      </p>

                      {req.houses?.length > 0 &&
                        req.houses.map((house) => (
                          <div key={house._id} className={styles.houseInfo}>
                            <h4
                              className={`${styles.houseTitle} Anjoman_Medium`}
                            >
                              <FaHome className={styles.icon} /> ملک درخواستی
                            </h4>
                            <div className={styles.houseDetails}>
                              <p className={styles.houseDetail}>
                                <span className={styles.label}>نام:</span>
                                <span
                                  className={`${styles.value} ${styles["fix-set"]}`}
                                >
                                  {house.name}
                                </span>
                              </p>
                              <p className={styles.houseDetail}>
                                <span className={styles.label}>کد ملک:</span>
                                <span className={styles.value}>
                                  {toPersianStrDigits(house.codeHouse)}
                                </span>
                              </p>
                              <p className={styles.houseDetail}>
                                <span className={styles.label}>قیمت:</span>
                                <span className={styles.value}>
                                  {formatPrice(house.price)}
                                </span>
                              </p>
                              <p className={styles.houseDetail}>
                                <span className={styles.label}>موقعیت:</span>
                                <span
                                  className={`${styles.value} ${styles["fix-set"]}`}
                                >
                                  <FaMapMarkerAlt className={styles.icon} />{" "}
                                  {house.location}
                                </span>
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>

                    <div className={styles.cardFooter}>
                      <span className={styles.date}>
                        <FaClock className={styles.icon} />{" "}
                        {formatDate(req.createdAt)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {visibleReqBuys < initialReqBuys.length && (
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.loadMoreBtn}
                    onClick={loadMoreReqBuys}
                  >
                    نمایش درخواست‌های بیشتر
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className={styles.noData}>درخواست خرید یافت نشد</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ReqBuysTab;
