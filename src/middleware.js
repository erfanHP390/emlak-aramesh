import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

export function middleware(request) {
  const token = request.cookies.get("userToken")?.value;
  const isLocked = request.cookies.get("locked")?.value === "true";

  const url = request.nextUrl;
  const path = url.pathname;

  const publicPaths = ["/", "/login", "/register", "/forgotPassword"];
  const isAuthPage = publicPaths.includes(path);
  const isLockPage = path === "/lockPage";

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isLocked && !isLockPage) {
    return NextResponse.redirect(new URL("/lockPage", request.url));
  }

  if (token && !isLocked && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|images|fonts|api).*)"],
};
