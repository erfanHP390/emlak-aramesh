import React from "react";
import styles from "./EditConsultantInfo.module.css";
import { FaCloudUploadAlt } from "react-icons/fa";

function EditConsultantInfo() {
  return (
    <div className={styles.tabPane} id="settings">
      <div className={styles.box}>
        <form className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="inputName" className={styles.controlLabel}>
              نام
            </label>
            <input
              type="text"
              className={styles.formControl}
              id="inputName"
              placeholder=""
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="inputName" className={styles.controlLabel}>
              نام خانوادگی
            </label>
            <input
              type="text"
              className={styles.formControl}
              id="inputName"
              placeholder=""
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="inputEmail" className={styles.controlLabel}>
              ایمیل
            </label>
            <input
              type="email"
              className={styles.formControl}
              id="inputEmail"
              placeholder=""
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="inputPhone" className={styles.controlLabel}>
              تلفن
            </label>
            <input
              type="tel"
              className={styles.formControl}
              id="inputPhone"
              placeholder=""
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.controlLabel}>آپلود تصویر</label>
            <div className={styles.fileUploadWrapper}>
              <input
                type="file"
                className={styles.fileInput}
                id="profileImage"
              />
              <label htmlFor="profileImage" className={styles.fileLabel}>
                <FaCloudUploadAlt
                  className={`mdi mdi-upload ${styles.uploadIcon}`}
                />
                <span>انتخاب فایل</span>
              </label>
              {/* {img && (
                <span className={styles.fileName}>
                  {img.name || "فایل انتخاب شده"}
                </span>
              )} */}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="inputExperience" className={styles.controlLabel}>
              توضیحات
            </label>
            <textarea
              className={styles.formControl}
              id="inputExperience"
              placeholder=""
              rows="4"
            />
          </div>

          <div className={styles.submitGroup}>
            <button type="submit" className={styles.submitButton}>
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditConsultantInfo;
