import React from "react";
import styles from "../HouseDetails.module.css";
import { toPersianDigits } from "@/utils/constants";

function InfoTable({ house }) {
  return (
    <>
      <div className={styles.box}>
        <div className={styles["box-header"]}>
          <h4 className={styles["box-title"]}>مشخصات کلی</h4>
        </div>
        <div className={styles["box-body"]}>
          <table className={styles["property-table"]}>
            <tbody>
              <tr>
                <th className="Anjoman_Medium" scope="row">
                  شناسه صنفی
                </th>
                <td>
                  <span
                    className={`${styles.badge} ${styles["badge-primary"]}  Anjoman_Regular `}
                  >
                    {Number(house.agencyID)
                      ? toPersianDigits(Number(house.agencyID))
                      : "ثبت نشده"}{" "}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="Anjoman_Medium" scope="row">
                  کد ملک
                </th>
                <td>
                  <span
                    className={`${styles.badge} ${styles["badge-primary"]}  Anjoman_Regular `}
                  >
                    {Number(house.codeHouse)
                      ? toPersianDigits(Number(house.codeHouse))
                      : "ثبت نشده"}{" "}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="Anjoman_Medium" scope="row">
                  لوکیشن
                </th>
                <td>
                  <span
                    className={`${styles.badge} ${styles["badge-primary"]}  Anjoman_Regular `}
                  >
                    {house.location}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="Anjoman_Medium" scope="row">
                  سال ساخت
                </th>
                <td>
                  <span
                    className={`${styles.badge} ${styles["badge-primary"]}  Anjoman_Regular `}
                  >
                    {Number(house.yearBuilt)
                      ? toPersianDigits(Number(house.yearBuilt))
                      : "توافقی"}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="Anjoman_Medium" scope="row">
                  متراژ
                </th>
                <td>
                  <span
                    className={`${styles.badge} ${styles["badge-primary"]}  Anjoman_Regular `}
                  >
                    {Number(house.meterage)
                      ? `${toPersianDigits(Number(house.meterage))} متر`
                      : "توافقی"}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="Anjoman_Medium" scope="row">
                  قیمت
                </th>
                <td>
                  <span
                    className={`${styles.badge} ${styles["badge-primary"]}  Anjoman_Regular `}
                  >
                    {Number(house.price)
                      ? Number(house.price).toLocaleString("fa-IR")
                      : "توافقی"}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="Anjoman_Medium" scope="row">
                  وضعیت
                </th>
                <td>
                  <span
                    className={`${styles.badge} ${styles["badge-primary"]}  Anjoman_Regular `}
                  >
                    {house.status}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="Anjoman_Medium" scope="row">
                  طبقه
                </th>
                <td>
                  <span
                    className={`${styles.badge} ${styles["badge-primary"]}  Anjoman_Regular `}
                  >
                    {Number(house.floor)
                      ? toPersianDigits(Number(house.floor))
                      : "ثبت نشده"}{" "}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="Anjoman_Medium" scope="row">
                  اتاق خواب
                </th>
                <td>
                  <span
                    className={`${styles.badge} ${styles["badge-primary"]}  Anjoman_Regular `}
                  >
                    {Number(house.bedrooms)
                      ? toPersianDigits(Number(house.bedrooms))
                      : "ثبت نشده"}{" "}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="Anjoman_Medium" scope="row">
                  پارکینگ
                </th>
                <td>
                  <span
                    className={`${styles.badge} ${styles["badge-primary"]}  Anjoman_Regular `}
                  >
                    {Number(house.parking)
                      ? toPersianDigits(Number(house.parking))
                      : "ثبت نشده"}{" "}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="Anjoman_Medium" scope="row">
                  انباری
                </th>
                <td>
                  <span
                    className={`${styles.badge} ${styles["badge-primary"]}  Anjoman_Regular `}
                  >
                    {house.storage}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="Anjoman_Medium" scope="row">
                  آسانسور
                </th>
                <td>
                  <span
                    className={`${styles.badge} ${styles["badge-primary"]}  Anjoman_Regular `}
                  >
                    {house.elevator}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="Anjoman_Medium" scope="row">
                  مسترروم
                </th>
                <td>
                  <span
                    className={`${styles.badge} ${styles["badge-primary"]}  Anjoman_Regular `}
                  >
                    {Number(house.masterRoom)
                      ? toPersianDigits(Number(house.masterRoom))
                      : "ثبت نشده"}{" "}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default InfoTable;
