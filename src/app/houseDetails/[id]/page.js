import PanelLayout from "@/components/layouts/PanelLayout";
import HouseDetails from "@/components/templates/houseDetails/HouseDetails";
import connectToDB from "@/configs/db";
import React from "react";
import HouseModel from "@/models/House";
import ConsultantModel from "@/models/Consultant";
import { authUser } from "@/utils/authUser";
import { redirect, notFound } from "next/navigation";


export default async function Page({ params }) {
  await connectToDB();

  const house = await HouseModel.findOne({ _id: params.id })
    .populate({
      path: "consultant",
      model: ConsultantModel,
      select: "-password",
      populate: [
        { path: "clients", model: "Client" },
        { path: "houses", model: "House" },
      ],
    })
    .lean();

  if (!house) notFound();

  const user = await authUser();
  if (!user) {
    redirect("/login");
  }

  return (
    <PanelLayout>
      <HouseDetails house={house} />
    </PanelLayout>
  );
}