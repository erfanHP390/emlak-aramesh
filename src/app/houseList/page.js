import PanelLayout from "@/components/layouts/PanelLayout";
import HomesList from "@/components/templates/homesList/HomesList";
import React from "react";
import connectToDB from "@/configs/db";
import HouseModel from "@/models/House";
import ConsultantModel from "@/models/Consultant";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";

async function Page() {
  await connectToDB();
  const user = await authUser();
  if (!user) redirect("/login");

  const consultant = await ConsultantModel.findOne({ user: user._id });
  const houses = await HouseModel.find().populate("consultant").lean();

  return (
    <PanelLayout>
      <HomesList houses={JSON.parse(JSON.stringify(houses || []))} />
    </PanelLayout>
  );
}
export default Page;
