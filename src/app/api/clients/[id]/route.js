import connectToDB from "@/configs/db";
import { authAdmin, authConsultant } from "@/utils/authUser";
import { isValidObjectId } from "mongoose";
import ClientModel from "@/models/Client";
import UserModel from "@/models/User";
import HouseModel from "@/models/House";

export async function PUT(req, { params }) {
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

    const body = await req.json();
    const { name, codeHouse, homeID, kindBuy, status, userID } = body;

    if (!name || !codeHouse || !kindBuy || !status) {
      return Response.json(
        { message: "all fields must be filled" },
        { status: 400 }
      );
    }

    if (!id) {
      return Response.json({ message: "id must be sent" }, { status: 400 });
    }

    if (!isValidObjectId(id)) {
      return Response.json({ message: "id is not valid" }, { status: 422 });
    }

    const client = await ClientModel.findOne({ _id: id });
    if (!client) {
      return Response.json({ message: "client is not found" }, { status: 404 });
    }

    const user = await UserModel.findOne({ name });
    if (user) {
      await UserModel.findOneAndUpdate(
        { name },
        {
          $set: {
            client: user ? client._id : null,
          },
        }
      );
    }

    const house = await HouseModel.findOne({ codeHouse });
    if (house) {
      await HouseModel.findOneAndUpdate(
        { codeHouse },
        {
          $set: {
            client: house ? client._id : null,
          },
        }
      );
    }

    await ClientModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          codeHouse,
          home: house ? house._id : null,
          kindBuy,
          status,
          user: user ? user._id : null,
        },
      }
    );

    return Response.json(
      { message: "info-client is updated successfully" },
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

    const client = await ClientModel.findOne({ _id: id });

    if (!client) {
      return Response.json(
        { message: "client not found" },
        {
          status: 404,
        }
      );
    }

    await ClientModel.findOneAndDelete({ _id: id });

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
