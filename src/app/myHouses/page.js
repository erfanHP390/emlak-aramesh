import PanelLayout from "@/components/layouts/PanelLayout";
import MyRegistrationHouse from "@/components/templates/myRegistrationHouse/MyRegistrationHouse";
import connectToDB from "@/configs/db";
import HouseModel from "@/models/House";
import ConsultantModel from "@/models/Consultant";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";

async function page() {
  await connectToDB();

  const user = await authUser();

  if (!user) {
    redirect("/login")
  }

  const consultant = await ConsultantModel.findOne({ user: user._id });

  if (!consultant) {
    redirect("/dashboard")
  }

  const houses = await HouseModel.find({ consultant: consultant._id }).populate("consultant").lean();

  

  return (
    <PanelLayout>
      <MyRegistrationHouse houses={JSON.parse(JSON.stringify(houses))}   />
    </PanelLayout>
  );
}

export default page;
