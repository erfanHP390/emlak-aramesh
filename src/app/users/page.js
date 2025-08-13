import React from "react";
import UserList from "../../components/templates/userList/UserList";
import PanelLayout from "@/components/layouts/PanelLayout";
import connectToDB from "@/configs/db";
import { authAdmin, authConsultant, authUser } from "@/utils/authUser";
import UserModel from "@/models/User";
import { redirect } from "next/navigation";

async function page() {
  connectToDB();
  const user = await authUser();

  const users = await UserModel.find({});

  if (!user) {
    redirect("/login");
  }

  const admin = await authAdmin();
  const consultant = await authConsultant();
  
  if (!consultant && !admin) {
    redirect("/houseList");
  }

  return (
    <PanelLayout>
      <UserList users={users} />
    </PanelLayout>
  );
}

export default page;
