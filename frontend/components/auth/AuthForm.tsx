"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardContent } from "../ui/card";
import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { variants } from "./animations";
import clsx from "clsx";
import OverlayText from "./OverlayText";
import NeonDumbbell from "../ui/NeonDumbbell";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
    setHasInteracted(true);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-card relative font-sans">
      {/* Left Image Section */}
      {/* <NeonDumbbell /> */}
      <motion.div
        className="absolute inset-0 xl:block hidden z-10"
        variants={variants}
        animate={isLogin ? "login" : "register"}
        initial={false}
        transition={
          hasInteracted
            ? { duration: 0.5, ease: "easeInOut", times: [0, 0.4, 0.7, 1] }
            : { duration: 0 }
        }
      >
        <div className="absolute inset-0 bg-[url('/assets/images/gymbg.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0  bg-gradient-to-tl from-card/30 to-gym-orange-glow/45" />
        {/* <AnimatePresence mode="wait" initial={false}> */}
          <OverlayText isLogin={isLogin} key={isLogin ? "login" : "register"} />
        {/* </AnimatePresence> */}
      </motion.div>

      {/* Auth Card Section */}
      <div
        className={clsx(
          "relative flex w-full px-4 sm:px-6 lg:px-8",
          "items-center justify-center", // default for small screens
          {
            "xl:justify-start xl:pl-16": isLogin, // login → left
            "xl:justify-end xl:pr-16": !isLogin, // register → right
          }
        )}
      >
        <div className={`w-full max-w-md ${isLogin?'space-y-6':'space-y-3'} `}>
          <AuthHeader isLogin={isLogin} />
          <CardContent className="space-y-6">
            <AnimatePresence mode="wait">
              {isLogin ? (
                <LoginForm key="login" />
              ) : (
                <RegisterForm key="register" />
              )}
            </AnimatePresence>
          </CardContent>
          <AuthFooter isLogin={isLogin} onSwitch={handleSwitch} />
        </div>
      </div>
    </div>
  );
}
