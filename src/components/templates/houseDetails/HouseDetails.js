import React from "react";
import styles from "./HouseDetails.module.css";

function HouseDetails() {
  return (
    <>
      <div
        className={`${styles["content-wrapper"]} ${styles["bg-primary-theme"]}`}
      >
        <div className={styles["container-full"]}>
          <section className={styles.content}>
            <div className={styles.row}>
              <div className={`${styles["col-lg-8"]} ${styles["col-12"]}`}>
                {/* Image Slider */}
                <div className={styles.box}>
                  <div className={styles["box-body"]}>
                    <div className={styles.flexslider2}>
                      <ul className={styles.slides}>
                        <li data-thumb="images/property/p-1-b.jpg">
                          <img src="images/property/p-1-b.jpg" alt="slide" />
                        </li>
                        <li data-thumb="images/property/p-2-b.jpg">
                          <img src="images/property/p-2-b.jpg" alt="slide" />
                        </li>
                        <li data-thumb="images/property/p-3-b.jpg">
                          <img src="images/property/p-3-b.jpg" alt="slide" />
                        </li>
                        <li data-thumb="images/property/p-4-b.jpg">
                          <img src="images/property/p-4-b.jpg" alt="slide" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div className={styles.box}>
                  <div className={styles["box-body"]}>
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
                        <p className={styles["text-muted"]}>
                          <i
                            className={`${styles.mdi} ${styles["mdi-pin"]} ${styles["me-5"]}`}
                          />
                          ولیعصر - خیابان زرتشت غربی
                        </p>
                        <p
                          className={`${styles["text-muted"]} ${styles["mb-0"]}`}
                        >
                          توضیحات را با ریز جزئیات ارائه دهید
                        </p>
                      </div>
                      <div className={`${styles["mt-15"]} ${styles["fs-18"]}`}>
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

                {/* Improved Amenities Section */}
                <div className={styles.box}>
                  <div className={styles["box-header"]}>
                    <h4 className={styles["box-title"]}>امکانات کلی</h4>
                    <ul
                      className={`${styles["box-controls"]} ${styles["pull-right"]}`}
                    >
                      <li className={styles.dropdown}>
                        <a
                          data-toggle="dropdown"
                          href="#"
                          className={`${styles["px-10"]} ${styles["hover-primary"]}`}
                        >
                          <i
                            className={`${styles.ti} ${styles["ti-menu"]} ${styles["hover-primary"]}`}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`${styles["box-body"]} ${styles["amenities-section"]}`}
                  >
                    <div className={styles.row}>
                      <div className={styles["col-sm-4"]}>
                        <ul
                          className={`${styles["list-unstyled"]} ${styles["amenities-list"]}`}
                        >
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-success"]} ${styles["me-5"]}`}
                            />
                            استخر شنا
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-success"]} ${styles["me-5"]}`}
                            />
                            هواخوری
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-success"]} ${styles["me-5"]}`}
                            />
                            اینترنت
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-success"]} ${styles["me-5"]}`}
                            />
                            حیاط
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-success"]} ${styles["me-5"]}`}
                            />
                            بالکن
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-success"]} ${styles["me-5"]}`}
                            />
                            تراس
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-success"]} ${styles["me-5"]}`}
                            />{" "}
                            TV
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-success"]} ${styles["me-5"]}`}
                            />
                            برق
                          </li>
                        </ul>
                      </div>
                      <div className={styles["col-sm-4"]}>
                        <ul
                          className={`${styles["list-unstyled"]} ${styles["amenities-list"]}`}
                        >
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-star"]} ${styles["text-warning"]} ${styles["me-5"]}`}
                            />
                            تراس
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-star"]} ${styles["text-warning"]} ${styles["me-5"]}`}
                            />
                            پذیرایی
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-star"]} ${styles["text-warning"]} ${styles["me-5"]}`}
                            />
                            باغچه
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-star"]} ${styles["text-warning"]} ${styles["me-5"]}`}
                            />
                            توالت
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-star"]} ${styles["text-warning"]} ${styles["me-5"]}`}
                            />
                            کامپیوتر
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-star"]} ${styles["text-warning"]} ${styles["me-5"]}`}
                            />
                            پله
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-star"]} ${styles["text-warning"]} ${styles["me-5"]}`}
                            />
                            اسانسور
                          </li>
                        </ul>
                      </div>
                      <div className={styles["col-sm-4"]}>
                        <ul
                          className={`${styles["list-unstyled"]} ${styles["amenities-list"]}`}
                        >
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-info"]} ${styles["me-5"]}`}
                            />
                            نزدیک به ایستگاه اتوبوس
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-info"]} ${styles["me-5"]}`}
                            />
                            نزدیک به مترو
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-info"]} ${styles["me-5"]}`}
                            />
                            نزدیک به تاکسی
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-info"]} ${styles["me-5"]}`}
                            />
                            نزدیک بیمارستان
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-info"]} ${styles["me-5"]}`}
                            />
                            نزدیک مدرسه
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-info"]} ${styles["me-5"]}`}
                            />
                            نزدیک مرکز خرید
                          </li>
                          <li>
                            <i
                              className={`${styles.mdi} ${styles["mdi-check-circle"]} ${styles["text-info"]} ${styles["me-5"]}`}
                            />
                            گاز طبیعی
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Map */}
                <div className={styles.box}>
                  <div className={styles["box-header"]}>
                    <h4 className={styles["box-title"]}>موقعیت</h4>
                    <ul
                      className={`${styles["box-controls"]} ${styles["pull-right"]}`}
                    >
                      <li className={styles.dropdown}>
                        <a
                          data-toggle="dropdown"
                          href="#"
                          className={`${styles["px-10"]} ${styles["hover-primary"]}`}
                        >
                          <i
                            className={`${styles.ti} ${styles["ti-menu"]} ${styles["hover-primary"]}`}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={`${styles["box-body"]} ${styles["p-0"]}`}>
                    <img
                      src="images/g.jpg"
                      className={`${styles["w-p100"]} ${styles["h-450"]} ${styles["no-border"]}`}
                      alt="موقعیت ملک"
                    />
                  </div>
                </div>
              </div>

              {/* Improved Right Sidebar */}
              <div className={`${styles["col-lg-4"]} ${styles["col-12"]}`}>
                {/* Improved Agent Profile */}
                <div className={`${styles.box} ${styles["agent-profile"]}`}>
                  <div className={styles["box-body"]}>
                    <img
                      src="images/avatar/1.jpg"
                      alt="user"
                      className={`${styles["agent-avatar"]}`}
                    />
                    <h3 className={`${styles["agent-name"]}`}>مختار مینائی</h3>
                    <h6 className={`${styles["agent-location"]}`}>
                      تهران -تهرانپارس
                    </h6>
                    <button
                      className={`${styles.btn} ${styles["btn-success"]} ${styles["Anjoman_Medium"]}`}
                    >
                      <i className={`${styles.ti} ${styles["ti-plus"]}`} /> تماس
                    </button>

                    <div className={`${styles["agent-stats"]}`}>
                      <div className={styles["agent-stat"]}>
                        <h2>14</h2>
                        <h6>فایل</h6>
                      </div>
                      <div className={styles["agent-stat"]}>
                        <h2>12GB</h2>
                        <h6>استفاده شده</h6>
                      </div>
                      <div className={styles["agent-stat"]}>
                        <h2>25k</h2>
                        <h6>منقضی</h6>
                      </div>
                    </div>
                  </div>
                  <div className={styles["box-body"]}>
                    <p className={styles["text-center"]}>یک توضیحات تست</p>
                    <ul
                      className={`${styles["list-inline"]} ${styles["text-center"]}`}
                    >
                      <li>
                        <a href="javascript:void(0)">
                          <i
                            className={`${styles.fa} ${styles["fa-instagram"]} ${styles["fs-20"]}`}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i
                            className={`${styles.fa} ${styles["fa-twitter"]} ${styles["fs-20"]}`}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i
                            className={`${styles.fa} ${styles["fa-facebook-square"]} ${styles["fs-20"]}`}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact Form */}
                <div className={styles.box}>
                  <div className={styles["box-header"]}>
                    <h4 className={styles["box-title"]}>درخواست ها</h4>
                    <ul
                      className={`${styles["box-controls"]} ${styles["pull-right"]}`}
                    >
                      <li className={styles.dropdown}>
                        <a
                          data-bs-toggle="dropdown"
                          href="#"
                          className={`${styles["px-10"]} ${styles["hover-primary"]}`}
                        >
                          <i
                            className={`${styles.ti} ${styles["ti-menu"]} ${styles["hover-primary"]}`}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles["box-body"]}>
                    <div className={styles["form-group"]}>
                      <input
                        type="text"
                        className={styles["form-control"]}
                        placeholder="نام"
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <input
                        type="text"
                        className={styles["form-control"]}
                        placeholder="تلفن"
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <input
                        type="text"
                        className={styles["form-control"]}
                        placeholder="ایمیل"
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <textarea
                        rows={4}
                        className={`${styles["form-control"]} ${styles["no-resize"]}`}
                        placeholder="لطفا درخواست را بنویسید"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className={styles["box-footer"]}>
                    <button
                      type="submit"
                      className={`${styles.btn} ${styles["btn-primary"]} ${styles["me-1"]}`}
                    >
                      <i className={`${styles.ti} ${styles["ti-save-alt"]}`} />{" "}
                      ارسال
                    </button>
                    <button
                      type="button"
                      className={`${styles.btn} ${styles["btn-danger"]}`}
                    >
                      <i className={`${styles.ti} ${styles["ti-trash"]}`} /> لغو
                    </button>
                  </div>
                </div>

                {/* Property Details Table */}
                <div className={styles.box}>
                  <div className={styles["box-header"]}>
                    <h4 className={styles["box-title"]}>موقعیت</h4>
                    <ul
                      className={`${styles["box-controls"]} ${styles["pull-right"]}`}
                    >
                      <li className={styles.dropdown}>
                        <a
                          data-bs-toggle="dropdown"
                          href="#"
                          className={`${styles["px-10"]} ${styles["hover-primary"]}`}
                        >
                          <i
                            className={`${styles.ti} ${styles["ti-menu"]} ${styles["hover-primary"]}`}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles["box-body"]}>
                    <div className={styles["table-responsive"]}>
                      <table
                        className={`${styles.table} ${styles["table-bordered"]} ${styles["mb-0"]}`}
                      >
                        <tbody>
                          <tr>
                            <th scope="row">قیمت:</th>
                            <td>390,000</td>
                          </tr>
                          <tr>
                            <th scope="row">نوع قرارداد: </th>
                            <td>
                              <span
                                className={`${styles.badge} ${styles["badge-primary"]}`}
                              >
                                برای فروش
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">حمام:</th>
                            <td>1.5</td>
                          </tr>
                          <tr>
                            <th scope="row">هال:</th>
                            <td>468</td>
                          </tr>
                          <tr>
                            <th scope="row">فضای باز:</th>
                            <td>2</td>
                          </tr>
                          <tr>
                            <th scope="row">زیربنا:</th>
                            <td>721 m²</td>
                          </tr>
                          <tr>
                            <th scope="row">طبقه:</th>
                            <td>2</td>
                          </tr>
                          <tr>
                            <th scope="row">اجاره:</th>
                            <td>15 ماه</td>
                          </tr>
                          <tr>
                            <th scope="row">دسترسی:</th>
                            <td>فوری</td>
                          </tr>
                          <tr>
                            <th scope="row">امتیازات:</th>
                            <td>جدا</td>
                          </tr>
                          <tr>
                            <th scope="row">اتاق خواب:</th>
                            <td>3</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HouseDetails;
