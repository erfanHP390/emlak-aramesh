import PanelLayout from "@/components/layouts/PanelLayout";
import AddHome from "@/components/templates/addHome/AddHome";
import connectToDB from "@/configs/db";
import { authAdmin, authConsultant, authUser } from "@/utils/authUser";
import ConsultantModel from "@/models/Consultant";
import { redirect } from "next/navigation";

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ثبت ملک جدید | پنل مدیریت املاک آرامش",
    description: "ثبت و افزودن ملک جدید به سیستم مدیریت املاک آرامش",
    url: "https://yourdomain.com/panel/add-home",
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
          name: "پنل مدیریت",
          item: "https://yourdomain.com/panel",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ثبت ملک جدید",
          item: "https://yourdomain.com/panel/add-home",
        },
      ],
    },
  };

  return (
    <>
      <head>
        <title>ثبت ملک جدید | پنل مدیریت املاک آرامش</title>
        <meta name="description" content="ثبت و افزودن ملک جدید به سیستم مدیریت املاک آرامش با قابلیت درج اطلاعات کامل و تصاویر" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <PanelLayout>
        <AddHome consultant={consultant} />
      </PanelLayout>
    </>
  );
}

export default Page;