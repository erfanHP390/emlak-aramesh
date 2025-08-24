import PanelLayout from "@/components/layouts/PanelLayout";
import MyRegistrationHouse from "@/components/templates/myRegistrationHouse/MyRegistrationHouse";
import connectToDB from "@/configs/db";
import HouseModel from "@/models/House";
import ConsultantModel from "@/models/Consultant";
import { authConsultant, authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";

async function Page() {
  await connectToDB();

  const user = await authUser();
  const consultantLoggedIn = await authConsultant();

  if (!user) {
    redirect("/login");
  }

  const consultant = await ConsultantModel.findOne({ user: user._id });

  if (!consultantLoggedIn) {
    redirect("/dashboard");
  }

  const houses = await HouseModel.find({ consultant: consultant._id })
    .populate("consultant")
    .sort({ createdAt: -1 })
    .lean();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "خانه‌های ثبت‌شده من",
    description: "صفحه مدیریت املاک ثبت‌شده توسط مشاور",
    url: "https://yourdomain.com/dashboard/my-houses",
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
          name: "پنل کاربری",
          item: "https://yourdomain.com/dashboard",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "خانه‌های ثبت‌شده",
          item: "https://yourdomain.com/dashboard/my-houses",
        },
      ],
    },
  };

  const realEstateListings = houses.map((house, index) => ({
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: house.title || "ملک ثبت‌شده",
    description: house.description || "ملک ثبت‌شده در سیستم املاک آرامش",
    url: `https://yourdomain.com/properties/${house._id}`,
    datePosted: house.createdAt,
    listingStatus: "ForSale",
    position: index + 1,
  }));

  return (
    <>
      <head>
        <title>خانه‌های ثبت‌شده من | پنل مشاورین املاک آرامش</title>
        <meta name="description" content="مدیریت و مشاهده تمامی خانه‌های ثبت‌شده توسط شما در سیستم مدیریت املاک آرامش" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <meta property="og:title" content="خانه‌های ثبت‌شده من | پنل مشاورین املاک آرامش" />
        <meta property="og:description" content="مدیریت خانه‌های ثبت‌شده در پنل مشاورین" />
        <meta property="og:url" content="https://yourdomain.com/dashboard/my-houses" />
        <meta property="og:site_name" content="املاک آرامش" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {houses.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(realEstateListings),
            }}
          />
        )}
      </head>
      <PanelLayout>
        <MyRegistrationHouse houses={JSON.parse(JSON.stringify(houses))} />
      </PanelLayout>
    </>
  );
}

export default Page;