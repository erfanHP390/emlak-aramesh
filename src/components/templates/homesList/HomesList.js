"use client"
import React from "react";
import styles from "./HomesList.module.css";
import { toPersianDigits } from "@/utils/constants";
import CartHouse from "@/components/modules/cartHouse/CartHouse";

function HomesList({houses}) {
  return (
    <>
      <div className={styles["content-wrapper"]}>
        <div className={styles["container-full"]}>
          {/* Main content */}
          <section className={styles.content}>
            <div className={styles.row}>
              <div className={`${styles["col-xl-3"]} ${styles["col-12"]}`}>
                <div className={styles.box}>
                  <div className={styles["box-header"]}>
                    <h4 className={styles["box-title"]}>جستجو</h4>
                  </div>
                  <div className={styles["box-body"]}>
                    <div className={styles["form-group"]}>
                      <select
                        className={`${styles["form-control"]} ${styles["select2"]}`}
                        style={{ width: "100%" }}
                      >
                        <option selected="selected">انتخاب ملک</option>
                        <option>برای فروش</option>
                        <option>برای اجاره</option>
                      </select>
                    </div>
                    <div className={styles["form-group"]}>
                      <select
                        className={`${styles["form-control"]} ${styles["select2"]}`}
                        style={{ width: "100%" }}
                      >
                        <option selected="selected">نوع ملک</option>
                        <option>اپارتمان</option>
                        <option>خانه</option>
                        <option>مغازه</option>
                        <option>زمین</option>
                        <option>کلنگی</option>
                      </select>
                    </div>
                    <div className={styles["form-group"]}>
                      <select
                        className={`${styles["form-control"]} ${styles["select2"]}`}
                        style={{ width: "100%" }}
                      >
                        <option selected="selected">وضعیت راانتخاب کنید</option>
                        <option>دارای وام</option>
                        <option>قسطی</option>
                        <option>بدون شرایط</option>
                      </select>
                    </div>
                    <div className={styles["form-group"]}>
                      <select
                        className={`${styles["form-control"]} ${styles["select2"]}`}
                        style={{ width: "100%" }}
                      >
                        <option selected="selected">شهر راانتخاب کنید</option>
                        <option>تهران</option>
                        <option>اصفهان</option>
                        <option>شیراز</option>
                        <option>تبریز</option>
                        <option>سنندج</option>
                      </select>
                    </div>
                    <div className={styles["form-group"]}>
                      <select
                        className={`${styles["form-control"]} ${styles["select2"]}`}
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
                    <div className={styles["form-group"]}>
                      <select
                        className={`${styles["form-control"]} ${styles["select2"]}`}
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
                    <div className={styles["form-group"]}>
                      <input
                        type="text"
                        className={styles["form-control"]}
                        placeholder="منطقه"
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <input
                        type="text"
                        className={styles["form-control"]}
                        placeholder="قیمت حدودی"
                      />
                    </div>
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
              <div className={`${styles["col-xl-9"]} ${styles["col-12"]}`}>

                {
                  houses.map(house => (
                    <CartHouse key={house._id} {...house} img={house.images} consultant={house.consultant}   />
                  ))
                }

 
              </div>
            </div>
          </section>
          {/* /.content */}
        </div>
      </div>
    </>
  );
}

export default HomesList;
