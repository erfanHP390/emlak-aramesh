import React from "react";
import styles from "./VisitTable.module.css";
import { FaMarker, FaTrashAlt } from "react-icons/fa";

function VisitTable() {
  return (
    <div className={`${styles.colXl8} ${styles.col12}`}>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <h4 className={styles.tableTitle}>بازدید املاک</h4>
        </div>
        <div className={styles.tableBody}>
          <div className={styles.tableResponsive}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>مشتری</th>
                  <th>سفارش ID</th>
                  <th>ملک</th>
                  <th>نوع</th>
                  <th>تاریخ</th>
                  <th>وضعیت</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>مختار مینائی</td>
                  <td>#8457125</td>
                  <td>خرید</td>
                  <td>کارت</td>
                  <td>10-7-2019</td>
                  <td>
                    <span className={`${styles.label} ${styles.labelSuccess}`}>
                      بدهکار
                    </span>
                  </td>
                  <td className={styles.actionsCell}>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="ویرایش"
                    >
                      <FaMarker />
                    </a>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="حذف"
                    >
                      <FaTrashAlt />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>رحیم رضایی</td>
                  <td>#96523154</td>
                  <td>خرید</td>
                  <td>شبا</td>
                  <td>09-7-2019</td>
                  <td>
                    <span className={`${styles.label} ${styles.labelWarning}`}>
                      پرداخت شده
                    </span>
                  </td>
                  <td className={styles.actionsCell}>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="ویرایش"
                    >
                      <FaMarker />
                    </a>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="حذف"
                    >
                      <FaTrashAlt />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>رضا نیکزاد</td>
                  <td>#95487512</td>
                  <td>دوبلکس</td>
                  <td>رهن</td>
                  <td>08-7-2019</td>
                  <td>
                    <span className={`${styles.label} ${styles.labelSuccess}`}>
                      پرداخت شده
                    </span>
                  </td>
                  <td className={styles.actionsCell}>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="ویرایش"
                    >
                      <FaMarker />
                    </a>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="حذف"
                    >
                      <FaTrashAlt />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>مختار مینائی</td>
                  <td>#75485426</td>
                  <td>خرید</td>
                  <td>مغاز</td>
                  <td>02-7-2019</td>
                  <td>
                    <span className={`${styles.label} ${styles.labelDanger}`}>
                      ناموفق
                    </span>
                  </td>
                  <td className={styles.actionsCell}>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="ویرایش"
                    >
                      <FaMarker />
                    </a>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="حذف"
                    >
                      <FaTrashAlt />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>زهرا باغدار</td>
                  <td>#8457125</td>
                  <td>خرید</td>
                  <td>ویلا</td>
                  <td>10-7-2019</td>
                  <td>
                    <span className={`${styles.label} ${styles.labelSuccess}`}>
                      پرداخت شده
                    </span>
                  </td>
                  <td className={styles.actionsCell}>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="ویرایش"
                    >
                      <FaMarker />
                    </a>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="حذف"
                    >
                      <FaTrashAlt />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>رامین حامدی</td>
                  <td>#96523154</td>
                  <td>خرید</td>
                  <td>مغازه</td>
                  <td>09-7-2019</td>
                  <td>
                    <span className={`${styles.label} ${styles.labelWarning}`}>
                      پرداخت شده
                    </span>
                  </td>
                  <td className={styles.actionsCell}>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="ویرایش"
                    >
                      <FaMarker />
                    </a>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="حذف"
                    >
                      <FaTrashAlt />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>میلاد همتی</td>
                  <td>#95487512</td>
                  <td>دوبلکس</td>
                  <td>اجاره</td>
                  <td>08-7-2019</td>
                  <td>
                    <span className={`${styles.label} ${styles.labelSuccess}`}>
                      ناموفق
                    </span>
                  </td>
                  <td className={styles.actionsCell}>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="ویرایش"
                    >
                      <FaMarker />
                    </a>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="حذف"
                    >
                      <FaTrashAlt />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>مهرداد ساعدی</td>
                  <td>#75485426</td>
                  <td>خرید</td>
                  <td>ویلا</td>
                  <td>02-7-2019</td>
                  <td>
                    <span className={`${styles.label} ${styles.labelDanger}`}>
                      ناموفق
                    </span>
                  </td>
                  <td className={styles.actionsCell}>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="ویرایش"
                    >
                      <FaMarker />
                    </a>
                    <a
                      href="#"
                      className={styles.actionLink}
                      data-bs-toggle="tooltip"
                      title="حذف"
                    >
                      <FaTrashAlt />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitTable;
