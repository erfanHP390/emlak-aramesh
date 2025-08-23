import PanelLayout from "@/components/layouts/PanelLayout";
import MainFaq from "@/components/templates/mainFaq/MainFaq";
import React from "react";
export const dynamic = "force-dynamic";


export async function generateMetadata() {
  return {
    title: "سوالات متداول | سیستم مدیریت املاک آرامش",
    description:
      "پاسخ به سوالات متداول در زمینه خرید، فروش، اجاره املاک، قوانین و مقررات سیستم مدیریت املاک آرامش.",
    keywords:
      "سوالات متداول املاک, راهنمای خرید ملک, قوانین اجاره, مشاوره املاک, سیستم املاک آرامش",
    authors: [{ name: "املاک آرامش" }],
    robots: "index, follow",
  };
}

function Page() {
  return (
    <PanelLayout>
      <MainFaq />
    </PanelLayout>
  );
}

export default Page;
