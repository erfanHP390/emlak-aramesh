import ComingSoon from "@/components/templates/ComingSoon";

function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "به زودی",
    description: "این صفحه در حال توسعه و آماده‌سازی است",
    url: "https://yourdomain.com/coming-soon",
    mainEntity: {
      "@type": "Message",
      text: "این صفحه به زودی راه‌اندازی خواهد شد. لطفاً در آینده مجدداً بررسی کنید.",
    },
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
          name: "به زودی",
          item: "https://yourdomain.com/coming-soon",
        },
      ],
    },
  };

  return (
    <>
      <head>
        <title>به زودی | سیستم مدیریت املاک آرامش</title>
        <meta name="description" content="صفحه در حال توسعه است. به زودی با ویژگی‌های جدید و خدمات بهتری در خدمت شما خواهیم بود" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <meta property="og:title" content="به زودی | سیستم مدیریت املاک آرامش" />
        <meta property="og:description" content="صفحه در حال توسعه است. به زودی با ویژگی‌های جدید بازمی‌گردیم" />
        <meta property="og:url" content="https://yourdomain.com/coming-soon" />
        <meta property="og:site_name" content="املاک آرامش" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <ComingSoon />
    </>
  );
}

export default Page;