"use client";
import React, { useState } from "react";
import styles from "../HouseDetails.module.css";
import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ConsultantInfo({ consultant }) {
  const [showSocials, setShowSocials] = useState(false);

  const handleToggleSocials = () => {
    setShowSocials((prev) => !prev);
  };

  const renderSocialIcons = () => {
    if (!consultant?.socials?.length) return null;

    const socials = consultant.socials[0]
      .split(",")
      .map((s) => s.trim().toLowerCase());

    return (
      <div className={styles["social-icons"]}>
        {consultant.email && (
          <MdEmail className={styles.icon} data-icon="email" />
        )}
        {consultant.phone && (
          <FaPhone className={styles.icon} data-icon="phone" />
        )}
        {socials.includes("instagram") && (
          <FaInstagram className={styles.icon} data-icon="instagram" />
        )}
        {socials.includes("telegram") && (
          <FaTelegramPlane className={styles.icon} data-icon="telegram-plane" />
        )}
        {socials.includes("whatsapp") && (
          <FaWhatsapp className={styles.icon} data-icon="whatsapp" />
        )}
        {socials.includes("linkedin") && (
          <FaLinkedin className={styles.icon} data-icon="linkedin" />
        )}
        {socials.includes("twitter") && (
          <FaTwitter className={styles.icon} data-icon="twitter" />
        )}
      </div>
    );
  };

  return (
    <>
      <div className={`${styles.box} ${styles["agent-profile"]}`}>
        <div className={styles["box-body"]}>
          <div className={styles["agent-avatar-container"]}>
            <img
              src={
                consultant.img
                  ? consultant.img
                  : "/images/abstract-user-flat-4.svg"
              }
              alt={`مشاور املاک: ${consultant.firstName} - ${consultant.lastName}`}
              className={styles["agent-avatar"]}
            />
          </div>
          <h3 className={styles["agent-name"]}>
            {`${consultant.firstName} ${consultant.lastName}`}
          </h3>
          <p className={styles["agent-location"]}>
            {`کد مشاور: ${consultant.hisCode}`}
          </p>
          <p className={styles["agent-bio"]}>{consultant.description}</p>

          <div className={styles["agent-stats"]}>
            <div className={styles["agent-stat"]}>
              <strong>تعداد مشتریان</strong>
              <span>{consultant?.clients?.length || 0}</span>
            </div>
            <div className={styles["agent-stat"]}>
              <strong>تعداد املاک ثبت شده</strong>
              <span>{consultant?.houses?.length || 0}</span>
            </div>
          </div>

          <button
            onClick={handleToggleSocials}
            className={`${styles.btn} ${styles["btn-primary"]} ${styles["contact-btn"]}`}
          >
            <i className={`${styles.ti} ${styles["ti-phone"]}`} /> تماس با مشاور
          </button>

          {showSocials && renderSocialIcons()}
        </div>
      </div>
    </>
  );
}

export default ConsultantInfo;
