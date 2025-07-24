import PanelLayout from "@/components/layouts/PanelLayout";
import AddHome from "@/components/templates/addHome/AddHome";
import React from "react";

function page() {
  return (
    <>
      <PanelLayout>
        <>
          <AddHome />
        </>
      </PanelLayout>
    </>
  );
}

export default page;
