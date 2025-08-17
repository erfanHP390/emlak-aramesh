import PanelLayout from "@/components/layouts/PanelLayout";
import AddHome from "@/components/templates/addHome/AddHome";
import connectToDB from "@/configs/db";
import { authAdmin, authConsultant, authUser } from "@/utils/authUser";
import React from "react";
import ConsultantModel from "@/models/Consultant";
import { redirect } from "next/navigation";

async function page() {
  connectToDB();
  const user = await authUser();
  const consultant = await ConsultantModel.findOne({ email: user?.email });

  const admin = await authAdmin();
  const consultantLoggedIn = await authConsultant();

  if (!user) {
    redirect("/login");
  }

  if (!consultantLoggedIn && !admin) {
    redirect("/houseList");
  }

  return (
    <PanelLayout>
      <AddHome consultant={consultant} />
    </PanelLayout>
  );
}

export default page;
