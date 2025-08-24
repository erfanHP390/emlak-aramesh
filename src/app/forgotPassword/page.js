import ForgotPass from "@/components/templates/auth/forgotPass/ForgotPass";

function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "بازیابی رمز عبور",
    description: "صفحه بازیابی و بازنشانی رمز عبور حساب کاربری",
    url: "https://yourdomain.com/forgot-password",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "بازیابی رمز عبور",
          item: "https://yourdomain.com/forgot-password",
        },
      ],
    },
  };

  return (
    <>
      <head>
        <title>بازیابی رمز عبور | سیستم مدیریت املاک آرامش</title>
        <meta name="description" content="بازیابی و بازنشانی رمز عبور حساب کاربری در سیستم مدیریت املاک آرامش" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <meta property="og:title" content="بازیابی رمز عبور | سیستم مدیریت املاک آرامش" />
        <meta property="og:description" content="بازیابی و بازنشانی رمز عبور حساب کاربری در سیستم مدیریت املاک آرامش" />
        <meta property="og:url" content="https://yourdomain.com/forgot-password" />
        <meta property="og:site_name" content="املاک آرامش" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <ForgotPass />
    </>
  );
}

export default Page;