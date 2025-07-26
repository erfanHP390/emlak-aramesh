import connectToDB from "@/configs/db";
import { validateEmail, validatePassword, validatePhone } from "@/utils/auth";
import ConsultantModel from "@/models/Consultant";
import UserModel from "@/models/User";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    connectToDB();

    const formData = await req.fromData();
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

    const userID = await UserModel.findOne({});

    await ConsultantModel.create({
      firstName,
      lastName,
      hisCode,
      phone,
      birthDay,
      age,
      sex,
      email,
      user: userID._id || null,
      description,
      password,
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
