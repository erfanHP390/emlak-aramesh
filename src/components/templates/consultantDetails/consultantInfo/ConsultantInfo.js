import React from "react";
import styles from "./ConsultantInfo.module.css";
import { toPersianDigits } from "@/utils/constants";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function ConsultantInfo({ consultant, clients, houses, user }) {
  return (
    <>
      {" "}
      {user ? (
        <>
          {" "}
          <div className={styles.box}>
            <div className={styles.boxBody}>
              <div className={styles.profileSection}>
                <div className={styles.avatarWrapper}>
                  <img
                    src={"/images/abstract-user-flat-4.svg"}
                    alt="user profile"
                    className={styles.profileImage}
                    width={150}
                    height={150}
                  />
                </div>
                <div className={styles.userInfo}>
                  <h3 className={`${styles.userName} Anjoman_SemiBold`}>
                    {`${user.name}`}
                  </h3>
                  <h6 className={`${styles.userLocation} Anjoman_Regular`}>
                    {user.role === "USER" ? "کاربر" : ""}
                  </h6>
                  <button className={`${styles.callButton} Anjoman_Medium`}>
                    <i className={`ti-plus ${styles.callIcon}`} /> تماس
                  </button>
                </div>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} Anjoman_Bold`}>
                    {""}
                  </h2>
                  <h6 className={`${styles.statLabel} Anjoman_Regular`}>
                    تعداد درخواست ها
                  </h6>
                </div>
                {/* betwwen */}
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} Anjoman_Bold`}>
                    {""}
                  </h2>
                  <h6 className={`${styles.statLabel} Anjoman_Regular`}>
                    مشتریان
                  </h6>
                </div>
              </div>
            </div>

            <div className={styles.boxFooter}>
              <button className={`${styles.callButton} Anjoman_Medium`}>
                {user.isAccept ? "تایید شده" : "عدم تایید"}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className={styles.box}>
            <div className={styles.boxBody}>
              <div className={styles.profileSection}>
                <div className={styles.avatarWrapper}>
                  <img
                    src={
                      consultant
                        ? consultant.img
                        : "images/abstract-user-flat-4.svg"
                    }
                    alt="user profile"
                    className={styles.profileImage}
                    width={150}
                    height={150}
                  />
                </div>
                <div className={styles.userInfo}>
                  <h3 className={`${styles.userName} Anjoman_SemiBold`}>
                    {`${consultant.firstName}  ${consultant.lastName}`}
                  </h3>
                  <h6 className={`${styles.userLocation} Anjoman_Regular`}>
                    {` کد مشاور: ${toPersianDigits(
                      Number(consultant.hisCode)
                    )}`}
                  </h6>
                  <button className={`${styles.callButton} Anjoman_Medium`}>
                    <i className={`ti-plus ${styles.callIcon}`} /> تماس
                  </button>
                </div>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} Anjoman_Bold`}>
                    {toPersianDigits(Number(houses.length))}
                  </h2>
                  <h6 className={`${styles.statLabel} Anjoman_Regular`}>
                    ملک های ثبت شده
                  </h6>
                </div>
                {/* betwwen */}
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} Anjoman_Bold`}>
                    {toPersianDigits(Number(clients.length))}
                  </h2>
                  <h6 className={`${styles.statLabel} Anjoman_Regular`}>
                    مشتریان
                  </h6>
                </div>
              </div>
            </div>

            <div className={styles.boxFooter}>
              <p className={`${styles.infoText} Anjoman_Regular`}>
                {consultant.description}
              </p>
              {/* <ul className={styles.socialList}>
          <li className={styles.socialItem}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <IoMdCall className={` ${styles.socialIcon}`} />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <MdEmail className={` ${styles.socialIcon}`} />
            </a>
          </li>
        </ul> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ConsultantInfo;
