"use client";
import React, { useState } from "react";
import styles from "../../../consultantDetails/editConsultantInfo/EditConsultantInfo.module.css";
import { FaCloudUploadAlt, FaPaperPlane } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { validateEmail, validatePassword, validatePhone } from "@/utils/auth";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Loading from "@/app/loading";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

function EditUserInfo({ user }) {
  const router = useRouter();
  const [name, setName] = useState(user?.name);
  const [guildID, setGuildID] = useState(user?.guildID);
  const [email, setEmail] = useState(user?.email);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>

                {/* فیلد نام خانوادگی */}
                <div className={styles.formGroup}>
                  <label htmlFor="inputName" className={styles.controlLabel}>
                    شناسه صنفی جدید (برای ورود به املاکی دیگر)
                  </label>
                  <input
                    type="text"
                    className={styles.formControl}
                    id="inputName"
                    placeholder=""
                    value={guildID}
                    onChange={(event) => setGuildID(event.target.value)}
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

                {/* فیلد رمز عبور */}
                <div className={styles.formGroup}>
                  <label htmlFor="inputPhone" className={styles.controlLabel}>
                    پسورد
                  </label>
                  <div className={styles.passwordInputContainer}>
                    <input
                      type={showPassword ? "text" : "password"}
                      className={styles.formControl}
                      id="inputPhone"
                      placeholder=""
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <span
                      className={styles.passwordToggle}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <IoEyeOffSharp className={styles.eyeIcon} />
                      ) : (
                        <IoEyeSharp className={styles.eyeIcon} />
                      )}
                    </span>
                  </div>
                </div>

                {/* دکمه ارسال */}
                <div className={styles.submitGroup}>
                  <button
                    type="submit"
                    onClick={(event) => {
                      event.preventDefault();
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
        </>
      )}
    </>
  );
}

export default EditUserInfo;
