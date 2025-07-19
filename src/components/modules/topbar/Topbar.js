import React from "react";
import styles from "./Topbar.module.css";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaWallet,
  FaShoppingCart,
  FaUsers,
  FaExclamationTriangle,
} from "react-icons/fa";
import { MdEvent, MdTaskAlt, MdFullscreen } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

function Topbar() {
  return (
    <header className={styles.topbarContainer}>
      <div className={styles.logoBox}>
        <a href="index.html" className={styles.logo}>
          <div className={styles.logoMini}>
            <span className="light-logo">
              <img
                src="images/logo-w-bg.png"
                alt="logo"
                className={styles.logoImage}
              />
            </span>
          </div>
          <div className={styles.logoLg}>
            <h1 className={styles.logoTitle}>املاک آرامش</h1>
          </div>
        </a>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.appMenu}>
          <ul className={styles.headerMegamenu}>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink} role="button">
                <HiMenu className={styles.svgIcon} />
              </a>
            </li>
            <li className={`${styles.navItem} d-lg-inline-flex d-none`}>
              <div className={styles.searchBx}>
                <form className={styles.searchForm}>
                  <div className="input-group">
                    <input
                      type="search"
                      className={styles.searchInput}
                      placeholder="جستجو"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className={styles.searchButton} type="submit">
                        <FaSearch className={styles.svgIcon} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <li className={`${styles.navItem} d-none d-xl-inline-block`}>
              <a
                href="extra_calendar.html"
                className={styles.navLink}
                title="تقویم"
              >
                <MdEvent className={styles.svgIcon} />
              </a>
            </li>
            <li className={`${styles.navItem} d-none d-xl-inline-block`}>
              <a
                href="extra_taskboard.html"
                className={styles.navLink}
                title="تسک بار"
              >
                <MdTaskAlt className={styles.svgIcon} />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.navbarCustomMenu}>
          <ul className={styles.navbarNav}>
            <li className={`${styles.navItem} d-lg-inline-flex d-none`}>
              <a href="#" className={styles.navLink} title="تمام صفحه">
                <MdFullscreen className={styles.svgIcon} />
              </a>
            </li>

            <li className={`${styles.dropdown} ${styles.notificationsMenu}`}>
              <a
                href="#"
                className={`${styles.navLink} ${styles.dropdownToggle}`}
                title="اعلانات"
              >
                <FaBell className={styles.svgIcon} />
                <span className={styles.badge}>3</span>
              </a>
              <div className={styles.dropdownMenuWrapper}>
                <ul
                  className={`${styles.dropdownMenu} ${styles.notificationsDropdown}`}
                >
                  <li className={styles.dropdownHeader}>
                    <div className={styles.dropdownHeaderContent}>
                      <h4 className={styles.dropdownTitle}>اعلانات</h4>
                      <a href="#" className={styles.clearAll}>
                        پاک کردن همه
                      </a>
                    </div>
                  </li>
                  <li>
                    <ul className={`${styles.menu} ${styles.smScroll}`}>
                      <li>
                        <a href="#" className={styles.dropdownItem}>
                          <FaUsers
                            className={`${styles.notificationIcon} ${styles.textInfo}`}
                          />
                          <span className={styles.notificationText}>
                            گروه جدید مشاوران تصمیمات جدیدی را ...
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdownItem}>
                          <FaExclamationTriangle
                            className={`${styles.notificationIcon} ${styles.textWarning}`}
                          />
                          <span className={styles.notificationText}>
                            خطایی در ثبت بوجود امد...
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdownItem}>
                          <FaUsers
                            className={`${styles.notificationIcon} ${styles.textDanger}`}
                          />
                          <span className={styles.notificationText}>
                            بررسی کامل کارشناسان تائید شد...
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdownItem}>
                          <FaShoppingCart
                            className={`${styles.notificationIcon} ${styles.textSuccess}`}
                          />
                          <span className={styles.notificationText}>
                            ثبت سفارش جدید اعلام شد
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.dropdownDivider} />
                  <li className={styles.dropdownFooter}>
                    <a href="#" className={styles.dropdownItem}>
                      مشاهده همه
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className={`${styles.dropdown} ${styles.userMenu}`}>
              <a
                href="#"
                className={`${styles.navLink} ${styles.dropdownToggle}`}
                title="کاربر"
              >
                <FaUser className={styles.svgIcon} />
              </a>
              <div className={styles.dropdownMenuWrapper}>
                <ul className={`${styles.dropdownMenu} ${styles.userDropdown}`}>
                  <li className={styles.userBody}>
                    <a className={styles.dropdownItem} href="#">
                      <FaUser className={styles.dropdownIcon} />
                      <span className={styles.dropdownText}>پروفایل</span>
                    </a>
                    <a className={styles.dropdownItem} href="#">
                      <FaWallet className={styles.dropdownIcon} />
                      <span className={styles.dropdownText}>کیف پول</span>
                    </a>
                    <a className={styles.dropdownItem} href="#">
                      <FaCog className={styles.dropdownIcon} />
                      <span className={styles.dropdownText}>تنظیمات</span>
                    </a>
                    <div className={styles.dropdownDivider} />
                    <a className={styles.dropdownItem} href="#">
                      <FaSignOutAlt className={styles.dropdownIcon} />
                      <span className={styles.dropdownText}>خروج</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className={styles.navItem}>
              <a href="#" className={styles.navLink} title="تنظیمات">
                <FaCog className={styles.svgIcon} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Topbar;
