import PanelLayout from "@/components/layouts/PanelLayout";
import ContactForm from "@/components/templates/contactForm/ContactForm";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "تماس با پشتیبانی | سیستم مدیریت املاک آرامش",
  description: "ارسال پیام به پشتیبانی سیستم مدیریت املاک آرامش. پاسخگویی سریع به سوالات، مشکلات فنی و پیشنهادات شما.",
  keywords: "تماس با پشتیبانی, پشتیبانی املاک آرامش, ارسال پیام, مشکلات فنی, راهنمایی سیستم املاک",
  authors: [{ name: "املاک آرامش" }],
  robots: "noindex, nofollow",
};

async function Page() {
    await connectToDB();
    const user = await authUser();

    if (!user) {
      redirect("/login");
      return null;
    }

    return (
      <PanelLayout>
        <ContactForm user={JSON.parse(JSON.stringify(user))} />
      </PanelLayout>
    );
}

export default Page;