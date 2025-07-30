import React from "react";
import styles from "./MyRegistrationHouse.module.css";
import CardHouse from "@/components/modules/cardHouse/CardHouse";

function MyRegistrationHouse({houses}) {
  

  return (
    <>
      <div
        className={`${styles["content-wrapper"]} ${styles["bg-primary-theme"]}`}
      >
        <div className={styles["container-full"]}>
          {/* Main content */}
          <section className={styles.content}>
            <div className={styles.row}>
              <div className={`${styles["col-12"]} ${styles["mb-30"]}`}>
                <div className={styles.box}>
                  <div className={styles["box-header"]}>
                    <h4
                      className={`${styles["box-title"]} ${styles["text-heading"]}`}
                    >
                      جستجو
                    </h4>
                  </div>
                  <div className={styles["box-body"]}>
                    <div className={styles.row}>
                      <div
                        className={`${styles["col-lg-3"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
                      >
                        <div className={styles["form-group"]}>
                          <select
                            className={`${styles["form-control"]} ${styles.select2}`}
                            style={{ width: "100%" }}
                          >
                            <option selected="selected">انتخاب برای</option>
                            <option>فروش</option>
                            <option>رهن</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-3"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
                      >
                        <div className={styles["form-group"]}>
                          <select
                            className={`${styles["form-control"]} ${styles.select2}`}
                            style={{ width: "100%" }}
                          >
                            <option selected="selected">انتخاب نوع</option>
                            <option>اپارتمان</option>
                            <option>خانه</option>
                            <option>مغازه</option>
                            <option>زمین</option>
                            <option>کلنگی</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-3"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
                      >
                        <div className={styles["form-group"]}>
                          <select
                            className={`${styles["form-control"]} ${styles.select2}`}
                            style={{ width: "100%" }}
                          >
                            <option selected="selected">وضعیت </option>
                            <option>دارای وام</option>
                            <option>قسطی</option>
                            <option>بدون شرایط</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-3"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
                      >
                        <div className={styles["form-group"]}>
                          <select
                            className={`${styles["form-control"]} ${styles.select2}`}
                            style={{ width: "100%" }}
                          >
                            <option selected="selected">انتخاب شهر</option>
                            <option>تهران</option>
                            <option>اصفهان</option>
                            <option>شیراز</option>
                            <option>تبریز</option>
                            <option>سنندج</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-3"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
                      >
                        <div className={styles["form-group"]}>
                          <select
                            className={`${styles["form-control"]} ${styles.select2}`}
                            style={{ width: "100%" }}
                          >
                            <option selected="selected">اتاق خواب</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-3"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
                      >
                        <div className={styles["form-group"]}>
                          <select
                            className={`${styles["form-control"]} ${styles.select2}`}
                            style={{ width: "100%" }}
                          >
                            <option selected="selected">حمام</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-3"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
                      >
                        <div className={styles["form-group"]}>
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="منطقه"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-3"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
                      >
                        <div className={styles["form-group"]}>
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="قیمت حدودی"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles["col-12"]}>
                      <div className={styles["form-group"]}>
                        <button
                          type="submit"
                          className={`${styles.btn} ${styles["btn-rounded"]} ${styles["btn-info"]}`}
                        >
                          جستجو
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {
                houses.map(house => (
                  <CardHouse key={house._id} {...house} img={house.images} consultant={house.consultant}  />
                ))
              }

            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default MyRegistrationHouse;
