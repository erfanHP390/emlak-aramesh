import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import ClientModel from "@/models/Client";
import HouseModel from "@/models/House";
import ConsultantModel from "@/models/Consultant";
import { authAdmin, authConsultant } from "@/utils/authUser";

export async function POST(req) {
  try {
    await connectToDB();

    const admin = await authAdmin();
    const consultantLoggedIn = await authConsultant();

    if (!admin && !consultantLoggedIn) {
      return Response.json(
        { message: "this route is protected" },
        {
          status: 401,
        }
      );
    }

    const body = await req.json();
    const { name, codeHouse, homeID, consultantCode, kindBuy, status, userID } =
      body;

    if (!name || !codeHouse || !kindBuy || !status || !consultantCode) {
      return Response.json(
        { message: "همه فیلدهای ضروری باید ارسال شوند." },
        { status: 400 }
      );
    }

    const house = await HouseModel.findOne({ codeHouse });
    if (!house) {
      return Response.json(
        { message: "house not found!" },
        {
          status: 404,
        }
      );
    }

    const consultant = await ConsultantModel.findOne({
      hisCode: consultantCode,
    });

    const user = await UserModel.findOne({ name });

    const newClient = await ClientModel.create({
      name,
      codeHouse,
      kindBuy,
      status,
      consultant: consultant ? consultant._id : null,
      user: user ? user._id : null,
      houses: house ? [house._id] : [],
    });

    if (user) {
      const user = await UserModel.findById(userID);
      if (user && user.role === "USER") {
        user.client = newClient._id;
        await user.save();
      }
    }

    const client = await ClientModel.findOne({ name });
    if (client) {
      await UserModel.findOneAndUpdate(
        { userID },
        {
          $set: {
            client: client._id,
          },
        }
      );
    }

    return Response.json(
      { message: "client is created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: `interval error server: ${err.message}` },
      { status: 500 }
    );
  }
}
