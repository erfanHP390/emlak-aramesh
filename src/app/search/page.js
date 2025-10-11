import PanelLayout from "@/components/layouts/PanelLayout";
import React from "react";
import ConsultantModel from "@/models/Consultant";
import HouseModel from "@/models/House";
import connectToDB from "@/configs/db";
import SearchingResult from "@/components/templates/searchingResult/SearchingResult";

async function page({ searchParams }) {
  connectToDB();

  const searchQuery = searchParams.q || "";

  const consultants = await ConsultantModel.find({
    $or: [
      { firstName: { $regex: searchQuery, $options: "i" } },
      { lastName: { $regex: searchQuery, $options: "i" } },
      { hisCode: { $regex: searchQuery, $options: "i" } },
      { agencyID: { $regex: searchQuery, $options: "i" } },
      { phone: { $regex: searchQuery, $options: "i" } },
      { email: { $regex: searchQuery, $options: "i" } },
      { description: { $regex: searchQuery, $options: "i" } },
    ],
  }).lean();

  const houses = await HouseModel.find({
    $or: [
      { name: { $regex: searchQuery, $options: "i" } },
      { location: { $regex: searchQuery, $options: "i" } },
      { fullAddress: { $regex: searchQuery, $options: "i" } },
      { description: { $regex: searchQuery, $options: "i" } },
      { codeHouse: { $regex: searchQuery, $options: "i" } },
      { agencyID: { $regex: searchQuery, $options: "i" } },
      { features: { $regex: searchQuery, $options: "i" } },
      { kind: { $regex: searchQuery, $options: "i" } },
    ],
  })
    .populate("consultant", "firstName lastName img phone email")
    .lean();

  const consultantsFromHouses = houses.map((h) => h.consultant).filter(Boolean);

  const allConsultants = [...consultants, ...consultantsFromHouses].filter(
    (consultant, index, self) =>
      consultant &&
      self.findIndex((c) => c._id.toString() === consultant._id.toString()) ===
        index
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    name: `نتایج جستجو برای "${searchQuery}"`,
    description: `صفحه نتایج جستجو برای عبارت "${searchQuery}" در سیستم املاک آرامش - مشاهده ${allConsultants.length} مشاور و ${houses.length} ملک`,
    url: `https://emlak-aramesh.vercel.app/search?q=${encodeURIComponent(
      searchQuery
    )}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allConsultants.length + houses.length,
      itemListElement: [
        ...allConsultants.map((consultant, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "RealEstateAgent",
            name: `${consultant.firstName} ${consultant.lastName}`,
            description: consultant.description || "مشاور املاک متخصص",
            telephone: consultant.phone,
            email: consultant.email,
            url: `https://emlak-aramesh.vercel.app/consultantDetails/${consultant._id}`,
          },
        })),
        ...houses.map((house, index) => ({
          "@type": "ListItem",
          position: allConsultants.length + index + 1,
          item: {
            "@type": "RealEstateListing",
            name: house.name,
            description: house.description || "ملک با شرایط مناسب",
            url: `https://emlak-aramesh.vercel.app/houseDetails/${house._id}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: house.location,
              streetAddress: house.fullAddress,
            },
            numberOfRooms: house.bedrooms,
            numberOfParkingSpaces: house.parking,
            floorLevel: house.floor,
          },
        })),
      ],
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "خانه",
        item: "https://emlak-aramesh.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "جستجو",
        item: "https://emlak-aramesh.vercel.app/search",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `نتایج جستجو برای "${searchQuery}"`,
        item: `https://emlak-aramesh.vercel.app/search?q=${encodeURIComponent(
          searchQuery
        )}`,
      },
    ],
  };

  const metaTitle = searchQuery
    ? `نتایج جستجو برای "${searchQuery}" - ${allConsultants.length} مشاور و ${houses.length} ملک | املاک آرامش`
    : "جستجوی املاک و مشاورین | املاک آرامش";

  const metaDescription = searchQuery
    ? `نتایج جستجو برای "${searchQuery}" - ${allConsultants.length} مشاور املاک و ${houses.length} ملک موجود. پیدا کردن بهترین مشاورین و املاک در منطقه مورد نظر شما.`
    : "جستجوی پیشرفته در بین مشاورین املاک و خانه‌های موجود در سیستم املاک آرامش. پیدا کردن ملک و مشاور مناسب.";

  return (
    <>
      <head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content={`جستجو, املاک, مشاور, خانه, آپارتمان, ${searchQuery}, تهران, ملک`}
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://emlak-aramesh.vercel.app/search?q=${encodeURIComponent(
            searchQuery
          )}`}
        />
        <link
          rel="icon"
          href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png"
        />

        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:url"
          content={`https://emlak-aramesh.vercel.app/search?q=${encodeURIComponent(
            searchQuery
          )}`}
        />
        <meta property="og:site_name" content="املاک آرامش" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emlak-aramesh.vercel.app/images/logo-w-bg.png"
        />
        <meta property="og:image:alt" content="لوگو املاک آرامش" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://emlak-aramesh.vercel.app/images/logo-w-bg.png"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="fa" />
        <meta name="author" content="املاک آرامش" />
        <meta name="copyright" content="املاک آرامش" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData),
          }}
        />

        {houses.length > 0 &&
          houses.map((house, index) => (
            <script
              key={house._id}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "RealEstateListing",
                  name: house.name,
                  description: house.description || "ملک با شرایط مناسب",
                  url: `https://emlak-aramesh.vercel.app/houseDetails/${house._id}`,
                  image:
                    house.images && house.images.length > 0
                      ? `https://emlak-aramesh.vercel.app${house.images[0]}`
                      : "https://emlak-aramesh.vercel.app/images/house-bg-info.webp",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: house.location,
                    streetAddress: house.fullAddress,
                  },
                  numberOfRooms: house.bedrooms,
                  numberOfParkingSpaces: house.parking,
                  floorLevel: house.floor,
                  price: house.price,
                  priceCurrency: "IRR",
                }),
              }}
            />
          ))}

        {allConsultants.length > 0 &&
          allConsultants.map((consultant, index) => (
            <script
              key={consultant._id}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "RealEstateAgent",
                  name: `${consultant.firstName} ${consultant.lastName}`,
                  description: consultant.description || "مشاور املاک متخصص",
                  telephone: consultant.phone,
                  email: consultant.email,
                  image: consultant.img
                    ? `https://emlak-aramesh.vercel.app${consultant.img}`
                    : "https://emlak-aramesh.vercel.app/images/abstract-user-flat-4.svg",
                  url: `https://emlak-aramesh.vercel.app/consultantDetails/${consultant._id}`,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "تهران",
                    addressCountry: "IR",
                  },
                }),
              }}
            />
          ))}
      </head>
      <PanelLayout>
        <SearchingResult
          consultants={JSON.parse(JSON.stringify(allConsultants))}
          houses={JSON.parse(JSON.stringify(houses))}
          searchQuery={searchQuery}
        />
      </PanelLayout>
    </>
  );
}

export default page;
