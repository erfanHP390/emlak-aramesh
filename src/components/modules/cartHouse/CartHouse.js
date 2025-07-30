import React from "react";
import styles from "./CartHouse.module.css";
import { toPersianDigits } from "@/utils/constants";
import {
  MdOutlineBedroomParent,
  MdCalendarMonth,
  MdGasMeter,
} from "react-icons/md";
import { FaRegBuilding, FaChessKing, FaParking } from "react-icons/fa";

function CartHouse({
  img,
  price,
  location,
  floor,
  name,
  parking,
  bedrooms,
  description,
  status,
  meterage,
}) {
  return (
    <div className={styles.box}>
      <div className={styles["box-body"]}>
        <div className={styles["cart-container"]}>
          <div className={styles["image-wrapper"]}>
            <img
              className={styles["house-image"]}
              src={img ? img[0] : "images/house-bg-info.webp"}
              alt="تصویر ملک"
            />
            {status && <div className={styles["status-badge"]}>{status}</div>}
          </div>
          <div className={styles["content-wrapper"]}>
            <div className={styles["price-section"]}>
              <h5 className={styles.price}>
                {Number(price).toLocaleString("fa-IR")} تومان
              </h5>
            </div>
            <div className={styles["title-section"]}>
              <h3 className={styles.title}>
                <a href="#" className={styles["title-link"]}>
                  {name || "ملک نمونه در منطقه خوب"}
                </a>
              </h3>
            </div>
            <div className={styles["location-section"]}>
              <p className={styles.location}>
                <i className={styles["location-icon"]} />
                {location}
              </p>
            </div>
            <div className={styles["description-section"]}>
              <p className={styles.description}>
                {description || "توضیحات تستی درباره ملک و ویژگی‌های آن"}
              </p>
            </div>
            <div className={styles["features-section"]}>
              <div className={styles.feature}>
                <MdGasMeter className={styles["feature-icon"]} />
                <span>
                  {Number(meterage)
                    ? `متر ${Number(meterage).toLocaleString("fa-IR")}`
                    : "بدون اطلاعات"}
                </span>
              </div>
              <div className={styles.feature}>
                <MdOutlineBedroomParent className={styles["feature-icon"]} />
                <span>
                  {Number(bedrooms)
                    ? `خوابه ${Number(bedrooms).toLocaleString("fa-IR")}`
                    : "ندارد"}
                </span>
              </div>
              <div className={styles.feature}>
                <FaParking className={styles["feature-icon"]} />
                <span>
                  {Number(parking)
                    ? `پارکینگ ${Number(parking).toLocaleString("fa-IR")}`
                    : "ندارد"}
                </span>
              </div>
              <div className={styles.feature}>
                <FaRegBuilding className={styles["feature-icon"]} />
                <span>
                  {Number(floor)
                    ? `طبقه ${Number(floor).toLocaleString("fa-IR")}`
                    : "ندارد"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartHouse;
