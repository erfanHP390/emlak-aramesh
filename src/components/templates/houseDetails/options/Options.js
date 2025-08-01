import React from "react";
import styles from "../HouseDetails.module.css"
import { FaCheckCircle } from "react-icons/fa";

function Options({features}) {
  return (
    <>
      {features && features.length > 0 && (
        <div className={styles.box}>
          <div className={styles["box-header"]}>
            <h4 className={styles["box-title"]}>امکانات ملک</h4>
          </div>
          <div className={styles["box-body"]}>
            <div className={styles["amenities-section"]}>
              <div className={styles["amenities-column"]}>
                <h5 className={styles["amenities-title"]}>ویژگی‌های اصلی</h5>
                <ul className={styles["amenities-list"]}>
                  {features.map((item, i) => (
                    <li key={i}>
                      <FaCheckCircle
                        className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-success"]}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Options;
