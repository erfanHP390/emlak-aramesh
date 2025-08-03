"use client";
import React from "react";
import styles from "./CardConsultant.module.css";
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

function CardConsultant({ image, firstName, lastName, phone, email, socials }) {
  const renderSocialIcons = () => {
    if (!socials || !socials.length) return null;

    const socialNetworks = socials[0]
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
            <FaInstagram />
          </a>
        )}
        {socialNetworks.includes("telegram") && (
          <a
            href="#"
            className={`${styles.socialBtn} ${styles.telegramBtn}`}
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
        )}
        {socialNetworks.includes("facebook") && (
          <a
            href="#"
            className={`${styles.socialBtn} ${styles.facebookBtn}`}
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        )}
        {socialNetworks.includes("twitter") && (
          <a
            href="#"
            className={`${styles.socialBtn} ${styles.twitterBtn}`}
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        )}
        {socialNetworks.includes("whatsapp") && (
          <a
            href="#"
            className={`${styles.socialBtn} ${styles.whatsappBtn}`}
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        )}
        {socialNetworks.includes("linkedin") && (
          <a
            href="#"
            className={`${styles.socialBtn} ${styles.linkedinBtn}`}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        )}
      </>
    );
  };

  return (
    <div className={styles.consultantCol}>
      <div className={styles.consultantCard}>
        <div className={`${styles.cardHeader} ${styles.noBorder}`}>
          <a href="#" className={styles.imageLink}>
            <img
              className={styles.cardImage}
              src={image ? image : "/images/abstract-user-flat-4.svg"}
              alt={`${firstName} ${lastName}`}
              onError={(e) => {
                e.target.src = "/images/abstract-user-flat-4.svg";
              }}
              loading="lazy"
            />
          </a>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.textCenter}>
            <div className={styles.socialIcons}>
              {renderSocialIcons()}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className={`${styles.socialBtn} ${styles.emailBtn}`}
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className={`${styles.socialBtn} ${styles.phoneBtn}`}
                  aria-label="Phone"
                >
                  <FaPhone />
                </a>
              )}
            </div>
            <h3 className={styles.consultantName}>
              <a href="#" className={styles.consultantNameLink}>
                {`${firstName} ${lastName}`}
              </a>
            </h3>
            {phone && (
              <h6 className={styles.consultantInfo}>
                <FaPhone className={styles.contactIcon} />
                {toPersianDigits(phone)}
              </h6>
            )}
            {email && (
              <p className={styles.consultantEmail}>
                <FaEnvelope className={styles.contactIcon} />
                {email}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardConsultant;
