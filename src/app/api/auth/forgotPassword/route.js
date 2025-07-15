import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { hashPassword } from "@/utils/auth";
import nodemailer from "nodemailer";
import validator from "validator";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: +process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req) {
  try {
    await connectToDB();

    const { email } = await req.json();

    if (!email || !validator.isEmail(email)) {
      return Response.json(
        { message: "ایمیل معتبر وارد کنید" },
        { status: 422 }
      );
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return Response.json(
        { message: "کاربری با این ایمیل پیدا نشد" },
        { status: 404 }
      );
    }

    const code = Math.floor(100000 + Math.random() * 900000);

    const hashed = await hashPassword(String(code));

    await transporter.sendMail({
      from: `"emlak-aramesh" <${process.env.MAIL_FROM}>`,
      to: email,
      subject: "کد ورود / بازیابی حساب",
      html: `
        <p>سلام ${user.name || ""}</p>
        <p>کد یکبارمصرف شما:</p>
        <h2 style="letter-spacing:3px;">${code}</h2>
        <p>این کد تا ۵ دقیقه اعتبار دارد.</p>
        <small>اگر این درخواست از سوی شما نبوده، این ایمیل را نادیده بگیرید.</small>
        <small>املاک آرامش - سیستم جامع دیجیتال مدیریت املاک</small>
      `,
    });

    await UserModel.findOneAndUpdate({ email }, { $set: { password: hashed } });

    return Response.json(
      { message: "send to email successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return Response.json(
      { message: `interval error server: ${err.message}` },
      { status: 500 }
    );
  }
}
