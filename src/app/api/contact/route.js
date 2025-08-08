import connectToDB from "@/configs/db";
import { validateEmail, validatePhone } from "@/utils/auth";
import { writeFile } from "fs/promises";
import path from "path";
import { authUser } from "@/utils/authUser";
import ContactModel from "@/models/Contact";

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

    const formData = await req.formData();
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const description = formData.get("description");
    const img = formData.get("img");
    const userID = formData.get("userID");

    if (!name || !email  || !description) {
      return Response.json(
        { message: "name/email/user/description is required" },
        {
          status: 400,
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

    if (phone) {
      const isValidPhone = validatePhone(phone);
      if (!isValidPhone) {
        return Response.json(
          { message: "phone is not valid" },
          {
            status: 422,
          }
        );
      }
    }

    let imgUrl = null;

    // ✅ فقط اگر img وجود دارد، آن را ذخیره کن
    if (img && typeof img.name === "string") {
      const buffer = Buffer.from(await img.arrayBuffer());
      const filename = Date.now() + "-" + img.name;
      const imgPath = path.join(process.cwd(), "public/uploads/", filename);
      await writeFile(imgPath, buffer);
      imgUrl = `http://localhost:3000/uploads/${filename}`;
    }

    await ContactModel.create({
      name,
      email,
      phone: phone || null,
      userID: user._id,
      description,
      img: imgUrl, // اگر تصویر وجود داشته باشد
    });


    return Response.json({message: "message is created successfully"} , {
      status: 201
    })

  } catch (err) {
    return Response.json(
      { message: `interval error server ${err}` },
      {
        status: 500,
      }
    );
  }
}
