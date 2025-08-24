import PanelLayout from "@/components/layouts/PanelLayout";
import ContactForm from "@/components/templates/contactForm/ContactForm";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import Head from "next/head";

async function Page() {
  await connectToDB();
  const user = await authUser();

  if (!user) {
    redirect("/login");
    return null;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "تماس با پشتیبانی املاک آرامش",
    description: "فرم تماس با پشتیبانی سیستم مدیریت املاک آرامش",
    url: "https://yourdomain.com/contact",
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
          name: "پنل مدیریت",
          item: "https://yourdomain.com/dashboard",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "تماس با ما",
          item: "https://yourdomain.com/contact",
        },
      ],
    },
  };

  return (
    <>
      <head>
        <title>تماس با ما | فرم ارتباط با پشتیبانی املاک آرامش</title>
        <meta name="description" content="فرم تماس با پشتیبانی سیستم مدیریت املاک آرامش برای ارسال پیام، پیشنهادات و گزارش مشکلات" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <PanelLayout>
        <ContactForm user={JSON.parse(JSON.stringify(user))} />
      </PanelLayout>
    </>
  );
}

export default Page;