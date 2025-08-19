"use client";
import React, { useState } from "react";
import styles from "./VisitTable.module.css";
import { FaMarker, FaTrashAlt } from "react-icons/fa";
import swal from "sweetalert";
import { toastError, toastSuccess } from "@/utils/alerts";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

function VisitTable({ clients = [] }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    codeHouse: "",
    kindBuy: "",
    status: "",
    clientID: "",
  });

  const getStatusClass = (status) => {
    switch (status) {
      case "پرداخت شده":
        return `${styles.label} ${styles.labelSuccess}`;
      case "بدهکار":
        return `${styles.label} ${styles.labelWarning}`;
      case "ناموفق":
        return `${styles.label} ${styles.labelError}`;
      default:
        return `${styles.label}`;
    }
  };

  const removeClient = async (clientID) => {
    swal({
      title: "آیا از حذف بازدید اطمینان دارین؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        try {
          const res = await fetch(`/api/clients/${clientID}`, {
            method: "DELETE",
          });

          if (res.status === 200) {
            toastSuccess("اطلاعات بازدیدکننده با موفقیت حذف شد");
            router.refresh();
          } else {
            const errorData = await res.json();
            toastError(errorData.message || "خطا در حذف بازدیدکننده");
          }
        } catch (error) {
          console.error("Error deleting client:", error);
          toastError("خطا در ارتباط با سرور");
        }
      }
    });
  };

  const openEditModal = (client) => {
    setCurrentClient(client);
    setFormData({
      name: client.name || "",
      codeHouse: client.houses?.[0]?.codeHouse || "",
      kindBuy: client.kindBuy || "",
      status: client.status || "",
      clientID: client._id || "",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentClient(null);
    setFormData({
      name: "",
      codeHouse: "",
      kindBuy: "",
      status: "",
      clientID: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateClient = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/clients/${formData.clientID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          codeHouse: formData.codeHouse,
          kindBuy: formData.kindBuy,
          status: formData.status,
        }),
      });

      if (res.status === 200) {
        toastSuccess("اطلاعات بازدیدکننده با موفقیت ویرایش شد");
        closeModal();
        router.refresh();
      } else {
        const errorData = await res.json();
        toastError(errorData.message || "خطا در ویرایش بازدیدکننده");
      }
    } catch (error) {
      console.error("Error updating client:", error);
      toastError("خطا در ارتباط با سرور");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className={`${styles.colXl8} ${styles.col12}`}>
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
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>کد ملک</label>
                <input
                  type="text"
                  name="codeHouse"
                  value={formData.codeHouse}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>نوع</label>
                <input
                  type="text"
                  name="kindBuy"
                  value={formData.kindBuy}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>وضعیت</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
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
                disabled={isLoading}
              >
                انصراف
              </button>
              <button
                className={`${styles.modalButton} ${styles.saveButton}`}
                onClick={updateClient}
                disabled={isLoading}
              >
                {isLoading ? "در حال ذخیره..." : "ذخیره تغییرات"}
              </button>
            </div>
          </div>
        </div>
      )}

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
                {clients.length > 0 ? (
                  clients.map((client) => (
                    <tr key={client._id}>
                      <td>{client.name || "نامشخص"}</td>
                      <td>{client.houses?.[0]?.codeHouse || "نامشخص"}</td>
                      <td>{client.kindBuy || "نامشخص"}</td>
                      <td>
                        {client.createdAt
                          ? new Date(client.createdAt).toLocaleDateString(
                              "fa-IR"
                            )
                          : "نامشخص"}
                      </td>
                      <td>
                        <span className={getStatusClass(client.status)}>
                          {client.status || "نامشخص"}
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
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className={styles.noData}>
                      هیچ بازدیدی یافت نشد
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitTable;
