"use client";
import { useRouter } from "next/navigation";
import styles from "./register.module.css";
import { useState } from "react";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail, validatePassword } from "@/utils/auth";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [guildID, setGuildID] = useState("");
  const [isReadRules, setIsReadRules] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async () => {
    if (!isReadRules) {
      setIsLoading(false);
      return swalAlert(
        "لطفا شرایط و قوانین را مطالعه فرمایید",
        "error",
        "فهمیدم"
      );
    }

    if (!name.trim()) {
      setIsLoading(false);
      return swalAlert("نام نمی تواند خالی باشد", "error", "تلاش مجدد");
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setIsLoading(false);
      return swalAlert("ایمیل نامعتبر است", "error", "تلاش مجدد");
    }

    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      setIsLoading(false);
      return swalAlert(
        "رمز عبور نا معتبر است.رمز عبور باید شامل حداقل یک کاراکتر،یک حرف بزرگ و حرف کوچک و عدد باشد",
        "error",
        "تلاش مجدد"
      );
    }

  const userData = guildID 
    ? { name, email, password, guildID }
    : { name, email, password };


    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    console.log("register =>>> ",res);
    

    if (res.status === 201) {
      setName("");
      setGuildID("");
      setEmail("");
      setPassword("");
      setIsLoading(false);
      toastSuccess(
        "ثبت نام با موفقیت انجام شد",
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
      setName("");
      setGuildID("");
      setEmail("");
      setPassword("");
      setIsLoading(false);
      toastError(
        "نام / ایمیل شما قبلا ثبت شده است لطفا دوباره اقدام کنید",
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
      setName("");
      setEmail("");
      setGuildID("");
      setPassword("");
      setIsLoading(false);
      toastError(
        "شماره تلفن/ایمیل باید فرمت معتبر و رمزعبور حداقل از 8 کاراکتر نماد و حرف بزرگ و کوچک و  نماد تشکیل شده باشد",
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
      setName("");
      setEmail("");
      setGuildID("");
      setPassword("");
      setIsLoading(false);
      toastError(
        "خطا در سرور ، لطفا بعدا تلاش کنید",
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
      <div className={`${styles.registerContainer} register-bg`}>
        {/* Registration Card */}
        <div className={styles.registerCard}>
          {/* Header */}
          <div className={styles.registerHeader}>
            <h2 className={`${styles.registerTitle} Anjoman_Bold`}>
              با ما شروع کن
            </h2>
            <p className={`${styles.registerSubtitle} Anjoman_Regular`}>
              عضوی از ما شو
            </p>
          </div>

          {/* Registration Form */}
          <div className={styles.registerForm}>
            <form method="post" action="/api/register">
              {/* Full Name Field */}
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="نام و فامیلی"
                  name="fullname"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <span className={styles.inputIcon}>
                  <i className="ti-user"></i>
                </span>
              </div>

              {/* Email Field */}
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  className={styles.inputField}
                  placeholder="ایمیل"
                  name="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <span className={styles.inputIcon}>
                  <i className="ti-email"></i>
                </span>
              </div>

              {/* Password Field */}
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="شناسه صنفی (در صورت مدیر املاک)"
                  name="guildID"
                  required
                  min={6}
                  minLength={6}
                  value={guildID}
                  onChange={(event) => setGuildID(event.target.value)}
                />
                <span className={styles.inputIcon}>
                  <i className="ti-lock"></i>
                </span>
              </div>

              {/* Confirm Password Field */}
              <div className={styles.inputGroup}>
                <input
                  type="password"
                  className={styles.inputField}
                  placeholder="رمز عبور"
                  name="Password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <span className={styles.inputIcon}>
                  <i className="ti-lock"></i>
                </span>
              </div>

              {/* Terms Checkbox */}
              <label className={styles.termsCheckbox}>
                <input
                  type="checkbox"
                  name="terms"
                  required
                  checked={isReadRules}
                  onChange={() => setIsReadRules((prevValue) => !prevValue)}
                />
                <span className={styles.checkmark}></span>
                <span className={`${styles.termsLabel} Anjoman_Regular`}>
                  با{" "}
                  <a
                    href="/terms"
                    className={`${styles.termsLink} Anjoman_Medium`}
                  >
                    قوانین و شرایط
                  </a>{" "}
                  موافقم
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className={`${styles.submitButton} Anjoman_Medium`}
                onClick={(event) => {
                  event.preventDefault();
                  setIsLoading(true);
                  registerUser();
                }}
              >
                ثبت نام
              </button>
            </form>

            {/* Login Link */}
            <div className={`${styles.loginLink} Anjoman_Regular`}>
              حساب کاربری دارید؟{" "}
              <a href="/login" className="Anjoman_Medium">
                وارد شوید
              </a>
            </div>
          </div>
        </div>

        {/* Social Login Section */}
        <div className={styles.socialLogin}>
          <div className={styles.socialTitleContainer}>
            <div className={`${styles.socialTitle} Anjoman_Regular`}>
              یا با روش های زیر ثبت نام کنید
            </div>
          </div>

          <div className={styles.socialButtons}>
            <a
              href="/auth/facebook"
              className={`${styles.socialButton} ${styles.facebookButton} Anjoman_Medium`}
            >
              <i className="fab fa-facebook-f"></i>
              ثبت نام با فیسبوک
            </a>

            <a
              href="/auth/twitter"
              className={`${styles.socialButton} ${styles.twitterButton} Anjoman_Medium`}
            >
              <i className="fab fa-twitter"></i>
              ثبت نام با توییتر
            </a>

            <a
              href="/auth/instagram"
              className={`${styles.socialButton} ${styles.instagramButton} Anjoman_Medium`}
            >
              <i className="fab fa-instagram"></i>
              ثبت نام با اینستاگرام
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
