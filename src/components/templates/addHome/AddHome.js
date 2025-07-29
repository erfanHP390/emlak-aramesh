"use client";
import React, { useEffect, useState } from "react";
import styles from "./AddHome.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import Loading from "@/app/loading";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { toPersianDigits } from "@/utils/constants";
import { useRouter } from "next/navigation";

function AddHome({consultant}) {
  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const loadFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  const router = useRouter();
  const [rentalType, setRentalType] = useState("option1");
  const [amenities, setAmenities] = useState({
    pool: false,
    terrace: false,
    jacuzzi: false,
    sauna: false,
    gym: false,
    securitySystem: false,
    smartHome: false,
    professionalKitchen: false,
    homeCinema: false,
    wineCellar: false,
    vipReception: false,
    panoramicView: false,
  });
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  // --------------- info - house --------------------
  const [name, setName] = useState("");
  const [clientName, setClientName] = useState("");
  const [floor, setFloor] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [agencyID, setAgencyID] = useState(consultant? consultant.agencyID : "");
  const [status, setStatus] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [storage, setStorage] = useState("");
  const [parking, setParking] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [elevator, setElevator] = useState("");
  const [masterRoom, setMasterRoom] = useState("");
  const [price, setPrice] = useState("");
  const [features, setFeatures] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [consultantCode, setConsultantCode] = useState(consultant? consultant.hisCode : "");
  const [codeHouse, setCodeHouse] = useState();

  useEffect(() => {
    const loadData = () => {
      const basicInfo = loadFromLocalStorage("basicInfo");
      if (basicInfo) {
        setName(basicInfo.name || "");
        setClientName(basicInfo.clientName || "");
        setFloor(basicInfo.floor || "");
        setLocation(basicInfo.location || "");
        setDescription(basicInfo.description || "");
      }

      const propertyInfo = loadFromLocalStorage("propertyInfo");
      if (propertyInfo) {
        setAgencyID(propertyInfo.agencyID || "");
        setConsultantCode(propertyInfo.consultantCode || "");
        setStatus(propertyInfo.status || "");
        setPrice(propertyInfo.price || "");
        setFullAddress(propertyInfo.fullAddress || "");
      }

      const detailsInfo = loadFromLocalStorage("detailsInfo");
      if (detailsInfo) {
        setBedrooms(detailsInfo.bedrooms || "");
        setStorage(detailsInfo.storage || "");
        setParking(detailsInfo.parking || "");
        setYearBuilt(detailsInfo.yearBuilt || "");
        setElevator(detailsInfo.elevator || "");
        setMasterRoom(detailsInfo.masterRoom || "");
      }

      const amenitiesInfo = loadFromLocalStorage("amenitiesInfo");
      if (amenitiesInfo) {
        setAmenities(
          amenitiesInfo.amenities || {
            pool: false,
            terrace: false,
            jacuzzi: false,
            sauna: false,
            gym: false,
            securitySystem: false,
            smartHome: false,
            professionalKitchen: false,
            homeCinema: false,
            wineCellar: false,
            vipReception: false,
            panoramicView: false,
          }
        );
        setFeatures(amenitiesInfo.features || []);
      }

      const imagesInfo = loadFromLocalStorage("imagesInfo");
      if (imagesInfo) {
        setImages(imagesInfo.images || []);
      }
    };

    loadData();
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleRentalTypeChange = (e) => {
    setRentalType(e.target.value);
  };

  const handleAmenityChange = (e) => {
    const { name, checked } = e.target;
    setAmenities((prev) => ({
      ...prev,
      [name]: checked,
    }));

    setFeatures((prev) => {
      if (checked) {
        return [...prev, name];
      } else {
        return prev.filter((item) => item !== name);
      }
    });
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (files.length > 8) {
      swalAlert("حداکثر 6 فایل می‌توانید آپلود کنید", "error", "متوجه شدم");
      return;
    }

    const validFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    );

    if (validFiles.length === 0) {
      swalAlert("فایل‌های معتبر تصویری یافت نشد", "error", "متوجه شدم");
      return;
    }

    if (validFiles.length !== files.length) {
      swalAlert("بعضی فایل‌ها غیر تصویری بودند و حذف شدند", "warning", "باشه");
    }

    setImages(validFiles);
    swalAlert(`${validFiles.length} فایل تصویری انتخاب شد`, "success", "باشه");
  };

  useEffect(() => {
    const createdCodeHouse = () => {
      setCodeHouse(Math.floor(Math.random() * 99999));
    };

    createdCodeHouse();
  }, []);

  // ذخیره اطلاعات اولیه
  const saveBasicInfo = () => {
    const basicInfo = {
      name,
      clientName,
      floor,
      location,
      description,
    };
    saveToLocalStorage("basicInfo", basicInfo);
    toastSuccess("اطلاعات اولیه با موفقیت ذخیره شد", "top-center");
  };

  // حذف اطلاعات اولیه
  const cancelBasicInfo = () => {
    removeFromLocalStorage("basicInfo");
    setName("");
    setClientName("");
    setFloor("");
    setLocation("");
    setDescription("");
    toastSuccess("اطلاعات اولیه حذف شد", "top-center");
  };

  // ذخیره اطلاعات ملک
  const savePropertyInfo = () => {
    const propertyInfo = {
      agencyID,
      consultantCode,
      status,
      price,
      fullAddress,
    };
    saveToLocalStorage("propertyInfo", propertyInfo);
    toastSuccess("اطلاعات ملک با موفقیت ذخیره شد", "top-center");
  };

  // حذف اطلاعات ملک
  const cancelPropertyInfo = () => {
    removeFromLocalStorage("propertyInfo");
    setAgencyID("");
    setConsultantCode("");
    setStatus("");
    setPrice("");
    setFullAddress("");
    toastSuccess("اطلاعات ملک حذف شد", "top-center");
  };

  // ذخیره اطلاعات جزئیات
  const saveDetailsInfo = () => {
    const detailsInfo = {
      bedrooms,
      storage,
      parking,
      yearBuilt,
      elevator,
      masterRoom,
    };
    saveToLocalStorage("detailsInfo", detailsInfo);
    toastSuccess("اطلاعات جزئیات با موفقیت ذخیره شد", "top-center");
  };

  // حذف اطلاعات جزئیات
  const cancelDetailsInfo = () => {
    removeFromLocalStorage("detailsInfo");
    setBedrooms("");
    setStorage("");
    setParking("");
    setYearBuilt("");
    setElevator("");
    setMasterRoom("");
    toastSuccess("اطلاعات جزئیات حذف شد", "top-center");
  };

  // ذخیره اطلاعات امکانات
  const saveAmenitiesInfo = () => {
    const amenitiesInfo = {
      amenities,
      features,
    };
    saveToLocalStorage("amenitiesInfo", amenitiesInfo);
    toastSuccess("اطلاعات امکانات با موفقیت ذخیره شد", "top-center");
  };

  // حذف اطلاعات امکانات
  const cancelAmenitiesInfo = () => {
    removeFromLocalStorage("amenitiesInfo");
    setAmenities({
      pool: false,
      terrace: false,
      jacuzzi: false,
      sauna: false,
      gym: false,
      securitySystem: false,
      smartHome: false,
      professionalKitchen: false,
      homeCinema: false,
      wineCellar: false,
      vipReception: false,
      panoramicView: false,
    });
    setFeatures([]);
    toastSuccess("اطلاعات امکانات حذف شد", "top-center");
  };

  const addHouse = async () => {
    setIsLoading(true);

    if (
      !description ||
      !agencyID ||
      !name ||
      !location ||
      !fullAddress ||
      !status ||
      !bedrooms ||
      !floor ||
      !parking ||
      !storage ||
      !elevator ||
      !masterRoom ||
      !yearBuilt ||
      !price ||
      !codeHouse ||
      !features.length ||
      !images.length ||
      !consultantCode
    ) {
      setIsLoading(false);
      return swalAlert("لطفا تمام فیلدهای ضروری را پر کنید", "error", "فهمیدم");
    }

    const formData = new FormData();
    formData.append("agencyID", agencyID);
    formData.append("name", name);
    formData.append("location", location);
    formData.append("fullAddress", fullAddress);
    formData.append("description", description);
    formData.append("status", status);
    formData.append("bedrooms", bedrooms);
    formData.append("floor", floor);
    formData.append("parking", parking);
    formData.append("storage", storage);
    formData.append("elevator", elevator);
    formData.append("masterRoom", masterRoom);
    formData.append("yearBuilt", yearBuilt);
    formData.append("price", price);
    formData.append("clientName", clientName);
    formData.append("consultantCode", consultantCode);
    formData.append("codeHouse", codeHouse);

    // features.forEach((feature) => {
    //   formData.append("features", feature);
    // });

    images.forEach((image) => {
      formData.append("images", image);
    });

    const amenitiesMap = {
      pool: "استخر خصوصی",
      terrace: "تراس پانوراما",
      jacuzzi: "جکوزی اختصاصی",
      sauna: "سونا",
      gym: "سالن ورزش اختصاصی",
      securitySystem: "سیستم امنیتی پیشرفته",
      smartHome: "خانه هوشمند",
      professionalKitchen: "لابی من 24 ساعته",
      homeCinema: "سینمای خانگی",
      wineCellar: "هایپرمارکت اختصاصی",
      vipReception: "سالن پذیرایی VIP",
      panoramicView: "نمای پانوراما",
    };

    Object.keys(amenities).forEach((key) => {
      if (amenities[key]) {
        formData.append("features", features[key]);
      }
    });

    const res = await fetch("/api/homes", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    console.log("response =>> ", data.message);

    if (res.status === 201) {
      setName("");
      setClientName("");
      setFloor("");
      setLocation("");
      setDescription("");
      setAgencyID("");
      setStatus("");
      setFullAddress("");
      setBedrooms("");
      setStorage("");
      setParking("");
      setYearBuilt("");
      setElevator("");
      setPrice("");
      setMasterRoom("");
      setFeatures([]);
      setImages([]);
      setConsultantCode("");
      setAmenities({
        pool: false,
        terrace: false,
        jacuzzi: false,
        sauna: false,
        gym: false,
        securitySystem: false,
        smartHome: false,
        professionalKitchen: false,
        homeCinema: false,
        wineCellar: false,
        vipReception: false,
        panoramicView: false,
      });
      removeFromLocalStorage("basicInfo");
      removeFromLocalStorage("propertyInfo");
      removeFromLocalStorage("detailsInfo");
      removeFromLocalStorage("amenitiesInfo");
      removeFromLocalStorage("imagesInfo");
      setIsLoading(false);
      toastSuccess(
        "ملک با موفقیت ثبت شد",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
      router.replace("/houseList");
    } else if (res.status === 400) {
      setIsLoading(false);
      toastError(
        "لطفا اطلاعات خواسته شده را بطور کامل وارد نمایید",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 404) {
      setIsLoading(false);
      toastError(
        "مشاوری با این اطلاعات یافت نشد",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 500) {
      setIsLoading(false);
      toastError(
        "خطا در سرور، لطفا بعدا تلاش کنید",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles["content-wrapper"]}>
          <div className={styles["container-full"]}>
            <section className={styles.content}>
              <div className={styles.row}>
                <div className={styles["col-12"]}>
                  <div className={styles.box}>
                    <div className={styles["box-header"]}>
                      <h4 className={styles["box-title"]}>اطلاعات اولیه</h4>
                    </div>
                    <div className={styles["box-body"]}>
                      <div className={styles.row}>
                        <div className={styles["col-sm-6"]}>
                          <div className={styles["form-group"]}>
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="کد اختصاصی ملک"
                              value={codeHouse}
                              disabled
                            />
                          </div>
                        </div>
                        <div className={styles["col-sm-6"]}>
                          <div className={styles["form-group"]}>
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="نام ملک"
                              value={name}
                              onChange={(event) => setName(event.target.value)}
                            />
                          </div>
                        </div>
                        <div className={styles["col-sm-6"]}>
                          <div className={styles["form-group"]}>
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="نام مشتری(درصورت وجود)"
                              value={clientName}
                              onChange={(event) =>
                                setClientName(event.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className={styles["col-sm-6"]}>
                          <div className={styles["form-group"]}>
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="طبقه"
                              value={floor}
                              onChange={(event) => setFloor(event.target.value)}
                            />
                          </div>
                        </div>
                        <div className={styles["col-sm-6"]}>
                          <div className={styles["form-group"]}>
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="لوکیشن"
                              value={location}
                              onChange={(event) =>
                                setLocation(event.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className={styles["col-sm-12"]}>
                          <div
                            className={`${styles["form-group"]} ${styles["mb-0"]}`}
                          >
                            <div className={styles["form-line"]}>
                              <textarea
                                rows={4}
                                className={`${styles["form-control"]} ${styles["no-resize"]}`}
                                placeholder="توضیحات"
                                value={description}
                                onChange={(event) =>
                                  setDescription(event.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["box-footer"]}>
                      <button
                        type="button"
                        onClick={cancelBasicInfo}
                        className={`${styles.btn} ${styles["btn-danger"]} ${styles["me-1"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i className={`${styles.ti} ${styles["ti-trash"]}`} />{" "}
                        لغو
                      </button>
                      <button
                        type="button"
                        onClick={saveBasicInfo}
                        className={`${styles.btn} ${styles["btn-primary"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i
                          className={`${styles.ti} ${styles["ti-save-alt"]}`}
                        />{" "}
                        ذخیره
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles["col-12"]}>
                  <div className={styles.box}>
                    <div className={styles["box-header"]}>
                      <h4 className={styles["box-title"]}>اطلاعات</h4>
                    </div>
                    <div className={styles["box-body"]}>
                      <div className={styles.row}>
                        <div className={styles["col-sm-6"]}>
                          <div className={styles["d-flex"]}>
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="شناسه صنفی"
                              value={agencyID}
                              onChange={(event) =>
                                setAgencyID(event.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className={styles["col-sm-6"]}>
                          <div className={styles["d-flex"]}>
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="کد مشاور (در صورت وجود)"
                              value={consultantCode}
                              onChange={(event) =>
                                setConsultantCode(event.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={styles["col-sm-6"]}
                          style={{ marginTop: "1.3rem" }}
                        >
                          <div className={styles["form-group"]}>
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="فروش/اجاره"
                              value={status}
                              onChange={(event) =>
                                setStatus(event.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={styles["col-sm-6"]}
                          style={{ marginTop: "1.3rem" }}
                        >
                          <div className={styles["form-group"]}>
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="قیمت"
                              value={price}
                              onChange={(event) => setPrice(event.target.value)}
                            />
                          </div>
                        </div>
                        <div className={styles["col-sm-12"]}>
                          <div className={styles["form-group"]}>
                            <textarea
                              rows={4}
                              className={`${styles["form-control"]} ${styles["no-resize"]}`}
                              placeholder="ادرس کامل"
                              value={fullAddress}
                              onChange={(event) =>
                                setFullAddress(event.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["box-footer"]}>
                      <button
                        type="button"
                        onClick={cancelPropertyInfo}
                        className={`${styles.btn} ${styles["btn-danger"]} ${styles["me-1"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i className={`${styles.ti} ${styles["ti-trash"]}`} />{" "}
                        لغو
                      </button>
                      <button
                        type="button"
                        onClick={savePropertyInfo}
                        className={`${styles.btn} ${styles["btn-primary"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i
                          className={`${styles.ti} ${styles["ti-save-alt"]}`}
                        />{" "}
                        ذخیره
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles["col-12"]}>
                  <div className={styles.box}>
                    <div className={styles["box-header"]}>
                      <h4 className={styles["box-title"]}>اطلاعات</h4>
                    </div>
                    <div className={styles["box-body"]}>
                      <div className={styles.row}>
                        <div
                          className={`${styles["col-lg-2"]} ${styles["col-md-4"]} ${styles["col-12"]}`}
                        >
                          <div
                            className={`${styles["form-line"]} ${styles["mb-lg-0"]}`}
                          >
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="اتاق خواب "
                              value={bedrooms}
                              onChange={(event) =>
                                setBedrooms(event.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={`${styles["col-lg-2"]} ${styles["col-md-4"]} ${styles["col-12"]}`}
                        >
                          <div
                            className={`${styles["form-line"]} ${styles["mb-lg-0"]}`}
                          >
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="انباری"
                              value={storage}
                              onChange={(event) =>
                                setStorage(event.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={`${styles["col-lg-2"]} ${styles["col-md-4"]} ${styles["col-12"]}`}
                        >
                          <div
                            className={`${styles["form-line"]} ${styles["mb-lg-0"]}`}
                          >
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="پارکینگ"
                              value={parking}
                              onChange={(event) =>
                                setParking(event.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={`${styles["col-lg-2"]} ${styles["col-md-4"]} ${styles["col-12"]}`}
                        >
                          <div
                            className={`${styles["form-group"]} ${styles["mb-lg-0"]}`}
                          >
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="سال ساخت"
                              value={yearBuilt}
                              onChange={(event) =>
                                setYearBuilt(event.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={`${styles["col-lg-2"]} ${styles["col-md-4"]} ${styles["col-12"]}`}
                        >
                          <div
                            className={`${styles["form-group"]} ${styles["mb-lg-0"]}`}
                          >
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="آسانسور"
                              value={elevator}
                              onChange={(event) =>
                                setElevator(event.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={`${styles["col-lg-2"]} ${styles["col-md-4"]} ${styles["col-12"]}`}
                        >
                          <div
                            className={`${styles["form-group"]} ${styles["mb-0"]}`}
                          >
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="اتاق مستر"
                              value={masterRoom}
                              onChange={(event) =>
                                setMasterRoom(event.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["box-footer"]}>
                      <button
                        type="button"
                        onClick={cancelDetailsInfo}
                        className={`${styles.btn} ${styles["btn-danger"]} ${styles["me-1"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i className={`${styles.ti} ${styles["ti-trash"]}`} />{" "}
                        لغو
                      </button>
                      <button
                        type="button"
                        onClick={saveDetailsInfo}
                        className={`${styles.btn} ${styles["btn-primary"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i
                          className={`${styles.ti} ${styles["ti-save-alt"]}`}
                        />{" "}
                        ذخیره
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles["col-12"]}>
                  <div className={styles.box}>
                    <div className={styles["box-header"]}>
                      <h4 className={styles["box-title"]}>امکانات بیشتر</h4>
                    </div>
                    <div className={styles["box-body"]}>
                      <div className={styles.row}>
                        <div className={styles["col-sm-12"]}>
                          <div className={styles["checkbox-container"]}>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox1"
                                type="checkbox"
                                name="pool"
                                checked={amenities.pool}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox1">استخر خصوصی</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox2"
                                type="checkbox"
                                name="terrace"
                                checked={amenities.terrace}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox2">تراس پانوراما</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox3"
                                type="checkbox"
                                name="jacuzzi"
                                checked={amenities.jacuzzi}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox3">جکوزی اختصاصی</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox4"
                                type="checkbox"
                                name="sauna"
                                checked={amenities.sauna}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox4">سونا</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox5"
                                type="checkbox"
                                name="gym"
                                checked={amenities.gym}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox5">
                                سالن ورزش اختصاصی
                              </label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox6"
                                type="checkbox"
                                name="securitySystem"
                                checked={amenities.securitySystem}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox6">
                                سیستم امنیتی پیشرفته
                              </label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox7"
                                type="checkbox"
                                name="smartHome"
                                checked={amenities.smartHome}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox7">خانه هوشمند</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox8"
                                type="checkbox"
                                name="professionalKitchen"
                                checked={amenities.professionalKitchen}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox8">
                                لابی من 24 ساعته
                              </label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox9"
                                type="checkbox"
                                name="homeCinema"
                                checked={amenities.homeCinema}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox9">سینمای خانگی</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox10"
                                type="checkbox"
                                name="wineCellar"
                                checked={amenities.wineCellar}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox10">
                                هایپرمارکت اختصاصی
                              </label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox11"
                                type="checkbox"
                                name="vipReception"
                                checked={amenities.vipReception}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox11">
                                سالن پذیرایی VIP
                              </label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox12"
                                type="checkbox"
                                name="panoramicView"
                                checked={amenities.panoramicView}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox12">نمای پانوراما</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.row} ${styles["clearfix"]}`}>
                        <div className={styles["col-sm-12"]}>
                          <form
                            action="/"
                            id="frmFileUpload"
                            className={`${styles.dropzone} ${styles["mt-15"]} ${styles["dz-clickable"]}`}
                            method="post"
                          >
                            <input
                              type="file"
                              className={styles["file-input"]}
                              multiple
                              onChange={handleImageUpload}
                              accept="image/*"
                            />
                            <div className={styles["dz-message"]}>
                              <div className={styles["icon-wrapper"]}>
                                <FaCloudUploadAlt
                                  className={`${styles.mdi} ${styles["mdi-upload"]} ${styles["fs-36"]}`}
                                />
                              </div>
                              <h3>فایل را بکشید و رها کنید یا کلیک کنید</h3>
                              <em>{`حداکثر ${toPersianDigits(
                                8
                              )} فایل را می توانید انتخاب کنید`}</em>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className={styles["box-footer"]}>
                      <button
                        type="button"
                        onClick={cancelAmenitiesInfo}
                        className={`${styles.btn} ${styles["btn-danger"]} ${styles["me-1"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i className={`${styles.ti} ${styles["ti-trash"]}`} />{" "}
                        لغو
                      </button>
                      <button
                        type="button"
                        onClick={saveAmenitiesInfo}
                        className={`${styles.btn} ${styles["btn-primary"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i
                          className={`${styles.ti} ${styles["ti-save-alt"]}`}
                        />{" "}
                        ذخیره
                      </button>
                      <button
                        type="submit"
                        onClick={() => {
                          setIsLoading(true);
                          addHouse();
                        }}
                        className={`${styles.btn} ${styles["btn-success"]} ${styles["ms-1"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i
                          className={`${styles.ti} ${styles["ti-save-alt"]}`}
                        />{" "}
                        ارسال نهایی
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default AddHome;
