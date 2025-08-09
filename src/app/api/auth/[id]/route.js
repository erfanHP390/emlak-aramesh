import connectToDB from "@/configs/db";
import { authAdmin, authConsultant } from "@/utils/authUser";
import { isValidObjectId } from "mongoose";
import UserModel from "@/models/User";
import HouseModel from "@/models/House";

export async function DELETE(req, { params }) {
  try {
    connectToDB();

    const admin = await authAdmin();
    const consultant = await authConsultant();

    if (!admin && !consultant) {
      return Response.json(
        { message: "this route is protected" },
        {
          status: 401,
        }
      );
    }

    const id = params.id;

    if (!id) {
      return Response.json(
        { message: "id not send" },
        {
          status: 400,
        }
      );
    }

    if (!isValidObjectId(id)) {
      return Response.json(
        { message: "id is not valid" },
        {
          status: 422,
        }
      );
    }

    const user = await UserModel.findOne({ _id: id });

    if (!user) {
      return Response.json(
        { message: "user not found" },
        {
          status: 404,
        }
      );
    }

    if(user.role === "ADMIN") {
        return Response.json({message: "you have not access to delete admin"} , {
            status: 403
        })
    }

    await UserModel.findOneAndDelete({ _id: id });

    return Response.json(
      { message: "client deleted successfully" },
      {
        status: 200,
      }
    );
  } catch (err) {
    return Response.json(
      { message: `interval error server: ${err.message}` },
      { status: 500 }
    );
  }
}
