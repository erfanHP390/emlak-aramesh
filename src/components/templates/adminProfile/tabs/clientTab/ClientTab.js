"use client";
import React, { useState } from "react";
import styles from "../../../consultantDetails/timeLineTab/TimeLineTab.module.css";
import {
  FaMapMarkerAlt,
  FaClock,
  FaHome,
  FaUser,
} from "react-icons/fa";

function ClientTab({ clients: initialClients }) {
  const [visibleClients, setVisibleClients] = useState(3);
  const [clients, setClients] = useState(
    initialClients.slice(0, visibleClients)
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

  const loadMoreClients = () => {
    const newVisibleClients = visibleClients + 2;
    setVisibleClients(newVisibleClients);
    setClients(initialClients.slice(0, newVisibleClients));
  };

  return (
    <>
      <div className={`${styles.tabPane} ${styles.active}`} id="usertimeline">
        <div className={styles.section}>
          <h2 className={`${styles.sectionTitle} Anjoman_Bold`}>
            <FaUser className={styles.icon} /> مشتریان
          </h2>

          {clients.length > 0 ? (
            <>
              <div className={styles.cardsContainer}>
                {clients.map((client) => (
                  <div key={client._id} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <h3 className={`${styles.clientName} Anjoman_SemiBold`}>
                        {client.name}
                      </h3>
                      <span
                        className={`${styles.status} ${
                          client.status === "بدهکار"
                            ? styles.badgeDanger
                            : styles.badgeSuccess
                        }`}
                      >
                        {client.status}
                      </span>
                    </div>

                    <div className={styles.cardBody}>
                      <p className={styles.cardText}>
                        <span className={styles.label}>نوع درخواست:</span>
                        <span className={styles.value}>{client.kindBuy}</span>
                      </p>
                      {client.houses.length > 0 &&
                        client.houses.map((house) => (
                          <div key={house._id} className={styles.houseInfo}>
                            <h4
                              className={`${styles.houseTitle} Anjoman_Medium`}
                            >
                              <FaHome className={styles.icon} /> ملک مرتبط
                            </h4>
                            <div className={styles.houseDetails}>
                              <p className={styles.houseDetail}>
                                <span className={styles.label}>نام:</span>
                                <span className={styles.value}>
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
                                <span className={styles.value}>
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
                        {formatDate(client.createdAt)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {visibleClients < initialClients.length && (
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
      </div>
    </>
  );
}

export default ClientTab;
