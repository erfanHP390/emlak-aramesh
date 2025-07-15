import connectToDB from "@/configs/db";
import {
  generateAccessToken,
  generateRefreshToken,
  validateEmail,
  verifyPassword,
} from "@/utils/auth";
import UserModel from "@/models/User";

export async function POST(req) {
  connectToDB();
  try {
    const body = await req.json();
    const { email, password, userRefreshToken } = body;

    const accessTokenMaxAge = 60 * 60 * 10;
    const refreshTokenMaxAge = 60 * 60 * 24 * 7;

    if (email && password) {
      const isValidEmail = validateEmail(email);
      if (!isValidEmail) {
        return Response.json(
          { message: "email is not valid" },
          {
            status: 419,
          }
        );
      }

      const user = await UserModel.findOne({ email });

      if (!user) {
        return Response.json(
          { message: "user not found" },
          {
            status: 404,
          }
        );
      }

      const isCorrectPassword = await verifyPassword(password, user.password);

      if (!isCorrectPassword) {
        return Response.json(
          { message: "Email or password is not correct" },
          { status: 401 }
        );
      }

      const accessToken = generateAccessToken({ email });
      const refreshToken = generateRefreshToken({ email });

      await UserModel.findOneAndUpdate(
        { email },
        {
          $set: { refreshToken },
        }
      );

      const headers = new Headers();
      headers.append(
        "Set-Cookie",
        `userToken=${accessToken}; Path=/; HttpOnly; Max-Age=${accessTokenMaxAge}`
      );
      headers.append(
        "Set-Cookie",
        `refresh-token=${refreshToken}; Path=/; HttpOnly; Max-Age=${refreshTokenMaxAge}`
      );

      return Response.json(
        { message: "user logged in successfully", data: user },
        {
          status: 200,
          headers,
        }
      );
    } else if (userRefreshToken) {
      const user = await UserModel.findOne({ refreshToken: userRefreshToken });

      if (!user) {
        return Response.json({ message: "user not found" }, { status: 404 });
      }

      const accessToken = generateAccessToken({ email: user.email });
      const refreshToken = generateRefreshToken({ email: user.email });

      await UserModel.findOneAndUpdate(
        { refreshToken: userRefreshToken },
        {
          $set: { refreshToken },
        }
      );

      const headers = new Headers();
      headers.append(
        "Set-Cookie",
        `token=${accessToken}; Path=/; HttpOnly; Max-Age=${accessTokenMaxAge}`
      );
      headers.append(
        "Set-Cookie",
        `refresh-token=${refreshToken}; Path=/; HttpOnly; Max-Age=${refreshTokenMaxAge}`
      );

      return Response.json(
        { message: "user logged in successfully", data: user },
        {
          status: 200,
          headers,
        }
      );
    } else {
      return Response.json(
        { message: "email and password must send" },
        {
          status: 400,
        }
      );
    }
  } catch (err) {
    return Response.json(
      { message: `server error: ${err.message}` },
      { status: 500 }
    );
  }
}
