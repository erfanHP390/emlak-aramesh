import Login from "@/components/templates/auth/login/Login";

export async function generateMetadata() {
  return {
    title: "ورود به پنل مدیریت | سیستم املاک آرامش",
    description:
      "ورود به پنل مدیریت سیستم املاک آرامش. دسترسی به مدیریت املاک، مشاوران، ثبت ملک و مدیریت درخواست‌های خرید و بازدید.",
    keywords:
      "ورود املاک, پنل مدیریت املاک, سیستم املاک آرامش, ورود مشاورین, مدیریت properties, ثبت ملک, مدیریت مشتریان",
    robots: "noindex, nofollow",
    openGraph: {
      title: "ورود به پنل مدیریت | سیستم املاک آرامش",
      description: "ورود به پنل مدیریت سیستم املاک آرامش",
      type: "website",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "ورود به پنل مدیریت - سیستم املاک آرامش",
  description:
    "صفحه ورود به پنل مدیریت سیستم املاک آرامش برای مشاورین و مدیران",
  publisher: {
    "@type": "RealEstateAgent",
    name: "سیستم مدیریت املاک آرامش",
  },
};

async function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Login />
    </>
  );
}

export default Page;
