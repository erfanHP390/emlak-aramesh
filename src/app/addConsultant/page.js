import PanelLayout from "@/components/layouts/PanelLayout";
import AddConsultantForm from "@/components/templates/addConsultant/AddConsultantForm";
import connectToDB from "@/configs/db";
import { authAdmin, authConsultant, authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "افزودن مشاور جدید | پنل مدیریت املاک آرامش",
    "description": "افزودن مشاور جدید به سیستم مدیریت املاک آرامش",
    "url": "https://yourdomain.com/panel/add-consultant",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "خانه",
          "item": "https://yourdomain.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "پنل مدیریت",
          "item": "https://yourdomain.com/panel"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "افزودن مشاور",
          "item": "https://yourdomain.com/panel/add-consultant"
        }
      ]
    }
  };

  return (
    <>
      <head>
        <title>افزودن مشاور جدید | پنل مدیریت املاک آرامش</title>
        <meta name="description" content="افزودن مشاور جدید به سیستم مدیریت املاک آرامش با قابلیت تعیین سطح دسترسی و اطلاعات تماس" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <PanelLayout>
        <AddConsultantForm />
      </PanelLayout>
    </>
  );
}

export default Page;