import React from "react";
import styles from "./HouseDetails.module.css";
import Swiper from "./swiper/Swiper";
import BasicInfo from "./basicInfo/BasicInfo";
import Options from "./options/Options";
import ConsultantInfo from "./consultantInfo/ConsultantInfo";
import InfoTable from "./infoTable/InfoTable";
import MapHouse from "./mapHouse/MapHouse";
import ReqForm from "./reqForm/ReqForm";

function HouseDetails({ house }) {

  return (
    <div className={styles["content-wrapper"]}>
      <div className={styles["container-full"]}>
        <section className={styles.content}>
          <div className={styles.row}>
            {/* بخش اصلی (چپ) */}
            <div className={styles.left_bar}>
              {/* اسلایدر تصاویر */}
              <Swiper images={house.images} />

              {/* اطلاعات اصلی ملک */}
              <BasicInfo house={house} /> 

              {/* بخش امکانات */}
              <Options features={house.features} />

              {/* نقشه موقعیت */}
              <MapHouse  fullAddress={house.fullAddress} />
            </div>

            {/* سایدبار (راست) */}
            <div className={styles.right_bar}>
              {/* پروفایل مشاور */}
              <ConsultantInfo  consultant={house.consultant} />

              {/* فرم درخواست بازدید */}
              <ReqForm  codeHouse={house.codeHouse}  codeConsultant={house.consultant.hisCode} />

              {/* مشخصات فنی */}
              <InfoTable  house={house}   />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HouseDetails;
