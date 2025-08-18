"use client";
import React, { useState } from "react";
import styles from "./EditConsultantInfo.module.css";
import { FaCloudUploadAlt, FaPaperPlane } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { validateEmail, validatePassword, validatePhone } from "@/utils/auth";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Loading from "@/app/loading";

function EditConsultantInfo({ consultant = {} }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: consultant?.firstName || "",
    lastName: consultant?.lastName || "",
    phone: consultant?.phone || "",
    email: consultant?.email || "",
    description: consultant?.description || "",
    birthDay: consultant?.birthDay || "",
    password: "",
  });
  const [img, setImg] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasWarned, setHasWarned] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const notifWarn = () => {
    if (!hasWarned) {
      swalAlert(
        "برای انتخاب سال میتوانید روی سال و همچنین برای انتخاب ماه می توانید روی ماه کلیک کنید تا برای انتخاب به شما نشان داده شود",
        "warning",
        "فهمیدم"
      );
      setHasWarned(true);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.phone && !validatePhone(formData.phone)) {
      setIsLoading(false);
      return swalAlert("شماره تلفن معتبر نیست", "error", "فهمیدم");
    }

    if (formData.email && !validateEmail(formData.email)) {
      setIsLoading(false);
      return swalAlert("ایمیل وارد شده معتبر نیست", "error", "فهمیدم");
    }

    if (formData.password && !validatePassword(formData.password)) {
      setIsLoading(false);
      return swalAlert(
        "رمزعبور باید حداقل از هشت کاراکتر و حروف کوچک و عدد و یک نماد و حرف بزرگ تشکیل شده باشد",
        "error",
        "فهمیدم"
      );
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });
    if (img) data.append("img", img);

    try {
      const res = await fetch(`/api/consultants/${consultant._id}`, {
        method: "PUT",
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        toastSuccess("اطلاعات با موفقیت ویرایش شد");
        router.refresh();
      } else {
        toastError(result.message || "خطا در ویرایش اطلاعات");
      }
    } catch (error) {
      console.error("Error updating consultant:", error);
      toastError("خطا در ارتباط با سرور");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className={styles.tabPane} id="settings">
      <div className={styles.box}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className={styles.controlLabel}>
              نام
            </label>
            <input
              type="text"
              className={styles.formControl}
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="lastName" className={styles.controlLabel}>
              نام خانوادگی
            </label>
            <input
              type="text"
              className={styles.formControl}
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div
            className={`${styles.formGroup} ${styles.datePickerContainer}`}
            onClick={notifWarn}
          >
            <label className={styles.controlLabel}>تاریخ تولد</label>
            <DatePicker
              inputClass="rmdp-input"
              placeholder="تاریخ را انتخاب کنید"
              value={formData.birthDay}
              onChange={(date) =>
                setFormData((prev) => ({
                  ...prev,
                  birthDay: date?.toString() || "",
                }))
              }
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.controlLabel}>
              ایمیل
            </label>
            <input
              type="email"
              className={styles.formControl}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.controlLabel}>
              تلفن
            </label>
            <input
              type="tel"
              className={styles.formControl}
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.controlLabel}>
              پسورد
            </label>
            <input
              type="password"
              className={styles.formControl}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.controlLabel}>آپلود تصویر</label>
            <div className={styles.fileUploadWrapper}>
              <input
                type="file"
                className={styles.fileInput}
                id="profileImage"
                onChange={handleImageChange}
                accept="image/*"
              />
              <label htmlFor="profileImage" className={styles.fileLabel}>
                <FaCloudUploadAlt className={styles.uploadIcon} />
                <span>انتخاب فایل</span>
              </label>
              {fileName && <span className={styles.fileName}>{fileName}</span>}
            </div>
            {consultant?.img && !fileName && (
              <div className={styles.currentImageInfo}>
                <span>تصویر فعلی: </span>
                <a
                  href={consultant.img}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  مشاهده تصویر
                </a>
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.controlLabel}>
              توضیحات
            </label>
            <textarea
              className={styles.formControl}
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className={styles.submitGroup}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              <FaPaperPlane className={styles.icon} />
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditConsultantInfo;
