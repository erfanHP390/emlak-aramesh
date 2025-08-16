"use client";
import React, { useState } from "react";
import styles from "./ConsultantTab.module.css";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBirthdayCake,
  FaIdCard,
  FaCalendarAlt,
  FaHome,
  FaUsers,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

function ConsultantTab({ consultants: initialConsultants }) {
  const [visibleConsultants, setVisibleConsultants] = useState(3);
  const [consultants, setConsultants] = useState(
    initialConsultants.slice(0, visibleConsultants)
  );

  const toPersianDigits = (str) => {
    return str?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const loadMoreConsultants = () => {
    const newVisibleConsultants = visibleConsultants + 3;
    setVisibleConsultants(newVisibleConsultants);
    setConsultants(initialConsultants.slice(0, newVisibleConsultants));
  };

  const getSocialIcon = (url) => {
    if (url.includes("instagram"))
      return <FaInstagram className={styles.socialIcon} />;
    if (url.includes("t.me"))
      return <FaTelegram className={styles.socialIcon} />;
    if (url.includes("linkedin"))
      return <FaLinkedin className={styles.socialIcon} />;
    if (url.includes("wa.me"))
      return <FaWhatsapp className={styles.socialIcon} />;
    return null;
  };

  return (
    <div className={styles.consultantsContainer}>
      <div className={styles.headerSection}>
        <h2 className={`${styles.sectionTitle} Anjoman_Bold`}>
          <FaUser className={styles.icon} /> لیست مشاورین
        </h2>
      </div>

      {consultants.length > 0 ? (
        <>
          <div className={styles.consultantsGrid}>
            {consultants.map((consultant) => (
              <div key={consultant._id} className={styles.consultantCard}>
                <div className={styles.cardHeader}>
                  <Link
                    href={`/consultantDetails/${consultant._id}`}
                    className={`${styles.consultantName} Anjoman_SemiBold`}
                  >
                    {consultant.firstName} {consultant.lastName}
                  </Link>
                  <span
                    className={`${consultant.sex === "male" ? styles.badgeMale : styles.badgeFemale} Anjoman_Medium`}
                  >
                    {consultant.sex === "male" ? "آقا" : "خانم"}
                  </span>
                </div>

                <div className={styles.cardImageContainer}>
                  {consultant.img ? (
                    <img
                      src={consultant.img}
                      alt={`${consultant.firstName} ${consultant.lastName}`}
                      className={styles.consultantImage}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <FaUser className={styles.placeholderIcon} />
                    </div>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.detailsRow}>
                    <div className={styles.consultantDetail}>
                      <FaIdCard className={styles.detailIcon} />
                      <span className={`${styles.detailLabel} Anjoman_Medium`}>کد مشاور:</span>
                      <span className={`${styles.detailValue} Anjoman_Medium`}>
                        {toPersianDigits(consultant.hisCode)}
                      </span>
                    </div>

                    <div className={styles.consultantDetail}>
                      <FaPhone className={styles.detailIcon} />
                      <span className={`${styles.detailLabel} Anjoman_Medium`}>تلفن:</span>
                      <span className={`${styles.detailValue} Anjoman_Medium`}>
                        {toPersianDigits(consultant.phone)}
                      </span>
                    </div>
                  </div>

                  <div className={styles.detailsRow}>
                    <div className={styles.consultantDetail}>
                      <FaBirthdayCake className={styles.detailIcon} />
                      <span className={`${styles.detailLabel} Anjoman_Medium`}>سن:</span>
                      <span className={`${styles.detailValue} Anjoman_Medium`}>
                        {toPersianDigits(consultant.age)} سال
                      </span>
                    </div>

                    <div className={styles.consultantDetail}>
                      <FaEnvelope className={styles.detailIcon} />
                      <span className={`${styles.detailLabel} Anjoman_Medium`}>ایمیل:</span>
                      <span className={`${styles.detailValue} Anjoman_Medium`}>
                        {consultant.email}
                      </span>
                    </div>
                  </div>

                  <div className={styles.statsRow}>
                    <div className={`${styles.statItem} Anjoman_Medium`}>
                      <FaHome className={styles.statIcon} />
                      <span>
                        {toPersianDigits(consultant.houses.length)}{" "}
                        ملک
                      </span>
                    </div>
                    <div className={`${styles.statItem} Anjoman_Medium`}>
                      <FaUsers className={styles.statIcon} />
                      <span>
                        {toPersianDigits(consultant.clients.length)}{" "}
                        مشتری
                      </span>
                    </div>
                  </div>

                  {consultant.description && (
                    <div className={styles.descriptionContainer}>
                      <h4
                        className={`${styles.descriptionTitle} Anjoman_Medium`}
                      >
                        توضیحات:
                      </h4>
                      <p
                        className={`${styles.descriptionText} Anjoman_Regular`}
                      >
                        {consultant.description}
                      </p>
                    </div>
                  )}

                  {consultant.socials && consultant.socials.length > 0 && (
                    <div className={styles.socialsContainer}>
                      <h4 className={`${styles.socialsTitle} Anjoman_Medium`}>
                        شبکه‌های اجتماعی:
                      </h4>
                      <div className={styles.socialsList}>
                        {consultant.socials.map((social, index) => (
                          <a
                            key={index}
                            href={social}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                          >
                            {getSocialIcon(social)}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.footerItem}>
                    <FaCalendarAlt className={styles.footerIcon} />
                    <span className="Anjoman_Regular">
                      {formatDate(consultant.createdAt)}
                    </span>
                  </div>
                  <div className={styles.footerItem}>
                    <span className="Anjoman_Regular">
                      آژانس: {toPersianDigits(consultant.agencyID)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleConsultants < initialConsultants.length && (
            <div className={styles.buttonContainer}>
              <button
                className={`${styles.loadMoreBtn} Anjoman_Medium`}
                onClick={loadMoreConsultants}
              >
                نمایش مشاورین بیشتر
              </button>
            </div>
          )}
        </>
      ) : (
        <div className={styles.noData}>
          <p className="Anjoman_Regular">مشاوری یافت نشد</p>
        </div>
      )}
    </div>
  );
}

export default ConsultantTab;
