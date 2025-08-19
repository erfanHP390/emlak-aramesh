import LockScreen from "@/components/templates/auth/lockScreen/lockScreen";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import ConsultantModel from "@/models/Consultant";
import { redirect } from "next/navigation";

export default async function Page() {
  await connectToDB();

  const user = await authUser();
  if (!user) redirect("/login");

  const consultant = await ConsultantModel.findOne({
    email: user.email,
  }).lean();

  const safeUser = JSON.parse(JSON.stringify(user));
  const safeConsultant = JSON.parse(JSON.stringify(consultant || null));

  return <LockScreen user={safeUser} consultant={safeConsultant} />;
}
