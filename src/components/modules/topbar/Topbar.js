import React from "react";
import styles from "./Topbar.module.css";

function Topbar() {
  return (
    <>
      <header className="main-header">
        <div className="d-flex align-items-center logo-box justify-content-start">
          {/* Logo */}
          <a href="index.html" className="logo">
            {/* logo*/}
            <div className="logo-mini w-30">
              <span className="light-logo">
                <img src="images/logo-letter.png" alt="logo" />
              </span>
              <span className="dark-logo">
                <img src="images/logo-letter.png" alt="logo" />
              </span>
            </div>
            <div className="logo-lg">
              <span className="light-logo">
                <img src="images/logo-dark-text.png" alt="logo" />
              </span>
              <span className="dark-logo">
                <img src="images/logo-light-text.png" alt="logo" />
              </span>
            </div>
          </a>
        </div>
        {/* Header Navbar */}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <div className="app-menu">
            <ul className="header-megamenu nav">
              <li className="btn-group nav-item">
                <a
                  href="#"
                  className="waves-effect waves-light nav-link push-btn btn-outline no-border"
                  data-toggle="push-menu"
                  role="button"
                >
                  <img
                    src="images/svg-icon/collapse.svg"
                    className="img-fluid svg-icon"
                    alt=""
                  />
                </a>
              </li>
              <li className="btn-group d-lg-inline-flex d-none">
                <div className="app-menu">
                  <div className="search-bx mx-5">
                    <form>
                      <div className="input-group">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="جستجو"
                          aria-label="Search"
                          aria-describedby="button-addon2"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn"
                            type="submit"
                            id="button-addon3"
                          >
                            <img
                              src="images/svg-icon/search.svg"
                              className="img-fluid svg-icon"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
              <li className="btn-group nav-item d-none d-xl-inline-block">
                <a
                  href="extra_calendar.html"
                  className="waves-effect waves-light nav-link btn-outline no-border svg-bt-icon"
                  title="تقویم"
                >
                  <img
                    src="images/svg-icon/event.svg"
                    className="img-fluid svg-icon"
                    alt=""
                  />
                </a>
              </li>
              <li className="btn-group nav-item d-none d-xl-inline-block">
                <a
                  href="extra_taskboard.html"
                  className="waves-effect waves-light btn-outline no-border nav-link svg-bt-icon"
                  title="تسک بار"
                >
                  <img
                    src="images/svg-icon/correct.svg"
                    className="img-fluid svg-icon"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-custom-menu r-side">
            <ul className="nav navbar-nav">
              <li className="btn-group nav-item d-lg-inline-flex d-none">
                <a
                  href="#"
                  data-provide="fullscreen"
                  className="waves-effect waves-light nav-link btn-outline no-border full-screen"
                  title="تمام صفحه"
                >
                  <img
                    src="images/svg-icon/fullscreen.svg"
                    className="img-fluid svg-icon"
                    alt=""
                  />
                </a>
              </li>
              {/* Notifications */}
              <li className="dropdown notifications-menu">
                <a
                  href="#"
                  className="waves-effect waves-light dropdown-toggle btn-outline no-border"
                  data-bs-toggle="dropdown"
                  title="اعلانات"
                >
                  <img
                    src="images/svg-icon/notifications.svg"
                    className="img-fluid svg-icon"
                    alt=""
                  />
                </a>
                <ul className="dropdown-menu animated bounceIn">
                  <li className="header">
                    <div className="p-20">
                      <div className="flexbox">
                        <div>
                          <h4 className="mb-0 mt-0">اعلانات</h4>
                        </div>
                        <div>
                          <a href="#" className="text-danger">
                            پاک کردن همه
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    {/* inner menu: contains the actual data */}
                    <ul className="menu sm-scrol">
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-info" /> گروه جدید
                          مشاوران تصمیمات جدیدی را ...
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-warning text-warning" /> خطایی در
                          ثبت بوجود امد...
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-danger" /> بررسی کامل
                          کارشناسان تائید شد...
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart text-success" /> ثبت
                          سفارش جدید اعلام شد
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-danger" /> کارشناس جدید
                          هنوز مدارک خودرا ارسال نکرده است
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-primary" />
                          تغییر سطح کاربری ادمین تیکت ها
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">مشاهده همه</a>
                  </li>
                </ul>
              </li>
              {/* User Account*/}
              <li className="dropdown user user-menu">
                <a
                  href="#"
                  className="waves-effect waves-light dropdown-toggle btn-outline no-border"
                  data-bs-toggle="dropdown"
                  title="کاربر"
                >
                  <img
                    src="images/svg-icon/user.svg"
                    className="img-fluid svg-icon"
                    alt=""
                  />
                </a>
                <ul className="dropdown-menu animated flipInX">
                  <li className="user-body">
                    <a className="dropdown-item" href="#">
                      <i className="ti-user text-muted me-2" /> پروفایل
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="ti-wallet text-muted me-2" /> کیف پول
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="ti-settings text-muted me-2" /> تنظیمات
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <i className="ti-lock text-muted me-2" />
                      خروج
                    </a>
                  </li>
                </ul>
              </li>
              {/* Control Sidebar Toggle Button */}
              <li>
                <a
                  href="#"
                  data-toggle="control-sidebar"
                  title="تنظیمات"
                  className="waves-effect waves-light btn-outline no-border"
                >
                  <img
                    src="images/svg-icon/settings.svg"
                    className="img-fluid svg-icon"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Topbar;
