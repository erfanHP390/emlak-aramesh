"use client";
import React, { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import Loading from "@/app/loading";
import {  FaFile, FaPaperPlane, FaUpload, FaUser } from "react-icons/fa";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail, validatePhone } from "@/utils/auth";
import { useRouter } from "next/navigation";

function ContactForm({ user }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    img: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, img: file }));
      setFileName(file.name);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { name, email, description, phone } = formData;

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

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("email", email);
    formDataToSend.append("description", description);

    if (formData.img) {
      formDataToSend.append("img", formData.img);
    }

    if (phone) {
      const isValidPhone = validatePhone(phone);
      if (!isValidPhone) {
        setIsLoading(false);
        return swalAlert("شماره تلفن معتبر نیست.", "error", "فهمیدم");
      }
      formDataToSend.append("phone", phone);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      if (res.status === 201) {
        setFormData({
          name: user?.name || "",
          email: user?.email || "",
          phone: "",
          description: "",
          img: null,
        });
        setFileName("");
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
      console.error("Error sending message:", error);
      toastError(
        "خطا در ارسال پیام، لطفا مجددا تلاش کنید",
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

  if (isLoading) return <Loading />;

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

                <form className={styles.form} onSubmit={sendMessage}>
                  <div className={styles.boxBody}>
                    <h5 className={styles.sectionTitle}>
                      <FaUser className={`ti-user ${styles.icon}`} />
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
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <h5 className={styles.sectionTitle}>
                      <FaFile className={`ti-file ${styles.icon}`} /> جزئیات بیشتری
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
                            <FaUpload className={`ti-cloud-up ${styles.icon}`} />
                          </span>
                          <span className={styles.fileUploadText}>
                            فایل خود را انتخاب یا اینجا رها کنید
                          </span>
                        </label>
                        <input
                          type="file"
                          id="file"
                          className={styles.fileUploadInput}
                          onChange={handleFileChange}
                        />
                        {fileName && (
                          <div className={styles.fileUploadPreview}>
                            {fileName}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>پیام</label>
                      <textarea
                        rows={5}
                        className={styles.formControl}
                        placeholder="توضیحات را بنویسید"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.boxFooter}>
                    <button
                      type="submit"
                      className={styles.submitButton}
                      disabled={isLoading}
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
  );
}

export default ContactForm;
