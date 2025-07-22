import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import ClientModel from "@/models/Client";
import HouseModel from "@/models/House";

export async function POST(req) {
  try {
    await connectToDB();

    const body = await req.json();
    const { name, codeHouse, homeID, kindBuy, status, userID } = body;

    if (!name || !codeHouse || !kindBuy || !status) {
      return Response.json(
        { message: "همه فیلدهای ضروری باید ارسال شوند." },
        { status: 400 }
      );
    }

    // const house = await HouseModel.findById(homeID);
    // if (!house) {
    //   return Response.json(
    //     { message: "ملک مورد نظر پیدا نشد." },
    //     { status: 404 }
    //   );
    // }

    // const house = await HouseModel.findOne({codeHouse})
    // if(!house) {
    //     return Response.json({message: "house not found!"} ,{
    //         status: 404
    //     })
    // }

    const user = await UserModel.findOne({name})

    const newClient = await ClientModel.create({
      name,
      codeHouse,
      home: homeID || null,
      kindBuy,
      status,
      user: user._id || null, 
    });

    if (user) {
      const user = await UserModel.findById(userID);
      if (user && user.role === "USER") {
        user.client = newClient._id;
        await user.save();
      }
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