"use client";
import React from "react";
import styles from "./TimeLineTab.module.css";
import { CiImageOn } from "react-icons/ci";
import {
  FaMapMarkerAlt,
  FaClock,
  FaHome,
  FaUser,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function TimeLineTab({ clients, reqBuys }) {
  // تابع برای فرمت کردن قیمت
  const formatPrice = (price) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
  };

  

  // تابع برای تاریخ فارسی
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

  return (
    <div className={`${styles.tabPane} ${styles.active}`} id="usertimeline">
      {/* بخش مشتریان */}
      <div className={styles.section}>
        <h2 className={`${styles.sectionTitle} Anjoman_Bold`}>
          <FaUser className={styles.icon} /> مشتریان
        </h2>

        {clients.length > 0 ? (
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
                  {
                    client.houses.length > 0 && client.houses.map(house => (
                  <div className={styles.houseInfo}>
                    <h4 className={`${styles.houseTitle} Anjoman_Medium`}>
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
                          {house.codeHouse}
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
                    ))
                  }
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
        ) : (
          <p className={styles.noData}>مشتری‌ای یافت نشد</p>
        )}
      </div>

      {/* بخش درخواست‌های خرید */}
      <div className={styles.section}>
        <h2 className={`${styles.sectionTitle} Anjoman_Bold`}>
          <FaEnvelope className={styles.icon} /> درخواست‌های خرید
        </h2>

        {reqBuys.length > 0 ? (
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
                      <FaPhone className={styles.icon} /> {req.phone}
                    </span>
                  </p>
                  <p className={styles.cardText}>
                    <span className={styles.label}>ایمیل:</span>
                    <span className={styles.value}>
                      <FaEnvelope className={styles.icon} /> {req.email}
                    </span>
                  </p>
                  <p className={styles.cardText}>
                    <span className={styles.label}>توضیحات:</span>
                    <span className={styles.value}>{req.description}</span>
                  </p>

                  {req.houses.length > 0 && req.houses.map(house => (
                                        <div className={styles.houseInfo}>
                      <h4 className={`${styles.houseTitle} Anjoman_Medium`}>
                        <FaHome className={styles.icon} /> ملک درخواستی
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
                            {house.codeHouse}
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
                  )
                  )}
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
        ) : (
          <p className={styles.noData}>درخواست خرید یافت نشد</p>
        )}
      </div>
    </div>
  );
}

export default TimeLineTab;
