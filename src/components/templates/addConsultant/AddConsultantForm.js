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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [agencyID, setAgencyID] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [socials, setSocials] = useState([]);
  const [hisCode, setHisCode] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // توابع مدیریت localStorage
  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const loadFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  // بارگذاری اطلاعات از localStorage هنگام لود کامپوننت
  useEffect(() => {
    const loadBasicInfo = loadFromLocalStorage("consultantBasicInfo");
    if (loadBasicInfo) {
      setFirstName(loadBasicInfo.firstName || "");
      setLastName(loadBasicInfo.lastName || "");
      setPhone(loadBasicInfo.phone || "");
      setEmail(loadBasicInfo.email || "");
      setBirthDay(loadBasicInfo.birthDay || "");
      setAge(loadBasicInfo.age || "");
      setSex(loadBasicInfo.sex || "");
      setImg(loadBasicInfo.img || "");
      setDescription(loadBasicInfo.description || "");
    }

    const loadAccountInfo = loadFromLocalStorage("consultantAccountInfo");
    if (loadAccountInfo) {
      setHisCode(loadAccountInfo.hisCode || "");
      setPassword(loadAccountInfo.password || "");
      setAgencyID(loadAccountInfo.agencyID || "");
    }

    const loadSocialInfo = loadFromLocalStorage("consultantSocialInfo");
    if (loadSocialInfo) {
      setSocials(loadSocialInfo.socials || []);
    }
  }, []);

  // اعتبارسنجی نام کاربری/آیدی شبکه‌های اجتماعی
  const validateSocialUsernames = () => {
    const socialPatterns = {
      0: /^[a-zA-Z0-9._]{1,30}$/, // اینستاگرام
      1: /^[a-zA-Z0-9-]{3,100}$/, // لینکدین
      2: /^[a-zA-Z0-9_]{5,32}$/, // تلگرام
      3: /^(\+98|0)?9\d{9}$/, // واتساپ
    };

    const socialNames = ["اینستاگرام", "لینکدین", "تلگرام", "واتساپ"];

    for (let i = 0; i < socials.length; i++) {
      if (socials[i] && !socialPatterns[i].test(socials[i])) {
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

  // ساخت لینک کامل برای شبکه‌های اجتماعی
  const buildSocialLinks = () => {
    return socials.map((username, index) => {
      if (!username) return "";

      switch (index) {
        case 0: // اینستاگرام
          return `https://instagram.com/${username.replace(/^@/, "")}`;
        case 1: // لینکدین
          return `https://linkedin.com/in/${username}`;
        case 2: // تلگرام
          return username.startsWith("@")
            ? `https://t.me/${username.substring(1)}`
            : `https://t.me/${username}`;
        case 3: // واتساپ
          return `https://wa.me/${username
            .replace(/^0/, "98")
            .replace(/^\+/, "")}`;
        default:
          return username;
      }
    });
  };

  // ذخیره اطلاعات اولیه
  const saveBasicInfo = () => {
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

  // حذف اطلاعات اولیه
  const cancelBasicInfo = () => {
    removeFromLocalStorage("consultantBasicInfo");
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setBirthDay("");
    setAge("");
    setSex("");
    setImg("");
    setDescription("");
    toastSuccess("اطلاعات اولیه حذف شد", "top-center");
  };

  // ذخیره اطلاعات حساب کاربری
  const saveAccountInfo = () => {
    const accountInfo = {
      agencyID,
      hisCode,
      password,
    };
    saveToLocalStorage("consultantAccountInfo", accountInfo);
    toastSuccess("اطلاعات حساب کاربری با موفقیت ذخیره شد", "top-center");
  };

  // حذف اطلاعات حساب کاربری
  const cancelAccountInfo = () => {
    removeFromLocalStorage("consultantAccountInfo");
    setHisCode("");
    setPassword("");
    setAgencyID("");
    toastSuccess("اطلاعات حساب کاربری حذف شد", "top-center");
  };

  // ذخیره اطلاعات شبکه‌های اجتماعی
  const saveSocialInfo = () => {
    if (!validateSocialUsernames()) return;

    const socialInfo = {
      socials,
    };
    saveToLocalStorage("consultantSocialInfo", socialInfo);
    toastSuccess("اطلاعات شبکه‌های اجتماعی با موفقیت ذخیره شد", "top-center");
  };

  // حذف اطلاعات شبکه‌های اجتماعی
  const cancelSocialInfo = () => {
    removeFromLocalStorage("consultantSocialInfo");
    setSocials([]);
    toastSuccess("اطلاعات شبکه‌های اجتماعی حذف شد", "top-center");
  };

  const addPerson = async () => {
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

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("hisCode", hisCode);
    formData.append("agencyID", agencyID);
    formData.append("phone", phone);
    formData.append("birthDay", birthDay);
    formData.append("age", age);
    formData.append("sex", sex);
    formData.append("email", email);
    formData.append("description" , description)
    formData.append("password", password);
    if (img instanceof File) {
      formData.append("img", img);
    }

    formattedSocials.forEach((social, index) => {
      if (social) {
        formData.append(`socials[${index}]`, social);
      }
    });

    // console.log(formData);
    

    const res = await fetch("/api/consultants", {
      method: "POST",
      body: formData,
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
      router.replace("/allConsultants")
    } else if (res.status === 400) {
      setIsLoading(false);
      toastError(
        "لطفا تمامی موارد را ارسال نمایید",
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
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.contentWrapper}>
          <div className={styles.containerFull}>
            <section className={styles.contentSection}>
              {/* فرم اطلاعات اولیه */}
              <div className={styles.formRow}>
                <div className={styles.fullWidthColumn}>
                  <div className={styles.formBox}>
                    <div className={styles.boxHeader}>
                      <h4 className={styles.boxTitle}>اطلاعات اولیه</h4>
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
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
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
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
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
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
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
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* ردیف سوم - دو فیلد */}
                      <div className={styles.responsiveRow}>
                        <div className={styles.responsiveCol}>
                          <div
                            className={`${styles.formGroup} ${styles.datePickerContainer}`}
                          >
                            <label className={styles.inputLabel}>
                              تاریخ تولد
                            </label>
                            <DatePicker
                              inputClass="rmdp-input"
                              placeholder="تاریخ را انتخاب کنید"
                              value={birthDay}
                              onChange={(date) =>
                                setBirthDay(date ? date.toString() : "")
                              }
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
                              type="text"
                              className={styles.formControl}
                              placeholder="سن را وارد کنید"
                              value={age}
                              onChange={(e) => setAge(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* ردیف چهارم - دو فیلد */}
                      <div className={styles.responsiveRow}>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>جنسیت</label>
                            <select
                              className={`${styles.formSelect} select2 Anjoman_Regular `}
                              value={sex}
                              onChange={(event) => setSex(event.target.value)}
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
                                onChange={(event) => {
                                  if (
                                    event.target.files &&
                                    event.target.files[0]
                                  ) {
                                    setImg(event.target.files[0]);
                                  }
                                }}
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
                              {img && (
                                <span className={styles.fileName}>
                                  {img.name || "فایل انتخاب نشده"}
                                </span>
                              )}
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
                          value={description}
                          onChange={(event) =>
                            setDescription(event.target.value)
                          }
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

              {/* بخش اطلاعات حساب کاربری */}
              <div className={styles.formRow}>
                <div className={styles.halfWidthColumn}>
                  <div className={styles.formBox}>
                    <div className={styles.boxHeader}>
                      <h4 className={styles.boxTitle}>اطلاعات حساب کاربری</h4>
                    </div>

                    <div className={styles.boxBody}>
                      {/* ردیف اول - دو فیلد */}
                      <div className={styles.responsiveRow}>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>
                              شناسه صنفی{" "}
                            </label>
                            <input
                              type="text"
                              className={styles.formControl}
                              placeholder="شناسه صنفی"
                              value={agencyID}
                              onChange={(event) =>
                                setAgencyID(event.target.value)
                              }
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
                              className={styles.formControl}
                              placeholder="کدمشاور را وارد کنید"
                              value={hisCode}
                              onChange={(event) =>
                                setHisCode(event.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* ردیف دوم - دو فیلد */}
                      <div className={styles.responsiveRow}>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>
                              کلمه عبور
                            </label>
                            <input
                              type="password"
                              className={styles.formControl}
                              placeholder="کلمه عبور را وارد کنید"
                              value={password}
                              onChange={(event) =>
                                setPassword(event.target.value)
                              }
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
                              className={styles.formControl}
                              placeholder="لطفا کلمه عبور خود را تکرار کنید"
                              value={repeatPassword}
                              onChange={(event) =>
                                setRepeatPassword(event.target.value)
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

                {/* بخش شبکه‌های اجتماعی */}
                <div className={styles.halfWidthColumn}>
                  <div className={styles.formBox}>
                    <div className={styles.boxHeader}>
                      <h4 className={styles.boxTitle}>شبکه‌های اجتماعی</h4>
                    </div>

                    <div className={styles.boxBody}>
                      {/* ردیف اول - دو فیلد */}
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
                              value={socials[0] || ""}
                              onChange={(e) => {
                                const newSocials = [...socials];
                                newSocials[0] = e.target.value;
                                setSocials(newSocials);
                              }}
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
                              value={socials[1] || ""}
                              onChange={(e) => {
                                const newSocials = [...socials];
                                newSocials[1] = e.target.value;
                                setSocials(newSocials);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* ردیف دوم - دو فیلد */}
                      <div className={styles.responsiveRow}>
                        <div className={styles.responsiveCol}>
                          <div className={styles.formGroup}>
                            <label className={styles.inputLabel}>تلگرام</label>
                            <input
                              type="text"
                              className={styles.formControl}
                              placeholder="آیدی تلگرام (مثال: username یا @username)"
                              value={socials[2] || ""}
                              onChange={(e) => {
                                const newSocials = [...socials];
                                newSocials[2] = e.target.value;
                                setSocials(newSocials);
                              }}
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
                              value={socials[3] || ""}
                              onChange={(e) => {
                                const newSocials = [...socials];
                                newSocials[3] = e.target.value;
                                setSocials(newSocials);
                              }}
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
                        onClick={(event) => {
                          event.preventDefault();
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
