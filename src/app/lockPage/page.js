import LockScreen from "@/components/templates/auth/lockScreen/lockScreen";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import React from "react";
import UserModel from "@/models/User";
import ConsultantModel from "@/models/Consultant";

async function page() {
  connectToDB();
  const user = await authUser();
  const consultant = await ConsultantModel.findOne({ email : user.email})

  return (
    <>
      <LockScreen user={user} consultant={consultant} />
    </>
  );
}

export default page;
