import PanelLayout from "@/components/layouts/PanelLayout";
import AddHome from "@/components/templates/addHome/AddHome";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import React from "react";
import ConsultantModel from "@/models/Consultant"

async function page() {

  connectToDB()
  const user = await authUser()
  const consultant = await ConsultantModel.findOne({email: user.email})

  return (
    <>
      <PanelLayout>
        <>
          <AddHome consultant={consultant} />
        </>
      </PanelLayout>
    </>
  );
}

export default page;
