"use client";
import React, { useState } from "react";
import styles from "../../../consultantDetails/timeLineTab/TimeLineTab.module.css";
import { FaClock, FaPhone, FaEnvelope, FaImage } from "react-icons/fa";

function ContactTabs({ contacts: initialContacts }) {
  const [visibleContacts, setVisibleContacts] = useState(3);
  const [contacts, setContacts] = useState(
    initialContacts.slice(0, visibleContacts)
  );

  const toPersianStrDigits = (str) => {
    return str?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const loadMoreContacts = () => {
    const newVisibleContacts = visibleContacts + 2;
    setVisibleContacts(newVisibleContacts);
    setContacts(initialContacts.slice(0, newVisibleContacts));
  };

  return (
    <>
      <div className={`${styles.tabPane} ${styles.active}`} id="usertimeline">
        <div className={styles.section}>
          <h2 className={`${styles.sectionTitle} Anjoman_Bold`}>
            <FaEnvelope className={styles.icon} /> تماس‌ها
          </h2>

          {contacts.length > 0 ? (
            <>
              <div className={styles.cardsContainer}>
                {contacts.map((contact) => (
                  <div key={contact._id} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <h3 className={`${styles.clientName} Anjoman_SemiBold`}>
                        {contact.name}
                      </h3>
                      <span className={styles.badgeInfo}>تماس جدید</span>
                    </div>

                    <div className={styles.cardBody}>
                      {contact.phone && (
                        <p className={styles.cardText}>
                          <span className={styles.label}>تلفن:</span>
                          <span className={styles.value}>
                            <FaPhone className={styles.icon} />{" "}
                            {toPersianStrDigits(contact.phone)}
                          </span>
                        </p>
                      )}

                      <p className={styles.cardText}>
                        <span className={styles.label}>ایمیل:</span>
                        <span className={`${styles.value} ${styles.value_set}`}>
                          <FaEnvelope className={styles.icon} /> {contact.email}
                        </span>
                      </p>

                      {contact.img && (
                        <p className={styles.cardText}>
                          <span className={styles.label}>تصویر:</span>
                          <span
                            className={`${styles.value} ${styles.value_set}`}
                          >
                            <FaImage className={styles.icon} /> پیوست شده
                          </span>
                        </p>
                      )}

                      <p className={styles.cardText}>
                        <span className={styles.label}>پیام:</span>
                        <span
                          className={`${styles.value} ${styles["fix-set"]}`}
                        >
                          {contact.description}
                        </span>
                      </p>
                    </div>

                    <div className={styles.cardFooter}>
                      <span className={styles.date}>
                        <FaClock className={styles.icon} />{" "}
                        {formatDate(contact.createdAt)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {visibleContacts < initialContacts.length && (
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.loadMoreBtn}
                    onClick={loadMoreContacts}
                  >
                    نمایش تماس‌های بیشتر
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className={styles.noData}>تماسی یافت نشد</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ContactTabs;
