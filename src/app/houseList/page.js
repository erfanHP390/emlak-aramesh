import PanelLayout from "@/components/layouts/PanelLayout";
import HomesList from "@/components/templates/homesList/HomesList";
import React from "react";
import connectToDB from "@/configs/db";
import HouseModel from "@/models/House";
import ConsultantModel from "@/models/Consultant";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {
    title: "لیست املاک | سیستم مدیریت املاک آرامش",
    description:
      "جستجو و فیلتر پیشرفته املاک در سیستم مدیریت املاک آرامش. مشاهده انواع ملک با ویژگی‌های مختلف و قیمت‌های به روز.",
    keywords:
      "لیست املاک, جستجوی ملک, فیلتر املاک, خرید ملک, اجاره ملک, سیستم املاک آرامش",
    authors: [{ name: "املاک آرامش" }],
    robots: "index, follow",
  };
}

async function Page() {
  await connectToDB();
  const user = await authUser();
  if (!user) redirect("/login");

  const consultant = await ConsultantModel.findOne({ user: user._id });
  const houses = await HouseModel.find().populate("consultant").lean();

  return (
    <PanelLayout>
      <HomesList houses={JSON.parse(JSON.stringify(houses || []))} />
    </PanelLayout>
  );
}
export default Page;
