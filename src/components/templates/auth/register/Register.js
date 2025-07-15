"use client";
import { useRouter } from "next/navigation";
import styles from "./register.module.css";
import { useState } from "react";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail, validatePassword } from "@/utils/auth";
import { FaUserAlt, FaIdCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";
import Loading from "@/app/loading";

export default function Register() {
  const router = useRouter();

  /* --------- state --------- */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [guildID, setGuildID] = useState("");
  const [isReadRules, setIsReadRules] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* --------- helpers --------- */
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
    if (!validateEmail(email)) {
      setIsLoading(false);
      return swalAlert("ایمیل نامعتبر است", "error", "تلاش مجدد");
    }
    if (!validatePassword(password)) {
      setIsLoading(false);
      return swalAlert(
        "رمز عبور نامعتبر است. رمز عبور باید شامل حداقل یک کاراکتر، یک حرف بزرگ، یک حرف کوچک و عدد باشد",
        "error",
        "تلاش مجدد"
      );
    }

    const userData = guildID
      ? { name, email, password, guildID }
      : { name, email, password };
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

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
      setGuildID("");
      setEmail("");
      setPassword("");
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
      setName("");
      setGuildID("");
      setEmail("");
      setPassword("");
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

  /* ------------------------------------------------------------------ */
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={`${styles.registerContainer} register-bg`}>
          {/* ---------- Card ---------- */}
          <div className={styles.registerCard}>
            <div className={styles.registerHeader}>
              <h2 className={`${styles.registerTitle} Anjoman_Bold`}>
                با ما شروع کن
              </h2>
              <p className={`${styles.registerSubtitle} Anjoman_Regular`}>
                عضوی از ما شو
              </p>
            </div>

            {/* ---------- Form ---------- */}
            <div className={styles.registerForm}>
              <form method="post" action="/api/register">
                {/* Full Name */}
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    className={styles.inputField}
                    placeholder="نام و فامیلی"
                    name="fullname"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span className={styles.inputIcon}>
                    <FaUserAlt className={styles.iconUser} />
                  </span>
                </div>

                {/* Email */}
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    className={styles.inputField}
                    placeholder="ایمیل"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className={styles.inputIcon}>
                    <MdEmail className={styles.iconEmail} />
                  </span>
                </div>

                {/* Guild ID */}
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
                    onChange={(e) => setGuildID(e.target.value)}
                  />
                  <span className={styles.inputIcon}>
                    <FaIdCard className={styles.iconGuild} />
                  </span>
                </div>

                {/* Password */}
                <div className={styles.inputGroup}>
                  <input
                    type="password"
                    className={styles.inputField}
                    placeholder="رمز عبور"
                    name="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className={styles.inputIcon}>
                    <RiLockPasswordFill className={styles.iconPassword} />
                  </span>
                </div>

                {/* Terms */}
                <label className={styles.termsCheckbox}>
                  <input
                    type="checkbox"
                    name="terms"
                    required
                    checked={isReadRules}
                    onChange={() => setIsReadRules((prev) => !prev)}
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

                {/* Submit */}
                <button
                  type="submit"
                  className={`${styles.submitButton} Anjoman_Medium`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLoading(true);
                    registerUser();
                  }}
                >
                  {"ثبت نام"}
                </button>
              </form>

              {/* Login Link */}
              <div className={`${styles.loginLink} Anjoman_Regular`}>
                حساب کاربری دارید؟{" "}
                <Link href={"/login"} className="Anjoman_Medium">
                  وارد شوید
                </Link>
              </div>
            </div>
          </div>

          {/* ---------- Social ---------- */}
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
                <i className="fab fa-facebook-f"></i> ثبت نام با فیسبوک
              </a>
              <a
                href="/auth/twitter"
                className={`${styles.socialButton} ${styles.twitterButton} Anjoman_Medium`}
              >
                <i className="fab fa-twitter"></i> ثبت نام با توییتر
              </a>
              <a
                href="/auth/instagram"
                className={`${styles.socialButton} ${styles.instagramButton} Anjoman_Medium`}
              >
                <i className="fab fa-instagram"></i> ثبت نام با اینستاگرام
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
