"use client";
import React, { useState } from "react";
import styles from "./HouseTabs.module.css";
import {
  FaMapMarkerAlt,
  FaHome,
  FaBed,
  FaCar,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";
import Link from "next/link";

function HouseTabs({ houses = [] }) {
  const [visibleHouses, setVisibleHouses] = useState(3);
  const displayedHouses = (houses || []).slice(0, visibleHouses);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("fa-IR").format(price || 0) + " تومان";
  };

  const toPersianDigits = (str) => {
    if (!str) return "";
    return str.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };

  const formatDate = (dateString) => {
    try {
      if (!dateString) return "تاریخ نامعتبر";
      const date = new Date(dateString);
      return date.toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "تاریخ نامعتبر";
    }
  };

  const loadMoreHouses = () => setVisibleHouses((prev) => prev + 3);

  if (!houses || houses.length === 0) {
    return (
      <div className={styles.housesContainer}>
        <h2 className={`${styles.sectionTitle} Anjoman_Bold`}>
          <FaHome className={styles.icon} /> لیست املاک
        </h2>
        <div className={styles.noData}>
          <p>ملکی یافت نشد</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.housesContainer}>
      <h2 className={`${styles.sectionTitle} Anjoman_Bold`}>
        <FaHome className={styles.icon} /> لیست املاک
      </h2>

      <div className={styles.housesGrid}>
        {displayedHouses.map((house) => (
          <div key={house?._id || Math.random()} className={styles.houseCard}>
            <div className={styles.cardHeader}>
              <Link
                href={`/houseDetails/${house?._id || "#"}`}
                className={`${styles.houseName} Anjoman_SemiBold`}
              >
                {house?.name || "نامشخص"}
              </Link>
              {house?.status && (
                <span className={styles.badgePrimary}>{house.status}</span>
              )}
            </div>

            <div className={styles.cardImage}>
              {house?.images?.[0] ? (
                <img
                  src={house.images[0]}
                  alt={house.name || "تصویر ملک"}
                  className={styles.houseImage}
                  onError={(e) => {
                    e.target.src = "/images/house-placeholder.jpg";
                  }}
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
                <span className={styles.detailValue}>
                  {house?.location || "نامشخص"}
                </span>
              </div>

              <div className={styles.detailsRow}>
                <div className={styles.houseDetail}>
                  <span className={styles.detailLabel}>
                    <FaBed className={styles.detailIcon} /> اتاق:
                  </span>
                  <span className={styles.detailValue}>
                    {toPersianDigits(house?.bedrooms || 0)}
                  </span>
                </div>

                <div className={styles.houseDetail}>
                  <span className={styles.detailLabel}>
                    <FaBuilding className={styles.detailIcon} /> متراژ:
                  </span>
                  <span className={styles.detailValue}>
                    {toPersianDigits(house?.meterage || 0)} متر
                  </span>
                </div>
              </div>

              <div className={styles.detailsRow}>
                <div className={styles.houseDetail}>
                  <span className={styles.detailLabel}>
                    <FaCar className={styles.detailIcon} /> پارکینگ:
                  </span>
                  <span className={styles.detailValue}>
                    {toPersianDigits(house?.parking || 0)}
                  </span>
                </div>

                <div className={styles.houseDetail}>
                  <span className={styles.detailLabel}>
                    <FaCalendarAlt className={styles.detailIcon} /> سال ساخت:
                  </span>
                  <span className={styles.detailValue}>
                    {toPersianDigits(house?.yearBuilt || 0)}
                  </span>
                </div>
              </div>

              <div className={styles.priceContainer}>
                <span className={styles.priceLabel}>قیمت:</span>
                <span className={styles.priceValue}>
                  {formatPrice(house?.price)}
                </span>
              </div>

              {house?.features?.length > 0 && (
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
                {formatDate(house?.createdAt)}
              </span>
              <span className={styles.code}>
                کد: {toPersianDigits(house?.codeHouse)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {visibleHouses < houses.length && (
        <div className={styles.buttonContainer}>
          <button className={styles.loadMoreBtn} onClick={loadMoreHouses}>
            نمایش املاک بیشتر
          </button>
        </div>
      )}
    </div>
  );
}

export default HouseTabs;
