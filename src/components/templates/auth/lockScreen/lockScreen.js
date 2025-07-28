"use client";
import styles from "./lockScreen.module.css";
import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";

function LockScreen({ user }) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/verifyLock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.status === 200) {
        setIsLoading(false);
        document.cookie = "locked=false; path=/;";
        window.location.href = "/dashboard";
        toastSuccess(
          "قفل با موفقیت باز شد",
          "top-center",
          5000,
          false,
          true,
          true,
          true,
          undefined,
          "colored"
        );
        window.location.href = "/dashboard"; // یا هر جای دیگه
      } else if (res.status === 401) {
        setIsLoading(false);
        toastError(
          "کاربر شناسایی نشد یا رمزعبور اشتباه است",
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
      } else if (res.status === 404) {
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
        router.replace("/login");
      } else if (res.status === 500) {
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
    } catch (err) {
      swalAlert("خطای سرور", `${err}`);
    }

    setIsLoading(false);
  };

  const unlockScreen = () => {
    // غیرفعال کردن قفل
    document.cookie = "locked=false; path=/;";
    window.location.href = "/dashboard"; // یا هر صفحه‌ای که مد نظرت هست
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <div className={styles.lockContainer}>
            <div className={styles.lockCard}>
              {/* User Profile Section */}
              <div className={styles.userProfile}>
                <img
                  src="/images/abstract-user-flat-4.svg"
                  alt="User Image"
                  className={styles.userAvatar}
                />
                <h3 className={`${styles.userName} Anjoman_Bold`}>
                  {user.name}
                </h3>
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
                    onClick={(event) => {
                      event.preventDefault();
                      setIsLoading(true);
                      unlockScreen();
                    }}
                  >
                    ورود
                  </button>
                </form>

                {/* Divider */}
                <div className={styles.divider}>
                  <span className={`${styles.dividerText} Anjoman_Regular`}>
                    یا
                  </span>
                </div>

                {/* Alternative Options */}
                <div className={styles.alternateOptions}>
                  <p className={`${styles.optionText} Anjoman_Regular`}>
                    رمز عبورتان را وارد کنید
                  </p>
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
        </>
      )}
    </>
  );
}

export default LockScreen;
