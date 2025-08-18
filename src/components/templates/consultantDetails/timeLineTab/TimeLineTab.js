"use client";
import React, { useState } from "react";
import styles from "./TimeLineTab.module.css";
import {
  FaMapMarkerAlt,
  FaClock,
  FaHome,
  FaUser,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function TimeLineTab({ clients = [], reqBuys = [] }) {
  const [visibleClients, setVisibleClients] = useState(4);
  const [visibleReqBuys, setVisibleReqBuys] = useState(4);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("fa-IR").format(price || 0) + " تومان";
  };

  const toPersianStrDigits = (str) => {
    return str?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]) || "";
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "تاریخ نامعتبر";
    }
  };

  const loadMoreClients = () => setVisibleClients((prev) => prev + 2);
  const loadMoreReqBuys = () => setVisibleReqBuys((prev) => prev + 2);

  const displayedClients = clients.slice(0, visibleClients);
  const displayedReqBuys = reqBuys.slice(0, visibleReqBuys);

  return (
    <div
      className={`${styles.tabPane} ${styles.active} ${styles.tap_pane_shadow}`}
    >
      <div className={styles.section}>
        <h2 className={`${styles.sectionTitle} Anjoman_Bold`}>
          <FaUser className={styles.icon} /> مشتریان
        </h2>

        {displayedClients.length > 0 ? (
          <>
            <div className={styles.cardsContainer}>
              {displayedClients.map((client) => (
                <div key={client?._id || Math.random()} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={`${styles.clientName} Anjoman_SemiBold`}>
                      {client?.name || "نامشخص"}
                    </h3>
                    {client?.status && (
                      <span
                        className={`${styles.status} ${
                          client.status === "بدهکار"
                            ? styles.badgeDanger
                            : styles.badgeSuccess
                        }`}
                      >
                        {client.status}
                      </span>
                    )}
                  </div>

                  <div className={styles.cardBody}>
                    <p className={styles.cardText}>
                      <span className={styles.label}>نوع درخواست:</span>
                      <span className={styles.value}>
                        {client?.kindBuy || "نامشخص"}
                      </span>
                    </p>
                    {client?.houses?.map((house, i) => (
                      <div key={i} className={styles.houseInfo}>
                        <h4 className={`${styles.houseTitle} Anjoman_Medium`}>
                          <FaHome className={styles.icon} /> ملک مرتبط
                        </h4>
                        <div className={styles.houseDetails}>
                          <p className={styles.houseDetail}>
                            <span className={styles.label}>نام:</span>
                            <span className={styles.value}>
                              {house?.name || "نامشخص"}
                            </span>
                          </p>
                          <p className={styles.houseDetail}>
                            <span className={styles.label}>کد ملک:</span>
                            <span className={styles.value}>
                              {toPersianStrDigits(house?.codeHouse)}
                            </span>
                          </p>
                          <p className={styles.houseDetail}>
                            <span className={styles.label}>قیمت:</span>
                            <span className={styles.value}>
                              {formatPrice(house?.price)}
                            </span>
                          </p>
                          <p className={styles.houseDetail}>
                            <span className={styles.label}>موقعیت:</span>
                            <span className={styles.value}>
                              <FaMapMarkerAlt className={styles.icon} />{" "}
                              {house?.location || "نامشخص"}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.date}>
                      <FaClock className={styles.icon} />{" "}
                      {formatDate(client?.createdAt)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {visibleClients < clients.length && (
              <div className={styles.buttonContainer}>
                <button
                  className={styles.loadMoreBtn}
                  onClick={loadMoreClients}
                >
                  نمایش مشتریان بیشتر
                </button>
              </div>
            )}
          </>
        ) : (
          <p className={styles.noData}>مشتری‌ای یافت نشد</p>
        )}
      </div>

      <div className={styles.section}>
        <h2 className={`${styles.sectionTitle} Anjoman_Bold`}>
          <FaEnvelope className={styles.icon} /> درخواست‌های خرید
        </h2>

        {displayedReqBuys.length > 0 ? (
          <>
            <div className={styles.cardsContainer}>
              {displayedReqBuys.map((req) => (
                <div key={req?._id || Math.random()} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={`${styles.clientName} Anjoman_SemiBold`}>
                      {req?.name || "نامشخص"}
                    </h3>
                    <span className={styles.badgeInfo}>درخواست جدید</span>
                  </div>

                  <div className={styles.cardBody}>
                    <p className={styles.cardText}>
                      <span className={styles.label}>تلفن:</span>
                      <span className={styles.value}>
                        <FaPhone className={styles.icon} />{" "}
                        {toPersianStrDigits(req?.phone)}
                      </span>
                    </p>
                    <p className={styles.cardText}>
                      <span className={styles.label}>ایمیل:</span>
                      <span className={`${styles.value} ${styles.value_set}`}>
                        <FaEnvelope className={styles.icon} />{" "}
                        {req?.email || "ثبت نشده"}
                      </span>
                    </p>
                    <p className={styles.cardText}>
                      <span className={styles.label}>توضیحات:</span>
                      <span className={`${styles.value} ${styles["fix-set"]}`}>
                        {req?.description || "توضیحاتی ثبت نشده"}
                      </span>
                    </p>

                    {req?.houses?.map((house, i) => (
                      <div key={i} className={styles.houseInfo}>
                        <h4 className={`${styles.houseTitle} Anjoman_Medium`}>
                          <FaHome className={styles.icon} /> ملک درخواستی
                        </h4>
                        <div className={styles.houseDetails}>
                          <p className={styles.houseDetail}>
                            <span className={styles.label}>نام:</span>
                            <span
                              className={`${styles.value} ${styles["fix-set"]}`}
                            >
                              {house?.name || "نامشخص"}
                            </span>
                          </p>
                          <p className={styles.houseDetail}>
                            <span className={styles.label}>کد ملک:</span>
                            <span className={styles.value}>
                              {toPersianStrDigits(house?.codeHouse)}
                            </span>
                          </p>
                          <p className={styles.houseDetail}>
                            <span className={styles.label}>قیمت:</span>
                            <span className={styles.value}>
                              {formatPrice(house?.price)}
                            </span>
                          </p>
                          <p className={styles.houseDetail}>
                            <span className={styles.label}>موقعیت:</span>
                            <span
                              className={`${styles.value} ${styles["fix-set"]}`}
                            >
                              <FaMapMarkerAlt className={styles.icon} />{" "}
                              {house?.location || "نامشخص"}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.date}>
                      <FaClock className={styles.icon} />{" "}
                      {formatDate(req?.createdAt)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {visibleReqBuys < reqBuys.length && (
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
  );
}

export default TimeLineTab;
