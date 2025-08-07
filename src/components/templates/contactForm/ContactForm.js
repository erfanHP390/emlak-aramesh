import React from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.containerFull}>
        <div className={styles.contentHeader}>
          <div className={styles.headerFlex}>
            <div className={styles.headerTitle}>
              <h4 className={styles.pageTitle}>به پشتیبانی نیاز دارید؟</h4>
            </div>
          </div>
        </div>

        <section className={styles.content}>
          <div className={styles.row}>
            <div className={styles.col12}>
              <div className={styles.box}>
                <div className={styles.boxHeader}>
                  <h6 className={styles.boxTitle}>
                    درخواست خودتون را ارسال کنید تا بررسی شود
                  </h6>
                </div>

                <form className={styles.form}>
                  <div className={styles.boxBody}>
                    <h5 className={styles.sectionTitle}>
                      <i className={`ti-user ${styles.icon}`} />
                      اطلاعات شخصی
                    </h5>
                    <hr className={styles.divider} />

                    <div className={styles.formRow}>
                      <div className={styles.col6}>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>نام</label>
                          <input
                            type="text"
                            className={styles.formControl}
                            placeholder="نام"
                          />
                        </div>
                      </div>
                      <div className={styles.col6}>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>فامیلی</label>
                          <input
                            type="text"
                            className={styles.formControl}
                            placeholder="فامیلی"
                          />
                        </div>
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.col6}>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>ایمیل</label>
                          <input
                            type="text"
                            className={styles.formControl}
                            placeholder="ایمیل"
                          />
                        </div>
                      </div>
                      <div className={styles.col6}>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>شماره تماس</label>
                          <input
                            type="text"
                            className={styles.formControl}
                            placeholder="تلفن"
                          />
                        </div>
                      </div>
                    </div>

                    <h5 className={styles.sectionTitle}>
                      <i className={`ti-file ${styles.icon}`} /> جزئیات بیشتری
                      ارائه دهید
                    </h5>
                    <hr className={styles.divider} />

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>انتخاب فایل</label>
                      <div className={styles.fileUploadWrapper}>
                        <label
                          htmlFor="file"
                          className={styles.fileUploadLabel}
                        >
                          <span className={styles.fileUploadIcon}>
                            <i className={`ti-cloud-up ${styles.icon}`} />
                          </span>
                          <span className={styles.fileUploadText}>
                            فایل خود را انتخاب یا اینجا رها کنید
                          </span>
                        </label>
                        <input
                          type="file"
                          id="file"
                          className={styles.fileUploadInput}
                        />
                        <div
                          className={styles.fileUploadPreview}
                          id="filePreview"
                        >
                          {/* Preview will be shown here */}
                        </div>
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>پیام</label>
                      <textarea
                        rows={5}
                        className={styles.formControl}
                        placeholder="توضیحات را بنویسید"
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div className={styles.boxFooter}>
                    <button type="submit" className={styles.submitButton}>
                      <i className={`fa fa-paper-plane ${styles.icon}`} /> ارسال
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactForm;
