import { NextRequest, NextResponse } from "next/server";

const USERNAME = "webby";
const PASSWORD = "448612";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const protectedPaths = [
    "/admin",
    "/today",
  ];

  const isProtected = protectedPaths.some(
    (path) =>
      pathname === path ||
      pathname.startsWith(path + "/")
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");

    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");

      if (
        user === USERNAME &&
        pass === PASSWORD
      ) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate":
        'Basic realm="WMS Admin"',
    },
  });
}

export const config = {
  matcher: ["/admin/:path*", "/today/:path*"],
};