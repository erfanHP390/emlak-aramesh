import React from "react";
import styles from "./HouseDetails.module.css";
import dynamic from "next/dynamic";
import BasicInfo from "./basicInfo/BasicInfo";
import Options from "./options/Options";
import ConsultantInfo from "./consultantInfo/ConsultantInfo";
import InfoTable from "./infoTable/InfoTable";
import ReqForm from "./reqForm/ReqForm";

const Swiper = dynamic(() => import("./swiper/Swiper"), { ssr: false });
const MapHouse = dynamic(() => import("./mapHouse/MapHouse"), { ssr: false });

function HouseDetails({ house }) {
  return (
    <div className={styles["content-wrapper"]}>
      <div className={styles["container-full"]}>
        <section className={styles.content}>
          <div className={styles.row}>
            <div className={styles.left_bar}>
              <Swiper images={house?.images || []} />
              <BasicInfo house={house} />
              <Options features={house?.features || []} />
              <MapHouse fullAddress={house?.fullAddress || ""} />
            </div>

            <div className={styles.right_bar}>
              <ConsultantInfo consultant={house.consultant} />
              <ReqForm
                codeHouse={house?.codeHouse}
                codeConsultant={house?.consultant?.hisCode}
              />
              <InfoTable house={house} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HouseDetails;
