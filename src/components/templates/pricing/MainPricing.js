"use client";
import React from "react";
import styles from "./MainPricing.module.css";
import { toPersianDigits } from "@/utils/constants";

function MainPricing() {
  return (
    <div className={styles.pricingWrapper}>
      <div className={styles.container}>
        <section className={styles.pricingSection}>
          <h2 className={`${styles.sectionTitle} Anjoman_Bold`}>
            پلن‌های اشتراک سیستم مدیریت املاک
          </h2>
          <p className={`${styles.sectionSubtitle} Anjoman_Regular`}>
            پلن مناسب کسب‌وکار املاک خود را انتخاب کنید
          </p>

          <div className={styles.pricingRow}>
            {/* پایه */}
            <div className={styles.pricingColumn}>
              <div className={`${styles.pricingBox} ${styles.basicBox}`}>
                <h4 className={`${styles.pricingTitle} Anjoman_SemiBold`}>
                  پایه
                </h4>
                <div className={styles.pricingFeatures}>
                  <ul className={styles.featuresList}>
                    <li className="Anjoman_Regular">مدیریت تا 20 ملک</li>
                    <li className="Anjoman_Regular">نمایش در نقشه</li>
                    <li className="Anjoman_Regular">10 عکس به ازای هر ملک</li>
                    <li className="Anjoman_Regular">پشتیبانی ایمیلی</li>
                    <li className="Anjoman_Regular">گزارش‌های پایه</li>
                  </ul>
                </div>
                <div className={`${styles.priceTag} Anjoman_Bold`}>
                  <sup className="Anjoman_Medium">تومان</sup>{Number(2900000).toLocaleString("fa-IR")}
                  <span>/ماهیانه</span>
                </div>
                <a
                  className={`${styles.pricingButton} ${styles.basicButton} Anjoman_Medium`}
                  href="#"
                >
                  شروع کنید
                </a>
              </div>
            </div>

            {/* حرفه ای */}
            <div className={styles.pricingColumn}>
              <div
                className={`${styles.pricingBox} ${styles.proBox} ${styles.highlightedBox}`}
              >
                <div className={styles.bestValueBadge}>پیشنهاد ویژه</div>
                <h4 className={`${styles.pricingTitle} Anjoman_SemiBold`}>
                  حرفه‌ای
                </h4>
                <div className={styles.pricingFeatures}>
                  <ul className={styles.featuresList}>
                    <li className="Anjoman_Regular">مدیریت تا 100 ملک</li>
                    <li className="Anjoman_Regular">سیستم CRM یکپارچه</li>
                    <li className="Anjoman_Regular">25 عکس به ازای هر ملک</li>
                    <li className="Anjoman_Regular">پشتیبانی تلفنی</li>
                    <li className="Anjoman_Regular">گزارش‌های پیشرفته</li>
                    <li className="Anjoman_Regular">وبسایت اختصاصی</li>
                    <li className="Anjoman_Regular">اپلیکیشن موبایل</li>
                  </ul>
                </div>
                <div className={`${styles.priceTag} Anjoman_Bold`}>
                  <sup className="Anjoman_Medium">تومان</sup>{Number(7900000).toLocaleString("fa-IR")}
                  <span>/ماهیانه</span>
                </div>
                <a
                  className={`${styles.pricingButton} ${styles.proButton} Anjoman_Medium`}
                  href="#"
                >
                  محبوب ترین
                </a>
              </div>
            </div>

            {/* سازمانی */}
            <div className={styles.pricingColumn}>
              <div className={`${styles.pricingBox} ${styles.premiumBox}`}>
                <h4 className={`${styles.pricingTitle} Anjoman_SemiBold`}>
                  سازمانی
                </h4>
                <div className={styles.pricingFeatures}>
                  <ul className={styles.featuresList}>
                    <li className="Anjoman_Regular">مدیریت نامحدود املاک</li>
                    <li className="Anjoman_Regular">CRM پیشرفته</li>
                    <li className="Anjoman_Regular">عکس و تور مجازی نامحدود</li>
                    <li className="Anjoman_Regular">پشتیبانی 24/7</li>
                    <li className="Anjoman_Regular">آنالیز بازار هوشمند</li>
                    <li className="Anjoman_Regular">درگاه پرداخت اختصاصی</li>
                    <li className="Anjoman_Regular">هماهنگی بازدید خودکار</li>
                    <li className="Anjoman_Regular">پنل چند کاربره</li>
                  </ul>
                </div>
                <div className={`${styles.priceTag} Anjoman_Bold`}>
                  <sup className="Anjoman_Medium">تومان</sup>{Number(19900000).toLocaleString("fa-IR")}
                  <span>/ماهیانه</span>
                </div>
                <a
                  className={`${styles.pricingButton} ${styles.premiumButton} Anjoman_Medium`}
                  href="#"
                >
                  درخواست دمو
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainPricing;
