"use client";
import React, { useState } from "react";
import styles from "./HomesList.module.css";
import { toPersianDigits } from "@/utils/constants";
import CartHouse from "@/components/modules/cartHouse/CartHouse";

function HomesList({ houses: initialHouses }) {
  const [visibleHouses, setVisibleHouses] = useState(6);
  const [houses, setHouses] = useState(initialHouses.slice(0, visibleHouses));
  const [tempFilters, setTempFilters] = useState({
    status: "",
    kind: "",
    city: "",
    bedrooms: "",
    floor: "",
    priceRange: "",
    area: "",
    elevator: "",
    storage: "",
    masterRoom: "",
    generalFeatures: [],
    specialFeatures: [],
  });

  // استخراج مقادیر منحصر به فرد برای فیلترها از دیتابیس
  const uniqueStatuses = [
    ...new Set(initialHouses.map((house) => house.status)),
  ];
  const uniqueKinds = [...new Set(initialHouses.map((house) => house.kind))];
  const uniqueCities = [
    ...new Set(
      initialHouses.map((house) => {
        const city = house.location.split("،")[0].trim();
        return city;
      })
    ),
  ];
  const uniqueBedrooms = [
    ...new Set(initialHouses.map((house) => house.bedrooms)),
  ].sort();
  const uniqueFloor = [
    ...new Set(initialHouses.map((house) => house.floor)),
  ].sort((a, b) => parseInt(a) - parseInt(b));

  // ویژگی‌های کلی
  const generalFeatures = [
    { id: "elevator", label: "آسانسور", value: "دارد" },
    { id: "storage", label: "انباری", value: "دارد" },
    { id: "masterRoom", label: "مسترروم", value: "1" },
  ];

  // ویژگی‌های اختصاصی
  const specialFeatures = [
    { id: "pool", label: "استخر خصوصی" },
    { id: "terrace", label: "تراس پانوراما" },
    { id: "jacuzzi", label: "جکوزی اختصاصی" },
    { id: "sauna", label: "سونا" },
    { id: "gym", label: "سالن ورزش اختصاصی" },
    { id: "securitySystem", label: "سیستم امنیتی پیشرفته" },
    { id: "smartHome", label: "خانه هوشمند" },
    { id: "professionalKitchen", label: "لابی من 24 ساعته" },
    { id: "homeCinema", label: "سینمای خانگی" },
    { id: "wineCellar", label: "هایپرمارکت اختصاصی" },
    { id: "vipReception", label: "سالن پذیرایی VIP" },
    { id: "panoramicView", label: "نمای پانوراما" },
  ];

  const applyFilters = () => {
    const filteredHouses = initialHouses.filter((house) => {
      // فیلتر بر اساس وضعیت
      if (tempFilters.status && house.status !== tempFilters.status)
        return false;

      // فیلتر بر اساس نوع ملک
      if (tempFilters.kind && house.kind !== tempFilters.kind) return false;

      // فیلتر بر اساس شهر
      if (tempFilters.city) {
        const houseCity = house.location.split("،")[0].trim();
        if (houseCity !== tempFilters.city) return false;
      }

      // فیلتر بر اساس تعداد اتاق خواب
      if (tempFilters.bedrooms && house.bedrooms !== tempFilters.bedrooms)
        return false;

      // فیلتر بر اساس طبقه
      if (tempFilters.floor && house.floor !== tempFilters.floor) return false;

      // فیلتر بر اساس محدوده قیمت
      if (tempFilters.priceRange) {
        const price = parseInt(house.price);
        const [min, max] = tempFilters.priceRange.split("-").map(Number);
        if (price < min || price > max) return false;
      }

      // فیلتر بر اساس منطقه (متراژ)
      if (tempFilters.area) {
        const [min, max] = tempFilters.area.split("-").map(Number);
        const meterage = parseInt(house.meterage);
        if (meterage < min || meterage > max) return false;
      }

      // فیلتر بر اساس ویژگی‌های کلی
      if (tempFilters.elevator && house.elevator !== tempFilters.elevator)
        return false;
      if (tempFilters.storage && house.storage !== tempFilters.storage)
        return false;
      if (tempFilters.masterRoom && house.masterRoom !== tempFilters.masterRoom)
        return false;

      // فیلتر بر اساس ویژگی‌های اختصاصی
      if (tempFilters.specialFeatures.length > 0) {
        const hasAllFeatures = tempFilters.specialFeatures.every((feature) =>
          house.features.includes(feature)
        );
        if (!hasAllFeatures) return false;
      }

      return true;
    });

    setVisibleHouses(6); // Reset visible houses when applying new filters
    setHouses(filteredHouses.slice(0, 6));
  };

  const loadMore = () => {
    setVisibleHouses((prev) => prev + 3);
    setHouses(initialHouses.slice(0, visibleHouses + 3));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setTempFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (type, featureId) => {
    setTempFilters((prev) => {
      const featureArray = [...prev[type]];
      const index = featureArray.indexOf(featureId);

      if (index === -1) {
        featureArray.push(featureId);
      } else {
        featureArray.splice(index, 1);
      }

      return {
        ...prev,
        [type]: featureArray,
      };
    });
  };

  const resetFilters = () => {
    setTempFilters({
      status: "",
      kind: "",
      city: "",
      bedrooms: "",
      floor: "",
      priceRange: "",
      area: "",
      elevator: "",
      storage: "",
      masterRoom: "",
      generalFeatures: [],
      specialFeatures: [],
    });
    setVisibleHouses(6);
    setHouses(initialHouses.slice(0, 6));
  };

  return (
    <>
      <div className={styles["content-wrapper"]}>
        <div className={styles["container-full"]}>
          <section className={styles.content}>
            <div className={styles.row}>
              <div className={`${styles["col-xl-3"]} ${styles["col-12"]}`}>
                <div className={styles.box}>
                  <div className={styles["box-header"]}>
                    <h4 className={styles["box-title"]}>جستجو</h4>
                  </div>
                  <div className={styles["box-body"]}>
                    <div className={styles["form-group"]}>
                      <select
                        name="status"
                        value={tempFilters.status}
                        onChange={handleFilterChange}
                        className={`${styles["form-control"]} ${styles["select2"]}`}
                        style={{ width: "100%" }}
                      >
                        <option value="">انتخاب ملک</option>
                        {uniqueStatuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles["form-group"]}>
                      <select
                        name="kind"
                        value={tempFilters.kind}
                        onChange={handleFilterChange}
                        className={`${styles["form-control"]} ${styles["select2"]}`}
                        style={{ width: "100%" }}
                      >
                        <option value="">نوع ملک</option>
                        {uniqueKinds.map((kind) => (
                          <option key={kind} value={kind}>
                            {kind}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles["form-group"]}>
                      <select
                        name="city"
                        value={tempFilters.city}
                        onChange={handleFilterChange}
                        className={`${styles["form-control"]} ${styles["select2"]}`}
                        style={{ width: "100%" }}
                      >
                        <option value="">شهر را انتخاب کنید</option>
                        {uniqueCities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles["form-group"]}>
                      <select
                        name="bedrooms"
                        value={tempFilters.bedrooms}
                        onChange={handleFilterChange}
                        className={`${styles["form-control"]} ${styles["select2"]}`}
                        style={{ width: "100%" }}
                      >
                        <option value="">اتاق خواب</option>
                        {uniqueBedrooms.map((bedroom) => (
                          <option key={bedroom} value={bedroom}>
                            {toPersianDigits(bedroom)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles["form-group"]}>
                      <select
                        name="floor"
                        value={tempFilters.floor}
                        onChange={handleFilterChange}
                        className={`${styles["form-control"]} ${styles["select2"]}`}
                        style={{ width: "100%" }}
                      >
                        <option value="">طبقه</option>
                        {uniqueFloor.map((floor) => (
                          <option key={floor} value={floor}>
                            {toPersianDigits(floor)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles["form-group"]}>
                      <select
                        name="priceRange"
                        value={tempFilters.priceRange}
                        onChange={handleFilterChange}
                        className={`${styles["form-control"]} ${styles["select2"]}`}
                        style={{ width: "100%" }}
                      >
                        <option value="">محدوده قیمت</option>
                        <option value="0-1000000000">کمتر از 1 میلیارد</option>
                        <option value="1000000000-5000000000">
                          1 تا 5 میلیارد
                        </option>
                        <option value="5000000000-10000000000">
                          5 تا 10 میلیارد
                        </option>
                        <option value="10000000000-20000000000">
                          10 تا 20 میلیارد
                        </option>
                        <option value="20000000000-50000000000">
                          20 تا 50 میلیارد
                        </option>
                        <option value="50000000000-100000000000">
                          50 تا 100 میلیارد
                        </option>
                        <option value="100000000000-999999999999">
                          بیش از 100 میلیارد
                        </option>
                      </select>
                    </div>
                    <div className={styles["form-group"]}>
                      <select
                        name="area"
                        value={tempFilters.area}
                        onChange={handleFilterChange}
                        className={`${styles["form-control"]} ${styles["select2"]}`}
                        style={{ width: "100%" }}
                      >
                        <option value="">متراژ (متر مربع)</option>
                        <option value="0-50">کمتر از 50</option>
                        <option value="50-100">50 تا 100</option>
                        <option value="100-150">100 تا 150</option>
                        <option value="150-200">150 تا 200</option>
                        <option value="200-300">200 تا 300</option>
                        <option value="300-500">300 تا 500</option>
                        <option value="500-1000">500 تا 1000</option>
                        <option value="1000-9999">بیش از 1000</option>
                      </select>
                    </div>

                    {/* ویژگی‌های کلی */}
                    <div className={styles["form-group"]}>
                      <h5
                        className={`${styles["feature-title"]} Anjoman_Medium`}
                      >
                        ویژگی‌های کلی
                      </h5>
                      <div
                        className={`${styles["checkbox-container"]} ${styles["scrollable-checkbox"]}`}
                      >
                        {generalFeatures.map((feature) => (
                          <div key={feature.id} className={styles.checkbox}>
                            <input
                              type="checkbox"
                              id={`general-${feature.id}`}
                              checked={
                                tempFilters[feature.id] === feature.value
                              }
                              onChange={() =>
                                setTempFilters((prev) => ({
                                  ...prev,
                                  [feature.id]:
                                    prev[feature.id] === feature.value
                                      ? ""
                                      : feature.value,
                                }))
                              }
                            />
                            <label htmlFor={`general-${feature.id}`}>
                              {feature.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ویژگی‌های اختصاصی */}
                    <div className={styles["form-group"]}>
                      <h5
                        className={`${styles["feature-title"]} Anjoman_Medium`}
                      >
                        ویژگی‌های اختصاصی
                      </h5>
                      <div
                        className={`${styles["checkbox-container"]} ${styles["scrollable-checkbox"]}`}
                      >
                        {specialFeatures.map((feature) => (
                          <div key={feature.id} className={styles.checkbox}>
                            <input
                              type="checkbox"
                              id={`special-${feature.id}`}
                              checked={tempFilters.specialFeatures.includes(
                                feature.label
                              )}
                              onChange={() =>
                                handleCheckboxChange(
                                  "specialFeatures",
                                  feature.label
                                )
                              }
                            />
                            <label htmlFor={`special-${feature.id}`}>
                              {feature.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles["form-group"]}>
                      <input
                        type="text"
                        className={styles["form-control"]}
                        placeholder="منطقه (اختیاری)"
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <button
                        type="button"
                        onClick={resetFilters}
                        className={`${styles.btn} ${styles["btn-rounded"]} ${styles["btn-danger"]} ${styles["me-2"]}`}
                      >
                        حذف فیلترها
                      </button>
                      <button
                        type="button"
                        onClick={applyFilters}
                        className={`${styles.btn} ${styles["btn-rounded"]} ${styles["btn-info"]}`}
                      >
                        جستجو
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles["col-xl-9"]} ${styles["col-12"]}`}>
                {houses.length > 0 ? (
                  <>
                    <div className={styles.housesGrid}>
                      {houses.map((house) => (
                        <CartHouse
                          key={house._id}
                          {...house}
                          img={house.images}
                          consultant={house.consultant}
                        />
                      ))}
                    </div>
                    {visibleHouses < initialHouses.length && (
                      <div className={styles.buttonContainer}>
                        <button
                          className={styles.loadMoreBtn}
                          onClick={loadMore}
                        >
                          نمایش خانه‌های بیشتر
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className={`${styles["no-results"]} Anjoman_Medium`}>
                    <div className={styles["no-results-content"]}>
                      <svg
                        className={styles["no-results-icon"]}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"
                        />
                      </svg>
                      <h3
                        className={`${styles["no-results-title"]} Anjoman_Bold`}
                      >
                        نتیجه‌ای یافت نشد
                      </h3>
                      <p className={styles["no-results-text"]}>
                        لطفاً فیلترهای جستجو را تغییر دهید یا بازنشانی کنید
                      </p>
                      <button
                        onClick={resetFilters}
                        className={`${styles.btn} ${styles["btn-primary"]} ${styles["no-results-button"]}`}
                      >
                        بازنشانی فیلترها
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomesList;
