import connectToDB from "@/configs/db";
import { writeFile } from "fs/promises";
import path from "path";
import HouseModel from "@/models/House";
import ClientModel from "@/models/Client";
import ConsultantModel from "@/models/Consultant";

export async function POST(req) {
  try {
    await connectToDB();
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
    const clientName = formData.get("clientName");
    const consultantCode = formData.get("consultantCode");
    const price = formData.get("price");
    const imageFiles = formData.getAll("images");
    const features = formData.getAll("features");

    if (!imageFiles || imageFiles.length === 0) {
      return Response.json(
        { message: "لطفا حداقل یک تصویر آپلود کنید" },
        { status: 400 }
      );
    }

    const savedImagePaths = [];
    for (const imageFile of imageFiles) {
      if (!imageFile.type.startsWith("image/")) {
        return Response.json(
          { message: "فقط فایل‌های تصویری مجاز هستند" },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const ext = path.extname(imageFile.name);
      const filename = uniqueSuffix + ext;
      const imagePath = path.join(process.cwd(), "public/uploads/" + filename);

      await writeFile(imagePath, buffer);
      savedImagePaths.push(`/uploads/${filename}`);
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
      !features ||
      !price ||
      features.length === 0
    ) {
      return Response.json(
        { message: "تمام فیلدهای ضروری باید پر شوند" },
        { status: 400 }
      );
    }

    let client = await ClientModel.findOne({ name: clientName });
    if (!client && clientName) {
      client = await ClientModel.create({ name: clientName });
    }

    const consultant = await ConsultantModel.findOne({
      hisCode: consultantCode,
    });
    if (!consultant) {
      return Response.json(
        { message: "مشاور با این کد یافت نشد" },
        { status: 404 }
      );
    }

    const newHouse = await HouseModel.create({
      codeHouse: Math.floor(Math.random() * 999999),
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
      price,
      yearBuilt,
      consultant: consultant._id,
      client: client?._id || null,
      images: savedImagePaths,
      features,
    });

    if (client) {
      await ClientModel.findByIdAndUpdate(client._id, {
        $push: { houses: newHouse._id },
      });
    }

    return Response.json(
      {
        message: "ملک با موفقیت ثبت شد",
        data: {
          id: newHouse._id,
          codeHouse: newHouse.codeHouse,
          images: savedImagePaths,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error in POST /api/homes:", err);
    return Response.json(
      { message: "خطای سرور: لطفا دوباره تلاش کنید" },
      { status: 500 }
    );
  }
}
