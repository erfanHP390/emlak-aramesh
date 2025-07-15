"use client";
import { useRouter } from "next/navigation";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail, validatePassword } from "@/utils/auth";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";
import Loading from "@/app/loading";

export default function Login() {
  const router = useRouter();

  /* --------- state --------- */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* --------- helpers --------- */

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getUserInfoLogin = JSON.parse(localStorage.getItem("userLogin"));
      if (getUserInfoLogin) {
        setEmail(getUserInfoLogin.email);
        setPassword(getUserInfoLogin.password);
      }
    }
  }, []);

  const loginUser = async () => {
    if (!validateEmail(email)) {
      setIsLoading(false);
      return swalAlert("ایمیل نامعتبر است", "error", "تلاش مجدد");
    }

    const user = { email, password };

    if (rememberMe) {
      localStorage.setItem("userLogin", JSON.stringify(user));
    }

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (res.status === 200) {
      setEmail("");
      setPassword("");
      setIsLoading(false);
      toastSuccess(
        "ورود با موفقیت انجام شد",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
      router.push("/dashboard");
    } else if (res.status === 401) {
      setEmail("");
      setPassword("");
      setIsLoading(false);
      toastError(
        "ایمیل یا رمز عبور اشتباه است",
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
      setEmail("");
      setPassword("");
      setIsLoading(false);
      toastError(
        "لطفا اطلاعات مورد نیاز را کامل کنید",
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
      setEmail("");
      setPassword("");
      setIsLoading(false);
      toastError(
        "ایمیل معتبر وارد نمایید",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 404) {
      setEmail("");
      setPassword("");
      setIsLoading(false);
      toastError(
        "کاربر یافت نشد",
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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <div className={styles.loginContainer}>
            {/* ---------- Card ---------- */}
            <div className={styles.loginCard}>
              <div className={styles.loginHeader}>
                <h2 className={`${styles.loginTitle} Anjoman_Bold`}>
                  به ما خوش آمدید
                </h2>
                <p className={`${styles.loginSubtitle} Anjoman_Regular`}>
                  لطفا وارد حساب کاربری خود شوید
                </p>
              </div>

              {/* ---------- Form ---------- */}
              <div className={styles.loginForm}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsLoading(true);
                    loginUser();
                  }}
                >
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
                      <FaUserAlt className={styles.iconUser} />
                    </span>
                  </div>

                  {/* Password */}
                  <div className={styles.inputGroup}>
                    <input
                      type="password"
                      className={styles.inputField}
                      placeholder="رمز عبور"
                      name="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className={styles.inputIcon}>
                      <RiLockPasswordFill className={styles.iconPassword} />
                    </span>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className={styles.rememberContainer}>
                    <label className={styles.rememberCheckbox}>
                      <input
                        type="checkbox"
                        name="remember"
                        checked={rememberMe}
                        onChange={() => setRememberMe((prev) => !prev)}
                      />
                      <span className={styles.checkmark}></span>
                      <span
                        className={`${styles.rememberLabel} Anjoman_Regular`}
                      >
                        مرا به خاطر بسپار
                      </span>
                    </label>

                    <Link
                      href={"/forgotPassword"}
                      className={`${styles.forgotPassword} Anjoman_Medium`}
                    >
                      رمز عبور را فراموش کرده‌اید؟
                    </Link>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={`${styles.submitButton} Anjoman_Medium`}
                    disabled={isLoading}
                    // onClick={(event) => {
                    //   event.preventDefault();
                    //   setIsLoading(true);
                    //   loginUser();
                    // }}
                  >
                    {"ورود"}
                  </button>
                </form>

                {/* Register Link */}
                <div className={`${styles.registerLink} Anjoman_Regular`}>
                  حساب کاربری ندارید؟{" "}
                  <Link href={"/"} className="Anjoman_Medium">
                    ثبت نام کنید
                  </Link>
                </div>
              </div>
            </div>

            {/* ---------- Social ---------- */}
            <div className={styles.socialLogin}>
              <div className={styles.socialTitleContainer}>
                <div className={`${styles.socialTitle} Anjoman_Regular`}>
                  یا با روش های زیر وارد شوید
                </div>
              </div>

              <div className={styles.socialButtons}>
                <a
                  href="/auth/facebook"
                  className={`${styles.socialButton} ${styles.facebookButton} Anjoman_Medium`}
                >
                  <i className="fab fa-facebook-f"></i> ورود با فیسبوک
                </a>
                <a
                  href="/auth/twitter"
                  className={`${styles.socialButton} ${styles.twitterButton} Anjoman_Medium`}
                >
                  <i className="fab fa-twitter"></i> ورود با توییتر
                </a>
                <a
                  href="/auth/instagram"
                  className={`${styles.socialButton} ${styles.instagramButton} Anjoman_Medium`}
                >
                  <i className="fab fa-instagram"></i> ورود با اینستاگرام
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
