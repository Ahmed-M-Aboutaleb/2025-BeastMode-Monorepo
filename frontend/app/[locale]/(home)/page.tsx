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
     <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-glow">
  Start Workout
</button>

<div className="bg-card text-card-foreground p-6 rounded-lg border border-border">
  <h2 className="text-xl font-bold">Today&apos;s Progress</h2>
  <p className="text-muted-foreground">Keep pushing BeastMode 🔥</p>
</div>

<span className="text-accent">+15% Gains</span>

      <LocalePath href="/profile">
        <div className="w-4 h-4 bg-amber-700 p-6 ml-7 cursor-pointer"></div>
      </LocalePath>
    </div>
  );
}
