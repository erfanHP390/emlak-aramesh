import React from "react";
import styles from "./HouseDetails.module.css";
import Swiper from "./swiper/Swiper";
import BasicInfo from "./basicInfo/BasicInfo";
import Options from "./options/Options";
import ConsultantInfo from "./consultantInfo/ConsultantInfo";

function HouseDetails({ house }) {

  // مشخصات فنی ملک
  const propertyDetails = [
    { label: "قیمت:", value: house.price },
    { label: "نوع قرارداد:", value: house.status, badge: true },
    { label: "اتاق خواب:", value: house.bedrooms },
    { label: "طبقه:", value: house.floor },
    { label: "پارکینگ:", value: house.parking },
    { label: "انباری:", value: house.storage },
    { label: "آسانسور:", value: house.elevator },
    { label: "مستر روم:", value: house.masterRoom },
    { label: "سال ساخت:", value: house.yearBuilt },
    { label: "نوع ملک:", value: house.kind },
  ];

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
              <div className={styles.box}>
                <div className={styles["box-header"]}>
                  <h4 className={styles["box-title"]}>موقعیت جغرافیایی</h4>
                </div>
                <div className={styles["box-body"]}>
                  <img
                    src="/images/map.jpg"
                    alt="موقعیت ملک روی نقشه"
                    className={styles["location-map"]}
                  />
                  <div className={styles["location-description"]}>
                    <p>آدرس کامل: {house.fullAddress}</p>
                  </div>
                </div>
              </div>
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
                      <label htmlFor="name">نام کامل</label>
                      <input
                        type="text"
                        id="name"
                        className={styles["form-control"]}
                        placeholder="نام و نام خانوادگی"
                        required
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <label htmlFor="phone">شماره تماس</label>
                      <input
                        type="tel"
                        id="phone"
                        className={styles["form-control"]}
                        placeholder="09xxxxxxxxx"
                        required
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <label htmlFor="email">ایمیل (اختیاری)</label>
                      <input
                        type="email"
                        id="email"
                        className={styles["form-control"]}
                        placeholder="email@example.com"
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <label htmlFor="message">توضیحات</label>
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
              <div className={styles.box}>
                <div className={styles["box-header"]}>
                  <h4 className={styles["box-title"]}>مشخصات فنی</h4>
                </div>
                <div className={styles["box-body"]}>
                  <table className={styles["property-table"]}>
                    <tbody>
                      {propertyDetails.map((row, index) => (
                        <tr key={index}>
                          <th scope="row">{row.label}</th>
                          <td>
                            {row.badge ? (
                              <span
                                className={`${styles.badge} ${styles["badge-primary"]}`}
                              >
                                {row.value}
                              </span>
                            ) : (
                              row.value
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HouseDetails;
