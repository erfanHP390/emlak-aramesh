import PanelLayout from "@/components/layouts/PanelLayout";
import AddHome from "@/components/templates/addHome/AddHome";
import connectToDB from "@/configs/db";
import { authAdmin, authConsultant, authUser } from "@/utils/authUser";
import React from "react";
import ConsultantModel from "@/models/Consultant";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {
    title: "افزودن ملک جدید | پنل مدیریت املاک آرامش",
    description:
      "افزودن ملک جدید به سیستم مدیریت املاک آرامش. ثبت اطلاعات کامل ملک، امکانات، تصاویر و مشخصات فنی.",
    keywords:
      "افزودن ملک, ثبت ملک جدید, مدیریت املاک, پنل مشاورین, سیستم املاک آرامش, ثبت ملک",
    authors: [{ name: "املاک آرامش" }],
    robots: "noindex, nofollow", // صفحات مدیریتی نباید ایندکس شوند
  };
}

async function Page() {
  connectToDB();
  const user = await authUser();
  const consultant = await ConsultantModel.findOne({ email: user?.email });

  const admin = await authAdmin();
  const consultantLoggedIn = await authConsultant();

  if (!user) {
    redirect("/login");
  }

  if (!consultantLoggedIn && !admin) {
    redirect("/houseList");
  }

  return (
    <PanelLayout>
      <AddHome consultant={consultant} />
    </PanelLayout>
  );
}

export default Page;
