"use client";
import React, { useState } from "react";
import styles from "./AddHome.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import Loading from "@/app/loading";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { toPersianDigits } from "@/utils/constants";

function AddHome() {
  const [rentalType, setRentalType] = useState("option1");
  const [amenities, setAmenities] = useState({
    pool: false,
    terrace: false,
    balcony: false,
    internet: true,
    phone: false,
    tv: false,
    computer: false,
    dishwasher: true,
    kitchenHood: true,
    table: false,
    dining: false,
    yard: false,
  });
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  // --------------- info - house --------------------
  const [name, setName] = useState("");
  const [clientName, setClientName] = useState("");
  const [floor, setFloor] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [agencyID, setAgencyID] = useState("");
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
  const [consultantCode, setConsultantCode] = useState("");

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

    features.forEach((feature) => {
      formData.append("features", feature);
    });

    images.forEach((image) => {
      formData.append("images", image);
    });

    const res = await fetch("/api/homes", {
      method: "POST",
      body: formData,
    });

    // console.log("response =>> ", res);

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
      setPrice("")
      setMasterRoom("");
      setFeatures([]);
      setImages([]);
      setConsultantCode("");
      setAmenities({
        pool: false,
        terrace: false,
        balcony: false,
        internet: true,
        phone: false,
        tv: false,
        computer: false,
        dishwasher: true,
        kitchenHood: true,
        table: false,
        dining: false,
        yard: false,
      });
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
                      {/* <ul
                      className={`${styles["box-controls"]} ${styles["pull-right"]}`}
                    >
                      <li className={styles.dropdown}>
                        <a
                          data-bs-toggle="dropdown"
                          href="#"
                          className={`${styles["px-10"]} ${styles["hover-primary"]}`}
                        >
                          {openDropdownIndex === 1 ? (
                            <IoCloseSharp
                              onClick={() => toggleDropdown(1)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40}
                            />
                          ) : (
                            <GiHamburgerMenu
                              onClick={() => toggleDropdown(1)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40} // تنظیم سایز آیکون
                            />
                          )}
                        </a>
                        <div
                          className={
                            openDropdownIndex === 1
                              ? `${styles["dropdown-menu"]}  ${styles["show"]}`
                              : styles["dropdown-menu"]
                          }
                        >
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-import"]}`}
                            />
                            دریافت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-export"]}`}
                            />
                            اکسپورت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-printer"]}`}
                            />
                            پرینت
                          </a>
                          <div className={styles["dropdown-divider"]} />
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-settings"]}`}
                            />{" "}
                            تنظیمات
                          </a>
                        </div>
                      </li>
                    </ul> */}
                    </div>
                    <div className={styles["box-body"]}>
                      <div className={styles.row}>
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
                        className={`${styles.btn} ${styles["btn-danger"]} ${styles["me-1"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i className={`${styles.ti} ${styles["ti-trash"]}`} />{" "}
                        لغو
                      </button>
                      <button
                        type="submit"
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
                      {/* <ul
                      className={`${styles["box-controls"]} ${styles["pull-right"]}`}
                    >
                      <li className={styles.dropdown}>
                        <a
                          data-bs-toggle="dropdown"
                          href="#"
                          className={`${styles["px-10"]} ${styles["hover-primary"]}`}
                        >
                          {openDropdownIndex === 2 ? (
                            <IoCloseSharp
                              onClick={() => toggleDropdown(2)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40}
                            />
                          ) : (
                            <GiHamburgerMenu
                              onClick={() => toggleDropdown(2)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40} // تنظیم سایز آیکون
                            />
                          )}
                        </a>
                        <div
                          className={
                            openDropdownIndex === 2
                              ? `${styles["dropdown-menu"]}  ${styles["show"]}`
                              : styles["dropdown-menu"]
                          }
                        >
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-import"]}`}
                            />
                            دریافت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-export"]}`}
                            />
                            اکسپورت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-printer"]}`}
                            />
                            پرینت
                          </a>
                          <div className={styles["dropdown-divider"]} />
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-settings"]}`}
                            />{" "}
                            تنظیمات
                          </a>
                        </div>
                      </li>
                    </ul> */}
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
                        <div className={styles["col-sm-6"]} style={{marginTop: "1.3rem"}} >
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
                        <div className={styles["col-sm-6"]} style={{marginTop: "1.3rem"}} >
                          <div className={styles["form-group"]}>
                            <input
                              type="text"
                              className={styles["form-control"]}
                              placeholder="قیمت"
                              value={price}
                              onChange={(event) =>
                                setPrice(event.target.value)
                              }
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
                        className={`${styles.btn} ${styles["btn-danger"]} ${styles["me-1"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i className={`${styles.ti} ${styles["ti-trash"]}`} />{" "}
                        لغو
                      </button>
                      <button
                        type="submit"
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
                      {/* <ul
                      className={`${styles["box-controls"]} ${styles["pull-right"]}`}
                    >
                      <li className={styles.dropdown}>
                        <a
                          data-bs-toggle="dropdown"
                          href="#"
                          className={`${styles["px-10"]} ${styles["hover-primary"]}`}
                        >
                          {openDropdownIndex === 3 ? (
                            <IoCloseSharp
                              onClick={() => toggleDropdown(3)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40}
                            />
                          ) : (
                            <GiHamburgerMenu
                              onClick={() => toggleDropdown(3)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40} // تنظیم سایز آیکون
                            />
                          )}
                        </a>
                        <div
                          className={
                            openDropdownIndex === 3
                              ? `${styles["dropdown-menu"]}  ${styles["show"]}`
                              : styles["dropdown-menu"]
                          }
                        >
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-import"]}`}
                            />
                            دریافت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-export"]}`}
                            />
                            اکسپورت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-printer"]}`}
                            />
                            پرینت
                          </a>
                          <div className={styles["dropdown-divider"]} />
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-settings"]}`}
                            />{" "}
                            تنظیمات
                          </a>
                        </div>
                      </li>
                    </ul> */}
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
                        className={`${styles.btn} ${styles["btn-danger"]} ${styles["me-1"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i className={`${styles.ti} ${styles["ti-trash"]}`} />{" "}
                        لغو
                      </button>
                      <button
                        type="submit"
                        className={`${styles.btn} ${styles["btn-primary"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i
                          className={`${styles.ti} ${styles["ti-save-alt"]}`}
                        />{" "}
                        ذخیر
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles["col-12"]}>
                  <div className={styles.box}>
                    <div className={styles["box-header"]}>
                      <h4 className={styles["box-title"]}>امکانات بیشتر</h4>
                      {/* <ul
                      className={`${styles["box-controls"]} ${styles["pull-right"]}`}
                    >
                      <li className={styles.dropdown}>
                        <a
                          data-bs-toggle="dropdown"
                          href="#"
                          className={`${styles["px-10"]} ${styles["hover-primary"]}`}
                        >
                          {openDropdownIndex === 4 ? (
                            <IoCloseSharp
                              onClick={() => toggleDropdown(4)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40}
                            />
                          ) : (
                            <GiHamburgerMenu
                              onClick={() => toggleDropdown(4)}
                              className={`${styles["menu-icon"]} ${styles["hover-primary"]}`}
                              size={40} // تنظیم سایز آیکون
                            />
                          )}
                        </a>
                        <div
                          className={
                            openDropdownIndex === 4
                              ? `${styles["dropdown-menu"]}  ${styles["show"]}`
                              : styles["dropdown-menu"]
                          }
                        >
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-import"]}`}
                            />
                            دریافت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-export"]}`}
                            />
                            اکسپورت
                          </a>
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-printer"]}`}
                            />
                            پرینت
                          </a>
                          <div className={styles["dropdown-divider"]} />
                          <a className={styles["dropdown-item"]} href="#">
                            <i
                              className={`${styles.ti} ${styles["ti-settings"]}`}
                            />{" "}
                            تنظیمات
                          </a>
                        </div>
                      </li>
                    </ul> */}
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
                              <label htmlFor="checkbox1">استخر</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox2"
                                type="checkbox"
                                name="terrace"
                                checked={amenities.terrace}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox2">تراس</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox3"
                                type="checkbox"
                                name="balcony"
                                checked={amenities.balcony}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox3">هوا خوری</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox4"
                                type="checkbox"
                                name="internet"
                                checked={amenities.internet}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox4">اینترنت</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox5"
                                type="checkbox"
                                name="phone"
                                checked={amenities.phone}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox5">تلفن</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox6"
                                type="checkbox"
                                name="tv"
                                checked={amenities.tv}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox6">تلویزیون</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox7"
                                type="checkbox"
                                name="computer"
                                checked={amenities.computer}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox7">کامپیوتر</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox8"
                                type="checkbox"
                                name="dishwasher"
                                checked={amenities.dishwasher}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox8">ظرفشویی</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox9"
                                type="checkbox"
                                name="kitchenHood"
                                checked={amenities.kitchenHood}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox9">هود اشپزخانه</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox0"
                                type="checkbox"
                                name="table"
                                checked={amenities.table}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox0">میز</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox11"
                                type="checkbox"
                                name="dining"
                                checked={amenities.dining}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox11">نهارخوری</label>
                            </div>
                            <div className={styles.checkbox}>
                              <input
                                id="checkbox12"
                                type="checkbox"
                                name="yard"
                                checked={amenities.yard}
                                onChange={handleAmenityChange}
                              />
                              <label htmlFor="checkbox12">بالکن</label>
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
                              <em>{`حداکثر ${toPersianDigits(8)} فایل را می توانید انتخاب کنید`}</em>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className={styles["box-footer"]}>
                      <button
                        type="button"
                        className={`${styles.btn} ${styles["btn-danger"]} ${styles["me-1"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i className={`${styles.ti} ${styles["ti-trash"]}`} />{" "}
                        لغو
                      </button>
                      <button
                        type="submit"
                        onClick={() => {
                          setIsLoading(true);
                          addHouse();
                        }}
                        className={`${styles.btn} ${styles["btn-primary"]} ${styles["waves-effect"]} ${styles["waves-light"]}`}
                      >
                        <i
                          className={`${styles.ti} ${styles["ti-save-alt"]}`}
                        />{" "}
                        ارسال
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
