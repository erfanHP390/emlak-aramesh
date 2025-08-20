import connectToDB from "@/configs/db";
import { validateEmail } from "@/utils/auth";
import NewsLetterModel from "@/models/NewsLetter";

export async function POST(req) {
  try {
    connectToDB();

    const body = await req.json();
    const { email } = body;

    if (!email) {
      return Response.json(
        { message: "email must send" },
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

    const isEmailExist = await NewsLetterModel.findOne({
      $or: [{ email }],
    });

    if (isEmailExist) {
      return Response.json(
        { message: "the email  is already exist" },
        { status: 422 }
      );
    }

    await NewsLetterModel.create({ email });

    return Response.json(
      { message: "email is created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: `interval error server: ${err}` },
      { status: 500 }
    );
  }
}
