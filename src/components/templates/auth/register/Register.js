import styles from "./register.module.css";

export default function Register() {
  return (
    <>
      <div className={styles.registerContainer}>
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
                />
                <span className={styles.inputIcon}>
                  <i className="ti-email"></i>
                </span>
              </div>

              {/* Password Field */}
              <div className={styles.inputGroup}>
                <input
                  type="password"
                  className={styles.inputField}
                  placeholder="رمز عبور"
                  name="password"
                  required
                  minLength="6"
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
                  placeholder="تکرار رمز عبور"
                  name="confirmPassword"
                  required
                  minLength="6"
                />
                <span className={styles.inputIcon}>
                  <i className="ti-lock"></i>
                </span>
              </div>

              {/* Terms Checkbox */}
              <label className={styles.termsCheckbox}>
                <input type="checkbox" name="terms" required />
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
