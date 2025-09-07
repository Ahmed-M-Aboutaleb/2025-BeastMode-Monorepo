// components/auth/AuthHeader.tsx
import { CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Lock, User } from "lucide-react";

type Props = {
  isLogin: boolean;
};

export default function AuthHeader({ isLogin }: Props) {
  return (
    <CardHeader className="text-center space-y-4">
      <div className="mx-auto w-12 h-12 bg-gradient-to-r from-gym-orange to-gym-orange-glow rounded-full flex items-center justify-center glow-orange">
        {isLogin ? (
          <Lock className="w-6 h-6 text-gym-dark" aria-label="Lock Icon" />
        ) : (
          <User className="w-6 h-6 text-gym-dark" aria-label="User Icon" />
        )}
      </div>
      <CardTitle >
        {/* <h1 className="text-3xl font-bold bg-gradient-to-r from-gym-orange to-gym-orange-glow bg-clip-text text-transparent"> */}
          {isLogin ? "Welcome Back" : "Join BeastMode"}
        {/* </h1> */}
      </CardTitle>
      <CardDescription className="text-muted-foreground">
        {isLogin
          ? "Sign in to continue your fitness journey"
          : "Start your fitness transformation today"}
      </CardDescription>
    </CardHeader>
  );
}
