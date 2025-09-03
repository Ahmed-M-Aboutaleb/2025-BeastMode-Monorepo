import ToggleLang from "@/components/buttons/ToggleLang";
import { getTranslations } from "next-intl/server";

export default async function AuthPage() {
    const t =await getTranslations("locale");
    return (
        <main className="h-full flex items-center justify-center">
            <h2>Auth page .. locale is {t("ar") }</h2>
            <ToggleLang />
        </main>
    );
}
