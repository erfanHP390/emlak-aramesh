"use client";

import React, { useState } from "react";
import styles from "./AddHome.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";

function AddHome() {
  const [rentalType, setRentalType] = useState("option1");
  const [amenities, setAmenities] = useState({
    pool: false,
    terrace: false,
    balcony: false,
    internet: true,
    phone: false,
    tv: false,
    computer: false,
    dishwasher: true,
    kitchenHood: true,
    table: false,
    dining: false,
    yard: false,
  });
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleRentalTypeChange = (e) => {
    setRentalType(e.target.value);
  };

  const handleAmenityChange = (e) => {
    const { name, checked } = e.target;
    setAmenities((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <>
      <div className={styles["content-wrapper"]}>
        <div className={styles["container-full"]}>
          <section className={styles.content}>
            <div className={styles.row}>
              <div className={styles["col-12"]}>
                <div className={styles.box}>
                  <div className={styles["box-header"]}>
                    <h4 className={styles["box-title"]}>اطلاعات اولیه</h4>
                    {/* <ul
                      className={`${styles["box-controls"]} ${styles["pull-right"]}`}
                    >
                      <li className={styles.dropdown}>
                        <a
                          data-bs-toggle="dropdown"
                          href="#"
                          className={`${styles["px-10"]} ${styles["hover-primary"]}`}
                        >
                          {openDropdownIndex === 1 ? (
                            <IoCloseSharp
                              onClick={() => toggleDropdown(1)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40}
                            />
                          ) : (
                            <GiHamburgerMenu
                              onClick={() => toggleDropdown(1)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40} // تنظیم سایز آیکون
                            />
                          )}
                        </a>
                        <div
                          className={
                            openDropdownIndex === 1
                              ? `${styles["dropdown-menu"]}  ${styles["show"]}`
                              : styles["dropdown-menu"]
                          }
                        >
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-import"]}`}
                            />
                            دریافت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-export"]}`}
                            />
                            اکسپورت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-printer"]}`}
                            />
                            پرینت
                          </a>
                          <div className={styles["dropdown-divider"]} />
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-settings"]}`}
                            />{" "}
                            تنظیمات
                          </a>
                        </div>
                      </li>
                    </ul> */}
                  </div>
                  <div className={styles["box-body"]}>
                    <div className={styles.row}>
                      <div className={styles["col-sm-6"]}>
                        <div className={styles["form-group"]}>
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="نام ملک"
                          />
                        </div>
                      </div>
                      <div className={styles["col-sm-6"]}>
                        <div className={styles["form-group"]}>
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="لوکیشن"
                          />
                        </div>
                      </div>
                      <div className={styles["col-sm-12"]}>
                        <div
                          className={`${styles["form-group"]} ${styles["mb-0"]}`}
                        >
                          <div className={styles["form-line"]}>
                            <textarea
                              rows={4}
                              className={`${styles["form-control"]} ${styles["no-resize"]}`}
                              placeholder="توضیحات"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["box-footer"]}>
                    <button
                      type="button"
                      className={`${styles.btn} ${styles["btn-danger"]} ${styles["me-1"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                    >
                      <i className={`${styles.ti} ${styles["ti-trash"]}`} /> لغو
                    </button>
                    <button
                      type="submit"
                      className={`${styles.btn} ${styles["btn-primary"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                    >
                      <i className={`${styles.ti} ${styles["ti-save-alt"]}`} />{" "}
                      ذخیره
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles["col-12"]}>
                <div className={styles.box}>
                  <div className={styles["box-header"]}>
                    <h4 className={styles["box-title"]}>اطلاعات</h4>
                    {/* <ul
                      className={`${styles["box-controls"]} ${styles["pull-right"]}`}
                    >
                      <li className={styles.dropdown}>
                        <a
                          data-bs-toggle="dropdown"
                          href="#"
                          className={`${styles["px-10"]} ${styles["hover-primary"]}`}
                        >
                          {openDropdownIndex === 2 ? (
                            <IoCloseSharp
                              onClick={() => toggleDropdown(2)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40}
                            />
                          ) : (
                            <GiHamburgerMenu
                              onClick={() => toggleDropdown(2)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40} // تنظیم سایز آیکون
                            />
                          )}
                        </a>
                        <div
                          className={
                            openDropdownIndex === 2
                              ? `${styles["dropdown-menu"]}  ${styles["show"]}`
                              : styles["dropdown-menu"]
                          }
                        >
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-import"]}`}
                            />
                            دریافت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-export"]}`}
                            />
                            اکسپورت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-printer"]}`}
                            />
                            پرینت
                          </a>
                          <div className={styles["dropdown-divider"]} />
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-settings"]}`}
                            />{" "}
                            تنظیمات
                          </a>
                        </div>
                      </li>
                    </ul> */}
                  </div>
                  <div className={styles["box-body"]}>
                    <div className={styles.row}>
                      <div className={styles["col-sm-6"]}>
                        <div className={styles["d-flex"]}>
                          <div className={styles["radio-group"]}>
                            <div className={styles.radio}>
                              <input
                                type="radio"
                                name="radio1"
                                id="radio1"
                                value="option1"
                                checked={rentalType === "option1"}
                                onChange={handleRentalTypeChange}
                              />
                              <label htmlFor="radio1">اجاره</label>
                            </div>
                            <div className={styles.radio}>
                              <input
                                type="radio"
                                name="radio1"
                                id="radio2"
                                value="option2"
                                checked={rentalType === "option2"}
                                onChange={handleRentalTypeChange}
                              />
                              <label htmlFor="radio2">فروش</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["col-sm-6"]}>
                        <div className={styles["form-group"]}>
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="فروش/اجاره"
                          />
                        </div>
                      </div>
                      <div className={styles["col-sm-12"]}>
                        <div className={styles["form-group"]}>
                          <textarea
                            rows={4}
                            className={`${styles["form-control"]} ${styles["no-resize"]}`}
                            placeholder="ادرس کامل"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div
                        className={`${styles["col-lg-3"]} ${styles["col-md-6"]}`}
                      >
                        <div
                          className={`${styles["form-group"]} ${styles["mb-lg-0"]}`}
                        >
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="اتاق خواب"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-3"]} ${styles["col-md-6"]}`}
                      >
                        <div
                          className={`${styles["form-group"]} ${styles["mb-lg-0"]}`}
                        >
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="پله"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-3"]} ${styles["col-md-6"]}`}
                      >
                        <div
                          className={`${styles["form-group"]} ${styles["mb-lg-0"]}`}
                        >
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="پارکینگ"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-3"]} ${styles["col-md-6"]}`}
                      >
                        <div
                          className={`${styles["form-group"]} ${styles["mb-0"]}`}
                        >
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="سال ساخت"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["box-footer"]}>
                    <button
                      type="button"
                      className={`${styles.btn} ${styles["btn-danger"]} ${styles["me-1"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                    >
                      <i className={`${styles.ti} ${styles["ti-trash"]}`} /> لغو
                    </button>
                    <button
                      type="submit"
                      className={`${styles.btn} ${styles["btn-primary"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                    >
                      <i className={`${styles.ti} ${styles["ti-save-alt"]}`} />{" "}
                      ذخیره
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles["col-12"]}>
                <div className={styles.box}>
                  <div className={styles["box-header"]}>
                    <h4 className={styles["box-title"]}>اطلاعات</h4>
                    {/* <ul
                      className={`${styles["box-controls"]} ${styles["pull-right"]}`}
                    >
                      <li className={styles.dropdown}>
                        <a
                          data-bs-toggle="dropdown"
                          href="#"
                          className={`${styles["px-10"]} ${styles["hover-primary"]}`}
                        >
                          {openDropdownIndex === 3 ? (
                            <IoCloseSharp
                              onClick={() => toggleDropdown(3)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40}
                            />
                          ) : (
                            <GiHamburgerMenu
                              onClick={() => toggleDropdown(3)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40} // تنظیم سایز آیکون
                            />
                          )}
                        </a>
                        <div
                          className={
                            openDropdownIndex === 3
                              ? `${styles["dropdown-menu"]}  ${styles["show"]}`
                              : styles["dropdown-menu"]
                          }
                        >
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-import"]}`}
                            />
                            دریافت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-export"]}`}
                            />
                            اکسپورت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-printer"]}`}
                            />
                            پرینت
                          </a>
                          <div className={styles["dropdown-divider"]} />
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-settings"]}`}
                            />{" "}
                            تنظیمات
                          </a>
                        </div>
                      </li>
                    </ul> */}
                  </div>
                  <div className={styles["box-body"]}>
                    <div className={styles.row}>
                      <div
                        className={`${styles["col-lg-2"]} ${styles["col-md-4"]} ${styles["col-12"]}`}
                      >
                        <div
                          className={`${styles["form-line"]} ${styles["mb-lg-0"]}`}
                        >
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="اتاق مهمان"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-2"]} ${styles["col-md-4"]} ${styles["col-12"]}`}
                      >
                        <div
                          className={`${styles["form-line"]} ${styles["mb-lg-0"]}`}
                        >
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="اشپزخانه"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-2"]} ${styles["col-md-4"]} ${styles["col-12"]}`}
                      >
                        <div
                          className={`${styles["form-line"]} ${styles["mb-lg-0"]}`}
                        >
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="پذیرایی"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-2"]} ${styles["col-md-4"]} ${styles["col-12"]}`}
                      >
                        <div
                          className={`${styles["form-group"]} ${styles["mb-lg-0"]}`}
                        >
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="هال"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-2"]} ${styles["col-md-4"]} ${styles["col-12"]}`}
                      >
                        <div
                          className={`${styles["form-group"]} ${styles["mb-lg-0"]}`}
                        >
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="اتاق خواب 2"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles["col-lg-2"]} ${styles["col-md-4"]} ${styles["col-12"]}`}
                      >
                        <div
                          className={`${styles["form-group"]} ${styles["mb-0"]}`}
                        >
                          <input
                            type="text"
                            className={styles["form-control"]}
                            placeholder="اتاق دیگر"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["box-footer"]}>
                    <button
                      type="button"
                      className={`${styles.btn} ${styles["btn-danger"]} ${styles["me-1"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                    >
                      <i className={`${styles.ti} ${styles["ti-trash"]}`} /> لغو
                    </button>
                    <button
                      type="submit"
                      className={`${styles.btn} ${styles["btn-primary"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                    >
                      <i className={`${styles.ti} ${styles["ti-save-alt"]}`} />{" "}
                      ذخیر
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles["col-12"]}>
                <div className={styles.box}>
                  <div className={styles["box-header"]}>
                    <h4 className={styles["box-title"]}>امکانات بیشتر</h4>
                    {/* <ul
                      className={`${styles["box-controls"]} ${styles["pull-right"]}`}
                    >
                      <li className={styles.dropdown}>
                        <a
                          data-bs-toggle="dropdown"
                          href="#"
                          className={`${styles["px-10"]} ${styles["hover-primary"]}`}
                        >
                          {openDropdownIndex === 4 ? (
                            <IoCloseSharp
                              onClick={() => toggleDropdown(4)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40}
                            />
                          ) : (
                            <GiHamburgerMenu
                              onClick={() => toggleDropdown(4)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40} // تنظیم سایز آیکون
                            />
                          )}
                        </a>
                        <div
                          className={
                            openDropdownIndex === 4
                              ? `${styles["dropdown-menu"]}  ${styles["show"]}`
                              : styles["dropdown-menu"]
                          }
                        >
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-import"]}`}
                            />
                            دریافت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-export"]}`}
                            />
                            اکسپورت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-printer"]}`}
                            />
                            پرینت
                          </a>
                          <div className={styles["dropdown-divider"]} />
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-settings"]}`}
                            />{" "}
                            تنظیمات
                          </a>
                        </div>
                      </li>
                    </ul> */}
                  </div>
                  <div className={styles["box-body"]}>
                    <div className={styles.row}>
                      <div className={styles["col-sm-12"]}>
                        <div className={styles["checkbox-container"]}>
                          <div className={styles.checkbox}>
                            <input
                              id="checkbox1"
                              type="checkbox"
                              name="pool"
                              checked={amenities.pool}
                              onChange={handleAmenityChange}
                            />
                            <label htmlFor="checkbox1">استخر</label>
                          </div>
                          <div className={styles.checkbox}>
                            <input
                              id="checkbox2"
                              type="checkbox"
                              name="terrace"
                              checked={amenities.terrace}
                              onChange={handleAmenityChange}
                            />
                            <label htmlFor="checkbox2">تراس</label>
                          </div>
                          <div className={styles.checkbox}>
                            <input
                              id="checkbox3"
                              type="checkbox"
                              name="balcony"
                              checked={amenities.balcony}
                              onChange={handleAmenityChange}
                            />
                            <label htmlFor="checkbox3">هوا خوری</label>
                          </div>
                          <div className={styles.checkbox}>
                            <input
                              id="checkbox4"
                              type="checkbox"
                              name="internet"
                              checked={amenities.internet}
                              onChange={handleAmenityChange}
                            />
                            <label htmlFor="checkbox4">اینترنت</label>
                          </div>
                          <div className={styles.checkbox}>
                            <input
                              id="checkbox5"
                              type="checkbox"
                              name="phone"
                              checked={amenities.phone}
                              onChange={handleAmenityChange}
                            />
                            <label htmlFor="checkbox5">تلفن</label>
                          </div>
                          <div className={styles.checkbox}>
                            <input
                              id="checkbox6"
                              type="checkbox"
                              name="tv"
                              checked={amenities.tv}
                              onChange={handleAmenityChange}
                            />
                            <label htmlFor="checkbox6">تلویزیون</label>
                          </div>
                          <div className={styles.checkbox}>
                            <input
                              id="checkbox7"
                              type="checkbox"
                              name="computer"
                              checked={amenities.computer}
                              onChange={handleAmenityChange}
                            />
                            <label htmlFor="checkbox7">کامپیوتر</label>
                          </div>
                          <div className={styles.checkbox}>
                            <input
                              id="checkbox8"
                              type="checkbox"
                              name="dishwasher"
                              checked={amenities.dishwasher}
                              onChange={handleAmenityChange}
                            />
                            <label htmlFor="checkbox8">ظرفشویی</label>
                          </div>
                          <div className={styles.checkbox}>
                            <input
                              id="checkbox9"
                              type="checkbox"
                              name="kitchenHood"
                              checked={amenities.kitchenHood}
                              onChange={handleAmenityChange}
                            />
                            <label htmlFor="checkbox9">هود اشپزخانه</label>
                          </div>
                          <div className={styles.checkbox}>
                            <input
                              id="checkbox0"
                              type="checkbox"
                              name="table"
                              checked={amenities.table}
                              onChange={handleAmenityChange}
                            />
                            <label htmlFor="checkbox0">میز</label>
                          </div>
                          <div className={styles.checkbox}>
                            <input
                              id="checkbox11"
                              type="checkbox"
                              name="dining"
                              checked={amenities.dining}
                              onChange={handleAmenityChange}
                            />
                            <label htmlFor="checkbox11">نهارخوری</label>
                          </div>
                          <div className={styles.checkbox}>
                            <input
                              id="checkbox12"
                              type="checkbox"
                              name="yard"
                              checked={amenities.yard}
                              onChange={handleAmenityChange}
                            />
                            <label htmlFor="checkbox12">بالکن</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.row} ${styles["clearfix"]}`}>
                      <div className={styles["col-sm-12"]}>
                        <form
                          action="/"
                          id="frmFileUpload"
                          className={`${styles.dropzone} ${styles["mt-15"]} ${styles["dz-clickable"]}`}
                          method="post"
                        >
                          <input
                            type="file"
                            className={styles["file-input"]}
                            multiple
                          />
                          <div className={styles["dz-message"]}>
                            <div className={styles["icon-wrapper"]}>
                              <FaCloudUploadAlt
                                className={`${styles.mdi} ${styles["mdi-upload"]} ${styles["fs-36"]}`}
                              />
                            </div>
                            <h3>فایل را بکشید و رها کنید یا کلیک کنید</h3>
                            <em>
                              (فایل فقط انتخاب می‌شود ولی ذخیره{" "}
                              <strong>نمی‌شود</strong> اپلود می‌شود.)
                            </em>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className={styles["box-footer"]}>
                    <button
                      type="button"
                      className={`${styles.btn} ${styles["btn-danger"]} ${styles["me-1"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                    >
                      <i className={`${styles.ti} ${styles["ti-trash"]}`} /> لغو
                    </button>
                    <button
                      type="submit"
                      className={`${styles.btn} ${styles["btn-primary"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                    >
                      <i className={`${styles.ti} ${styles["ti-save-alt"]}`} />{" "}
                      ارسال
                    </button>
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

export default AddHome;
