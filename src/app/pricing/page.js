import PanelLayout from "@/components/layouts/PanelLayout";
import MainPricing from "@/components/templates/pricing/MainPricing";

function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "تعرفه‌ها و قیمت‌گذاری",
    description: "صفحه تعرفه‌ها و پلن‌های خدمات سیستم مدیریت املاک",
    url: "https://yourdomain.com/pricing",
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
          name: "تعرفه‌ها",
          item: "https://yourdomain.com/pricing",
        },
      ],
    },
  };

  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "سیستم مدیریت املاک آرامش",
    description: "سرویس جامع مدیریت املاک و مشاورین",
    offers: {
      "@type": "AggregateOffer",
      offerCount: 3,
      lowPrice: "99000",
      highPrice: "299000",
      priceCurrency: "IRR",
      offers: [
        {
          "@type": "Offer",
          name: "پلن پایه",
          price: "99000",
          priceCurrency: "IRR",
          description: "پلن مناسب برای شروع کار با امکانات پایه",
        },
        {
          "@type": "Offer",
          name: "پلن حرفه‌ای",
          price: "199000",
          priceCurrency: "IRR",
          description: "پلن کامل با تمامی امکانات مورد نیاز",
        },
        {
          "@type": "Offer",
          name: "پلن سازمانی",
          price: "299000",
          priceCurrency: "IRR",
          description: "پلن ویژه برای شرکت‌ها و سازمان‌های بزرگ",
        },
      ],
    },
  };

  return (
    <>
      <head>
        <title>تعرفه‌ها و قیمت‌گذاری | سیستم مدیریت املاک آرامش</title>
        <meta name="description" content="مشاهده تعرفه‌ها و پلن‌های مختلف خدمات سیستم مدیریت املاک آرامش. انتخاب پلن مناسب برای نیازهای ملکی شما" />
        <meta name="keywords" content="قیمت‌گذاری املاک, تعرفه مشاورین املاک, پلن‌های مدیریت املاک, هزینه خدمات املاک" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <meta property="og:title" content="تعرفه‌ها و قیمت‌گذاری | سیستم مدیریت املاک آرامش" />
        <meta property="og:description" content="مشاهده تعرفه‌ها و پلن‌های مختلف خدماتシステム مدیریت املاک آرامش" />
        <meta property="og:url" content="https://yourdomain.com/pricing" />
        <meta property="og:site_name" content="املاک آرامش" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pricingStructuredData),
          }}
        />
      </head>
      <PanelLayout>
        <MainPricing />
      </PanelLayout>
    </>
  );
}

export default Page;