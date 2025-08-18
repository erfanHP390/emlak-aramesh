"use client";
import React from "react";
import styles from "./ConsultantCallInfo.module.css";
import { toPersianDigits } from "@/utils/constants";
import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function ConsultantCallInfo({ consultant = {} }) {
  const {
    socials = [],
    email = "",
    phone = "",
    age = 0,
    agencyID = 0,
  } = consultant;

  const renderSocialIcons = () => {
    if (!socials || socials.length === 0) return null;

    if (typeof socials[0] === "string") {
      return socials.map((link, index) => {
        if (!link) return null;

        if (link.includes("instagram.com")) {
          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialBtn} ${styles.instagramBtn}`}
              aria-label="Instagram"
            >
              <FaInstagram className={styles.socialIcon} />
            </a>
          );
        } else if (link.includes("telegram.me") || link.includes("t.me")) {
          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialBtn} ${styles.telegramBtn}`}
              aria-label="Telegram"
            >
              <FaTelegram className={styles.socialIcon} />
            </a>
          );
        } else if (link.includes("facebook.com")) {
          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialBtn} ${styles.facebookBtn}`}
              aria-label="Facebook"
            >
              <FaFacebook className={styles.socialIcon} />
            </a>
          );
        } else if (link.includes("twitter.com") || link.includes("x.com")) {
          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialBtn} ${styles.twitterBtn}`}
              aria-label="Twitter"
            >
              <FaTwitter className={styles.socialIcon} />
            </a>
          );
        } else if (link.includes("whatsapp.com") || link.includes("wa.me")) {
          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialBtn} ${styles.whatsappBtn}`}
              aria-label="WhatsApp"
            >
              <FaWhatsapp className={styles.socialIcon} />
            </a>
          );
        } else if (link.includes("linkedin.com")) {
          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialBtn} ${styles.linkedinBtn}`}
              aria-label="LinkedIn"
            >
              <FaLinkedin className={styles.socialIcon} />
            </a>
          );
        }
        return null;
      });
    } else {
      const socialNetworks = (socials[0] || "")
        .split(",")
        .map((s) => s.trim().toLowerCase());

      return (
        <>
          {socialNetworks.includes("instagram") && (
            <a
              href="#"
              className={`${styles.socialBtn} ${styles.instagramBtn}`}
              aria-label="Instagram"
            >
              <FaInstagram className={styles.socialIcon} />
            </a>
          )}
          {socialNetworks.includes("telegram") && (
            <a
              href="#"
              className={`${styles.socialBtn} ${styles.telegramBtn}`}
              aria-label="Telegram"
            >
              <FaTelegram className={styles.socialIcon} />
            </a>
          )}
          {socialNetworks.includes("facebook") && (
            <a
              href="#"
              className={`${styles.socialBtn} ${styles.facebookBtn}`}
              aria-label="Facebook"
            >
              <FaFacebook className={styles.socialIcon} />
            </a>
          )}
          {socialNetworks.includes("twitter") && (
            <a
              href="#"
              className={`${styles.socialBtn} ${styles.twitterBtn}`}
              aria-label="Twitter"
            >
              <FaTwitter className={styles.socialIcon} />
            </a>
          )}
          {socialNetworks.includes("whatsapp") && (
            <a
              href="#"
              className={`${styles.socialBtn} ${styles.whatsappBtn}`}
              aria-label="WhatsApp"
            >
              <FaWhatsapp className={styles.socialIcon} />
            </a>
          )}
          {socialNetworks.includes("linkedin") && (
            <a
              href="#"
              className={`${styles.socialBtn} ${styles.linkedinBtn}`}
              aria-label="LinkedIn"
            >
              <FaLinkedin className={styles.socialIcon} />
            </a>
          )}
        </>
      );
    }
  };

  return (
    <div className={styles.box}>
      <div className={`${styles.boxBody} ${styles.boxProfile}`}>
        <div className={styles.row}>
          <div className={styles.col12}>
            <div className={styles.contactInfo}>
              <p className={`${styles.contactItem} ${styles.anjomanRegular}`}>
                ایمیل:
                <span
                  className={`${styles.contactValue} ${styles.anjomanRegular}`}
                >
                  {email || "ثبت نشده"}
                </span>
              </p>
              <p className={`${styles.contactItem} ${styles.anjomanRegular}`}>
                تلفن:
                <span
                  className={`${styles.contactValue} ${styles.anjomanRegular}`}
                >
                  {toPersianDigits(Number(phone || 0))}
                </span>
              </p>
              <p className={`${styles.contactItem} ${styles.anjomanRegular}`}>
                سن:
                <span
                  className={`${styles.contactValue} ${styles.anjomanRegular}`}
                >
                  {toPersianDigits(Number(age))}
                </span>
              </p>
              <p className={`${styles.contactItem} ${styles.anjomanRegular}`}>
                شناسه صنفی:
                <span
                  className={`${styles.contactValue} ${styles.anjomanRegular}`}
                >
                  {toPersianDigits(Number(agencyID))}
                </span>
              </p>
            </div>
          </div>
          <div className={styles.col12}>
            <div className={styles.socialSection}>
              <p className={`${styles.socialTitle} ${styles.anjomanRegular}`}>
                شبکه های اجتماعی
              </p>
              <div className={styles.socialIcons}>
                {renderSocialIcons()}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className={`${styles.socialBtn} ${styles.emailBtn}`}
                    aria-label="Email"
                  >
                    <FaEnvelope className={styles.socialIcon} />
                  </a>
                )}
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className={`${styles.socialBtn} ${styles.phoneBtn}`}
                    aria-label="Phone"
                  >
                    <FaPhone className={styles.socialIcon} />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className={styles.col12}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805244.1745767146!2d-86.32675167439648!3d29.383165774894163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C+USA!5e0!3m2!1sen!2sin!4v1501665415329"
                width="100%"
                height={100}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultantCallInfo;
