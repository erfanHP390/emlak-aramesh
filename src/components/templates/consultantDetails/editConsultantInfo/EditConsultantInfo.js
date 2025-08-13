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

function EditConsultantInfo({ consultant }) {
  const router = useRouter();
  const [firstName, setFirstName] = useState(consultant.firstName);
  const [lastName, setLastName] = useState(consultant.lastName);
  const [phone, setPhone] = useState(consultant.phone);
  const [email, setEmail] = useState(consultant.email);
  const [description, setDescription] = useState(consultant.description);
  const [isLoading, setIsLoading] = useState(false);
  const [birthDay, setBirthDay] = useState(consultant.birthDay);
  const [password, setPassword] = useState("");
  const [img, setImg] = useState(null);
  const [hasWarned, setHasWarned] = useState(false);
  const [fileName, setFileName] = useState("");

  // نمایش هشدار برای انتخاب تاریخ
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

  // مدیریت تغییر تصویر
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      setFileName(file.name);
    }
  };

  // ارسال اطلاعات ویرایش شده به سرور
  const editInfos = async () => {
    setIsLoading(true);

    // اعتبارسنجی شماره تلفن
    if (phone) {
      const isValidPhone = validatePhone(phone);
      if (!isValidPhone) {
        setIsLoading(false);
        return swalAlert("شماره تلفن معتبر نیست", "error", "فهمیدم");
      }
    }

    // اعتبارسنجی ایمیل
    if (email) {
      const isValidEmail = validateEmail(email);
      if (!isValidEmail) {
        setIsLoading(false);
        return swalAlert("ایمیل وارد شده معتبر نیست", "error", "فهمیدم");
      }
    }

    // اعتبارسنجی رمز عبور
    if (password) {
      const isValidPassword = validatePassword(password);
      if (!isValidPassword) {
        setIsLoading(false);
        return swalAlert(
          "رمزعبور باید حداقل از هشت کاراکتر و حروف کوچک و عدد و یک نماد و حرف بزرگ تشکیل شده باشد",
          "error",
          "فهمیدم"
        );
      }
    }

    // آماده‌سازی داده‌ها برای ارسال
    const formData = new FormData();
    if (firstName) formData.append("firstName", firstName);
    if (lastName) formData.append("lastName", lastName);
    if (description) formData.append("description", description);
    if (phone) formData.append("phone", phone);
    if (email) formData.append("email", email);
    if (birthDay) formData.append("birthDay", birthDay);
    if (password) formData.append("password", password);
    if (img) formData.append("img", img);

    try {
      // ارسال درخواست به سرور
      const res = await fetch(`/api/consultants/${consultant._id}`, {
        method: "PUT",
        body: formData,
      });

      // پردازش پاسخ سرور
      if (res.status === 200) {
        toastSuccess(
          "اطلاعات شما با موفقیت ویرایش شد",
          "top-center",
          5000,
          false,
          true,
          true,
          true,
          undefined,
          "colored"
        );
        router.refresh();
      } else if (res.status === 401) {
        toastError(
          "شما مجاز به ویرایش نیستید",
          "top-center",
          5000,
          false,
          true,
          true,
          true,
          undefined,
          "colored"
        );
        router.replace("/login");
      } else if (res.status === 400) {
        toastError(
          "شناسه مشاور ارسال نشده است .دوباره تلاش کنید یا به پشتیبانی پیام دهید",
          "top-center",
          5000,
          false,
          true,
          true,
          true,
          undefined,
          "colored"
        );
      } else if (res.status === 419) {
        toastError(
          "شناسه شماور نامعتبر است.به پشتیبانی پیام دهید",
          "top-center",
          5000,
          false,
          true,
          true,
          true,
          undefined,
          "colored"
        );
      } else if (res.status === 422) {
        toastError(
          "ایمیل/تلفن/پسورد نامعتبر است. لطفا فرمت معتبر وارد نمایید",
          "top-center",
          5000,
          false,
          true,
          true,
          true,
          undefined,
          "colored"
        );
      } else if (res.status === 500) {
        toastError(
          "خطا در سرور، لطفا بعدا تلاش کنید",
          "top-center",
          5000,
          false,
          true,
          true,
          true,
          undefined,
          "colored"
        );
      }
    } catch (err) {
      console.error("Error updating consultant:", err);
      toastError(
        "خطا در ارتباط با سرور",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.tabPane} id="settings">
          <div className={styles.box}>
            <form className={styles.formContainer}>
              {/* فیلد نام */}
              <div className={styles.formGroup}>
                <label htmlFor="inputName" className={styles.controlLabel}>
                  نام
                </label>
                <input
                  type="text"
                  className={styles.formControl}
                  id="inputName"
                  placeholder=""
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>

              {/* فیلد نام خانوادگی */}
              <div className={styles.formGroup}>
                <label htmlFor="inputName" className={styles.controlLabel}>
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  className={styles.formControl}
                  id="inputName"
                  placeholder=""
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>

              {/* فیلد تاریخ تولد */}
              <div
                className={`${styles.formGroup} ${styles.datePickerContainer}`}
                onClick={() => notifWarn()}
              >
                <label className={styles.controlLabel}>تاریخ تولد</label>
                <DatePicker
                  inputClass="rmdp-input"
                  placeholder="تاریخ را انتخاب کنید"
                  value={birthDay}
                  onChange={(date) => setBirthDay(date ? date.toString() : "")}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  render={<input className="rmdp-input" />}
                  containerClassName="custom-rmdp-container"
                />
              </div>

              {/* فیلد ایمیل */}
              <div className={styles.formGroup}>
                <label htmlFor="inputEmail" className={styles.controlLabel}>
                  ایمیل
                </label>
                <input
                  type="email"
                  className={styles.formControl}
                  id="inputEmail"
                  placeholder=""
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              {/* فیلد تلفن */}
              <div className={styles.formGroup}>
                <label htmlFor="inputPhone" className={styles.controlLabel}>
                  تلفن
                </label>
                <input
                  type="tel"
                  className={styles.formControl}
                  id="inputPhone"
                  placeholder=""
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              {/* فیلد رمز عبور */}
              <div className={styles.formGroup}>
                <label htmlFor="inputPhone" className={styles.controlLabel}>
                  پسورد
                </label>
                <input
                  type="password"
                  className={styles.formControl}
                  id="inputPhone"
                  placeholder=""
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              {/* فیلد آپلود تصویر */}
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
                    <FaCloudUploadAlt
                      className={`mdi mdi-upload ${styles.uploadIcon}`}
                    />
                    <span>انتخاب فایل</span>
                  </label>
                  {fileName && (
                    <span className={styles.fileName}>{fileName}</span>
                  )}
                </div>
                {consultant.img && !fileName && (
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

              {/* فیلد توضیحات */}
              <div className={styles.formGroup}>
                <label
                  htmlFor="inputExperience"
                  className={styles.controlLabel}
                >
                  توضیحات
                </label>
                <textarea
                  className={styles.formControl}
                  id="inputExperience"
                  placeholder=""
                  rows="4"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>

              {/* دکمه ارسال */}
              <div className={styles.submitGroup}>
                <button
                  type="submit"
                  onClick={(event) => {
                    event.preventDefault();
                    editInfos();
                  }}
                  className={styles.submitButton}
                >
                  <FaPaperPlane
                    className={`fa fa-paper-plane ${styles.icon}`}
                  />
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditConsultantInfo;
