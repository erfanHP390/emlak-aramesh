"use client";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import {
  MdDashboard,
  MdApartment,
  MdAddHome,
  MdPriceChange,
  MdOutlinePassword,
} from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { TbError404 } from "react-icons/tb";
import { Lia500Px } from "react-icons/lia";
import {
  FaListAlt,
  FaPlusCircle,
  FaInfoCircle,
  FaUserTie,
  FaUserEdit,
  FaFileInvoice,
  FaUser,
  FaQuestion,
  FaLock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoChevronBackSharp, IoChevronDown, IoLogIn } from "react-icons/io5";
import { FaHouseChimney, FaUserGroup } from "react-icons/fa6";
import {
  RiHomeOfficeFill,
  RiProfileFill,
  RiPagesFill,
  RiPassValidFill,
} from "react-icons/ri";
import { GiHutsVillage } from "react-icons/gi";

function Sidebar({ user }) {
  const [openSubmenus, setOpenSubmenus] = useState({
    propertyType: false,
    consultants: false,
    pages: false,
    auth: false,
    essential: false,
  });

  const [submenuHeights, setSubmenuHeights] = useState({
    propertyType: "0px",
    consultants: "0px",
    pages: "0px",
    auth: "0px",
    essential: "0px",
  });

  const toggleSubmenu = (menuName) => {
    setOpenSubmenus((prev) => {
      const newState = {
        ...prev,
        [menuName]: !prev[menuName],
      };

      // Update heights after state change
      setTimeout(() => {
        setSubmenuHeights((prevHeights) => ({
          ...prevHeights,
          [menuName]: newState[menuName] ? "auto" : "0px",
        }));
      }, 0);

      return newState;
    });
  };

  return (
    <aside className={styles.sidebarContainer}>
      {/* User Profile Section */}
      <div className={styles.userProfile}>
        <img
          src="/images/abstract-user-flat-4.svg"
          alt="User Profile"
          className={styles.userImage}
        />
        <span className={styles.userName}>{user ? user.name : "کاربر"}</span>

        <div className={styles.userSettings}>
          <a href="#" title="تنظیمات">
            <FaCog className={styles.icon_font} />
          </a>
          <a href="#" title="خروج">
            <FaSignOutAlt className={styles.icon_font} />
          </a>
          <a href="#" title="قفل">
            <FaLock className={styles.icon_font} />
          </a>
        </div>
      </div>

      {/* Main Menu */}
      <div className={styles.menuContainer}>
        <h4 className={styles.menuHeader}>منو</h4>
        <ul className={styles.menuList}>
          <li className={`${styles.menuItem} ${styles.active}`}>
            <a href="index.html" className={styles.menuLink}>
              <MdDashboard className={styles.menuIcon} />
              <span className={styles.menuText}>داشبورد</span>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a href="propertylist.html" className={styles.menuLink}>
              <FaListAlt className={styles.menuIcon} />
              <span className={styles.menuText}>لیست املاک</span>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a href="propertygrid.html" className={styles.menuLink}>
              <BiSolidBuildingHouse className={styles.menuIcon} />
              <span className={styles.menuText}>املاک</span>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a href="addproperty.html" className={styles.menuLink}>
              <FaPlusCircle className={styles.menuIcon} />
              <span className={styles.menuText}>ثبت ملک</span>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a href="propertydetails.html" className={styles.menuLink}>
              <FaInfoCircle className={styles.menuIcon} />
              <span className={styles.menuText}>جزئیات ملک</span>
            </a>
          </li>

          {/* Property Type Submenu */}
          <li className={styles.menuItem}>
            <div
              className={`${styles.menuLink} ${styles.menuLinkWithSubmenu}`}
              onClick={() => toggleSubmenu("propertyType")}
            >
              <div className={styles.menuIconText}>
                <FaHouseChimney className={styles.menuIcon} />
                <span className={styles.menuText}>نوع ملک</span>
              </div>
              {openSubmenus.propertyType ? (
                <IoChevronDown className={styles.chevronIcon} />
              ) : (
                <IoChevronBackSharp className={styles.chevronIcon} />
              )}
            </div>
            <div
              className={styles.submenuWrapper}
              style={{
                height: submenuHeights.propertyType,
                transition: "height 0.3s ease-in-out",
              }}
            >
              <ul className={styles.submenu}>
                <li className={styles.submenuItem}>
                  <a href="apartment.html" className={styles.submenuLink}>
                    <MdApartment className={styles.submenuIcon} />
                    <span className={styles.text_link}>آپارتمان</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a href="office.html" className={styles.submenuLink}>
                    <RiHomeOfficeFill className={styles.submenuIcon} />
                    <span className={styles.text_link}>اداره</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a href="shop.html" className={styles.submenuLink}>
                    <MdAddHome className={styles.submenuIcon} />
                    <span className={styles.text_link}>خرید املاک</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a href="villa.html" className={styles.submenuLink}>
                    <GiHutsVillage className={styles.submenuIcon} />
                    <span className={styles.text_link}>ویلا</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Consultants Submenu */}
          <li className={styles.menuItem}>
            <div
              className={`${styles.menuLink} ${styles.menuLinkWithSubmenu}`}
              onClick={() => toggleSubmenu("consultants")}
            >
              <div className={styles.menuIconText}>
                <FaUserTie className={styles.menuIcon} />
                <span className={styles.menuText}>مشاوران</span>
              </div>
              {openSubmenus.consultants ? (
                <IoChevronDown className={styles.chevronIcon} />
              ) : (
                <IoChevronBackSharp className={styles.chevronIcon} />
              )}
            </div>
            <div
              className={styles.submenuWrapper}
              style={{
                height: submenuHeights.consultants,
                transition: "height 0.3s ease-in-out",
              }}
            >
              <ul className={styles.submenu}>
                <li className={styles.submenuItem}>
                  <a href="agentslist.html" className={styles.submenuLink}>
                    <FaUserGroup className={styles.submenuIcon} />
                    <span className={styles.text_link}>همه مشاوران</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a href="addagent.html" className={styles.submenuLink}>
                    <FaUserEdit className={styles.submenuIcon} />
                    <span className={styles.text_link}>عضویت مشاور</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a href="agentprofile.html" className={styles.submenuLink}>
                    <RiProfileFill className={styles.submenuIcon} />
                    <span className={styles.text_link}>پروفایل مشاور</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Pages Submenu */}
          <li className={styles.menuItem}>
            <div
              className={`${styles.menuLink} ${styles.menuLinkWithSubmenu}`}
              onClick={() => toggleSubmenu("pages")}
            >
              <div className={styles.menuIconText}>
                <RiPagesFill className={styles.menuIcon} />
                <span className={styles.menuText}>صفحات</span>
              </div>
              {openSubmenus.pages ? (
                <IoChevronDown className={styles.chevronIcon} />
              ) : (
                <IoChevronBackSharp className={styles.chevronIcon} />
              )}
            </div>
            <div
              className={styles.submenuWrapper}
              style={{
                height: submenuHeights.pages,
                transition: "height 0.3s ease-in-out",
              }}
            >
              <ul className={styles.submenu}>
                <li className={styles.submenuItem}>
                  <a href="invoice.html" className={styles.submenuLink}>
                    <FaFileInvoice className={styles.submenuIcon} />
                    <span className={styles.text_link}>فاکتور</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a href="invoicelist.html" className={styles.submenuLink}>
                    <FaFileInvoice className={styles.submenuIcon} />
                    <span className={styles.text_link}>لیست فاکتورها</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a href="extra_profile.html" className={styles.submenuLink}>
                    <FaUser className={styles.submenuIcon} />
                    <span className={styles.text_link}>پروفایل کاربر</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a
                    href="contact_userlist_grid.html"
                    className={styles.submenuLink}
                  >
                    <FaUserGroup className={styles.submenuIcon} />
                    <span className={styles.text_link}>لیست کاربران</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a href="sample_faq.html" className={styles.submenuLink}>
                    <FaQuestion className={styles.submenuIcon} />
                    <span className={styles.text_link}>سوالات</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a href="sample_pricing.html" className={styles.submenuLink}>
                    <MdPriceChange className={styles.submenuIcon} />
                    <span className={styles.text_link}>قیمت</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className={styles.menuItem}>
            <a href="contact.html" className={styles.menuLink}>
              <GrContact className={styles.menuIcon} />
              <span className={styles.menuText}>ارتباطات</span>
            </a>
          </li>

          {/* Authentication Submenu */}
          <li className={styles.menuItem}>
            <div
              className={`${styles.menuLink} ${styles.menuLinkWithSubmenu}`}
              onClick={() => toggleSubmenu("auth")}
            >
              <div className={styles.menuIconText}>
                <RiPassValidFill className={styles.menuIcon} />
                <span className={styles.menuText}>احراز هویت</span>
              </div>
              {openSubmenus.auth ? (
                <IoChevronDown className={styles.chevronIcon} />
              ) : (
                <IoChevronBackSharp className={styles.chevronIcon} />
              )}
            </div>
            <div
              className={styles.submenuWrapper}
              style={{
                height: submenuHeights.auth,
                transition: "height 0.3s ease-in-out",
              }}
            >
              <ul className={styles.submenu}>
                <li className={styles.submenuItem}>
                  <a href="auth_login.html" className={styles.submenuLink}>
                    <IoLogIn className={styles.submenuIcon} />
                    <span className={styles.text_link}>ورود</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a href="auth_register.html" className={styles.submenuLink}>
                    <IoLogIn className={styles.submenuIcon} />
                    <span className={styles.text_link}>ثبت نام</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a href="auth_lockscreen.html" className={styles.submenuLink}>
                    <FaLock className={styles.submenuIcon} />
                    <span className={styles.text_link}>قفل صفحه</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a href="auth_user_pass.html" className={styles.submenuLink}>
                    <MdOutlinePassword className={styles.submenuIcon} />
                    <span className={styles.text_link}>بازیابی رمزعبور</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Essential Pages Submenu */}
          <li className={styles.menuItem}>
            <div
              className={`${styles.menuLink} ${styles.menuLinkWithSubmenu}`}
              onClick={() => toggleSubmenu("essential")}
            >
              <div className={styles.menuIconText}>
                <RiPagesFill className={styles.menuIcon} />
                <span className={styles.menuText}>صفحات لازم</span>
              </div>
              {openSubmenus.essential ? (
                <IoChevronDown className={styles.chevronIcon} />
              ) : (
                <IoChevronBackSharp className={styles.chevronIcon} />
              )}
            </div>
            <div
              className={styles.submenuWrapper}
              style={{
                height: submenuHeights.essential,
                transition: "height 0.3s ease-in-out",
              }}
            >
              <ul className={styles.submenu}>
                <li className={styles.submenuItem}>
                  <a href="error_404.html" className={styles.submenuLink}>
                    <TbError404 className={styles.submenuIcon} />
                    <span className={styles.text_link}>خطا 404</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a href="error_500.html" className={styles.submenuLink}>
                    <Lia500Px className={styles.submenuIcon} />
                    <span className={styles.text_link}>خطا 500</span>
                  </a>
                </li>
                <li className={styles.submenuItem}>
                  <a
                    href="error_maintenance.html"
                    className={styles.submenuLink}
                  >
                    <span className={styles.text_link}>بروزرسانی</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
