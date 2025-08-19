"use client";
import styles from "./lockScreen.module.css";
import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";

export default function LockScreen({ user, consultant }) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/verifyLock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
        cache: "no-store",
      });

      if (res.status === 200) {
        document.cookie = "locked=false; path=/;";
        toastSuccess("قفل با موفقیت باز شد", "top-center", 3000);
        router.replace("/dashboard");
        return;
      }

      if (res.status === 401) {
        toastError(
          "کاربر شناسایی نشد یا رمزعبور اشتباه است",
          "top-center",
          4000
        );
        router.replace("/login");
        return;
      }

      if (res.status === 404) {
        toastError("کاربر یافت نشد", "top-center", 4000);
        router.replace("/login");
        return;
      }

      toastError("خطای سرور، بعداً تلاش کنید", "top-center", 4000);
    } catch (err) {
      swalAlert("خطای سرور", String(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.lockContainer}>
          <div className={styles.lockCard}>
            <div className={styles.userProfile}>
              <img
                src={consultant?.img || "/images/abstract-user-flat-4.svg"}
                alt="User Image"
                className={styles.userAvatar}
              />
              <h3 className={`${styles.userName} Anjoman_Bold`}>
                {user?.name ?? "کاربر"}
              </h3>
            </div>

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
                    autoComplete="current-password"
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
                  ورود
                </button>
              </form>

              <div className={styles.divider}>
                <span className={`${styles.dividerText} Anjoman_Regular`}>
                  یا
                </span>
              </div>

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
      )}
    </>
  );
}
