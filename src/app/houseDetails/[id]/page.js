import PanelLayout from "@/components/layouts/PanelLayout";
import HouseDetails from "@/components/templates/houseDetails/HouseDetails";
import connectToDB from "@/configs/db";
import React from "react";
import HouseModel from "@/models/House";
import ConsultantModel from "@/models/Consultant";
import ClientModel from "@/models/Client"

async function page({ params }) {
  connectToDB();
const house = await HouseModel.findOne({ _id: params.id })
  .populate({
    path: "consultant",
    model: ConsultantModel,
    select: "-password",
    populate: [
      {
        path: "clients",
        model: "Client",
      },
      {
        path: "houses",
        model: "House",
      },
    ],
  })
  .lean();


  return (
    <PanelLayout>
      <HouseDetails house={JSON.parse(JSON.stringify(house))} />
    </PanelLayout>
  );
}

export default page;
