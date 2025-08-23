import PanelLayout from "@/components/layouts/PanelLayout";
import MainPricing from "@/components/templates/pricing/MainPricing";

export async function generateMetadata() {
  return {
    title: "تعرفه‌ها و پلن‌های اشتراک | سیستم مدیریت املاک آرامش",
    description:
      "پلن‌های اشتراک متنوع برای سیستم مدیریت املاک آرامش. پلن‌های پایه، حرفه‌ای و سازمانی با امکانات مختلف برای نیازهای متنوع کسب‌وکارهای املاک.",
    keywords:
      "پلن اشتراک املاک, تعرفه سیستم املاک, نرم‌افزار مدیریت املاک, سامانه املاک آنلاین, پنل مشاورین املاک, سیستم CRM املاک",
    openGraph: {
      title: "تعرفه‌ها و پلن‌های اشتراک | سیستم مدیریت املاک آرامش",
      description: "پلن‌های اشتراک متنوع برای سیستم مدیریت املاک آرامش",
      type: "website",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "سیستم مدیریت املاک آرامش",
  description:
    "سامانه جامع مدیریت املاک، مشاورین و properties با قابلیت‌های پیشرفته",
  offers: {
    "@type": "AggregateOffer",
    offerCount: 3,
    lowPrice: 2900000,
    highPrice: 19900000,
    priceCurrency: "IRR",
    offers: [
      {
        "@type": "Offer",
        name: "پلن پایه",
        price: 2900000,
        priceCurrency: "IRR",
        description: "پلن مناسب برای املاک کوچک با مدیریت تا 20 ملک",
      },
      {
        "@type": "Offer",
        name: "پلن حرفه‌ای",
        price: 7900000,
        priceCurrency: "IRR",
        description: "پلن کامل با CRM یکپارچه و وبسایت اختصاصی",
      },
      {
        "@type": "Offer",
        name: "پلن سازمانی",
        price: 19900000,
        priceCurrency: "IRR",
        description: "پلن پیشرفته با امکانات نامحدود و پشتیبانی 24/7",
      },
    ],
  },
};

function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PanelLayout>
        <MainPricing />
      </PanelLayout>
    </>
  );
}

export default Page;
