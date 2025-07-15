"use client";
import styles from "./ForgotPass.module.css";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/utils/auth";

function ForgotPass() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      setIsLoading(false);
      return swalAlert("لطفا ایمیل  خود را وارد نمایید", "error", "فهمیدم");
    }

    const isValidٍEmail = validateEmail(email);
    if (!isValidٍEmail) {
      setIsLoading(false);
      return swalAlert("لطفا ایمیل معتبر وارد نمایید", "error", "فهمیدم");
    }

    const res = await fetch("/api/auth/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    
        if (res.status === 200) {
      setEmail("");
      setIsLoading(false);
      toastSuccess(
        "رمز عبور با موفقیت به ایمیل شما ارسال شد (لطفا در صورت عدم مشاهده بخش spam ایمیل خود را چک کنید)",
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
    }  else if (res.status === 422) {
      setIsLoading(false);
      toastError(
        "لطفا یک ایمیل معتبر وارد نمایید",
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
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setIsLoading(true);
              handleSubmit();
            }}
          >
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
