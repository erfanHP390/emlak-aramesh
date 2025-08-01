import React from "react";
import styles from "../HouseDetails.module.css";

function BasicInfo({ house }) {
  return (
    <>
      <div className={styles.box}>
        <div className={styles["box-body"]}>
          <div className={styles["property-bx"]}>
            <h5 className={`${styles["text-success"]} ${styles["mb-20"]}`}>
              {Number(house.price).toLocaleString("fa-IR")} تومان
            </h5>
            <h3 className={styles["mt-0"]}>
              <a href="#" className={styles["text-primary"]}>
                {house.name}
              </a>
            </h3>
            <p className={styles["text-muted"]}>
              <i className={`${styles.mdi} ${styles["mdi-pin"]}`} />
              {house.location}
            </p>
            <p className={`${styles["text-muted"]} ${styles["mb-20"]}`}>
              {house.description}
            </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default BasicInfo;
