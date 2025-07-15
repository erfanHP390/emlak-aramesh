"use client";
import styles from "./ForgotPass.module.css";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import Link from "next/link";

function ForgotPass() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate email
    if (!email.trim()) {
      setIsLoading(false);
      return swalAlert("لطفا ایمیل خود را وارد کنید", "error", "تلاش مجدد");
    }

    // TODO: Add API call for password reset
    // This is just a simulation
    setTimeout(() => {
      setIsLoading(false);
      toastSuccess(
        "لینک بازیابی رمز عبور به ایمیل شما ارسال شد",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
      setEmail("");
    }, 1500);
  };

  return (
    <div className={styles.forgotContainer}>
      <div className={styles.forgotCard}>
        <div className={styles.forgotHeader}>
          <h3 className={`${styles.forgotTitle} Anjoman_Bold`}>
            بازیابی رمز عبور
          </h3>
          <p className={`${styles.forgotSubtitle} Anjoman_Regular`}>
            لطفا ایمیل خود را وارد کنید تا لینک بازیابی برای شما ارسال شود
          </p>
        </div>

        <div className={styles.forgotForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                className={styles.inputField}
                placeholder="ایمیل"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className={styles.inputIcon}>
                <FaEnvelope className={styles.iconEmail} />
              </span>
            </div>

            <button
              type="submit"
              className={`${styles.submitButton} Anjoman_Medium`}
              disabled={isLoading}
            >
              {isLoading ? "در حال ارسال..." : "بازیابی رمز عبور"}
            </button>
          </form>

          <div className={styles.backToLogin}>
            <Link href={"/login"} className="Anjoman_Medium">
              بازگشت به صفحه ورود
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
