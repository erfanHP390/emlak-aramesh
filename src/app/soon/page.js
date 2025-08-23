import ComingSoon from "@/components/templates/ComingSoon";
export const dynamic = "force-dynamic";


export async function generateMetadata() {
  return {
    title: "به زودی | ویژگی‌های جدید سیستم مدیریت املاک آرامش",
    description:
      "سیستم مدیریت املاک آرامش به زودی با ویژگی‌های جدید و پیشرفته راه‌اندازی خواهد شد. برای اطلاع از زمان راه‌اندازی، ایمیل خود را ثبت کنید.",
    keywords:
      "سیستم مدیریت املاک, ویژگی‌های جدید املاک, راه‌اندازی soon, نرم‌افزار املاک, مدیریت properties, مشاورین املاک",
    openGraph: {
      title: "به زودی | ویژگی‌های جدید سیستم مدیریت املاک آرامش",
      description:
        "سیستم مدیریت املاک آرامش به زودی با ویژگی‌های جدید راه‌اندازی می‌شود",
      type: "website",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "صفحه به زودی - سیستم مدیریت املاک آرامش",
  description:
    "صفحه اطلاع‌رسانی راه‌اندازی ویژگی‌های جدید سیستم مدیریت املاک آرامش",
  publisher: {
    "@type": "RealEstateAgent",
    name: "سیستم مدیریت املاک آرامش",
  },
};

function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ComingSoon />
    </>
  );
}

export default page;
