import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import { cookies } from "next/headers";
// import { Toaster } from "react-hot-toast";
import { getMessages } from "next-intl/server";
// import AuthProvider from "./auth/components/AuthProvider";
// import { getSettings } from "@/services/ApiHandler";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
 
  return {
    title:  "Beast Mode",
    description: "workout tracking app",
    icons: {
      icon:  "/assets/icons/dumbbell.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } =await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  const appCookies = await cookies();
  const themeMode = appCookies.get("modeLayout")?.value ?? "";

  return (
    <html
      className={themeMode}
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <head>
        {/* <link rel="icon" href={webSettings.website_fav_icon || "/logo.png"} /> */}
      </head>
      <body className="flex flex-col">
        {/* <Toaster position="top-center" /> */}
        <NextIntlClientProvider messages={messages}>
          {/* <AuthProvider /> */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
