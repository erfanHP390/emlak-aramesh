import PanelLayout from "@/components/layouts/PanelLayout";
import HouseDetails from "@/components/templates/houseDetails/HouseDetails";
import connectToDB from "@/configs/db";
import React from "react";
import HouseModel from "@/models/House";
import ConsultantModel from "@/models/Consultant";
import { authUser } from "@/utils/authUser";
import { redirect, notFound } from "next/navigation";
export const dynamic = "force-dynamic";


export async function generateMetadata({ params }) {
  await connectToDB();
  
  const house = await HouseModel.findOne({ _id: params.id })
    .populate({
      path: "consultant",
      model: ConsultantModel,
      select: "-password",
    })
    .lean();

  if (!house) {
    return {
      title: "ملک یافت نشد | سیستم مدیریت املاک آرامش",
      description: "صفحه مورد نظر یافت نشد.",
    };
  }

  return {
    title: `${house.name} | ${house.location} | سیستم مدیریت املاک آرامش`,
    description: `${house.description?.substring(0, 160) || `ملک ${house.name} در ${house.location} با قیمت ${house.price ? house.price.toLocaleString('fa-IR') + ' تومان' : 'توافقی'}`}`,
    keywords: `ملک, املاک, ${house.name}, ${house.location}, ${house.status}, سیستم املاک آرامش`,
    authors: [{ name: "املاک آرامش" }],
    openGraph: {
      title: house.name,
      description: house.description?.substring(0, 160) || `ملک در ${house.location}`,
      images: house.images && house.images.length > 0 ? [house.images[0]] : [],
    },
  };
}

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