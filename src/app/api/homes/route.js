import connectToDB from "@/configs/db";
import { writeFile } from "fs/promises";
import path from "path";
import HouseModel from "@/models/House";
import ClientModel from "@/models/Client";
import ConsultantModel from "@/models/Consultant";

export async function POST(req) {
  try {
    connectToDB();
    const formData = await req.formData();

    let codeHouse = formData.get("codeHouse") || "";
    const agencyID = formData.get("agencyID");
    const name = formData.get("name");
    const location = formData.get("location");
    const fullAddress = formData.get("fullAddress");
    const description = formData.get("description");
    const status = formData.get("status");
    const bedrooms = formData.get("bedrooms");
    const floor = formData.get("floor");
    const parking = formData.get("parking");
    const storage = formData.get("storage");
    const elevator = formData.get("elevator");
    const masterRoom = formData.get("masterRoom");
    const yearBuilt = formData.get("yearBuilt");
    const clientID = formData.get("clientID");
    const images = formData.getAll("images"); // آرایه فایل‌ها
    const features = formData.getAll("features");
    const clientName = formData.get("clientName");
    const consultantCode = formData.get("consultantCode");

    if (!images.length) {
      return Response.json({ message: "home has no image" }, { status: 400 });
    }

    const savedImagePaths = [];

    for (const image of images) {
      const buffer = Buffer.from(await image.arrayBuffer());
      const filename = Date.now() + "-" + image.name;
      const imagePath = path.join(process.cwd(), "public/uploads/" + filename);
      await writeFile(imagePath, buffer);
      savedImagePaths.push(`http://localhost:3000/uploads/${filename}`);
    }

    if (
      !description ||
      !agencyID ||
      !name ||
      !location ||
      !fullAddress ||
      !status ||
      !bedrooms ||
      !floor ||
      !parking ||
      !storage ||
      !elevator ||
      !masterRoom ||
      !yearBuilt ||
      !consultantCode ||
      !features.length
    ) {
      return Response.json(
        { message: "all fields must have something" },
        { status: 400 }
      );
    }

    const client = await ClientModel.findOne({ name: clientName });
    if (!client) {
      return Response.json(
        { message: "client not found" },
        {
          status: 404,
        }
      );
    }

    const consultant = await ConsultantModel.findOne({
      hisCode: consultantCode,
    });
    if (!consultant) {
      return Response.json(
        { message: "consultant not found" },
        {
          status: 404,
        }
      );
    }

    do {
      codeHouse = Math.floor(Math.random() * 900000) + 100000;
    } while (await HouseModel.findOne({ codeHouse }));

    const newHouse = await HouseModel.create({
      codeHouse,
      agencyID,
      name,
      location,
      fullAddress,
      description,
      status,
      bedrooms,
      floor,
      parking,
      storage,
      elevator,
      masterRoom,
      yearBuilt,
      consultant: consultant._id || null,
      client: client._id || null,
      images: savedImagePaths, // ذخیره چند تصویر
      features,
    });

    if (client) {
      await ClientModel.findByIdAndUpdate(client._id, {
        $push: { houses: newHouse._id },
      });
    }

    return Response.json(
      { message: "house-info is created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: `interval error server: ${err.message}` },
      { status: 500 }
    );
  }
}
