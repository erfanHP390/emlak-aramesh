import React from "react";
import styles from "../../consultantDetails/consultantInfo/ConsultantInfo.module.css";
import { toPersianDigits } from "@/utils/constants";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function ConsultantInfo({ user }) {
  return (
    <>
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
              <h2 className={`${styles.statNumber} Anjoman_Bold`}>{"1"}</h2>
              <h6 className={`${styles.statLabel} Anjoman_Regular`}>
                تعداد درخواست ها
              </h6>
            </div>
            {/* betwwen */}
            <div className={styles.statItem}>
              <h2 className={`${styles.statNumber} Anjoman_Bold`}>{"1"}</h2>
              <h6 className={`${styles.statLabel} Anjoman_Regular`}>
                تعداد دفعات مشتری
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConsultantInfo;
