import PanelLayout from "@/components/layouts/PanelLayout";
import HomesList from "@/components/templates/homesList/HomesList";
import React from "react";

function page() {
  return (
    <PanelLayout>
    <HomesList />
    </PanelLayout>
  );
}

export default page;
