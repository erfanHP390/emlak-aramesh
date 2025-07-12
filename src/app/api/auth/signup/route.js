import { cookies } from "next/headers";
import connectToDB from "@/configs/db";
import {
  generateAccessToken,
  hashPassword,
  validateEmail,
  validatePassword,
} from "@/utils/auth";
import UserModel from "@/models/User";
import { roles } from "@/utils/constants";

export async function POST(req) {
  try {
    connectToDB();

    const body = await req.json();
    const { name, email, password, guildID } = body;

    if (!name || !email || !password) {
      return Response.json({ message: "all data must send" }, { status: 400 });
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return Response.json({ message: "email is not valid" }, { status: 419 });
    }

    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      return Response.json(
        { message: "password is not valid" },
        { status: 419 }
      );
    }

    const isUserExist = await UserModel.findOne({
      $or: [{ email }, { name }],
    });

    if (isUserExist) {
      return Response.json(
        { message: "the email or name is already exist" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const accessToken = generateAccessToken({ email });

    const role = guildID && guildID.trim() !== "" ? roles.ADMIN : roles.USER;
 
    const isExistGuildID = await UserModel.findOne({guildID})

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      isAccept: false,
      guildID,
      role: isExistGuildID ? roles.CONSULTANT : role,
    });

    cookies().set({
      name: "userToken",
      value: accessToken,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });

    return Response.json(
      { message: "user signed up successfully", data: newUser },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: `server error: ${err.message}` },
      { status: 500 }
    );
  }
}
