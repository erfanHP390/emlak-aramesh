"use client";
import React, { useState } from "react";
import styles from "../HouseDetails.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail, validatePhone } from "@/utils/auth";
import Loading from "@/app/loading";

function ReqForm({ codeHouse, codeConsultant }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addRequestBuy = async () => {
    if (!name || !email || !phone || !description) {
      setIsLoading(false);
      return swalAlert("لطفا تمام اطلاعات را وارد نمایید", "error", "فهمیدم");
    }

    const isValidPhone = validatePhone(phone);
    if (!isValidPhone) {
      setIsLoading(false);
      return swalAlert("شماره تلفن وارد شده معتبر نیست", "error", "فهمیدم");
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setIsLoading(false);
      return swalAlert("ایمیل وارد شده معتبر نیست", "error", "فهمیدم");
    }

    const newReqBuyHouse = {
      name,
      phone,
      email,
      description,
      codeConsultant,
      codeHouse,
    };

    const res = await fetch("/api/reqBuy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReqBuyHouse),
    });

    if (res.status === 201) {
      setName("");
      setEmail("");
      setDescription("");
      setPhone("");
      setIsLoading(false);
      toastSuccess(
        "درخواست شما با موفقیت انجام شد",
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
        "تلفن / ایمیل وارد شده معتبر نیست",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 400) {
      setIsLoading(false);
      toastError(
        "لطفا تمامی اطلاعات را وارد نمایید",
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

  const clearFormData = () => {
    setName("")
    setPhone("")
    setEmail("")
    setDescription("")
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.box}>
          <div className={styles["box-header"]}>
            <h4 className={styles["box-title"]}>درخواست بازدید</h4>
          </div>
          <div className={styles["box-body"]}>
            <form className={styles["request-form"]}>
              <div className={styles["form-group"]}>
                <label className={styles.fix} htmlFor="name">
                  نام کامل
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles["form-control"]}
                  placeholder="نام و نام خانوادگی"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className={styles["form-group"]}>
                <label className={styles.fix} htmlFor="phone">
                  شماره تماس
                </label>
                <input
                  type="tel"
                  id="phone"
                  className={styles["form-control"]}
                  placeholder="09xxxxxxxxx"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className={styles["form-group"]}>
                <label className={styles.fix} htmlFor="email">
                  ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  className={styles["form-control"]}
                  placeholder="email@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className={styles["form-group"]}>
                <label className={styles.fix} htmlFor="message">
                  توضیحات
                </label>
                <textarea
                  id="message"
                  className={`${styles["form-control"]} ${styles["no-resize"]}`}
                  placeholder="زمان پیشنهادی و توضیحات دیگر"
                  rows="4"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
              <div className={styles["form-actions"]}>
                <button
                  type="submit"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsLoading(true);
                    addRequestBuy();
                  }}
                  className={`${styles.btn} ${styles["btn-primary"]}`}
                >
                  <FaCheckCircle
                    className={`${styles.ti} ${styles["ti-check"]}`}
                  />{" "}
                  ارسال درخواست
                </button>
                <button
                  type="reset"
                  onClick={() => clearFormData()}
                  className={`${styles.btn} ${styles["btn-secondary"]}`}
                >
                  <IoMdCloseCircle
                    className={`${styles.ti} ${styles["ti-close"]}`}
                  />{" "}
                  پاک کردن
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ReqForm;
