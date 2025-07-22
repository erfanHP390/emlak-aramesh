"use client";
import React, { useState } from "react";
import styles from "./VisitTable.module.css";
import { FaMarker, FaTrashAlt } from "react-icons/fa";
import swal from "sweetalert";
import { toastError, toastSuccess } from "@/utils/alerts";
import { useRouter } from "next/navigation";

function VisitTable({ clients }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);
  const [name, setName] = useState("");
  const [codeHouse, setCodeHouse] = useState("");
  const [kindBuy, setKindBuy] = useState("");
  const [status, setStatus] = useState("");
  const [clientID, setClientID] = useState("");

  const removeClient = async (clientID) => {
    swal({
      title: "آیا از حذف بازدید اطمینان دارین؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch(`/api/clients/${clientID}`, {
          method: "DELETE",
        });
        if (res.status === 200) {
          toastSuccess(
            "اطلاعات بازدیدکننده با موفقیت حذف شد",
            "top-center",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "colored"
          );
          router.refresh();
        } else if (res.status === 401) {
          toastError(
            "فقط مشاور/مدیر سایت اجازه حذف بازدیدکننده را دارد",
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
          toastError(
            "شناسه بازدیدکننده ارسال نشده است",
            "top-center",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "colored"
          );
        } else if (res.status === 422) {
          toastError(
            "شناسه بازدیدکننده نامعتبر است",
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
          toastError(
            "بازدیدکننده یافت نشد",
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
          toastError(
            "خطا در سرور ، لطفا بعدا تلاش کنید",
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
      }
    });
  };

  const openEditModal = (client) => {
    setCurrentClient(client);
    setName(client.name);
    setCodeHouse(client.codeHouse);
    setKindBuy(client.kindBuy);
    setStatus(client.status);
    setIsModalOpen(true);
    setClientID(client._id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentClient(null);
    setName("");
    setCodeHouse("");
    setKindBuy("");
    setStatus("");
  };

  const updateClient = async () => {
    setIsLoading(true);
    const clientData = {
      name,
      codeHouse,
      kindBuy,
      status,
    };

    const res = await fetch(`/api/clients/${clientID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientData),
    });

    if (res.status === 200) {
      toastSuccess(
        "اطلاعات بازدیدکننده با موفقیت ویرایش شد",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
      closeModal();
      router.refresh();
    } else if (res.status === 401) {
      toastError(
        "فقط مشاور/مدیر سایت اجازه ویرایش بازدیدکننده را دارد",
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
      toastError(
        "شناسه بازدیدکننده ارسال نشده است",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 422) {
      toastError(
        "شناسه بازدیدکننده نامعتبر است",
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
      toastError(
        "بازدیدکننده یافت نشد",
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
      toastError(
        "خطا در سرور ، لطفا بعدا تلاش کنید",
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
    <div className={`${styles.colXl8} ${styles.col12}`}>
      {/* Modal ویرایش */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>ویرایش اطلاعات بازدیدکننده</h3>
              <button className={styles.closeButton} onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>نام مشتری</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>کد ملک</label>
                <input
                  type="text"
                  value={codeHouse}
                  onChange={(e) => setCodeHouse(e.target.value)}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>نوع</label>
                <input
                  type="text"
                  value={kindBuy}
                  onChange={(e) => setKindBuy(e.target.value)}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>وضعیت</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className={styles.formInput}
                >
                  <option value="پرداخت شده">پرداخت شده</option>
                  <option value="بدهکار">بدهکار</option>
                  <option value="ناموفق">ناموفق</option>
                </select>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button
                className={`${styles.modalButton} ${styles.cancelButton}`}
                onClick={closeModal}
              >
                انصراف
              </button>
              <button
                className={`${styles.modalButton} ${styles.saveButton}`}
                onClick={updateClient}
              >
                ذخیره تغییرات
              </button>
            </div>
          </div>
        </div>
      )}

      {/* جدول اصلی */}
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
                  <th>کد ملک</th>
                  <th>نوع</th>
                  <th>تاریخ</th>
                  <th>وضعیت</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client._id}>
                    <td>{client.name}</td>
                    <td>{client.codeHouse}</td>
                    <td>{client.kindBuy}</td>
                    <td>
                      {new Date(client.createdAt).toLocaleDateString("fa-IR")}
                    </td>
                    <td>
                      <span
                        className={`${styles.label} ${styles.labelSuccess}`}
                      >
                        {client.status}
                      </span>
                    </td>
                    <td className={styles.actionsCell}>
                      <div
                        className={styles.actionLink}
                        onClick={() => openEditModal(client)}
                      >
                        <FaMarker />
                      </div>
                      <div
                        className={styles.actionLink}
                        onClick={() => removeClient(client._id)}
                      >
                        <FaTrashAlt />
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>مختینائی</td>
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
