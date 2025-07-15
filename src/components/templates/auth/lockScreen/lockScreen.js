"use client";
import styles from "./lockScreen.module.css";
import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { swalAlert, toastSuccess } from "@/utils/alerts";

function LockScreen() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toastSuccess(
        "ورود با موفقیت انجام شد",
        "top-center",
        3000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
      setPassword("");
    }, 1500);
  };

  return (
    <div className={styles.lockContainer}>
      <div className={styles.lockCard}>
        {/* User Profile Section */}
        <div className={styles.userProfile}>
          <img
            src="/images/abstract-user-flat-4.svg"
            alt="User Image"
            className={styles.userAvatar}
          />
          <h3 className={`${styles.userName} Anjoman_Bold`}>مختار مینائی</h3>
        </div>

        {/* Lock Form */}
        <div className={styles.lockForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="password"
                className={styles.inputField}
                placeholder="رمز عبور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className={styles.inputIcon}>
                <RiLockPasswordFill className={styles.iconLock} />
              </span>
            </div>

            <button
              type="submit"
              className={`${styles.submitButton} Anjoman_Medium`}
              disabled={isLoading}
            >
              {isLoading ? "در حال بررسی..." : "ورود"}
            </button>
          </form>

          {/* Divider */}
          <div className={styles.divider}>
            <span className={`${styles.dividerText} Anjoman_Regular`}>یا</span>
          </div>

          {/* Alternative Options */}
          <div className={styles.alternateOptions}>
            <p className={`${styles.optionText} Anjoman_Regular`}>رمز عبورتان را وارد کنید</p>
            <p className={`${styles.loginLink} Anjoman_Regular`}>
              یا{" "}
              <a href="/login" className={styles.alternateLink}>
                <b>ورود</b>
              </a>{" "}
              بعنوان کاربر جدید
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LockScreen;
