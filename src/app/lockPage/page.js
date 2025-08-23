import LockScreen from "@/components/templates/auth/lockScreen/lockScreen";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import ConsultantModel from "@/models/Consultant";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "صفحه قفل امنیتی | سیستم مدیریت املاک آرامش",
    description: "صفحه قفل امنیتی برای دسترسی به پنل مدیریت املاک آرامش. با وارد کردن رمز عبور می‌توانید به حساب کاربری خود دسترسی پیدا کنید و از امکانات مدیریت املاک، مشاوران و ثبت ملک استفاده نمایید.",
    keywords: "قفل امنیتی املاک, احراز هویت املاک, ورود امن, پنل مشاوران املاک, مدیریت حساب کاربری, سیستم مدیریت املاک آرامش, ثبت ملک, مدیریت مشاوران, املاک دیجیتال",
    robots: "noindex, nofollow", // صفحات احراز هویت نباید ایندکس شوند
    openGraph: {
      title: "صفحه قفل امنیتی | سیستم مدیریت املاک آرامش",
      description: "صفحه قفل امنیتی برای دسترسی به پنل مدیریت املاک آرامش",
      type: "website",
    },
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'صفحه قفل امنیتی - سیستم مدیریت املاک آرامش',
  description: 'صفحه قفل امنیتی برای دسترسی به پنل مدیریت املاک، مشاوران و ثبت ملک در سیستم املاک آرامش',
  publisher: {
    '@type': 'RealEstateAgent',
    name: 'سیستم مدیریت املاک آرامش',
  }
};

export default async function Page() {
  await connectToDB();

  const user = await authUser();
  if (!user) redirect("/login");

  const consultant = await ConsultantModel.findOne({
    email: user.email,
  }).lean();

  const safeUser = JSON.parse(JSON.stringify(user));
  const safeConsultant = JSON.parse(JSON.stringify(consultant || null));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LockScreen user={safeUser} consultant={safeConsultant} />
    </>
  );
}