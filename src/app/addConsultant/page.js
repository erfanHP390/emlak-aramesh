import PanelLayout from "@/components/layouts/PanelLayout";
import AddConsultantForm from "@/components/templates/addConsultant/AddConsultantForm";
import connectToDB from "@/configs/db";
import { authAdmin, authConsultant, authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import React from "react";

async function Page() {
  connectToDB();
  const admin = await authAdmin();
  const consultant = await authConsultant();
  const user = await authUser();

  if (!user) {
    redirect("/login");
  }

  if (!consultant && !admin) {
    redirect("/houseList");
  }

  return (
    <PanelLayout>
      <AddConsultantForm />
    </PanelLayout>
  );
}

export default Page;
