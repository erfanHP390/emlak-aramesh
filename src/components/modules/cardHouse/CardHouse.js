import React from "react";
import styles from "./CardHouse.module.css";

function CardHouse({name , img}) {

      const imageUrl = img?.[0] ? `http://localhost:3000${img[0]}` : "/images/house-bg-info.webp";


  return (
    <>
      <div
        className={`${styles["col-xl-3"]} ${styles["col-lg-4"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
      >
        <div className={`${styles.box} ${styles["property-card"]}`}>
          <div className={styles["box-body"]}>
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
                  480,000 - 530,000
                </h5>
                <h3 className={styles["mt-0"]}>
                  <a
                    href="#"
                    className={`${styles["text-primary"]} ${styles["Anjoman_Bold"]}`}
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
                  ولیعصر - زرتشت غربی
                </p>
                <p
                  className={`${styles["text-muted"]} ${styles["mb-0"]} ${styles["property-description"]}  Anjoman_Regular`}
                >
                  توضیحات تستی
                </p>
              </div>
              <div
                className={`${styles["mt-15"]} ${styles["fs-18"]} ${styles["property-features"]}`}
              >
                <a href="#" title="Square Feet" className={styles["me-15"]}>
                  <i
                    className={`${styles.mdi} ${styles["mdi-view-dashboard"]} ${styles["me-10"]}`}
                  />
                  <span>158</span>
                </a>
                <a href="#" title="Bedroom" className={styles["me-15"]}>
                  <i
                    className={`${styles.mdi} ${styles["mdi-hotel"]} ${styles["me-10"]}`}
                  />
                  <span>4</span>
                </a>
                <a href="#" title="Parking space" className={styles["me-15"]}>
                  <i
                    className={`${styles.mdi} ${styles["mdi-car-taxi"]} ${styles["me-10"]}`}
                  />
                  <span>2</span>
                </a>
                <a href="#" title="Garages" className={styles["me-15"]}>
                  <i
                    className={`${styles.mdi} ${styles["mdi-home"]} ${styles["me-10"]}`}
                  />
                  <span> 24H</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHouse;
