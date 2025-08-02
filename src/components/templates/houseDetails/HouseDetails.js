import React from "react";
import styles from "./HouseDetails.module.css";
import Swiper from "./swiper/Swiper";
import BasicInfo from "./basicInfo/BasicInfo";
import Options from "./options/Options";
import ConsultantInfo from "./consultantInfo/ConsultantInfo";
import InfoTable from "./infoTable/InfoTable";
import MapHouse from "./mapHouse/MapHouse";

function HouseDetails({ house }) {

  return (
    <div className={styles["content-wrapper"]}>
      <div className={styles["container-full"]}>
        <section className={styles.content}>
          <div className={styles.row}>
            {/* بخش اصلی (چپ) */}
            <div className={styles.left_bar}>
              {/* اسلایدر تصاویر */}
              <Swiper images={house.images} />

              {/* اطلاعات اصلی ملک */}
              <BasicInfo house={house} /> 

              {/* بخش امکانات */}
              <Options features={house.features} />

              {/* نقشه موقعیت */}
              <MapHouse  fullAddress={house.fullAddress} />
            </div>

            {/* سایدبار (راست) */}
            <div className={styles.right_bar}>
              {/* پروفایل مشاور */}
              <ConsultantInfo  consultant={house.consultant} />

              {/* فرم درخواست بازدید */}
              <div className={styles.box}>
                <div className={styles["box-header"]}>
                  <h4 className={styles["box-title"]}>درخواست بازدید</h4>
                </div>
                <div className={styles["box-body"]}>
                  <form className={styles["request-form"]}>
                    <div className={styles["form-group"]}>
                      <label className={styles.fix} htmlFor="name">نام کامل</label>
                      <input
                        type="text"
                        id="name"
                        className={styles["form-control"]}
                        placeholder="نام و نام خانوادگی"
                        required
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <label className={styles.fix} htmlFor="phone">شماره تماس</label>
                      <input
                        type="tel"
                        id="phone"
                        className={styles["form-control"]}
                        placeholder="09xxxxxxxxx"
                        required
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <label className={styles.fix} htmlFor="email">ایمیل</label>
                      <input
                        type="email"
                        id="email"
                        className={styles["form-control"]}
                        placeholder="email@example.com"
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <label className={styles.fix} htmlFor="message">توضیحات</label>
                      <textarea
                        id="message"
                        className={`${styles["form-control"]} ${styles["no-resize"]}`}
                        placeholder="زمان پیشنهادی و توضیحات دیگر"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className={styles["form-actions"]}>
                      <button
                        type="submit"
                        className={`${styles.btn} ${styles["btn-primary"]}`}
                      >
                        <i className={`${styles.ti} ${styles["ti-check"]}`} />{" "}
                        ارسال درخواست
                      </button>
                      <button
                        type="reset"
                        className={`${styles.btn} ${styles["btn-secondary"]}`}
                      >
                        <i className={`${styles.ti} ${styles["ti-close"]}`} />{" "}
                        پاک کردن
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* مشخصات فنی */}
              <InfoTable  house={house}   />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HouseDetails;
