import PanelLayout from "@/components/layouts/PanelLayout";
import HomesList from "@/components/templates/homesList/HomesList";
import connectToDB from "@/configs/db";
import HouseModel from "@/models/House";
import ConsultantModel from "@/models/Consultant";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";

async function Page() {
  await connectToDB();
  const user = await authUser();
  if (!user) redirect("/login");

  const consultant = await ConsultantModel.findOne({ user: user._id });
  const houses = await HouseModel.find().populate("consultant").lean();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "لیست املاک املاک آرامش",
    description: "لیست کامل املاک ثبت شده در سیستم مدیریت املاک",
    url: "https://yourdomain.com/houseList",
    numberOfItems: houses.length,
    itemListElement: houses.slice(0, 10).map((house, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "RealEstateListing",
        name: house.title || "ملک",
        description: house.description || "ملک مسکونی",
        url: `https://yourdomain.com/house/${house._id}`,
        image: house.images && house.images.length > 0 ? house.images[0] : "",
        offers: {
          "@type": "Offer",
          price: house.price || "0",
          priceCurrency: "IRR",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: house.city || "تهران",
        },
      },
    })),
  };

  return (
    <>
      <head>
        <title>لیست املاک | مدیریت املاک ثبت شده در سیستم</title>
        <meta name="description" content="مشاهده و مدیریت کامل لیست تمامی املاک ثبت شده در سیستم مدیریت املاک آرامش" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <meta property="og:title" content="لیست املاک | مدیریت املاک ثبت شده" />
        <meta property="og:description" content="مدیریت کامل لیست املاک در سیستم املاک آرامش" />
        <meta property="og:url" content="https://yourdomain.com/houseList" />
        <meta property="og:site_name" content="املاک آرامش" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <PanelLayout>
        <HomesList houses={JSON.parse(JSON.stringify(houses || []))} />
      </PanelLayout>
    </>
  );
}

export default Page;