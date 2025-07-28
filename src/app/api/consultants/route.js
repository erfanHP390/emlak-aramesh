import connectToDB from "@/configs/db";
import {
  hashPassword,
  validateEmail,
  validatePassword,
  validatePhone,
} from "@/utils/auth";
import ConsultantModel from "@/models/Consultant";
import UserModel from "@/models/User";
import { writeFile } from "fs/promises";
import path from "path";
import { roles } from "@/utils/constants";

export async function POST(req) {
  try {
    connectToDB();

    const formData = await req.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const hisCode = formData.get("hisCode");
    const phone = formData.get("phone");
    const birthDay = formData.get("birthDay");
    const age = formData.get("age");
    const sex = formData.get("sex");
    const email = formData.get("email");
    const img = formData.get("img");
    const description = formData.get("description");
    const password = formData.get("password");
    const user = formData.get("user");
    const socials = formData.getAll("socials");
    const agencyID = formData.get("agencyID");

    if (
      !firstName ||
      !lastName ||
      !hisCode ||
      !phone ||
      !birthDay ||
      !age ||
      !sex ||
      !email ||
      !description ||
      !password ||
      !agencyID ||
      !socials
    ) {
      return Response.json(
        { message: "all field must something" },
        {
          status: 400,
        }
      );
    }

    const isValidPhone = validatePhone(phone);
    if (!isValidPhone) {
      return Response.json(
        { message: "phone is no valid" },
        {
          status: 422,
        }
      );
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return Response.json(
        { message: "email is no valid" },
        {
          status: 422,
        }
      );
    }

    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      return Response.json(
        { message: "password is no valid" },
        {
          status: 422,
        }
      );
    }

    const buffer = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + img.name;
    const imgPath = path.join(process.cwd(), "public/uploads/" + filename);

    await writeFile(imgPath, buffer);

    const hashedPassword = await hashPassword(password);

    // let userDoc = await UserModel.findOne({ guildID: agencyID });
    // if (!userDoc) {
      let userDoc = await UserModel.create({
        name: firstName + " " + lastName,
        email,
        password: hashedPassword,
        isAccept: false,
        guildID: agencyID ? agencyID : null,
        role: hisCode ? roles.CONSULTANT : roles.USER,
      });
    // }

    await ConsultantModel.create({
      firstName,
      lastName,
      hisCode,
      phone,
      birthDay,
      age,
      sex,
      email,
      agencyID,
      user: userDoc._id,
      description,
      password: hashedPassword,
      socials,
      img: `http://localhost:3000/uploads/${filename}`,
    });

    return Response.json(
      { message: "consultant-info is registered successfully" },
      {
        status: 201,
      }
    );
  } catch (err) {
    return Response.json(
      { message: `interval error server: ${err}` },
      {
        status: 500,
      }
    );
  }
}
