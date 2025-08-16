"use client";
import React, { useState } from "react";
import styles from "./HouseTabs.module.css";
import { FaMapMarkerAlt, FaHome, FaBed, FaCar, FaBuilding, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

function HouseTabs({ houses: initialHouses }) {
  // حالت‌های نمایش تدریجی
  const [visibleHouses, setVisibleHouses] = useState(3);
  const [houses, setHouses] = useState(initialHouses.slice(0, visibleHouses));

  // تابع برای فرمت کردن قیمت
  const formatPrice = (price) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
  };

  // تابع برای تبدیل اعداد به فارسی
  const toPersianDigits = (str) => {
    return str?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };

  // تابع برای تاریخ فارسی
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // تابع برای بارگذاری موارد بیشتر
  const loadMoreHouses = () => {
    const newVisibleHouses = visibleHouses + 3;
    setVisibleHouses(newVisibleHouses);
    setHouses(initialHouses.slice(0, newVisibleHouses));
  };

  return (
    <div className={styles.housesContainer}>
      <h2 className={`${styles.sectionTitle} Anjoman_Bold`}>
        <FaHome className={styles.icon} /> لیست املاک
      </h2>

      {houses.length > 0 ? (
        <>
          <div className={styles.housesGrid}>
            {houses.map((house) => (
              <div key={house._id} className={styles.houseCard}>
                <div className={styles.cardHeader}>
                  <Link href={`/houseDetails/${house._id}`} className={`${styles.houseName} Anjoman_SemiBold`}>
                    {house.name}
                  </Link>
                  <span className={styles.badgePrimary}>
                    {house.status}
                  </span>
                </div>

                <div className={styles.cardImage}>
                  {house.images && house.images.length > 0 ? (
                    <img 
                      src={house.images[0]} 
                      alt={house.name} 
                      className={styles.houseImage}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <FaHome className={styles.placeholderIcon} />
                    </div>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.houseDetail}>
                    <span className={styles.detailLabel}>
                      <FaMapMarkerAlt className={styles.detailIcon} /> موقعیت:
                    </span>
                    <span className={styles.detailValue}>{house.location}</span>
                  </div>

                  <div className={styles.detailsRow}>
                    <div className={styles.houseDetail}>
                      <span className={styles.detailLabel}>
                        <FaBed className={styles.detailIcon} /> اتاق:
                      </span>
                      <span className={styles.detailValue}>
                        {toPersianDigits(house.bedrooms)}
                      </span>
                    </div>

                    <div className={styles.houseDetail}>
                      <span className={styles.detailLabel}>
                        <FaBuilding className={styles.detailIcon} /> متراژ:
                      </span>
                      <span className={styles.detailValue}>
                        {toPersianDigits(house.meterage)} متر
                      </span>
                    </div>
                  </div>

                  <div className={styles.detailsRow}>
                    <div className={styles.houseDetail}>
                      <span className={styles.detailLabel}>
                        <FaCar className={styles.detailIcon} /> پارکینگ:
                      </span>
                      <span className={styles.detailValue}>
                        {toPersianDigits(house.parking)}
                      </span>
                    </div>

                    <div className={styles.houseDetail}>
                      <span className={styles.detailLabel}>
                        <FaCalendarAlt className={styles.detailIcon} /> سال ساخت:
                      </span>
                      <span className={styles.detailValue}>
                        {toPersianDigits(house.yearBuilt)}
                      </span>
                    </div>
                  </div>

                  <div className={styles.priceContainer}>
                    <span className={styles.priceLabel}>قیمت:</span>
                    <span className={styles.priceValue}>
                      {formatPrice(house.price)}
                    </span>
                  </div>

                  {house.features && house.features.length > 0 && (
                    <div className={styles.featuresContainer}>
                      <h4 className={styles.featuresTitle}>ویژگی‌های ملک:</h4>
                      <ul className={styles.featuresList}>
                        {house.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className={styles.featureItem}>
                            {feature}
                          </li>
                        ))}
                        {house.features.length > 3 && (
                          <li className={styles.featureMore}>
                            +{toPersianDigits(house.features.length - 3)} مورد دیگر
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.date}>
                    {formatDate(house.createdAt)}
                  </span>
                  <span className={styles.code}>
                    کد: {toPersianDigits(house.codeHouse)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {visibleHouses < initialHouses.length && (
            <div className={styles.buttonContainer}>
              <button
                className={styles.loadMoreBtn}
                onClick={loadMoreHouses}
              >
                نمایش املاک بیشتر
              </button>
            </div>
          )}
        </>
      ) : (
        <div className={styles.noData}>
          <p>ملکی یافت نشد</p>
        </div>
      )}
    </div>
  );
}

export default HouseTabs;