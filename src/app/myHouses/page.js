import PanelLayout from "@/components/layouts/PanelLayout";
import MyRegistrationHouse from "@/components/templates/myRegistrationHouse/myRegistrationHouse";
import connectToDB from "@/configs/db";
import React from "react";

async function page() {


    connectToDB()

  return (
    <PanelLayout>
      <MyRegistrationHouse />
    </PanelLayout>
  );
}

export default page;
