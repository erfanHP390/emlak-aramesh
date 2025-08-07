"use client";
import React, { useEffect } from "react";
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
  FaBars,
} from "react-icons/fa";
import {
  MdEvent,
  MdTaskAlt,
  MdFullscreen,
  MdFullscreenExit,
} from "react-icons/md";
import { useState, useRef } from "react";
import { toastSuccess } from "@/utils/alerts";
import { useRouter } from "next/navigation";
import swal from "sweetalert";
import Link from "next/link";

function Topbar({ user, consultant, admin, consultantInfo, toggleSidebar }) {
  const router = useRouter();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const notificationsRef = useRef(null);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setIsNotificationsOpen(false);
      }

      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    if (isNotificationsOpen || isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationsOpen, isUserMenuOpen]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement
          .requestFullscreen()
          .then(() => setIsFullscreen(true))
          .catch((err) => console.error("Error entering fullscreen:", err));
      }
    } else {
      if (document.exitFullscreen) {
        document
          .exitFullscreen()
          .then(() => setIsFullscreen(false))
          .catch((err) => console.error("Error exiting fullscreen:", err));
      }
    }
  };

  const toggleNotifications = (e) => {
    e.preventDefault();
    setIsNotificationsOpen(!isNotificationsOpen);
    if (isUserMenuOpen) setIsUserMenuOpen(false);
  };

  const toggleUserMenu = (e) => {
    e.preventDefault();
    setIsUserMenuOpen(!isUserMenuOpen);
    if (isNotificationsOpen) setIsNotificationsOpen(false);
  };

  const signOutUser = async () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/auth/signout", {
          method: "POST",
        });

        if (res.status === 200) {
          toastSuccess(
            "با موفقیت خارج شدید",
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
        }
      }
    });
  };

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
              <button
                className={styles.navLink}
                onClick={toggleSidebar} // این خط باید دقیقاً همین باشد
                title="منو"
              >
                <FaBars className={styles.svgIcon} />
              </button>
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
          </ul>
        </div>

        <div className={styles.navbarCustomMenu}>
          <ul className={styles.navbarNav}>
            <li className={`${styles.navItem} d-lg-inline-flex d-none`}>
              <a
                href="#"
                className={styles.navLink}
                title={isFullscreen ? "خروج از تمام صفحه" : "تمام صفحه"}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFullscreen();
                }}
              >
                {isFullscreen ? (
                  <MdFullscreenExit className={styles.svgIcon} />
                ) : (
                  <MdFullscreen className={styles.svgIcon} />
                )}
              </a>
            </li>

            <li
              ref={notificationsRef}
              className={`${styles.dropdown} ${styles.notificationsMenu} ${
                isNotificationsOpen ? styles.show : ""
              }`}
            >
              <a
                href="#"
                className={`${styles.navLink} ${styles.dropdownToggle}`}
                title="اعلانات"
                onClick={toggleNotifications}
              >
                <FaBell className={styles.svgIcon} />
                <span className={styles.badge}>3</span>
              </a>
              {isNotificationsOpen && (
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
              )}
            </li>

            <li
              ref={userMenuRef}
              className={`${styles.dropdown} ${styles.userMenu} ${
                isUserMenuOpen ? styles.show : ""
              }`}
            >
              <a
                href="#"
                className={`${styles.navLink} ${styles.dropdownToggle}`}
                title="کاربر"
                onClick={toggleUserMenu}
              >
                <FaUser className={styles.svgIcon} />
              </a>
              {isUserMenuOpen && (
                <div className={styles.dropdownMenuWrapper}>
                  <ul
                    className={`${styles.dropdownMenu} ${styles.userDropdown}`}
                  >
                    <li className={styles.userBody}>
                      <Link
                        className={styles.dropdownItem}
                        href={
                          consultant
                            ? `/consultantDetails/${consultantInfo._id}`
                            : `/dashboard+`
                        }
                      >
                        <FaUser className={styles.dropdownIcon} />
                        <span className={styles.dropdownText}>پروفایل</span>
                      </Link>
                      <a className={styles.dropdownItem} href="#">
                        <FaWallet className={styles.dropdownIcon} />
                        <span className={styles.dropdownText}>کیف پول</span>
                      </a>
                      <a className={styles.dropdownItem} href="#">
                        <FaCog className={styles.dropdownIcon} />
                        <span className={styles.dropdownText}>تنظیمات</span>
                      </a>
                      <div className={styles.dropdownDivider} />
                      <a
                        className={styles.dropdownItem}
                        href="#"
                        onClick={() => signOutUser()}
                      >
                        <FaSignOutAlt className={styles.dropdownIcon} />
                        <span className={styles.dropdownText}>خروج</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
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
