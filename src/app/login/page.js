import Login from "@/components/templates/auth/login/Login";

function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ورود به سیستم",
    description: "صفحه ورود به حساب کاربری سیستم مدیریت املاک",
    url: "https://yourdomain.com/login",
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
          name: "ورود به سیستم",
          item: "https://yourdomain.com/login",
        },
      ],
    },
    potentialAction: {
      "@type": "LoginAction",
      target: "https://yourdomain.com/login",
      expectsAcceptanceOf: {
        "@type": "Offer",
        category: "login",
      },
    },
  };

  return (
    <>
      <head>
        <title>ورود به سیستم | سیستم مدیریت املاک آرامش</title>
        <meta name="description" content="ورود به حساب کاربری در سیستم مدیریت املاک آرامش. دسترسی به پنل مدیریت املاک و خدمات اختصاصی" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <meta property="og:title" content="ورود به سیستم | سیستم مدیریت املاک آرامش" />
        <meta property="og:description" content="ورود به حساب کاربری در سیستم مدیریت املاک آرامش" />
        <meta property="og:url" content="https://yourdomain.com/login" />
        <meta property="og:site_name" content="املاک آرامش" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <Login />
    </>
  );
}

export default Page;