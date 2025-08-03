import React from "react";
import styles from "./AddConsultantForm.module.css";

function AddConsultantForm() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.containerFull}>
        <section className={styles.contentSection}>
          {/* فرم اطلاعات اولیه */}
          <div className={styles.formRow}>
            <div className={styles.fullWidthColumn}>
              <div className={styles.formBox}>
                <div className={styles.boxHeader}>
                  <h4 className={styles.boxTitle}>اطلاعات اولیه</h4>
                  <ul className={styles.boxControls}>
                    <li className={styles.dropdownMenu}>
                      <a
                        data-bs-toggle="dropdown"
                        href="#"
                        className={styles.dropdownToggle}
                      >
                        <i className={`ti-menu ${styles.menuIcon}`} />
                      </a>
                      <div className={styles.dropdownContent}>
                        <a className={styles.dropdownItem} href="#">
                          <i className={`ti-import ${styles.dropdownIcon}`} />
                          دریافت
                        </a>
                        <a className={styles.dropdownItem} href="#">
                          <i className={`ti-export ${styles.dropdownIcon}`} />
                          اکسپورت
                        </a>
                        <a className={styles.dropdownItem} href="#">
                          <i className={`ti-printer ${styles.dropdownIcon}`} />
                          پرینت
                        </a>
                        <div className={styles.dropdownDivider} />
                        <a className={styles.dropdownItem} href="#">
                          <i className={`ti-settings ${styles.dropdownIcon}`} />
                          تنظیمات
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className={styles.boxBody}>
                  {/* ردیف اول - دو فیلد */}
                  <div className={styles.responsiveRow}>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>نام</label>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="نام را وارد کنید"
                        />
                      </div>
                    </div>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>فامیلی</label>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="فامیلی را وارد کنید"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ردیف دوم - دو فیلد */}
                  <div className={styles.responsiveRow}>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>تلفن</label>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="شماره تلفن را وارد کنید"
                        />
                      </div>
                    </div>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>ایمیل</label>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="آدرس ایمیل را وارد کنید"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ردیف سوم - دو فیلد */}
                  <div className={styles.responsiveRow}>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>تاریخ تولد</label>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="تاریخ تولد را وارد کنید"
                        />
                      </div>
                    </div>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>سن</label>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="سن را وارد کنید"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ردیف چهارم - دو فیلد */}
                  <div className={styles.responsiveRow}>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>جنسیت</label>
                        <select className={`${styles.formSelect} select2 Anjoman_Regular `}>
                          <option value="">انتخاب کنید</option>
                          <option value="male">مرد</option>
                          <option value="female">زن</option>
                        </select>
                      </div>
                    </div>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>آپلود تصویر</label>
                        <div className={styles.fileUploadWrapper}>
                          <input
                            type="file"
                            className={styles.fileInput}
                            id="profileImage"
                          />
                          <label
                            htmlFor="profileImage"
                            className={styles.fileLabel}
                          >
                            <i
                              className={`mdi mdi-upload ${styles.uploadIcon}`}
                            />
                            <span>انتخاب فایل</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* فیلد تکست اریا */}
                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>توضیحات</label>
                    <textarea
                      rows={4}
                      className={`${styles.formTextarea} Anjoman_Regular`}
                      placeholder="توضیحات اضافه را وارد کنید"
                    ></textarea>
                  </div>
                </div>

                <div className={styles.boxFooter}>
                  <button type="button" className={styles.cancelButton}>
                    <i className={`ti-trash ${styles.buttonIcon}`} /> لغو
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    <i className={`ti-save-alt ${styles.buttonIcon}`} /> ذخیره
                    اطلاعات
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* بخش اطلاعات حساب کاربری */}
          <div className={styles.formRow}>
            <div className={styles.halfWidthColumn}>
              <div className={styles.formBox}>
                <div className={styles.boxHeader}>
                  <h4 className={styles.boxTitle}>اطلاعات حساب کاربری</h4>
                  <ul className={styles.boxControls}>
                    <li className={styles.dropdownMenu}>
                      <a
                        data-bs-toggle="dropdown"
                        href="#"
                        className={styles.dropdownToggle}
                      >
                        <i className={`ti-menu ${styles.menuIcon}`} />
                      </a>
                      <div className={styles.dropdownContent}>
                        <a className={styles.dropdownItem} href="#">
                          <i className={`ti-import ${styles.dropdownIcon}`} />
                          دریافت
                        </a>
                        <a className={styles.dropdownItem} href="#">
                          <i className={`ti-export ${styles.dropdownIcon}`} />
                          اکسپورت
                        </a>
                        <a className={styles.dropdownItem} href="#">
                          <i className={`ti-printer ${styles.dropdownIcon}`} />
                          پرینت
                        </a>
                        <div className={styles.dropdownDivider} />
                        <a className={styles.dropdownItem} href="#">
                          <i className={`ti-settings ${styles.dropdownIcon}`} />
                          تنظیمات
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className={styles.boxBody}>
                  {/* ردیف اول - دو فیلد */}
                  <div className={styles.responsiveRow}>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>نام کاربری</label>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="نام کاربری را وارد کنید"
                        />
                      </div>
                    </div>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>کلمه عبور</label>
                        <input
                          type="password"
                          className={styles.formControl}
                          placeholder="کلمه عبور را وارد کنید"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ردیف دوم - دو فیلد */}
                  <div className={styles.responsiveRow}>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>
                          تکرار کلمه عبور
                        </label>
                        <input
                          type="password"
                          className={styles.formControl}
                          placeholder="تکرار کلمه عبور"
                        />
                      </div>
                    </div>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>نقش کاربری</label>
                        <select className={`${styles.formSelect} Anjoman_Regular`}>
                          <option value="">انتخاب نقش</option>
                          <option value="admin">مدیر سیستم</option>
                          <option value="consultant">مشاور</option>
                          <option value="user">کاربر عادی</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.boxFooter}>
                  <button type="button" className={styles.cancelButton}>
                    <i className={`ti-trash ${styles.buttonIcon}`} /> لغو
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    <i className={`ti-save-alt ${styles.buttonIcon}`} /> ذخیره
                    اطلاعات
                  </button>
                </div>
              </div>
            </div>

            {/* بخش شبکه‌های اجتماعی */}
            <div className={styles.halfWidthColumn}>
              <div className={styles.formBox}>
                <div className={styles.boxHeader}>
                  <h4 className={styles.boxTitle}>شبکه‌های اجتماعی</h4>
                  <ul className={styles.boxControls}>
                    <li className={styles.dropdownMenu}>
                      <a
                        data-bs-toggle="dropdown"
                        href="#"
                        className={styles.dropdownToggle}
                      >
                        <i className={`ti-menu ${styles.menuIcon}`} />
                      </a>
                      <div className={styles.dropdownContent}>
                        <a className={styles.dropdownItem} href="#">
                          <i className={`ti-import ${styles.dropdownIcon}`} />
                          دریافت
                        </a>
                        <a className={styles.dropdownItem} href="#">
                          <i className={`ti-export ${styles.dropdownIcon}`} />
                          اکسپورت
                        </a>
                        <a className={styles.dropdownItem} href="#">
                          <i className={`ti-printer ${styles.dropdownIcon}`} />
                          پرینت
                        </a>
                        <div className={styles.dropdownDivider} />
                        <a className={styles.dropdownItem} href="#">
                          <i className={`ti-settings ${styles.dropdownIcon}`} />
                          تنظیمات
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className={styles.boxBody}>
                  {/* ردیف اول - دو فیلد */}
                  <div className={styles.responsiveRow}>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>فیس‌بوک</label>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="لینک پروفایل فیسبوک"
                        />
                      </div>
                    </div>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>توییتر</label>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="لینک پروفایل توییتر"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ردیف دوم - دو فیلد */}
                  <div className={styles.responsiveRow}>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>اینستاگرام</label>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="لینک پروفایل اینستاگرام"
                        />
                      </div>
                    </div>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>لینکدین</label>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="لینک پروفایل لینکدین"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ردیف سوم - دو فیلد */}
                  <div className={styles.responsiveRow}>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>تلگرام</label>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="آیدی تلگرام"
                        />
                      </div>
                    </div>
                    <div className={styles.responsiveCol}>
                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>واتساپ</label>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="شماره واتساپ"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.boxFooter}>
                  <button type="button" className={styles.cancelButton}>
                    <i className={`ti-trash ${styles.buttonIcon}`} /> لغو
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    <i className={`ti-save-alt ${styles.buttonIcon}`} /> ذخیره
                    اطلاعات
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddConsultantForm;
