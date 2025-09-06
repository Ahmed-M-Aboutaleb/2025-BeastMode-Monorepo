"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Lock, User } from "lucide-react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const renderHeader = () => (
    <CardHeader className="text-center space-y-4">
      <div className="mx-auto w-12 h-12 bg-gradient-to-r from-gym-orange to-gym-orange-glow rounded-full flex items-center justify-center glow-orange">
        {isLogin ? (
          <Lock className="w-6 h-6 text-gym-dark" />
        ) : (
          <User className="w-6 h-6 text-gym-dark" />
        )}
      </div>
      <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gym-orange to-gym-orange-glow bg-clip-text text-transparent">
        {isLogin ? "Welcome Back" : "Join BeastMode"}
      </CardTitle>
      <CardDescription className="text-muted-foreground">
        {isLogin
          ? "Sign in to continue your fitness journey"
          : "Start your fitness transformation today"}
      </CardDescription>
    </CardHeader>
  );

  const LoginFooter = () => (
    <CardFooter className="flex flex-col space-y-4">
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-gym-orange to-gym-orange-glow hover:from-gym-orange-glow hover:to-gym-orange text-gym-dark font-bold py-6 glow-orange transition-all duration-300"
      >
        Sign In
      </Button>
      <p className="text-center text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Button
          type="button"
          variant="link"
          className="p-0 h-auto text-gym-orange hover:text-gym-orange-glow font-semibold"
          onClick={() => setIsLogin(false)}
        >
          Sign up now
        </Button>
      </p>
    </CardFooter>
  );

  const RegisterFooter = () => (
    <CardFooter className="flex flex-col space-y-4">
      <Button
        type="submit"
        disabled={!agreeToTerms}
        className="w-full bg-gradient-to-r from-gym-orange to-gym-orange-glow hover:from-gym-orange-glow hover:to-gym-orange text-gym-dark font-bold py-6 glow-orange transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Create Account
      </Button>
      <p className="text-center text-muted-foreground">
        Already have an account?{" "}
        <Button
          type="button"
          variant="link"
          className="p-0 h-auto text-gym-orange hover:text-gym-orange-glow font-semibold"
          onClick={() => setIsLogin(true)}
        >
          Sign in
        </Button>
      </p>
    </CardFooter>
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      {/* Left Image Section */}
      <div className="hidden w-1/2 lg:block bg-green-700">
        <Image
          src="/assets/images/auth-image.png"
          alt="Authentication"
          width={300}
          height={400}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      {/* Auth Card Section */}
      <div className="w-full max-w-md mx-auto my-auto">
        <Card className="bg-gym-card border-gym-border shadow-lg">
          {renderHeader()}

          <CardContent className="space-y-6">
            {isLogin ? <LoginForm /> : <RegisterForm />}
          </CardContent>

          {isLogin ? <LoginFooter /> : <RegisterFooter />}
        </Card>
      </div>
    </div>
  );
}
