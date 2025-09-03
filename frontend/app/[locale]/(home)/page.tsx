import ToggleLang from "@/components/buttons/ToggleLang";
import LocalePath from "@/components/custom/localePath";
import { getTranslations } from "next-intl/server";
export default async function Home() {
  const t = await getTranslations("locale");

  return (
    <div className="space-y-12 overflow-hidden">
      <h1>Home ... {"ar"}</h1>
      <div className="p-10">
        <p>{t("en")} done</p>
      </div>
      <ToggleLang />
     
      <LocalePath href="/profile">
        <div className="w-4 h-4 bg-amber-700 p-6 ml-7 cursor-pointer"></div>
      </LocalePath>
    </div>
  );
}
