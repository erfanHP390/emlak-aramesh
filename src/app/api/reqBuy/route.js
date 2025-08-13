import connectToDB from "@/configs/db";
import { validateEmail, validatePhone } from "@/utils/auth";
import ConsultantModel from "@/models/Consultant";
import HouseModel from "@/models/House";
import ReqBuyModel from "@/models/ReqBuy";
import { authUser } from "@/utils/authUser";

export async function POST(req) {
  try {
    connectToDB();

    const user = await authUser();
    if (!user) {
      return Response.json(
        { message: "user not authorized" },
        {
          status: 401,
        }
      );
    }

    const body = await req.json();
    const { name, phone, email, description, codeConsultant, codeHouse } = body;

    if (
      !name ||
      !phone ||
      !email ||
      !description ||
      !codeConsultant ||
      !codeHouse
    ) {
      return Response.json(
        { message: "All information must be sent." },
        {
          status: 400,
        }
      );
    }

    const isValidPhone = validatePhone(phone);
    if (!isValidPhone) {
      return Response.json(
        { message: "phone is not valid" },
        {
          status: 422,
        }
      );
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return Response.json(
        { message: "email is not valid" },
        {
          status: 422,
        }
      );
    }

    const isExistConsultant = await ConsultantModel.findOne({
      hisCode: codeConsultant,
    });
    const isExistHouse = await HouseModel.findOne({ codeHouse });

    await ReqBuyModel.create({
      name,
      phone,
      email,
      description,
      consultant: isExistConsultant ? isExistConsultant._id : null,
      houses: isExistHouse ? [isExistHouse._id] : [],
    });

    return Response.json(
      { message: "request buy house is created successfully" },
      {
        status: 201,
      }
    );
  } catch (err) {
    return Response.json(
      { message: `interval error server : ${err}` },
      {
        status: 500,
      }
    );
  }
}
