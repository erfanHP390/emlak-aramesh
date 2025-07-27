import React from "react";
import styles from "./HomesList.module.css";

function HomesList() {
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
                <div className={styles.box}>
                  <div className={styles["box-body"]}>
                    <div className={styles.row}>
                      <div
                        className={`${styles["col-lg-4"]} ${styles["col-12"]}`}
                      >
                        <img
                          className={`${styles["img-thumbnail"]} ${styles["img-fluid"]}`}
                          src="images/house-bg-info.webp"
                          alt="img"
                        />
                      </div>
                      <div
                        className={`${styles["col-lg-8"]} ${styles["col-12"]}`}
                      >
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
                              <a href="#" className={styles["text-primary"]}>
                                تهران
                              </a>
                            </h3>
                            <p className={styles["text-muted"]}>
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                              />
                              ولیعصر - زرتشت غربی
                            </p>
                            <p
                              className={`${styles["text-muted"]} ${styles["mb-0"]}`}
                            >
                              توضیحات تستی
                            </p>
                          </div>
                          <div
                            className={`${styles["mt-15"]} ${styles["fs-18"]}`}
                          >
                            <a
                              href="#"
                              title="زیر بنا"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-view-dashboard"]} ${styles["me-10"]}`}
                              />
                              <span>158</span>
                            </a>
                            <a
                              href="#"
                              title="اتاق خواب"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-hotel"]} ${styles["me-10"]}`}
                              />
                              <span>4</span>
                            </a>
                            <a
                              href="#"
                              title="فضای پارکینگ"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-car-taxi"]} ${styles["me-10"]}`}
                              />
                              <span>2</span>
                            </a>
                            <a
                              href="#"
                              title="انباری"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-home"]} ${styles["me-10"]}`}
                              />
                              <span> 24H</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles["box-body"]}>
                    <div className={styles.row}>
                      <div
                        className={`${styles["col-lg-4"]} ${styles["col-12"]}`}
                      >
                        <img
                          className={`${styles["img-thumbnail"]} ${styles["img-fluid"]}`}
                          src="images/property/p8.jpg"
                          alt="img"
                        />
                      </div>
                      <div
                        className={`${styles["col-lg-8"]} ${styles["col-12"]}`}
                      >
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
                              <a href="#" className={styles["text-primary"]}>
                                تهران
                              </a>
                            </h3>
                            <p className={styles["text-muted"]}>
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                              />
                              ولیعصر - زرتشت غربی
                            </p>
                            <p
                              className={`${styles["text-muted"]} ${styles["mb-0"]}`}
                            >
                              توضیحات تستی
                            </p>
                          </div>
                          <div
                            className={`${styles["mt-15"]} ${styles["fs-18"]}`}
                          >
                            <a
                              href="#"
                              title="زیر بنا"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-view-dashboard"]} ${styles["me-10"]}`}
                              />
                              <span>158</span>
                            </a>
                            <a
                              href="#"
                              title="اتاق خواب"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-hotel"]} ${styles["me-10"]}`}
                              />
                              <span>4</span>
                            </a>
                            <a
                              href="#"
                              title="فضای پارکینگ"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-car-taxi"]} ${styles["me-10"]}`}
                              />
                              <span>2</span>
                            </a>
                            <a
                              href="#"
                              title="انباری"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-home"]} ${styles["me-10"]}`}
                              />
                              <span> 24H</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles["box-body"]}>
                    <div className={styles.row}>
                      <div
                        className={`${styles["col-lg-4"]} ${styles["col-12"]}`}
                      >
                        <img
                          className={`${styles["img-thumbnail"]} ${styles["img-fluid"]}`}
                          src="images/property/p2.jpg"
                          alt="img"
                        />
                      </div>
                      <div
                        className={`${styles["col-lg-8"]} ${styles["col-12"]}`}
                      >
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
                              <a href="#" className={styles["text-primary"]}>
                                تهران
                              </a>
                            </h3>
                            <p className={styles["text-muted"]}>
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                              />
                              ولیعصر - زرتشت غربی
                            </p>
                            <p
                              className={`${styles["text-muted"]} ${styles["mb-0"]}`}
                            >
                              توضیحات تستی
                            </p>
                          </div>
                          <div
                            className={`${styles["mt-15"]} ${styles["fs-18"]}`}
                          >
                            <a
                              href="#"
                              title="زیر بنا"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-view-dashboard"]} ${styles["me-10"]}`}
                              />
                              <span>158</span>
                            </a>
                            <a
                              href="#"
                              title="اتاق خواب"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-hotel"]} ${styles["me-10"]}`}
                              />
                              <span>4</span>
                            </a>
                            <a
                              href="#"
                              title="فضای پارکینگ"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-car-taxi"]} ${styles["me-10"]}`}
                              />
                              <span>2</span>
                            </a>
                            <a
                              href="#"
                              title="انباری"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-home"]} ${styles["me-10"]}`}
                              />
                              <span> 24H</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles["box-body"]}>
                    <div className={styles.row}>
                      <div
                        className={`${styles["col-lg-4"]} ${styles["col-12"]}`}
                      >
                        <img
                          className={`${styles["img-thumbnail"]} ${styles["img-fluid"]}`}
                          src="images/property/p3.jpg"
                          alt="img"
                        />
                      </div>
                      <div
                        className={`${styles["col-lg-8"]} ${styles["col-12"]}`}
                      >
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
                              <a href="#" className={styles["text-primary"]}>
                                تهران
                              </a>
                            </h3>
                            <p className={styles["text-muted"]}>
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                              />
                              ولیعصر - زرتشت غربی
                            </p>
                            <p
                              className={`${styles["text-muted"]} ${styles["mb-0"]}`}
                            >
                              توضیحات تستی
                            </p>
                          </div>
                          <div
                            className={`${styles["mt-15"]} ${styles["fs-18"]}`}
                          >
                            <a
                              href="#"
                              title="زیر بنا"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-view-dashboard"]} ${styles["me-10"]}`}
                              />
                              <span>158</span>
                            </a>
                            <a
                              href="#"
                              title="اتاق خواب"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-hotel"]} ${styles["me-10"]}`}
                              />
                              <span>4</span>
                            </a>
                            <a
                              href="#"
                              title="فضای پارکینگ"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-car-taxi"]} ${styles["me-10"]}`}
                              />
                              <span>2</span>
                            </a>
                            <a
                              href="#"
                              title="انباری"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-home"]} ${styles["me-10"]}`}
                              />
                              <span> 24H</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles["box-body"]}>
                    <div className={styles.row}>
                      <div
                        className={`${styles["col-lg-4"]} ${styles["col-12"]}`}
                      >
                        <img
                          className={`${styles["img-thumbnail"]} ${styles["img-fluid"]}`}
                          src="images/property/p4.jpg"
                          alt="img"
                        />
                      </div>
                      <div
                        className={`${styles["col-lg-8"]} ${styles["col-12"]}`}
                      >
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
                              <a href="#" className={styles["text-primary"]}>
                                تهران
                              </a>
                            </h3>
                            <p className={styles["text-muted"]}>
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                              />
                              ولیعصر - زرتشت غربی
                            </p>
                            <p
                              className={`${styles["text-muted"]} ${styles["mb-0"]}`}
                            >
                              توضیحات تستی
                            </p>
                          </div>
                          <div
                            className={`${styles["mt-15"]} ${styles["fs-18"]}`}
                          >
                            <a
                              href="#"
                              title="زیر بنا"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-view-dashboard"]} ${styles["me-10"]}`}
                              />
                              <span>158</span>
                            </a>
                            <a
                              href="#"
                              title="اتاق خواب"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-hotel"]} ${styles["me-10"]}`}
                              />
                              <span>4</span>
                            </a>
                            <a
                              href="#"
                              title="فضای پارکینگ"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-car-taxi"]} ${styles["me-10"]}`}
                              />
                              <span>2</span>
                            </a>
                            <a
                              href="#"
                              title="انباری"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-home"]} ${styles["me-10"]}`}
                              />
                              <span> 24H</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles["box-body"]}>
                    <div className={styles.row}>
                      <div
                        className={`${styles["col-lg-4"]} ${styles["col-12"]}`}
                      >
                        <img
                          className={`${styles["img-thumbnail"]} ${styles["img-fluid"]}`}
                          src="images/property/p5.jpg"
                          alt="img"
                        />
                      </div>
                      <div
                        className={`${styles["col-lg-8"]} ${styles["col-12"]}`}
                      >
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
                              <a href="#" className={styles["text-primary"]}>
                                تهران
                              </a>
                            </h3>
                            <p className={styles["text-muted"]}>
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                              />
                              ولیعصر - زرتشت غربی
                            </p>
                            <p
                              className={`${styles["text-muted"]} ${styles["mb-0"]}`}
                            >
                              توضیحات تستی
                            </p>
                          </div>
                          <div
                            className={`${styles["mt-15"]} ${styles["fs-18"]}`}
                          >
                            <a
                              href="#"
                              title="زیر بنا"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-view-dashboard"]} ${styles["me-10"]}`}
                              />
                              <span>158</span>
                            </a>
                            <a
                              href="#"
                              title="اتاق خواب"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-hotel"]} ${styles["me-10"]}`}
                              />
                              <span>4</span>
                            </a>
                            <a
                              href="#"
                              title="فضای پارکینگ"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-car-taxi"]} ${styles["me-10"]}`}
                              />
                              <span>2</span>
                            </a>
                            <a
                              href="#"
                              title="انباری"
                              className={styles["me-15"]}
                            >
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-home"]} ${styles["me-10"]}`}
                              />
                              <span> 24H</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles["box-body"]}>
                    <div className={styles.row}>
                      <div
                        className={`${styles["col-lg-4"]} ${styles["col-12"]}`}
                      >
                        <img
                          className={`${styles["img-thumbnail"]} ${styles["img-fluid"]}`}
                          src="images/property/p6.jpg"
                          alt="img"
                        />
                      </div>
                      <div
                        className={`${styles["col-lg-8"]} ${styles["col-12"]}`}
                      >
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
                              <a href="#" className={styles["text-primary"]}>
                                تهران
                              </a>
                            </h3>
                            <p className={styles["text-muted"]}>
                              <i
                                className={`${styles["mdi"]} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                              />
                              ولیعصر - زرتشت غربی
                            </p>
                            <p
                              className={`${styles["text-muted"]} ${styles["mb-0"]}`}
                            >
                              توضیحات تستی
                            </p>
                            <div
                              className={`${styles["mt-15"]} ${styles["fs-18"]}`}
                            >
                              <a
                                href="#"
                                title="زیر بنا"
                                className={styles["me-15"]}
                              >
                                <i
                                  className={`${styles["mdi"]} ${styles["mdi-view-dashboard"]} ${styles["me-10"]}`}
                                />
                                <span>158</span>
                              </a>
                              <a
                                href="#"
                                title="اتاق خواب"
                                className={styles["me-15"]}
                              >
                                <i
                                  className={`${styles["mdi"]} ${styles["mdi-hotel"]} ${styles["me-10"]}`}
                                />
                                <span>4</span>
                              </a>
                              <a
                                href="#"
                                title="فضای پارکینگ"
                                className={styles["me-15"]}
                              >
                                <i
                                  className={`${styles["mdi"]} ${styles["mdi-car-taxi"]} ${styles["me-10"]}`}
                                />
                                <span>2</span>
                              </a>
                              <a
                                href="#"
                                title="انباری"
                                className={styles["me-15"]}
                              >
                                <i
                                  className={`${styles["mdi"]} ${styles["mdi-home"]} ${styles["me-10"]}`}
                                />
                                <span> 24H</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles["box-body"]}>
                      <div className={styles.row}>
                        <div
                          className={`${styles["col-lg-4"]} ${styles["col-12"]}`}
                        >
                          <img
                            className={`${styles["img-thumbnail"]} ${styles["img-fluid"]}`}
                            src="images/property/p7.jpg"
                            alt="img"
                          />
                        </div>
                        <div
                          className={`${styles["col-lg-8"]} ${styles["col-12"]}`}
                        >
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
                                <a href="#" className={styles["text-primary"]}>
                                  تهران
                                </a>
                              </h3>
                              <p className={styles["text-muted"]}>
                                <i
                                  className={`${styles["mdi"]} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                                />
                                ولیعصر - زرتشت غربی
                              </p>
                              <p
                                className={`${styles["text-muted"]} ${styles["mb-0"]}`}
                              >
                                توضیحات تستی
                              </p>
                            </div>
                            <div
                              className={`${styles["mt-15"]} ${styles["fs-18"]}`}
                            >
                              <a
                                href="#"
                                title="زیر بنا"
                                className={styles["me-15"]}
                              >
                                <i
                                  className={`${styles["mdi"]} ${styles["mdi-view-dashboard"]} ${styles["me-10"]}`}
                                />
                                <span>158</span>
                              </a>
                              <a
                                href="#"
                                title="اتاق خواب"
                                className={styles["me-15"]}
                              >
                                <i
                                  className={`${styles["mdi"]} ${styles["mdi-hotel"]} ${styles["me-10"]}`}
                                />
                                <span>4</span>
                              </a>
                              <a
                                href="#"
                                title="فضای پارکینگ"
                                className={styles["me-15"]}
                              >
                                <i
                                  className={`${styles["mdi"]} ${styles["mdi-car-taxi"]} ${styles["me-10"]}`}
                                />
                                <span>2</span>
                              </a>
                              <a
                                href="#"
                                title="انباری"
                                className={styles["me-15"]}
                              >
                                <i
                                  className={`${styles["mdi"]} ${styles["mdi-home"]} ${styles["me-10"]}`}
                                />
                                <span> 24H</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
