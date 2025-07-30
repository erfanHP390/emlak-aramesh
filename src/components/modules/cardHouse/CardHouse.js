"use client";
import React from "react";
import styles from "./CardHouse.module.css";
import { MdOutlineBedroomParent, MdCalendarMonth } from "react-icons/md";
import { FaRegBuilding, FaChessKing, FaParking } from "react-icons/fa";
import { toPersianDigits } from "@/utils/constants";

function CardHouse({
  name,
  img,
  price,
  location,
  bedrooms,
  parking,
  status,
  floor,
  masterRoom,
  storage,
  elevator,
  yearBuilt
}) {
  const imageUrl =
    Array.isArray(img) && img.length > 0
      ? `http://localhost:3000${img[0]}`
      : "/images/house-bg-info.webp";

  return (
    <>
      <div
        className={`${styles["col-xl-3"]} ${styles["col-lg-4"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
      >
        <div className={`${styles.box} ${styles["property-card"]}`}>
          <div className={styles["box-body"]}>
            <div
              className={`${styles["status-badge"]} Anjoman_SemiBold`}
            >{`برای ${status}`}</div>
            <img
              className={`${styles["img-fluid"]} ${styles["mb-10"]} ${styles["property-img"]}`}
              src={imageUrl}
              alt="img"
            />
            <div className={`${styles["property-bx"]} ${styles["p-20"]}`}>
              <div>
                <h5
                  className={`${styles["text-success"]} ${styles["mt-0"]} ${styles["mb-20"]}`}
                >
                  {Number(price).toLocaleString("fa-IR")} تومان
                </h5>
                <h3 className={styles["mt-0"]}>
                  <a
                    href="#"
                    className={`${styles["text-primary"]} Anjoman_Bold  ${styles["title-link"]}`}
                  >
                    {name}
                  </a>
                </h3>
                <p
                  className={`${styles["text-muted"]} ${styles["property-location"]}  Anjoman_Regular`}
                >
                  <i
                    className={`${styles.mdi} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                  />
                  {location}
                </p>
              </div>
              <div
                className={`Anjoman_Regular  ${styles["mt-15"]} ${styles["fs-18"]} ${styles["property-features"]}`}
              >
                <span title="تعداد خواب" className={`${styles["me-15"]}  `}>
                  <MdOutlineBedroomParent
                    className={`${styles.mdi} ${styles["mdi-hotel"]} ${styles["me-10"]}`}
                  />
                  <span>{Number(bedrooms).toLocaleString("fa-IR")}</span>
                </span>

                {parking && (
                  <span
                    title="پارکینگ"
                    className={`Anjoman_Regular ${styles["me-15"]}`}
                  >
                    <FaParking
                      className={`${styles.mdi} ${styles["mdi-car-taxi"]} ${styles["me-10"]}`}
                    />
                    <span>{Number(parking).toLocaleString("fa-IR")}</span>
                  </span>
                )}

                {floor && (
                  <span
                    title="طبقه"
                    className={`Anjoman_Regular  ${styles["me-15"]}`}
                  >
                    <FaRegBuilding
                      className={`${styles.mdi} ${styles["mdi-floor-plan"]} ${styles["me-10"]}`}
                    />
                    <span>{Number(floor).toLocaleString("fa-IR")}</span>
                  </span>
                )}

                <span
                  title="مستر خواب"
                  className={`Anjoman_Regular  ${styles["me-15"]}`}
                >
                  <FaChessKing
                    className={`${styles.mdi} ${styles["mdi-king-bed"]} ${styles["me-10"]}`}
                  />
                  <span>{Number(masterRoom).toLocaleString("fa-IR")}</span>
                </span>
                <span
                  title="سال ساخت"
                  className={`Anjoman_Regular  ${styles["me-15"]}`}
                >
                  <MdCalendarMonth
                    className={`${styles.mdi} ${styles["mdi-king-bed"]} ${styles["me-10"]}`}
                  />
                  <span>{toPersianDigits(Number(yearBuilt))}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHouse;
