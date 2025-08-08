import { NextRequest, NextResponse } from "next/server";
import serverEnv from "@/lib/serverEnv";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Only apply CSP for certain paths if needed
  if (request.nextUrl.pathname.startsWith("/preview")) {
    response.headers.set(
      "Content-Security-Policy",
      `frame-ancestors 'self' ${serverEnv.BACKEND_API_URL}`,
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|logotype.svg|tagline.svg|robots.txt|opengraph-image).*)",
  ],
};
