import connectToDB from "@/configs/db";
import {
  hashPassword,
  validateEmail,
  validatePassword,
  validatePhone,
} from "@/utils/auth";
import { authAdmin, authConsultant } from "@/utils/authUser";
import { writeFile, unlink } from "fs/promises";
import { isValidObjectId } from "mongoose";
import path from "path";
import ConsultantModel from "@/models/Consultant";
import UserModel from "@/models/User";

export async function PUT(req, { params }) {
  try {
    connectToDB();

    const admin = await authAdmin();
    const consultant = await authConsultant();

    if (!admin && !consultant) {
      return Response.json(
        { message: "this route is protected" },
        { status: 401 }
      );
    }

    const id = params.id;

    if (!id) {
      return Response.json({ message: "شناسه باید ارسال شود" }, { status: 400 });
    }

    if (!isValidObjectId(id)) {
      return Response.json({ message: "شناسه معتبر نیست" }, { status: 422 });
    }

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

    // اعتبارسنجی شماره تلفن
    if (phone) {
      const isValidPhone = validatePhone(phone);
      if (!isValidPhone) {
        return Response.json(
          { message: "شماره تلفن معتبر نیست" },
          { status: 422 }
        );
      }
    }

    // اعتبارسنجی ایمیل
    if (email) {
      const isValidEmail = validateEmail(email);
      if (!isValidEmail) {
        return Response.json(
          { message: "ایمیل معتبر نیست" },
          { status: 422 }
        );
      }
    }

    // اعتبارسنجی رمز عبور (اگر ارسال شده باشد)
    if (password) {
      const isValidPassword = validatePassword(password);
      if (!isValidPassword) {
        return Response.json(
          { message: "رمز عبور معتبر نیست" },
          { status: 422 }
        );
      }
    }

    // یافتن مشاور موجود
    const existingConsultant = await ConsultantModel.findById(id);
    if (!existingConsultant) {
      return Response.json(
        { message: "مشاور یافت نشد" },
        { status: 404 }
      );
    }

    // آماده‌سازی داده‌های به‌روزرسانی
    const updateData = {};
    const userUpdateData = {};

    // پر کردن فیلدهای به‌روزرسانی مشاور
    if (firstName) updateData.firstName = firstName;
    if (lastName) updateData.lastName = lastName;
    if (hisCode) updateData.hisCode = hisCode;
    if (phone) updateData.phone = phone;
    if (birthDay) updateData.birthDay = birthDay;
    if (age) updateData.age = age;
    if (sex) updateData.sex = sex;
    if (email) updateData.email = email;
    if (description) updateData.description = description;
    if (socials && socials.length > 0) updateData.socials = socials;
    if (agencyID) updateData.agencyID = agencyID;

    // مدیریت تصویر
    let newImagePath = existingConsultant.img;
    if (img && img.size > 0) {
      // حذف تصویر قدیمی
      if (existingConsultant.img) {
        try {
          const oldImagePath = existingConsultant.img.replace(
            "http://localhost:3000/uploads/",
            ""
          );
          await unlink(
            path.join(process.cwd(), "public/uploads/" + oldImagePath)
          );
        } catch (err) {
          console.error("خطا در حذف تصویر قدیمی:", err);
        }
      }

      // آپلود تصویر جدید
      const buffer = Buffer.from(await img.arrayBuffer());
      const filename = Date.now() + img.name;
      const imgPath = path.join(process.cwd(), "public/uploads/" + filename);
      await writeFile(imgPath, buffer);
      newImagePath = `http://localhost:3000/uploads/${filename}`;
      updateData.img = newImagePath;
    }

    // مدیریت رمز عبور
    let hashedPassword = existingConsultant.password;
    if (password) {
      hashedPassword = await hashPassword(password);
      updateData.password = hashedPassword;
    }

    // پر کردن فیلدهای به‌روزرسانی کاربر
    if (firstName || lastName) {
      userUpdateData.name = `${firstName || existingConsultant.firstName} ${
        lastName || existingConsultant.lastName
      }`;
    }
    if (email) userUpdateData.email = email;
    if (password) userUpdateData.password = hashedPassword;
    if (agencyID) userUpdateData.guildID = agencyID;

    // به‌روزرسانی اطلاعات مشاور
    const updatedConsultant = await ConsultantModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    // به‌روزرسانی اطلاعات کاربر مرتبط
    if (Object.keys(userUpdateData).length > 0) {
      await UserModel.findByIdAndUpdate(
        existingConsultant.user,
        userUpdateData,
        { new: true }
      );
    }

    return Response.json(
      {
        message: "اطلاعات مشاور با موفقیت به‌روزرسانی شد",
        data: updatedConsultant,
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { message: `خطای سرور: ${err.message}` },
      { status: 500 }
    );
  }
}