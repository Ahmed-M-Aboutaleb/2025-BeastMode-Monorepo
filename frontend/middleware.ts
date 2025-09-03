// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// const i18nMiddleware = createMiddleware(routing);

// export function middleware(request: NextRequest) {
//   const { pathname, origin } = request.nextUrl;
//   const response = NextResponse.next();

//   // Determine locale based on URL
//   const isArabic = pathname.startsWith("/ar");
//   const locale = isArabic ? "ar" : "en";

//   // Set locale cookie
//   response.cookies.set("NEXT_LOCALE", locale);

//   const token = request.cookies.get("token");
//   const isAuthPage = pathname.startsWith(`/${locale}/auth`) || pathname === "/auth";

//   // Redirect authenticated users away from auth pages
//   if (token && isAuthPage) {
//     return NextResponse.redirect(new URL("/", origin));
//   }

//   // Redirect unauthenticated users to login
//   // if (!token && !isAuthPage) {
//   //    if(isArabic){return NextResponse.redirect(new URL(`/ar/auth`, origin));}
//   //   return NextResponse.redirect(new URL(`/auth`, origin));
//   // }

//   // Handle i18n routing
//   const i18nResponse = i18nMiddleware(request);

//   // Merge headers from i18n response
//   i18nResponse.headers.forEach((value, key) => {
//     response.headers.set(key, value);
//   });

//   // Merge set-cookie headers from i18n response
//   const setCookieHeader = i18nResponse.headers.get("set-cookie");
//   if (setCookieHeader) {
//     setCookieHeader.split(",").forEach((cookie) => {
//       response.headers.append("set-cookie", cookie);
//     });
//   }

//   return response;
// }

// export const config = {
//   matcher: [
//     // Exclude static files, API routes, and specific assets
//     "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|public/|assets|logo.png|logo.webp|favicon.webp|header.gif|footer_logo.png).*)",
//   ],
// };
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const i18nMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  const isArabic = pathname.startsWith("/ar");
  const isEnglish = pathname.startsWith("/en");
  const locale = isArabic ? "ar" : isEnglish ? "en" : "en"; // default = en

  // إعادة توجيه لو مفيش لغة
  if (!isArabic && !isEnglish && pathname !== "/") {
    return NextResponse.redirect(new URL(`/en${pathname}`, origin));
  }

  // Auth logic 
  const token = request.cookies.get("token");
  const isAuthPage =
    pathname === "/auth" ||
    pathname === "/en/auth" ||
    pathname === "/ar/auth";

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL(`/${locale}`, origin));
  }

  // if (!token && !isAuthPage) {
  //   return NextResponse.redirect(new URL(`/${locale}/auth`, origin));
  // }

  return i18nMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|public/|assets).*)",
  ],
};
