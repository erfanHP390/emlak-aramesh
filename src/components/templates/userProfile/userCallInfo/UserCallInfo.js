import React from "react";
import styles from "../../consultantDetails/consultantCallInfo/ConsultantCallInfo.module.css";
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

function UserCallInfo({user}) {
  return (
    <>
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
                    {user.email}
                  </span>
                </p>
                <p className={`${styles.contactItem} ${styles.anjomanRegular}`}>
                  شناسه صنفی املاک ثبت نام شده:
                  <span
                    className={`${styles.contactValue} ${styles.anjomanRegular}`}
                  >
                    {toPersianDigits(Number(user.guildID))}
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
                  {user.email && (
                    <a
                      href={`mailto:${user.email}`}
                      className={`${styles.socialBtn} ${styles.emailBtn}`}
                      aria-label="Email"
                    >
                      <FaEnvelope className={styles.socialIcon} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCallInfo
