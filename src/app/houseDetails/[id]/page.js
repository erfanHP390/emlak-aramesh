import PanelLayout from "@/components/layouts/PanelLayout";
import HouseDetails from "@/components/templates/houseDetails/HouseDetails";
import connectToDB from "@/configs/db";
import React from "react";
import HouseModel from "@/models/House";

async function page({ params }) {
  connectToDB();
  const house = await HouseModel.findOne({ _id: params.id })
    .populate("consultant")
    .lean();

  return (
    <PanelLayout>
      <HouseDetails house={JSON.parse(JSON.stringify(house))} />
    </PanelLayout>
  );
}

export default page;
