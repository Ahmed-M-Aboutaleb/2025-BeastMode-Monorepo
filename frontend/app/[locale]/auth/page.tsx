import AuthForm from "@/components/auth/AuthForm";
import { getTranslations } from "next-intl/server";

export default async function AuthPage() {
    const t =await getTranslations("locale");
    return (
        <main className="h-full flex items-center justify-center">
           <AuthForm />
        </main>
    );
}
