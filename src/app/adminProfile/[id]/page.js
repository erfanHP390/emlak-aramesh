import PanelLayout from "@/components/layouts/PanelLayout";
import React from "react";
import styles from "@/styles/adminProfile.module.css";
import AdminTabs from "@/components/templates/adminProfile/AdminTabs";
import { redirect } from "next/navigation";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import HouseModel from "@/models/House";
import ClientModel from "@/models/Client";
import ReqBuyModel from "@/models/ReqBuy";
import ContactModel from "@/models/Contact";
import ConsultantModel from "@/models/Consultant";
import { authConsultant, authUser } from "@/utils/authUser";

async function Page({ params }) {
  connectToDB();

  const user = await authUser();
  const consultant = await authConsultant()

  if (!user) {
    redirect("/login");
  }

  // اگر کاربر لاگین شده نقش یوزر داشت → بفرست به پروفایل خودش
  if (user.role === "USER") {
    redirect(`/userProfile/${user._id}`);
  }

  // اگر نقش مشاور داشت → بفرست به صفحه خودش
  if (user.role === "CONSULTANT") {
    const consultantInfos = await ConsultantModel.findOne({user: consultant._id})
    redirect(`/consultantDetails/${consultantInfos._id}`);
  }

  // اگر نقش ادمین داشت ولی آیدیش با params فرق داشت → نذارش
  if (user.role === "ADMIN" && user._id.toString() !== params.id) {
    redirect("/dashboard"); // یا Forbidden
  }

  // حالا مطمئنیم فقط ادمینِ همون آیدی هست
  const userAdmin = await UserModel.findOne({ _id: params.id });
  if (!userAdmin) {
    redirect("/dashboard");
  }

  const houses = await HouseModel.find({ agencyID: userAdmin.guildID }).lean();
  const clients = await ClientModel.find({}).populate("houses").lean();
  const reqBuys = await ReqBuyModel.find({}).populate("houses").lean();
  const contacts = await ContactModel.find({}).lean();
  const consultants = await ConsultantModel.find({})
    .populate("clients")
    .populate("houses")
    .lean();
  const users = await UserModel.find({}).lean();

  return (
    <PanelLayout>
      <div className={styles.contentWrapper}>
        <div className={styles.containerFull}>
          <section className={styles.content}>
            <div className={styles.row}>
              <div
                className={`${styles.col12} ${styles.colLg7} ${styles.colXl8}`}
              >
                <AdminTabs
                  houses={JSON.parse(JSON.stringify(houses))}
                  clients={JSON.parse(JSON.stringify(clients))}
                  reqBuys={JSON.parse(JSON.stringify(reqBuys))}
                  contacts={JSON.parse(JSON.stringify(contacts))}
                  consultants={JSON.parse(JSON.stringify(consultants))}
                  users={JSON.parse(JSON.stringify(users))}
                  admin={userAdmin}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </PanelLayout>
  );
}

export default Page;
