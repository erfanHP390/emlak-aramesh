"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Topbar.module.css";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaShoppingCart,
  FaUsers,
  FaExclamationTriangle,
  FaBars,
  FaEnvelope,
  FaClipboardList,
  FaHome,
} from "react-icons/fa";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { toastSuccess } from "@/utils/alerts";
import { useRouter } from "next/navigation";
import swal from "sweetalert";
import Link from "next/link";

function Topbar({
  user,
  consultant,
  admin,
  consultantInfo,
  toggleSidebar,
  notifications,
}) {
  const router = useRouter();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const notificationsRef = useRef(null);
  const userMenuRef = useRef(null);

  // بستن منوها با کلیک بیرون
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isNotificationsOpen, isUserMenuOpen]);

  // تغییر وضعیت تمام صفحه
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
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

  // خروج کاربر
  const signOutUser = async () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/auth/signout", { method: "POST" });
        if (res.status === 200) {
          toastSuccess("با موفقیت خارج شدید", "top-center");
          router.replace("/login");
        }
      }
    });
  };

  const getIcon = (icon) => {
    switch (icon) {
      case "users":
        return (
          <FaUsers
            className={`${styles.notificationIcon} ${styles.textInfo}`}
          />
        );
      case "shopping":
        return (
          <FaHome
            className={`${styles.notificationIcon} ${styles.textSuccess}`}
          />
        );
      case "warning":
        return (
          <FaExclamationTriangle
            className={`${styles.notificationIcon} ${styles.textWarning}`}
          />
        );
      case "task":
        return (
          <FaClipboardList
            className={`${styles.notificationIcon} ${styles.textDanger}`}
          />
        );
      default:
        return (
          <FaExclamationTriangle
            className={`${styles.notificationIcon} ${styles.textInfo}`}
          />
        );
    }
  };

  const handleRead = async (id) => {
    try {
      await fetch(`/api/notifications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isRead: true }),
      });
      router.refresh();
    } catch (err) {
      console.error("خطا در بروزرسانی نوتیف:", err);
    }
  };

  const getProfileUrlPerson = () => {
    if (admin) return `/adminProfile/${admin._id}`;
    if (consultantInfo) return `/consultantDetails/${consultantInfo._id}`;
    if (user) return `/userProfile/${user._id}`;
    return "#";
  };

  return (
    <header className={styles.topbarContainer}>
      <div className={styles.logoBox}>
        <a href="/" className={styles.logo}>
          <div className={styles.logoMini}>
            <img
              src="/images/logo-w-bg.png"
              alt="logo"
              className={styles.logoImage}
            />
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
                onClick={toggleSidebar}
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
                      placeholder="جستجو..."
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
            {/* تمام صفحه */}
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

            {/* اعلان‌ها */}
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
                {notifications?.length > 0 && (
                  <span className={styles.badge}>{notifications.length}</span>
                )}
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
                        {notifications && notifications.length > 0 ? (
                          notifications.map((n) => (
                            <li key={n._id}>
                              <a
                                href={n.link || "#"}
                                className={styles.dropdownItem}
                                onClick={() => handleRead(n._id)}
                              >
                                {getIcon(n.icon)}
                                <span className={styles.notificationText}>
                                  {n.text}
                                </span>
                              </a>
                            </li>
                          ))
                        ) : (
                          <li className={styles.noNotif}>
                            فعلاً اعلانی وجود ندارد
                          </li>
                        )}
                      </ul>
                    </li>

                    <li className={styles.dropdownDivider} />
                    <li className={styles.dropdownFooter}>
                      <a href="/notifications" className={styles.dropdownItem}>
                        مشاهده همه
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* منوی کاربر */}
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
                        href={getProfileUrlPerson()}
                      >
                        <FaUser className={styles.dropdownIcon} />
                        <span className={styles.dropdownText}>پروفایل</span>
                      </Link>
                      <Link className={styles.dropdownItem} href="/contact">
                        <FaEnvelope className={styles.dropdownIcon} />
                        <span className={styles.dropdownText}>ارتباطات</span>
                      </Link>
                      <Link className={styles.dropdownItem} href="/soon">
                        <FaCog className={styles.dropdownIcon} />
                        <span className={styles.dropdownText}>تنظیمات</span>
                      </Link>
                      <div className={styles.dropdownDivider} />
                      <a
                        className={styles.dropdownItem}
                        href="#"
                        onClick={signOutUser}
                      >
                        <FaSignOutAlt className={styles.dropdownIcon} />
                        <span className={styles.dropdownText}>خروج</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* آیکون تنظیمات */}
            <li className={styles.navItem}>
              <Link href="/soon" className={styles.navLink} title="تنظیمات">
                <FaCog className={styles.svgIcon} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Topbar;
