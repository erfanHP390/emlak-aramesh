import React from "react";
import styles from "./CardConsultant.module.css";

function CardConsultant() {
  return (
    <div className={styles.consultantCol}>
      <div className={styles.consultantCard}>
        <div className={`${styles.cardHeader} ${styles.noBorder}`}>
          <a href="#">
            <img
              className={styles.cardImage}
              src="images/avatar/375x200/4.jpg"
              alt="مشاور"
            />
          </a>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.textCenter}>
            <div className={styles.socialIcons}>
              <a
                href="#"
                className={`${styles.socialBtn} ${styles.facebookBtn}`}
              >
                <i className="fa fa-facebook" />
              </a>
              <a
                href="#"
                className={`${styles.socialBtn} ${styles.instagramBtn}`}
              >
                <i className="fa fa-instagram" />
              </a>
              <a
                href="#"
                className={`${styles.socialBtn} ${styles.twitterBtn}`}
              >
                <i className="fa fa-twitter" />
              </a>
              <a href="#" className={`${styles.socialBtn} ${styles.emailBtn}`}>
                <i className="fa fa-envelope" />
              </a>
            </div>
            <h3 className={styles.consultantName}>
              <a href="#" className={styles.consultantNameLink}>
                محسن
              </a>
            </h3>
            <h6 className={styles.consultantInfo}>
              <i className={`fa fa-phone ${styles.contactIcon}`} />
              +1 123 456 7890
            </h6>
            <p className={styles.consultantEmail}>
              <i className={`fa fa-envelope ${styles.contactIcon}`} />{" "}
              Info@dummy.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardConsultant;
