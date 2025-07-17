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

function Sidebar() {
  const [openSubmenus, setOpenSubmenus] = useState({
    propertyType: false,
    consultants: false,
    pages: false,
    auth: false,
    essential: false,
  });

  const toggleSubmenu = (menuName) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <aside className={styles.sidebarContainer}>
      {/* User Profile Section */}
      <div className={styles.userProfile}>
        <img
          src="/images/avatar/1.jpg"
          alt="User Profile"
          className={styles.userImage}
        />
        <span className={styles.userName}>مختار مینائی</span>

        <div className={styles.userSettings}>
          <a href="#" title="تنظیمات">
            <i className="fas fa-cog"></i>
          </a>
          <a href="#" title="خروج">
            <i className="fas fa-sign-out-alt"></i>
          </a>
        </div>
      </div>

      {/* Main Menu */}
      <div className={styles.menuContainer}>
        <h4 className={styles.menuHeader}>منو</h4>
        <ul className={styles.menuList}>
          <li className={`${styles.menuItem} ${styles.active}`}>
            <a href="index.html" className={styles.menuLink}>
              <MdDashboard className={` ${styles.menuIcon}`} />
              <span>داشبورد</span>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a href="propertylist.html" className={styles.menuLink}>
              <FaListAlt className={` ${styles.menuIcon}`} />
              <span>لیست املاک</span>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a href="propertygrid.html" className={styles.menuLink}>
              <BiSolidBuildingHouse className={` ${styles.menuIcon}`} />
              <span>املاک</span>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a href="addproperty.html" className={styles.menuLink}>
              <FaPlusCircle className={` ${styles.menuIcon}`} />
              <span>ثبت ملک</span>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a href="propertydetails.html" className={styles.menuLink}>
              <FaInfoCircle className={` ${styles.menuIcon}`} />
              <span>جزئیات ملک</span>
            </a>
          </li>

          {/* Property Type Submenu */}
          <li className={styles.menuItem}>
            <div
              className={`${styles.menuLink}  ${styles.menu_link_title}`}
              onClick={() => toggleSubmenu("propertyType")}
            >
              <FaHouseChimney />
              <span>نوع ملک</span>
              {openSubmenus.propertyType ? (
                <IoChevronDown className={styles.menuIcon} />
              ) : (
                <IoChevronBackSharp className={styles.menuIcon} />
              )}
            </div>
            <ul
              className={`${styles.submenu} ${
                openSubmenus.propertyType ? styles.show : ""
              }`}
            >
              <li className={styles.submenuItem}>
                <a href="apartment.html" className={styles.submenuLink}>
                  <MdApartment />{" "}
                  <span className={styles.text_link}>آپارتمان</span>
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="office.html" className={styles.submenuLink}>
                  <RiHomeOfficeFill />
                  {"  "}
                  <span className={styles.text_link}>اداره</span>
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="shop.html" className={styles.submenuLink}>
                  <MdAddHome />
                  {"  "}
                  <span className={styles.text_link}>خرید املاک</span>
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="villa.html" className={styles.submenuLink}>
                  <GiHutsVillage />
                  {"  "}
                  <span className={styles.text_link}>ویلا</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Consultants Submenu */}
          <li className={styles.menuItem}>
            <div
              className={`${styles.menuLink}  ${styles.menu_link_title}`}
              onClick={() => toggleSubmenu("consultants")}
            >
              <FaUserTie />
              <span>مشاوران</span>
              {openSubmenus.propertyType ? (
                <IoChevronDown className={styles.menuIcon} />
              ) : (
                <IoChevronBackSharp className={styles.menuIcon} />
              )}
            </div>
            <ul
              className={`${styles.submenu} ${
                openSubmenus.consultants ? styles.show : ""
              }`}
            >
              <li className={styles.submenuItem}>
                <a href="agentslist.html" className={styles.submenuLink}>
                  <FaUserGroup />
                  {"  "}
                  <span className={styles.text_link}>همه مشاوران</span>
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="addagent.html" className={styles.submenuLink}>
                  <FaUserEdit />
                  {"  "}
                  <span className={styles.text_link}>عضویت مشاور</span>
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="agentprofile.html" className={styles.submenuLink}>
                  <RiProfileFill />
                  {"  "}
                  <span className={styles.text_link}>پروفایل مشاور</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Pages Submenu */}
          <li className={styles.menuItem}>
            <div
              className={`${styles.menuLink}  ${styles.menu_link_title}`}
              onClick={() => toggleSubmenu("pages")}
            >
              <RiPagesFill />
              <span>صفحات</span>
              {openSubmenus.propertyType ? (
                <IoChevronDown className={styles.menuIcon} />
              ) : (
                <IoChevronBackSharp className={styles.menuIcon} />
              )}
            </div>
            <ul
              className={`${styles.submenu} ${
                openSubmenus.pages ? styles.show : ""
              }`}
            >
              <li className={styles.submenuItem}>
                <a href="invoice.html" className={styles.submenuLink}>
                  <FaFileInvoice />
                  {"  "}
                  <span className={styles.text_link}>فاکتور</span>
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="invoicelist.html" className={styles.submenuLink}>
                  <FaFileInvoice />
                  {"  "}
                  <span className={styles.text_link}>لیست فاکتورها</span>
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="extra_profile.html" className={styles.submenuLink}>
                  <FaUser />
                  {"  "}
                  <span className={styles.text_link}>پروفایل کاربر</span>
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a
                  href="contact_userlist_grid.html"
                  className={styles.submenuLink}
                >
                  <FaUserGroup />
                  {"  "}
                  <span className={styles.text_link}>لیست کاربران</span>
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="sample_faq.html" className={styles.submenuLink}>
                  <FaQuestion />
                  {"  "}
                  <span className={styles.text_link}>سوالات</span>
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="sample_pricing.html" className={styles.submenuLink}>
                  <MdPriceChange />
                  {"  "}
                  <span className={styles.text_link}>قیمت</span>
                </a>
              </li>
            </ul>
          </li>

          <li className={styles.menuItem}>
            <a href="contact.html" className={styles.menuLink}>
              <GrContact className={`fas fa-envelope ${styles.menuIcon}`} />
              <span>ارتباطات</span>
            </a>
          </li>

          {/* Authentication Submenu */}
          <li className={styles.menuItem}>
            <div
              className={`${styles.menuLink}  ${styles.menu_link_title}`}
              onClick={() => toggleSubmenu("auth")}
            >
              <RiPassValidFill />
              <span>احراز هویت</span>
              {openSubmenus.propertyType ? (
                <IoChevronDown className={styles.menuIcon} />
              ) : (
                <IoChevronBackSharp className={styles.menuIcon} />
              )}
            </div>
            <ul
              className={`${styles.submenu} ${
                openSubmenus.auth ? styles.show : ""
              }`}
            >
              <li className={styles.submenuItem}>
                <a href="auth_login.html" className={styles.submenuLink}>
                  <IoLogIn />
                  {"  "}
                  <span className={styles.text_link}>ورود</span>
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="auth_register.html" className={styles.submenuLink}>
                  <IoLogIn />
                  {"  "}
                  <span className={styles.text_link}>ثبت نام</span>{" "}
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="auth_lockscreen.html" className={styles.submenuLink}>
                  <FaLock /> <span className={styles.text_link}>قفل صفحه</span>{" "}
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="auth_user_pass.html" className={styles.submenuLink}>
                  <MdOutlinePassword />{" "}
                  <span className={styles.text_link}>بازیابی رمزعبور</span>{" "}
                </a>
              </li>
            </ul>
          </li>

          {/* Essential Pages Submenu */}
          <li className={styles.menuItem}>
            <div
              className={`${styles.menuLink}  ${styles.menu_link_title}`}
              onClick={() => toggleSubmenu("essential")}
            >
              <RiPagesFill />
              <span>صفحات لازم</span>
              {openSubmenus.propertyType ? (
                <IoChevronDown className={styles.menuIcon} />
              ) : (
                <IoChevronBackSharp className={styles.menuIcon} />
              )}
            </div>
            <ul
              className={`${styles.submenu} ${
                openSubmenus.essential ? styles.show : ""
              }`}
            >
              <li className={styles.submenuItem}>
                <a href="error_404.html" className={styles.submenuLink}>
                  <TbError404 />
                  {"  "}
                  <span className={styles.text_link}>خطا 404</span>{" "}
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="error_500.html" className={styles.submenuLink}>
                  <Lia500Px /> {"  "}
                  <span className={styles.text_link}>خطا 500</span>{" "}
                </a>
              </li>
              <li className={styles.submenuItem}>
                <a href="error_maintenance.html" className={styles.submenuLink}>
                  بروزرسانی
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
