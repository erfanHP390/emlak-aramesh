import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

export function middleware(request) {
  const token = request.cookies.get("userToken")?.value;
  const isLocked = request.cookies.get("locked")?.value === "true";

  const url = request.nextUrl;
  const path = url.pathname;

  const isAuthPage = path === "/login" || path === "/register";
  const isLockPage = path === "/lockPage";

  // 1️⃣ اگر توکن وجود نداره → بفرست login
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 2️⃣ اگر توکن هست و قفل فعاله → بفرست lockPage
  if (token && isLocked && !isLockPage) {
    return NextResponse.redirect(new URL("/lockPage", request.url));
  }

  // 3️⃣ اگر توکن هست و قفل غیرفعاله، ولی مسیر login هست → بفرست به dashboard
  if (token && !isLocked && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|images|fonts|api).*)",
  ],
};
