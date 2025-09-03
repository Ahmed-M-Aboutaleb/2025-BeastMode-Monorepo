"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";
import { useLocale } from "next-intl";

function ToggleLang() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";

    Cookies.set("NEXT_LOCALE", newLocale);

    // إزالة أي locale موجود في البداية
    const segments = pathname.split("/").filter(Boolean); // ['ar','auth'] أو ['auth']
    if (segments[0] === "en" || segments[0] === "ar") {
      segments[0] = newLocale; // استبدال اللغة
    } else {
      segments.unshift(newLocale); // إضافة اللغة في البداية
    }

    const newPath = "/" + segments.join("/");
    router.push(newPath);
  };

  return (
    <button
      onClick={setLanguage}
      className="hover:text-primary flex cursor-pointer flex-row items-center gap-1 px-2 py-1"
    >
      <Image
        src="/assets/icons/globe.svg"
        alt="Language icon"
        width={24}
        height={24}
        className="text-text-website-font hover:text-primary"
      />
      {locale === "en" ? "ع" : "EN"}
    </button>
  );
}

export default ToggleLang;
