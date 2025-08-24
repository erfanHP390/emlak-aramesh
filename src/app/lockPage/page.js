import LockScreen from "@/components/templates/auth/lockScreen/lockScreen";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import ConsultantModel from "@/models/Consultant";
import { redirect } from "next/navigation";

export default async function Page() {
  await connectToDB();

  const user = await authUser();
  if (!user) redirect("/login");

  const consultant = await ConsultantModel.findOne({
    email: user.email,
  }).lean();

  const safeUser = JSON.parse(JSON.stringify(user));
  const safeConsultant = JSON.parse(JSON.stringify(consultant || null));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "صفحه قفل شده",
    description: "صفحه قفل شده سیستم مدیریت املاک آرامش",
    url: "https://yourdomain.com/lock-screen",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "خانه",
          item: "https://yourdomain.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "قفل صفحه",
          item: "https://yourdomain.com/lock-screen",
        },
      ],
    },
  };

  return (
    <>
      <head>
        <title>قفل صفحه | سیستم مدیریت املاک آرامش</title>
        <meta name="description" content="صفحه قفل شده سیستم مدیریت املاک آرامش، لطفاً برای ادامه رمز عبور خود را وارد کنید" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <meta property="og:title" content="قفل صفحه | سیستم مدیریت املاک آرامش" />
        <meta property="og:description" content="صفحه قفل شده سیستم مدیریت املاک آرامش" />
        <meta property="og:url" content="https://yourdomain.com/lock-screen" />
        <meta property="og:site_name" content="املاک آرامش" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <LockScreen user={safeUser} consultant={safeConsultant} />
    </>
  );
}