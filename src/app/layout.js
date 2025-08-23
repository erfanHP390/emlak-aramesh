import Script from "next/script";
import "../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollTopBtn from "@/components/modules/ScrollTopBtn/ScrollTopBtn";

export const metadata = {
  title: "سیستم مدیریت دیجیتال املاک آرامش | پلتفرم جامع مدیریت املاک",
  description: "پلتفرم تخصصی مدیریت املاک و مشاورین املاک با قابلیت ثبت ملک، مدیریت مشتریان، پیگیری درخواست‌های خرید و بازدید آنلاین از املاک با شناسه صنفی اختصاصی",
  keywords: "مدیریت املاک, سیستم مدیریت املاک, نرم افزار املاک, ثبت ملک, مدیریت مشاورین املاک, پلتفرم املاک, دیجیتال مارکتینگ املاک, املاک آرامش",
  authors: [{ name: "املاک آرامش" }],
  creator: "املاک آرامش",
  publisher: "املاک آرامش",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  viewport: "width=device-width, initial-scale=1.0",
    icons: {
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png",
  },
  openGraph: {
    title: "سیستم مدیریت دیجیتال املاک آرامش | پلتفرم جامع مدیریت املاک",
    description: "پلتفرم تخصصی مدیریت املاک و مشاورین املاک با قابلیت ثبت ملک، مدیریت مشتریان و پیگیری درخواست‌های خرید",
    url: "https://yourdomain.com",
    siteName: "املاک آرامش",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
        alt: "سیستم مدیریت دیجیتال املاک آرامش",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "سیستم مدیریت دیجیتال املاک آرامش | پلتفرم جامع مدیریت املاک",
    description: "پلتفرم تخصصی مدیریت املاک و مشاورین املاک با قابلیت ثبت ملک، مدیریت مشتریان و پیگیری درخواست‌های خرید",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
  category: "real estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/skin_color.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "املاک آرامش",
              "description": "سیستم مدیریت دیجیتال املاک با قابلیت ثبت ملک، مدیریت مشتریان و پیگیری درخواست‌های خرید",
              "url": "https://yourdomain.com",
              "telephone": "+98-21-12345678",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "آدرس دفتر مرکزی",
                "addressLocality": "تهران",
                "addressCountry": "IR"
              },
              "serviceType": "مدیریت املاک و مشاورین"
            })
          }}
        />
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
          {children}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <ScrollTopBtn />
      </body>
    </html>
  );
}