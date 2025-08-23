import PanelLayout from "@/components/layouts/PanelLayout";
import AddConsultantForm from "@/components/templates/addConsultant/AddConsultantForm";
import connectToDB from "@/configs/db";
import { authAdmin, authConsultant, authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "افزودن مشاور جدید | پنل مدیریت املاک آرامش",
  description: "افزودن مشاور جدید به سیستم مدیریت املاک آرامش. ثبت اطلاعات مشاورین، مشخصات تماس و شبکه‌های اجتماعی.",
  keywords: "افزودن مشاور, مدیریت مشاورین, پنل مدیریت املاک, ثبت نام مشاور, سیستم املاک آرامش",
  authors: [{ name: "املاک آرامش" }],
  robots: "noindex, nofollow", // صفحات مدیریتی نباید ایندکس شوند
};

async function Page() {
  connectToDB();
  const admin = await authAdmin();
  const consultant = await authConsultant();
  const user = await authUser();

  if (!user) {
    redirect("/login");
  }

  if (!consultant && !admin) {
    redirect("/houseList");
  }

  return (
    <PanelLayout>
      <AddConsultantForm />
    </PanelLayout>
  );
}

export default Page;