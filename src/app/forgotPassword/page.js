import ForgotPass from "@/components/templates/auth/forgotPass/ForgotPass";
import React from "react";

export async function generateMetadata() {
  return {
    title: "بازیابی رمز عبور | سیستم مدیریت املاک آرامش",
    description:
      "بازیابی رمز عبور حساب کاربری در سیستم مدیریت املاک آرامش. دریافت لینک بازیابی از طریق ایمیل.",
    keywords:
      "بازیابی رمز عبور, فراموشی رمز, ورود به سیستم, احراز هویت, سیستم املاک آرامش",
    authors: [{ name: "املاک آرامش" }],
    robots: "noindex, nofollow",
  };
}

function Page() {
  return (
    <>
      <ForgotPass />
    </>
  );
}

export default Page;
