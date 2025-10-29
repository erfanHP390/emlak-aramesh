"use client";
import { useRouter } from "next/navigation";
import styles from "./Register.module.css";
import { useState } from "react";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail, validatePassword } from "@/utils/auth";
import {
  FaUserAlt,
  FaIdCard,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";
import Loading from "@/app/loading";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [guildID, setGuildID] = useState("");
  const [isReadRules, setIsReadRules] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const registerUser = async () => {
    if (isLoading) return;

    setIsLoading(true);

    if (!isReadRules) {
      swalAlert("لطفا شرایط و قوانین را مطالعه فرمایید", "error", "فهمیدم");
      setIsLoading(false);
      return;
    }
    if (!name.trim()) {
      swalAlert("نام نمی تواند خالی باشد", "error", "تلاش مجدد");
      setIsLoading(false);
      return;
    }
    if (!validateEmail(email)) {
      swalAlert("ایمیل نامعتبر است", "error", "تلاش مجدد");
      setIsLoading(false);
      return;
    }
    if (!validatePassword(password)) {
      swalAlert(
        "رمز عبور نامعتبر است. رمز عبور باید شامل حداقل یک کاراکتر، یک حرف بزرگ، یک حرف کوچک و عدد باشد",
        "error",
        "تلاش مجدد"
      );
      setIsLoading(false);
      return;
    }

    const userData = guildID
      ? { name, email, password, guildID }
      : { name, email, password };

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify(userData),
      });

      if (res.status === 201) {
        await fetch("/api/notifications", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `کاربر جدید ${name} با موفقیت ثبت شد`,
            type: "success",
            link: "/houseList",
            icon: "users",
          }),
        });
        setName("");
        setGuildID("");
        setEmail("");
        setPassword("");
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
        router.replace("/login");
      } else if (res.status === 422) {
        setName("");
        setGuildID("");
        setEmail("");
        setPassword("");
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
      } else {
        toastError(
          "خطای نامشخص. لطفا دوباره تلاش کنید.",
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
    } catch (err) {
      toastError(
        "خطا در ارتباط با سرور. اتصال اینترنت را بررسی کنید.",
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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={`${styles.registerContainer} register-bg`}>
          <div className={styles.registerCard}>
            <div className={styles.registerHeader}>
              <h2 className={`${styles.registerTitle} Anjoman_Bold`}>
                با ما شروع کن
              </h2>
              <p className={`${styles.registerSubtitle} Anjoman_Regular`}>
                عضوی از ما شو
              </p>
            </div>

            <div className={styles.registerForm}>
              <form method="post" action="/api/register">
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    className={styles.inputField}
                    placeholder="نام و فامیلی"
                    name="fullname"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                  <span className={styles.inputIcon}>
                    <FaUserAlt className={styles.iconUser} />
                  </span>
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    className={styles.inputField}
                    placeholder="ایمیل"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                  <span className={styles.inputIcon}>
                    <MdEmail className={styles.iconEmail} />
                  </span>
                </div>

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

                <div className={styles.inputGroup}>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={styles.inputField}
                    placeholder="رمز عبور"
                    name="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                  <span className={styles.inputIcon}>
                    <RiLockPasswordFill className={styles.iconPassword} />
                  </span>
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

                <button
                  type="submit"
                  className={`${styles.submitButton} Anjoman_Medium`}
                  onClick={(e) => {
                    e.preventDefault();
                    registerUser();
                  }}
                >
                  {"ثبت نام"}
                </button>
              </form>

              <div className={`${styles.loginLink} Anjoman_Regular`}>
                حساب کاربری دارید؟{" "}
                <Link href={"/"} className="Anjoman_Medium">
                  وارد شوید
                </Link>
              </div>
            </div>
          </div>

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
                <FaFacebook className="fab fa-facebook-f" />
              </a>
              <a
                href="/auth/twitter"
                className={`${styles.socialButton} ${styles.twitterButton} Anjoman_Medium`}
              >
                <FaTwitter className="fab fa-twitter" />
              </a>
              <a
                href="/auth/instagram"
                className={`${styles.socialButton} ${styles.instagramButton} Anjoman_Medium`}
              >
                <FaInstagram className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
