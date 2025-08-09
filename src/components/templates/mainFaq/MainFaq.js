"use client"
import React, { useState } from "react";
import styles from "./MainFaq.module.css";

function MainFaq() {
  const [activeTab, setActiveTab] = useState("navpills-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.containerFull}>
        {/* Content Header */}
        <div className={styles.contentHeader}>
          <div className={styles.headerFlex}>
            <div className={styles.headerTitle}>
              <h4 className={styles.pageTitle}>سوالات متداول</h4>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className={styles.content}>
          <div className={styles.row}>
            <div className={styles.col12}>
              {/* Navigation Tabs */}
              <div className={styles.box}>
                <div className={styles.boxBody}>
                  <ul className={styles.navTabs}>
                    <li className={styles.navItem}>
                      <a
                        href="#navpills-1"
                        className={`${styles.navLink} ${activeTab === "navpills-1" ? styles.active : ""}`}
                        onClick={() => handleTabClick("navpills-1")}
                      >
                        عمومی
                      </a>
                    </li>
                    <li className={styles.navItem}>
                      <a
                        href="#navpills-2"
                        className={`${styles.navLink} ${activeTab === "navpills-2" ? styles.active : ""}`}
                        onClick={() => handleTabClick("navpills-2")}
                      >
                        خرید و فروش
                      </a>
                    </li>
                    <li className={styles.navItem}>
                      <a
                        href="#navpills-3"
                        className={`${styles.navLink} ${activeTab === "navpills-3" ? styles.active : ""}`}
                        onClick={() => handleTabClick("navpills-3")}
                      >
                        اجاره
                      </a>
                    </li>
                    <li className={styles.navItem}>
                      <a
                        href="#navpills-4"
                        className={`${styles.navLink} ${activeTab === "navpills-4" ? styles.active : ""}`}
                        onClick={() => handleTabClick("navpills-4")}
                      >
                        قوانین و مقررات
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* FAQ Content */}
              <div className={styles.box}>
                <div className={styles.boxBody}>
                  <div className={styles.tabContent}>
                    {/* Tab 1 - General */}
                    <div
                      id="navpills-1"
                      className={`${styles.tabPane} ${activeTab === "navpills-1" ? styles.active : ""}`}
                    >
                      <div className={styles.faqCategory}>
                        <div className={styles.accordion}>
                          {/* Question 1 */}
                          <div className={styles.panel}>
                            <div className={styles.panelHeading}>
                              <a
                                className={styles.panelTitle}
                                data-bs-toggle="collapse"
                                href="#answer-1"
                              >
                                چگونه می‌توانم در سایت ثبت نام کنم؟
                              </a>
                            </div>
                            <div
                              id="answer-1"
                              className={`${styles.panelCollapse} ${styles.show}`}
                            >
                              <div className={styles.panelBody}>
                                برای ثبت نام در سایت، روی دکمه "ثبت نام" در بالای صفحه کلیک کنید و فرم ثبت نام را با اطلاعات صحیح تکمیل نمایید. پس از تایید ایمیل، حساب کاربری شما فعال خواهد شد.
                              </div>
                            </div>
                          </div>

                          {/* Question 2 */}
                          <div className={styles.panel}>
                            <div className={styles.panelHeading}>
                              <a
                                className={styles.panelTitle}
                                data-bs-toggle="collapse"
                                href="#answer-2"
                              >
                                چگونه می‌توانم رمز عبور خود را تغییر دهم؟
                              </a>
                            </div>
                            <div id="answer-2" className={styles.panelCollapse}>
                              <div className={styles.panelBody}>
                                برای تغییر رمز عبور، به بخش "حساب کاربری" مراجعه کرده و گزینه "تغییر رمز عبور" را انتخاب کنید. پس از وارد کردن رمز عبور فعلی و رمز عبور جدید، تغییرات شما ذخیره خواهد شد.
                              </div>
                            </div>
                          </div>

                          {/* Question 3 */}
                          <div className={styles.panel}>
                            <div className={styles.panelHeading}>
                              <a
                                className={styles.panelTitle}
                                data-bs-toggle="collapse"
                                href="#answer-3"
                              >
                                چگونه می‌توانم با پشتیبانی تماس بگیرم؟
                              </a>
                            </div>
                            <div id="answer-3" className={styles.panelCollapse}>
                              <div className={styles.panelBody}>
                                شما می‌توانید از طریق شماره تلفن ۰۲۱-۱۲۳۴۵۶۷۸ یا ایمیل support@emlak.com با پشتیبانی سایت در ارتباط باشید. همچنین می‌توانید از فرم تماس در بخش "تماس با ما" استفاده نمایید.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab 2 - Buying/Selling */}
                    <div
                      id="navpills-2"
                      className={`${styles.tabPane} ${activeTab === "navpills-2" ? styles.active : ""}`}
                    >
                      <div className={styles.faqCategory}>
                        <div className={styles.accordion}>
                          {/* Question 1 */}
                          <div className={styles.panel}>
                            <div className={styles.panelHeading}>
                              <a
                                className={styles.panelTitle}
                                data-bs-toggle="collapse"
                                href="#answer-4"
                              >
                                مراحل خرید ملک چگونه است؟
                              </a>
                            </div>
                            <div
                              id="answer-4"
                              className={`${styles.panelCollapse} ${styles.show}`}
                            >
                              <div className={styles.panelBody}>
                                <ol>
                                  <li>جستجوی ملک مورد نظر در سایت</li>
                                  <li>تماس با مالک یا مشاور املاک</li>
                                  <li>بازدید از ملک</li>
                                  <li>انجام معاینه فنی و بررسی مدارک</li>
                                  <li>انعقاد قرارداد و پرداخت هزینه</li>
                                  <li>ثبت رسمی معامله در دفترخانه</li>
                                </ol>
                              </div>
                            </div>
                          </div>

                          {/* Question 2 */}
                          <div className={styles.panel}>
                            <div className={styles.panelHeading}>
                              <a
                                className={styles.panelTitle}
                                data-bs-toggle="collapse"
                                href="#answer-5"
                              >
                                چگونه می‌توانم ملک خود را در سایت ثبت کنم؟
                              </a>
                            </div>
                            <div id="answer-5" className={styles.panelCollapse}>
                              <div className={styles.panelBody}>
                                پس از ورود به حساب کاربری، در بخش "ثبت آگهی جدید" اطلاعات ملک خود را وارد کنید. تصاویر باکیفیت و اطلاعات دقیق شانس فروش یا اجاره ملک شما را افزایش می‌دهد. پس از تایید توسط مدیر سیستم، آگهی شما منتشر خواهد شد.
                              </div>
                            </div>
                          </div>

                          {/* Question 3 */}
                          <div className={styles.panel}>
                            <div className={styles.panelHeading}>
                              <a
                                className={styles.panelTitle}
                                data-bs-toggle="collapse"
                                href="#answer-6"
                              >
                                هزینه‌های جانبی خرید ملک چیست؟
                              </a>
                            </div>
                            <div id="answer-6" className={styles.panelCollapse}>
                              <div className={styles.panelBody}>
                                علاوه بر قیمت ملک، هزینه‌های زیر ممکن است وجود داشته باشد:
                                <ul>
                                  <li>حقوق مشاور املاک (معمولاً ۱-۳٪ قیمت ملک)</li>
                                  <li>هزینه‌های دفترخانه اسناد رسمی</li>
                                  <li>مالیات نقل و انتقال</li>
                                  <li>هزینه‌های ثبت و صدور سند</li>
                                  <li>هزینه‌های بازدید و معاینه فنی</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab 3 - Renting */}
                    <div
                      id="navpills-3"
                      className={`${styles.tabPane} ${activeTab === "navpills-3" ? styles.active : ""}`}
                    >
                      <div className={styles.faqCategory}>
                        <div className={styles.accordion}>
                          {/* Question 1 */}
                          <div className={styles.panel}>
                            <div className={styles.panelHeading}>
                              <a
                                className={styles.panelTitle}
                                data-bs-toggle="collapse"
                                href="#answer-7"
                              >
                                چه مدارکی برای اجاره ملک نیاز است؟
                              </a>
                            </div>
                            <div
                              id="answer-7"
                              className={`${styles.panelCollapse} ${styles.show}`}
                            >
                              <div className={styles.panelBody}>
                                برای اجاره ملک معمولاً به مدارک زیر نیاز دارید:
                                <ul>
                                  <li>کارت ملی و شناسنامه</li>
                                  <li>سند اشتغال به کار یا فیش حقوقی</li>
                                  <li>چک ضمانت (معمولاً معادل ۲ تا ۶ ماه اجاره)</li>
                                  <li>سفته یا ضامن معتبر (در برخی موارد)</li>
                                  <li>قرارداد اجاره که در دفترخانه ثبت می‌شود</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Question 2 */}
                          <div className={styles.panel}>
                            <div className={styles.panelHeading}>
                              <a
                                className={styles.panelTitle}
                                data-bs-toggle="collapse"
                                href="#answer-8"
                              >
                                آیا امکان اجاره کوتاه مدت وجود دارد؟
                              </a>
                            </div>
                            <div id="answer-8" className={styles.panelCollapse}>
                              <div className={styles.panelBody}>
                                بله، برخی از مالکان موافق اجاره کوتاه مدت (معمولاً کمتر از ۶ ماه) هستند. این نوع اجاره معمولاً هزینه بیشتری در بر دارد. می‌توانید در فیلترهای جستجو، گزینه اجاره کوتاه مدت را انتخاب کنید.
                              </div>
                            </div>
                          </div>

                          {/* Question 3 */}
                          <div className={styles.panel}>
                            <div className={styles.panelHeading}>
                              <a
                                className={styles.panelTitle}
                                data-bs-toggle="collapse"
                                href="#answer-9"
                              >
                                در صورت بروز مشکل در ملک اجاره‌ای چه باید کرد؟
                              </a>
                            </div>
                            <div id="answer-9" className={styles.panelCollapse}>
                              <div className={styles.panelBody}>
                                بسته به نوع مشکل و شرایط قرارداد:
                                <ul>
                                  <li>مشکلات جزئی مانند تعویض لامپ معمولاً بر عهده مستاجر است</li>
                                  <li>مشکلات اساسی مانند خرابی سیستم لوله‌کشی باید به مالک گزارش شود</li>
                                  <li>در صورت عدم رسیدگی مالک، می‌توانید از طریق مراجع قانونی اقدام کنید</li>
                                  <li>همیشه قبل از اقدام، قرارداد اجاره را بررسی نمایید</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab 4 - Rules */}
                    <div
                      id="navpills-4"
                      className={`${styles.tabPane} ${activeTab === "navpills-4" ? styles.active : ""}`}
                    >
                      <div className={styles.faqCategory}>
                        <div className={styles.accordion}>
                          {/* Question 1 */}
                          <div className={styles.panel}>
                            <div className={styles.panelHeading}>
                              <a
                                className={styles.panelTitle}
                                data-bs-toggle="collapse"
                                href="#answer-10"
                              >
                                قوانین انتشار آگهی در سایت چیست؟
                              </a>
                            </div>
                            <div
                              id="answer-10"
                              className={`${styles.panelCollapse} ${styles.show}`}
                            >
                              <div className={styles.panelBody}>
                                <ul>
                                  <li>آگهی باید مربوط به املاک و مستغلات باشد</li>
                                  <li>اطلاعات باید دقیق و واقعی باشد</li>
                                  <li>استفاده از تصاویر واقعی و باکیفیت الزامی است</li>
                                  <li>قیمت باید واقعی و به روز باشد</li>
                                  <li>آگهی‌های تکراری حذف خواهند شد</li>
                                  <li>هرگونه کلاهبرداری پیگرد قانونی دارد</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Question 2 */}
                          <div className={styles.panel}>
                            <div className={styles.panelHeading}>
                              <a
                                className={styles.panelTitle}
                                data-bs-toggle="collapse"
                                href="#answer-11"
                              >
                                آیا اطلاعات شخصی من محفوظ می‌ماند؟
                              </a>
                            </div>
                            <div id="answer-11" className={styles.panelCollapse}>
                              <div className={styles.panelBody}>
                                بله، ما اطلاعات شخصی شما را مطابق با قوانین حریم خصوصی حفظ می‌کنیم. اطلاعات تماس شما فقط در صورت توافق شما با طرف مقابل به اشتراک گذاشته می‌شود. ما از اطلاعات شما برای مقاصد غیرقانونی یا تبلیغاتی بدون اجازه شما استفاده نخواهیم کرد.
                              </div>
                            </div>
                          </div>

                          {/* Question 3 */}
                          <div className={styles.panel}>
                            <div className={styles.panelHeading}>
                              <a
                                className={styles.panelTitle}
                                data-bs-toggle="collapse"
                                href="#answer-12"
                              >
                                در صورت بروز اختلاف چه باید کرد؟
                              </a>
                            </div>
                            <div id="answer-12" className={styles.panelCollapse}>
                              <div className={styles.panelBody}>
                                در صورت بروز هرگونه اختلاف:
                                <ol>
                                  <li>ابتدا سعی کنید از طریق گفتگو مساله را حل کنید</li>
                                  <li>در صورت عدم حل اختلاف، به بخش پشتیبانی سایت گزارش دهید</li>
                                  <li>مدارک و شواهد خود را جمع‌آوری کنید</li>
                                  <li>در صورت نیاز به مراجع قضایی مراجعه نمایید</li>
                                  <li>همیشه قبل از هر معامله، مدارک و قراردادها را به دقت بررسی کنید</li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainFaq;