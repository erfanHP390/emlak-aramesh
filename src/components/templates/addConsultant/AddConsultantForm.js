"use client";
import React, { useState, useEffect } from "react";
import styles from "./AddConsultantForm.module.css";
import { useRouter } from "next/navigation";
import { FaCloudUploadAlt } from "react-icons/fa";
import { toastSuccess, toastError, swalAlert } from "@/utils/alerts";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { validateEmail, validatePassword, validatePhone } from "@/utils/auth";
import Loading from "@/app/loading";

function AddConsultantForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    agencyID: "",
    phone: "",
    birthDay: "",
    age: "",
    sex: "",
    email: "",
    img: null,
    description: "",
    password: "",
    socials: Array(4).fill(""),
    hisCode: "",
    repeatPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hasWarned, setHasWarned] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialChange = (index, value) => {
    const newSocials = [...formData.socials];
    newSocials[index] = value;
    setFormData((prev) => ({
      ...prev,
      socials: newSocials,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        img: e.target.files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        img: null,
      }));
    }
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      birthDay: date ? date.toString() : "",
    }));
  };

  // manage funcs localStorage
  const saveToLocalStorage = (key, data) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(data));
    }
  };

  const loadFromLocalStorage = (key) => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
    return null;
  };

  const removeFromLocalStorage = (key) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  };

  // load from localstorage
  useEffect(() => {
    const loadBasicInfo = loadFromLocalStorage("consultantBasicInfo");
    const loadAccountInfo = loadFromLocalStorage("consultantAccountInfo");
    const loadSocialInfo = loadFromLocalStorage("consultantSocialInfo");

    if (loadBasicInfo || loadAccountInfo || loadSocialInfo) {
      setFormData((prev) => ({
        ...prev,
        ...loadBasicInfo,
        ...loadAccountInfo,
        socials: loadSocialInfo?.socials
          ? [...loadSocialInfo.socials]
          : Array(4).fill(""),
      }));
    }
  }, []);

  const validateSocialUsernames = () => {
    const socialPatterns = {
      0: /^[a-zA-Z0-9._]{1,30}$/, 
      1: /^[a-zA-Z0-9-]{3,100}$/, 
      2: /^[a-zA-Z0-9_]{5,32}$/, 
      3: /^(\+98|0)?9\d{9}$/, 
    };

    const socialNames = ["اینستاگرام", "لینکدین", "تلگرام", "واتساپ"];

    for (let i = 0; i < formData.socials.length; i++) {
      if (formData.socials[i] && !socialPatterns[i].test(formData.socials[i])) {
        swalAlert(
          `مقدار وارد شده برای ${socialNames[i]} معتبر نیست`,
          "error",
          "فهمیدم"
        );
        return false;
      }
    }
    return true;
  };

  // create link social-media
  const buildSocialLinks = () => {
    return formData.socials
      .map((username, index) => {
        if (!username) return null;

        switch (index) {
          case 0: 
            return `https://instagram.com/${username.replace(/^@/, "")}`;
          case 1: 
            return `https://linkedin.com/in/${username}`;
          case 2:
            return username.startsWith("@")
              ? `https://t.me/${username.substring(1)}`
              : `https://t.me/${username}`;
          case 3: 
            return `https://wa.me/${username
              .replace(/^0/, "98")
              .replace(/^\+/, "")}`;
          default:
            return null;
        }
      })
      .filter((social) => social !== null);
  };

  const saveBasicInfo = () => {
    const {
      firstName,
      lastName,
      phone,
      email,
      birthDay,
      age,
      sex,
      img,
      description,
    } = formData;
    const basicInfo = {
      firstName,
      lastName,
      phone,
      email,
      birthDay,
      age,
      sex,
      img,
      description,
    };
    saveToLocalStorage("consultantBasicInfo", basicInfo);
    toastSuccess("اطلاعات اولیه با موفقیت ذخیره شد", "top-center");
  };

  const cancelBasicInfo = () => {
    removeFromLocalStorage("consultantBasicInfo");
    setFormData((prev) => ({
      ...prev,
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      birthDay: "",
      age: "",
      sex: "",
      img: null,
      description: "",
    }));
    toastSuccess("اطلاعات اولیه حذف شد", "top-center");
  };

  const saveAccountInfo = () => {
    const { agencyID, hisCode, password } = formData;
    const accountInfo = { agencyID, hisCode, password };
    saveToLocalStorage("consultantAccountInfo", accountInfo);
    toastSuccess("اطلاعات حساب کاربری با موفقیت ذخیره شد", "top-center");
  };

  const cancelAccountInfo = () => {
    removeFromLocalStorage("consultantAccountInfo");
    setFormData((prev) => ({
      ...prev,
      hisCode: "",
      password: "",
      repeatPassword: "",
      agencyID: "",
    }));
    toastSuccess("اطلاعات حساب کاربری حذف شد", "top-center");
  };

  const saveSocialInfo = () => {
    if (!validateSocialUsernames()) return;

    const socialInfo = {
      socials: formData.socials,
    };
    saveToLocalStorage("consultantSocialInfo", socialInfo);
    toastSuccess("اطلاعات شبکه‌های اجتماعی با موفقیت ذخیره شد", "top-center");
  };

  const cancelSocialInfo = () => {
    removeFromLocalStorage("consultantSocialInfo");
    setFormData((prev) => ({
      ...prev,
      socials: Array(4).fill(""),
    }));
    toastSuccess("اطلاعات شبکه‌های اجتماعی حذف شد", "top-center");
  };

  const addPerson = async () => {
    const {
      firstName,
      lastName,
      hisCode,
      agencyID,
      phone,
      birthDay,
      age,
      sex,
      email,
      img,
      password,
      description,
      repeatPassword,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !hisCode ||
      !agencyID ||
      !phone ||
      !birthDay ||
      !age ||
      !sex ||
      !email ||
      !img ||
      !password ||
      !description
    ) {
      setIsLoading(false);
      return swalAlert("لطفا تمامی موارد را پرکنید", "error", "فهمیدم");
    }

    const isValidPhone = validatePhone(phone);
    if (!isValidPhone) {
      setIsLoading(false);
      return swalAlert("شماره تلفن معتبر نیست", "error", "فهمیدم");
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setIsLoading(false);
      return swalAlert("ایمیل وارد شده معتبر نیست", "error", "فهمیدم");
    }

    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      setIsLoading(false);
      return swalAlert(
        "رمزعبور باید حداقل از هشت کاراکتر و حروف کوچک و عدد و یک نماد و حرف بزرگ تشکیل شده باشد",
        "error",
        "فهمیدم"
      );
    }

    if (password !== repeatPassword) {
      setIsLoading(false);
      return swalAlert(
        "تکرار کلمه عبور اشتباه وارد شده است",
        "error",
        "فهمیدم"
      );
    }

    if (!validateSocialUsernames()) {
      setIsLoading(false);
      return;
    }

    const formattedSocials = buildSocialLinks();

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", firstName);
    formDataToSend.append("lastName", lastName);
    formDataToSend.append("hisCode", hisCode);
    formDataToSend.append("agencyID", agencyID);
    formDataToSend.append("phone", phone);
    formDataToSend.append("birthDay", birthDay);
    formDataToSend.append("age", age);
    formDataToSend.append("sex", sex);
    formDataToSend.append("email", email);
    formDataToSend.append("description", description);
    formDataToSend.append("password", password);

    if (img instanceof File) {
      formDataToSend.append("img", img);
    }

    formattedSocials.forEach((social) => {
      formDataToSend.append("socials", social);
    });

    try {
      setIsLoading(true);
      const res = await fetch("/api/consultants", {
        method: "POST",
        body: formDataToSend,
      });

      if (res.status === 201) {
        cancelAccountInfo();
        cancelBasicInfo();
        cancelSocialInfo();
        setIsLoading(false);
        toastSuccess(
          "ثبت نام مشاور با موفقیت انجام شد",
          "top-center",
          5000,
          false,
          true,
          true,
          true,
          undefined,
          "colored"
        );
        router.replace("/allConsultants");
      } else if (res.status === 400) {
        const errorData = await res.json();
        setIsLoading(false);
        toastError(
          errorData.message || "لطفا تمامی موارد را ارسال نمایید",
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
        setIsLoading(false);
        toastError(
          "شماره تلفن/ایمیل باید فرمت معتبر و رمزعبور حداقل از 8 کاراکتر نماد و حرف بزرگ و کوچک و نماد تشکیل شده باشد",
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
        setIsLoading(false);
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
    } catch (error) {
      setIsLoading(false);
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
    }
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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.contentWrapper}>
          <div className={styles.containerFull}>
            <section className={styles.contentSection}>
              <div className={styles.formRow}>
                <div className={styles.fullWidthColumn}>
                  <div className={styles.formBox}>
                    <div className={styles.boxHeader}>
                      <h4 className={styles.boxTitle}>اطلاعات اولیه</h4>
                    </div>

                    <div className={styles.boxBody}>
                      <div className={styles.responsiveRow}>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>نام</label>
                            <input
                              type="text"
                              name="firstName"
                              className={styles.formControl}
                              placeholder="نام را وارد کنید"
                              value={formData.firstName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>فامیلی</label>
                            <input
                              type="text"
                              name="lastName"
                              className={styles.formControl}
                              placeholder="فامیلی را وارد کنید"
                              value={formData.lastName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className={styles.responsiveRow}>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>تلفن</label>
                            <input
                              type="text"
                              name="phone"
                              className={styles.formControl}
                              placeholder="شماره تلفن را وارد کنید"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>ایمیل</label>
                            <input
                              type="text"
                              name="email"
                              className={styles.formControl}
                              placeholder="آدرس ایمیل را وارد کنید"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className={styles.responsiveRow}>
                        <div className={styles.responsiveCol}>
                          <div
                            className={`${styles.formGroup} ${styles.datePickerContainer}`}
                            onClick={notifWarn}
                          >
                            <label className={styles.inputLabel}>
                              تاریخ تولد
                            </label>
                            <DatePicker
                              inputClass="rmdp-input"
                              placeholder="تاریخ را انتخاب کنید"
                              value={formData.birthDay}
                              onChange={handleDateChange}
                              calendar={persian}
                              locale={persian_fa}
                              calendarPosition="bottom-right"
                              render={<input className="rmdp-input" />}
                              containerClassName="custom-rmdp-container"
                            />
                          </div>
                        </div>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>سن</label>
                            <input
                              type="number"
                              name="age"
                              className={styles.formControl}
                              placeholder="میزان سابقه کاری خود را وارد نمایید"
                              value={formData.age}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className={styles.responsiveRow}>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>جنسیت</label>
                            <select
                              className={`${styles.formSelect} select2 Anjoman_Regular `}
                              name="sex"
                              value={formData.sex}
                              onChange={handleChange}
                            >
                              <option value="">انتخاب کنید</option>
                              <option value="male">مرد</option>
                              <option value="female">زن</option>
                            </select>
                          </div>
                        </div>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>
                              آپلود تصویر
                            </label>
                            <div className={styles.fileUploadWrapper}>
                              <input
                                type="file"
                                className={styles.fileInput}
                                id="profileImage"
                                onChange={handleFileChange}
                              />
                              <label
                                htmlFor="profileImage"
                                className={styles.fileLabel}
                              >
                                <FaCloudUploadAlt
                                  className={`mdi mdi-upload ${styles.uploadIcon}`}
                                />
                                <span>انتخاب فایل</span>
                              </label>
                              {formData.img && (
                                <span className={styles.fileName}>
                                  {formData.img.name || "فایل انتخاب شده"}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.inputLabel}>توضیحات</label>
                        <textarea
                          rows={4}
                          name="description"
                          className={`${styles.formTextarea} Anjoman_Regular`}
                          placeholder="توضیحات اضافه را وارد کنید"
                          value={formData.description}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>

                    <div className={styles.boxFooter}>
                      <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={cancelBasicInfo}
                      >
                        لغو
                      </button>
                      <button
                        type="submit"
                        className={styles.submitButton}
                        onClick={saveBasicInfo}
                      >
                        ذخیره اطلاعات
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.halfWidthColumn}>
                  <div className={styles.formBox}>
                    <div className={styles.boxHeader}>
                      <h4 className={styles.boxTitle}>اطلاعات حساب کاربری</h4>
                    </div>

                    <div className={styles.boxBody}>
                      <div className={styles.responsiveRow}>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>
                              شناسه صنفی{" "}
                            </label>
                            <input
                              type="text"
                              name="agencyID"
                              className={styles.formControl}
                              placeholder="شناسه صنفی"
                              value={formData.agencyID}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>
                              کد مشاور
                            </label>
                            <input
                              type="text"
                              name="hisCode"
                              className={styles.formControl}
                              placeholder="کدمشاور را وارد کنید"
                              value={formData.hisCode}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className={styles.responsiveRow}>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>
                              کلمه عبور
                            </label>
                            <input
                              type="password"
                              name="password"
                              className={styles.formControl}
                              placeholder="کلمه عبور را وارد کنید"
                              value={formData.password}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>
                              تکرار کلمه عبور
                            </label>
                            <input
                              type="password"
                              name="repeatPassword"
                              className={styles.formControl}
                              placeholder="لطفا کلمه عبور خود را تکرار کنید"
                              value={formData.repeatPassword}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.boxFooter}>
                      <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={cancelAccountInfo}
                      >
                        لغو
                      </button>
                      <button
                        type="submit"
                        className={styles.submitButton}
                        onClick={saveAccountInfo}
                      >
                        ذخیره اطلاعات
                      </button>
                    </div>
                  </div>
                </div>

                <div className={styles.halfWidthColumn}>
                  <div className={styles.formBox}>
                    <div className={styles.boxHeader}>
                      <h4 className={styles.boxTitle}>شبکه‌های اجتماعی</h4>
                    </div>

                    <div className={styles.boxBody}>
                      <div className={styles.responsiveRow}>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>
                              اینستاگرام
                            </label>
                            <input
                              type="text"
                              className={styles.formControl}
                              placeholder="نام کاربری اینستاگرام (مثال: username)"
                              value={formData.socials[0] || ""}
                              onChange={(e) =>
                                handleSocialChange(0, e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>لینکدین</label>
                            <input
                              type="text"
                              className={styles.formControl}
                              placeholder="شناسه پروفایل لینکدین (مثال: username)"
                              value={formData.socials[1] || ""}
                              onChange={(e) =>
                                handleSocialChange(1, e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className={styles.responsiveRow}>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>تلگرام</label>
                            <input
                              type="text"
                              className={styles.formControl}
                              placeholder="آیدی تلگرام (مثال: username یا @username)"
                              value={formData.socials[2] || ""}
                              onChange={(e) =>
                                handleSocialChange(2, e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>واتساپ</label>
                            <input
                              type="text"
                              className={styles.formControl}
                              placeholder="شماره واتساپ (مثال: 09123456789)"
                              value={formData.socials[3] || ""}
                              onChange={(e) =>
                                handleSocialChange(3, e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.boxFooter}>
                      <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={cancelSocialInfo}
                      >
                        لغو
                      </button>
                      <button
                        type="submit"
                        className={styles.submitButton}
                        onClick={saveSocialInfo}
                      >
                        ذخیره اطلاعات
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setIsLoading(true);
                          addPerson();
                        }}
                        type="submit"
                        className={styles.submitButton}
                      >
                        ارسال نهایی
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default AddConsultantForm;
