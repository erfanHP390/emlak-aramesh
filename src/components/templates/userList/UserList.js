"use client";
import React, { useState } from "react";
import styles from "./UserList.module.css";
import { FaMarker, FaTrashAlt } from "react-icons/fa";
import swal from "sweetalert";
import { toastError, toastSuccess } from "@/utils/alerts";
import { useRouter } from "next/navigation";

function UserList({ users }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [userID, setUserID] = useState("");

  const toPersianStrDigits = (str) => {
    return str?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };

  const removeUser = async (userID) => {
    swal({
      title: "آیا از حذف کاربر اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch(`/api/auth/${userID}`, {
          method: "DELETE",
        });
        if (res.status === 200) {
          toastSuccess(
            "کاربر با موفقیت حذف شد",
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
            "فقط مدیر/مشاور سایت اجازه حذف کاربر را دارد",
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
            "شناسه کاربر ارسال نشده است",
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
            "شناسه کاربر نامعتبر است لطفا با پشتیبانی سایت تماس بگیرید",
            "top-center",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "colored"
          );
        } else if (res.status === 403) {
          toastError(
            "شما مجاز به حذف مدیر نیستید",
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
            "کاربر یافت نشد",
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

  const openEditModal = (user) => {
    setCurrentUser(user);
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setStatus(user.status);
    setIsModalOpen(true);
    setUserID(user._id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
    setName("");
    setEmail("");
    setRole("");
    setStatus("");
  };

  const updateUser = async () => {
    setIsLoading(true);
    const userData = {
      name,
      email,
      role,
      status,
    };

    const res = await fetch(`/api/users/${userID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (res.status === 200) {
      toastSuccess(
        "اطلاعات کاربر با موفقیت ویرایش شد",
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
        "فقط مدیر سایت اجازه ویرایش کاربر را دارد",
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
        "شناسه کاربر ارسال نشده است",
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
        "کاربر یافت نشد",
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
    setIsLoading(false);
  };

  const getRoleName = (userRole) => {
    switch (userRole) {
      case "ADMIN":
        return `مدیر`;
      case "CONSULTANT":
        return `مشاور`;
      case "USER":
        return `کاربر`;
      default:
        return `کاربر`;
    }
  };

  const getRoleClass = (role) => {
    switch (role) {
      case "مدیر":
        return `${styles.label} ${styles.labelPrimary}`;
      case "مشاور":
        return `${styles.label} ${styles.labelInfo}`;
      case "کاربر":
        return `${styles.label} ${styles.labelSecondary}`;
      default:
        return `${styles.label}`;
    }
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.containerFull}>
        <section className={styles.content}>
          <div className={styles.row}>
            {/* Modal ویرایش */}
            {isModalOpen && (
              <div className={styles.modalOverlay}>
                <div className={styles.modalContainer}>
                  <div className={styles.modalHeader}>
                    <h3 className={styles.modalTitle}>ویرایش اطلاعات کاربر</h3>
                    <button className={styles.closeButton} onClick={closeModal}>
                      &times;
                    </button>
                  </div>
                  <div className={styles.modalBody}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>نام کاربر</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>ایمیل</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>نقش</label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className={styles.formInput}
                      >
                        <option value="مدیر">مدیر</option>
                        <option value="مشاور">مشاور</option>
                        <option value="کاربر">کاربر</option>
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
                      onClick={updateUser}
                      disabled={isLoading}
                    >
                      {isLoading ? "در حال ذخیره..." : "ذخیره تغییرات"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* جدول اصلی */}
            <div className={styles.tableContainer}>
              <div className={styles.tableHeader}>
                <h4 className={styles.tableTitle}>لیست کاربران</h4>
              </div>
              <div className={styles.tableBody}>
                <div className={styles.tableResponsive}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>نام کاربر</th>
                        <th>ایمیل</th>
                        <th>نقش</th>
                        <th>تاریخ ثبت نام</th>
                        <th>شناسه صنفی</th>
                        <th>وضعیت</th>
                        <th>عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user._id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                            <span className={getRoleClass(user.role)}>
                              {getRoleName(user.role)}
                            </span>
                          </td>
                          <td>
                            {new Date(user.createdAt).toLocaleDateString(
                              "fa-IR"
                            )}
                          </td>
                          <td>
                            {user.guildID
                              ? toPersianStrDigits(user.guildID)
                              : "کاربرعادی"}
                          </td>
                          <td>
                            {user.isAccept ? "تاییدشده" : "در انتظار تایید"}
                          </td>
                          <td className={styles.actionsCell}>
                            <div
                              className={styles.actionLink}
                              onClick={() => openEditModal(user)}
                            >
                              <FaMarker />
                            </div>
                            <div
                              className={styles.actionLink}
                              onClick={() => removeUser(user._id)}
                            >
                              <FaTrashAlt />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserList;
