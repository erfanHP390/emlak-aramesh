import React from "react";
import styles from "./MyRegistrationHouse.module.css";

function MyRegistrationHouse() {
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
              <div
                className={`${styles["col-xl-3"]} ${styles["col-lg-4"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
              >
                <div className={`${styles.box} ${styles["property-card"]}`}>
                  <div className={styles["box-body"]}>
                    <img
                      className={`${styles["img-fluid"]} ${styles["mb-10"]} ${styles["property-img"]}`}
                      src="images/house-bg-info.webp"
                      alt="img"
                    />
                    <div
                      className={`${styles["property-bx"]} ${styles["p-20"]}`}
                    >
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
                            تهران
                          </a>
                        </h3>
                        <p
                          className={`${styles["text-muted"]} ${styles["property-location"]}`}
                        >
                          <i
                            className={`${styles.mdi} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                          />
                          ولیعصر - زرتشت غربی
                        </p>
                        <p
                          className={`${styles["text-muted"]} ${styles["mb-0"]} ${styles["property-description"]}`}
                        >
                          توضیحات تستی
                        </p>
                      </div>
                      <div
                        className={`${styles["mt-15"]} ${styles["fs-18"]} ${styles["property-features"]}`}
                      >
                        <a
                          href="#"
                          title="Square Feet"
                          className={styles["me-15"]}
                        >
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
                        <a
                          href="#"
                          title="Parking space"
                          className={styles["me-15"]}
                        >
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
              {/* سایر کارت‌های ملک با ساختار مشابه */}
              <div
                className={`${styles["col-xl-3"]} ${styles["col-lg-4"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
              >
                <div className={`${styles.box} ${styles["property-card"]}`}>
                  <div className={styles["box-body"]}>
                    <img
                      className={`${styles["img-fluid"]} ${styles["mb-10"]} ${styles["property-img"]}`}
                      src="images/property/p2.jpg"
                      alt="img"
                    />
                    <div
                      className={`${styles["property-bx"]} ${styles["p-20"]}`}
                    >
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
                            تهران
                          </a>
                        </h3>
                        <p
                          className={`${styles["text-muted"]} ${styles["property-location"]}`}
                        >
                          <i
                            className={`${styles.mdi} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                          />
                          ولیعصر - زرتشت غربی
                        </p>
                        <p
                          className={`${styles["text-muted"]} ${styles["mb-0"]} ${styles["property-description"]}`}
                        >
                          توضیحات تستی
                        </p>
                      </div>
                      <div
                        className={`${styles["mt-15"]} ${styles["fs-18"]} ${styles["property-features"]}`}
                      >
                        <a
                          href="#"
                          title="Square Feet"
                          className={styles["me-15"]}
                        >
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
                        <a
                          href="#"
                          title="Parking space"
                          className={styles["me-15"]}
                        >
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
              <div
                className={`${styles["col-xl-3"]} ${styles["col-lg-4"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
              >
                <div className={`${styles.box} ${styles["property-card"]}`}>
                  <div className={styles["box-body"]}>
                    <img
                      className={`${styles["img-fluid"]} ${styles["mb-10"]} ${styles["property-img"]}`}
                      src="images/property/p2.jpg"
                      alt="img"
                    />
                    <div
                      className={`${styles["property-bx"]} ${styles["p-20"]}`}
                    >
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
                            تهران
                          </a>
                        </h3>
                        <p
                          className={`${styles["text-muted"]} ${styles["property-location"]}`}
                        >
                          <i
                            className={`${styles.mdi} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                          />
                          ولیعصر - زرتشت غربی
                        </p>
                        <p
                          className={`${styles["text-muted"]} ${styles["mb-0"]} ${styles["property-description"]}`}
                        >
                          توضیحات تستی
                        </p>
                      </div>
                      <div
                        className={`${styles["mt-15"]} ${styles["fs-18"]} ${styles["property-features"]}`}
                      >
                        <a
                          href="#"
                          title="Square Feet"
                          className={styles["me-15"]}
                        >
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
                        <a
                          href="#"
                          title="Parking space"
                          className={styles["me-15"]}
                        >
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
                            <div
                className={`${styles["col-xl-3"]} ${styles["col-lg-4"]} ${styles["col-md-6"]} ${styles["col-12"]}`}
              >
                <div className={`${styles.box} ${styles["property-card"]}`}>
                  <div className={styles["box-body"]}>
                    <img
                      className={`${styles["img-fluid"]} ${styles["mb-10"]} ${styles["property-img"]}`}
                      src="images/property/p2.jpg"
                      alt="img"
                    />
                    <div
                      className={`${styles["property-bx"]} ${styles["p-20"]}`}
                    >
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
                            تهران
                          </a>
                        </h3>
                        <p
                          className={`${styles["text-muted"]} ${styles["property-location"]}`}
                        >
                          <i
                            className={`${styles.mdi} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                          />
                          ولیعصر - زرتشت غربی
                        </p>
                        <p
                          className={`${styles["text-muted"]} ${styles["mb-0"]} ${styles["property-description"]}`}
                        >
                          توضیحات تستی
                        </p>
                      </div>
                      <div
                        className={`${styles["mt-15"]} ${styles["fs-18"]} ${styles["property-features"]}`}
                      >
                        <a
                          href="#"
                          title="Square Feet"
                          className={styles["me-15"]}
                        >
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
                        <a
                          href="#"
                          title="Parking space"
                          className={styles["me-15"]}
                        >
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
              {/* بقیه کارت‌های ملک با الگوی مشابه */}
            </div>
          </section>
          {/* /.content */}
        </div>
      </div>
    </>
  );
}

export default MyRegistrationHouse;
