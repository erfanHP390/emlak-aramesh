import PanelLayout from "@/components/layouts/PanelLayout";
import ContactForm from "@/components/templates/contactForm/ContactForm";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";

async function Page() {
  try {
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
  } catch (error) {
    console.error("Error in contact Page:", error);
    redirect("/dashboard");
    return null;
  }
}

export default Page;
