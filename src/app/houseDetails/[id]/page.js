import PanelLayout from "@/components/layouts/PanelLayout";
import HouseDetails from "@/components/templates/houseDetails/HouseDetails";
import connectToDB from "@/configs/db";
import HouseModel from "@/models/House";
import ConsultantModel from "@/models/Consultant";
import { authUser } from "@/utils/authUser";
import { redirect, notFound } from "next/navigation";

export default async function Page({ params }) {
  await connectToDB();

  const house = await HouseModel.findOne({ _id: params.id })
    .populate({
      path: "consultant",
      model: ConsultantModel,
      select: "-password",
      populate: [
        { path: "clients", model: "Client" },
        { path: "houses", model: "House" },
      ],
    })
    .lean();

  if (!house) notFound();

  const user = await authUser();
  if (!user) {
    redirect("/login");
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: house.title || "ملک",
    description: house.description || "ملک مسکونی",
    url: `https://yourdomain.com/house/${params.id}`,
    image: house.images && house.images.length > 0 ? house.images : [],
    offers: {
      "@type": "Offer",
      price: house.price || "0",
      priceCurrency: "IRR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "RealEstateAgent",
        name: house.consultant?.fullName || "مشاور املاک",
        telephone: house.consultant?.phone || "",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: house.city || "تهران",
      addressRegion: house.province || "",
      streetAddress: house.address || "",
    },
  };

  return (
    <>
      <head>
        <title>{house.title || "ملک"} | املاک آرامش</title>
        <meta name="description" content={house.description || `ملک ${house.title} در ${house.city || "تهران"} با قیمت ${house.price || "توافقی"}`} />
        <meta name="keywords" content={`ملک, املاک, ${house.city}, ${house.title}, خرید ملک, فروش ملک`} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <meta property="og:title" content={house.title || "ملک"} />
        <meta property="og:description" content={house.description || `ملک در ${house.city || "تهران"}`} />
        {house.images && house.images.length > 0 && (
          <meta property="og:image" content={house.images[0]} />
        )}
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <PanelLayout>
        <HouseDetails house={house} />
      </PanelLayout>
    </>
  );
}