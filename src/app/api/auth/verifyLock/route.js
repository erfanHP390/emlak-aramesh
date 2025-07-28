import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    connectToDB();

    const body = await req.json();
    const { password } = body;

    const cookieStore = cookies();
    const token = cookieStore.get("userToken")?.value;

    if (!token) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const tokenPayload = verify(token, process.env.PRIVATEKEY);
    const email = tokenPayload.email;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    const isCorrect = await verifyPassword(password, user.password);

    if (!isCorrect) {
      return Response.json({ message: "lock cannot open" }, { status: 401 });
    }

    return Response.json({ message: "Password verified" }, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
