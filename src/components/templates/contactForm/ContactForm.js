"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Loading from "@/app/loading";
import { FaPaperPlane } from "react-icons/fa";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail, validatePhone } from "@/utils/auth";
import { useRouter } from "next/navigation";

function ContactForm({ user }) {
  const router = useRouter();
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!name || !description || !email) {
      setIsLoading(false);
      return swalAlert(
        "لطفا اطلاعات ایمیل و نام و متن پیام خود را وارد کنید",
        "error",
        "فهمیدم"
      );
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setIsLoading(false);
      return swalAlert("ایمیل معتبر نیست.", "error", "فهمیدم");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("description", description);

    if (img) {
      formData.append("img", img);
    }

    if (phone) {
      const isValidPhone = validatePhone(phone);
      if (!isValidPhone) {
        setIsLoading(false);
        return swalAlert("شماره تلفن معتبر نیست.", "error", "فهمیدم");
      }
      formData.append("phone", phone);
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (res.status === 201) {
      setIsLoading(false);
      setName("");
      setPhone("");
      setImg("");
      setEmail("");
      setDescription("");
      toastSuccess(
        "پیام شما با موفقیت ارسال شد ، در اسرع وقت به پیام شما پاسخ خواهیم داد",
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
    } else if (res.status === 400) {
      setIsLoading(false);
      toastError(
        "لطفا نام ، ایمیل و پیام خود را ارسال نمایید",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 401) {
      setIsLoading(false);
      toastError(
        "لطفا جهت ارسال پیام وارد شوید",
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
    } else if (res.status === 422) {
      setIsLoading(false);
      toastError(
        "شماره تلفن / ایمیل وارد شده معتبر نیست",
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
                          <div className={styles.col12}>
                            <div className={styles.formGroup}>
                              <label className={styles.formLabel}>نام</label>
                              <input
                                type="text"
                                className={styles.formControl}
                                placeholder="نام"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className={styles.col6}>
                            <div className={styles.formGroup}>
                              <label className={styles.formLabel}>
                                شماره تماس (اختیاری)
                              </label>
                              <input
                                type="text"
                                className={styles.formControl}
                                placeholder="تلفن"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <h5 className={styles.sectionTitle}>
                          <i className={`ti-file ${styles.icon}`} /> جزئیات
                          بیشتری ارائه دهید
                        </h5>
                        <hr className={styles.divider} />

                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>
                            انتخاب فایل
                          </label>
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
                              onChange={(e) => setImg(e.target.files[0])}
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
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className={styles.boxFooter}>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            setIsLoading(true);
                            sendMessage();
                          }}
                          type="submit"
                          className={styles.submitButton}
                        >
                          <FaPaperPlane
                            className={`fa fa-paper-plane ${styles.icon}`}
                          />{" "}
                          ارسال
                        </button>
                      </div>
                    </form>
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

export default ContactForm;
