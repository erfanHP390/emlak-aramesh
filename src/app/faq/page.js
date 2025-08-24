import PanelLayout from "@/components/layouts/PanelLayout";
import MainFaq from "@/components/templates/mainFaq/MainFaq";

function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "چگونه می‌توانم ملک جدید ثبت کنم؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "برای ثبت ملک جدید، وارد پنل مدیریت شده و از بخش 'ثبت ملک جدید' اقدام کنید. اطلاعات کامل ملک را وارد کرده و تصاویر مربوطه را آپلود نمایید.",
        },
      },
      {
        "@type": "Question",
        name: "چگونه مشتریان خود را مدیریت کنم؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "در بخش 'مدیریت مشتریان' می‌توانید اطلاعات مشتریان را مشاهده، ویرایش و مدیریت کنید. همچنین می‌توانید مشتریان جدید اضافه نمایید.",
        },
      },
      {
        "@type": "Question",
        name: "سیستم املاک آرامش چه امکاناتی ارائه می‌دهد؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "سیستم املاک آرامش شامل مدیریت املاک، مشتریان، درخواست‌های خرید، قراردادها، گزارش‌های تحلیلی و پنل مدیریت پیشرفته می‌باشد.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>سوالات متداول | راهنمای جامع سیستم املاک آرامش</title>
        <meta name="description" content="پاسخ به سوالات متداول در مورد سیستم مدیریت املاک آرامش، راهنمای استفاده از پنل و حل مشکلات رایج" />
        <meta name="keywords" content="سوالات متداول املاک, راهنمای سیستم املاک, پشتیبانی املاک آرامش, FAQ مدیریت املاک, آموزش پنل املاک" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <meta property="og:title" content="سوالات متداول | راهنمای جامع سیستم املاک آرامش" />
        <meta property="og:description" content="پاسخ به سوالات متداول در مورد سیستم مدیریت املاک آرامش" />
        <meta property="og:url" content="https://yourdomain.com/faq" />
        <meta property="og:site_name" content="املاک آرامش" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <PanelLayout>
        <MainFaq />
      </PanelLayout>
    </>
  );
}

export default Page;