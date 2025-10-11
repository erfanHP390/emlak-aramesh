import CardConsultant from "@/components/modules/cardConsultant/CardConsultant";
import CardHouse from "@/components/modules/cardHouse/CardHouse";
import React from "react";
import styles from "./SearchingResult.module.css";

function SearchingResult({ consultants, houses, searchQuery }) {
  const hasResults = consultants.length > 0 || houses.length > 0;

  return (
    <div className={styles.searchingResult}>
      <div className={styles.searchHeader}>
        <h1 className={`${styles.searchTitle} Anjoman_Bold`}>نتایج جستجو</h1>
        {searchQuery && (
          <p className={`${styles.searchQuery} Anjoman_Medium`}>
            جستجو برای: "<strong>{searchQuery}</strong>"
          </p>
        )}
      </div>

      {!hasResults ? (
        <div className={styles.noResults}>
          <svg
            className={styles.noResultsIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#8B2E2C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8V12"
              stroke="#8B2E2C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16H12.01"
              stroke="#8B2E2C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className={`${styles.noResultsTitle} Anjoman_Bold`}>
            نتیجه‌ای یافت نشد
          </h3>
          <p className={`${styles.noResultsText} Anjoman_Regular`}>
            متأسفیم، نتیجه‌ای برای جستجوی شما پیدا نکردیم.
            <br />
            لطفاً عبارت دیگری را امتحان کنید.
          </p>
        </div>
      ) : (
        <>
          {consultants.length > 0 && (
            <section className={styles.resultsSection}>
              <h2 className={`${styles.sectionTitle} Anjoman_SemiBold`}>
                مشاوران ({consultants.length})
              </h2>
              <div className={styles.consultantsGrid}>
                {consultants.map((consultant) => (
                  <CardConsultant 
                    key={consultant._id} 
                    {...consultant} 
                    image={consultant.img} 
                    firstName={consultant.firstName}
                    lastName={consultant.lastName}
                    phone={consultant.phone}
                    email={consultant.email}
                    socials={consultant.socials}
                    _id={consultant._id}
                  />
                ))}
              </div>
            </section>
          )}

          {houses.length > 0 && (
            <section className={styles.resultsSection}>
              <h2 className={`${styles.sectionTitle} Anjoman_SemiBold`}>
                املاک ({houses.length})
              </h2>
              <div className={styles.housesGrid}>
                {houses.map((house) => (
                  <CardHouse
                    key={house._id}
                    _id={house._id}
                    name={house.name}
                    img={house.images} 
                    price={house.price}
                    location={house.location}
                    bedrooms={house.bedrooms}
                    parking={house.parking}
                    status={house.status}
                    floor={house.floor}
                    masterRoom={house.masterRoom}
                    storage={house.storage}
                    elevator={house.elevator}
                    yearBuilt={house.yearBuilt}
                    consultant={house.consultant}
                  />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}

export default SearchingResult;