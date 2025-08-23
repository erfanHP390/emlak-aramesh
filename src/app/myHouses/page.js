import PanelLayout from "@/components/layouts/PanelLayout";
import MyRegistrationHouse from "@/components/templates/myRegistrationHouse/MyRegistrationHouse";
import connectToDB from "@/configs/db";
import HouseModel from "@/models/House";
import ConsultantModel from "@/models/Consultant";
import { authConsultant, authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import { Metadata } from "next";

// تولید متادیتا برای سئو
export async function generateMetadata() {
  return {
    title: "مدیریت املاک ثبت‌شده | پنل مشاورین املاک آرامش",
    description: "مدیریت و ویرایش املاک ثبت‌شده در سیستم املاک آرامش. مشاهده، ویرایش و حذف properties ثبت‌شده توسط مشاورین.",
    keywords: "مدیریت املاک, پنل مشاورین, املاک ثبت‌شده, ویرایش ملک, سیستم املاک آرامش, مدیریت properties, پنل کاربری مشاورین",
    robots: "noindex, nofollow", // صفحات پنل مدیریت نباید ایندکس شوند
    openGraph: {
      title: "مدیریت املاک ثبت‌شده | پنل مشاورین املاک آرامش",
      description: "مدیریت و ویرایش املاک ثبت‌شده در سیستم املاک آرامش",
      type: "website",
    },
  };
}

// ساختار داده‌های سازمان‌یافته برای سئو
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'مدیریت املاک ثبت‌شده - پنل مشاورین املاک آرامش',
  description: 'صفحه مدیریت املاک ثبت‌شده توسط مشاورین در سیستم املاک آرامش',
  publisher: {
    '@type': 'RealEstateAgent',
    name: 'سیستم مدیریت املاک آرامش',
  }
};

async function Page() {
  await connectToDB();

  const user = await authUser();
  const consultantLoggedIn = await authConsultant()

  if (!user) {
    redirect("/login")
  }

  const consultant = await ConsultantModel.findOne({ user: user._id });

  if (!consultantLoggedIn) {
    redirect("/dashboard")
  }

  const houses = await HouseModel.find({ consultant: consultant._id })
    .populate("consultant")
    .sort({ createdAt: -1 }) // مرتب سازی بر اساس جدیدترین
    .lean();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PanelLayout>
        <MyRegistrationHouse houses={JSON.parse(JSON.stringify(houses))} />
      </PanelLayout>
    </>
  );
}

export default Page;