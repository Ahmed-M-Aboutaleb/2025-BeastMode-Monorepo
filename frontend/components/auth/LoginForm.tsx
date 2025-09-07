"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useTranslations } from "next-intl";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

// import { locationService } from "@/services/ClientApiHandler";
// import { authService } from "@/services/ClientApiHandler";
// import { useAuthStore, UserData } from "@/stores/authStore";
// import { useVerificationStore } from "@/stores/useVerificationStore";
// import { BrandCountry } from "@/utils/types";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  // const setToken = useAuthStore((state) => state.setToken);
  // const setUserData = useAuthStore((state) => state.setUserData);
  // const setFormData = useAuthStore((state) => state.setFormData);
  // const setVerificationData = useVerificationStore(
  //   (state) => state.setVerificationData,
  // );
  const t = useTranslations("LOGIN_FORM");

  // const handleForgetPassword = () => {
  //   setVerificationData({ verificationType: "forgot_password" });
  //   router.push("/auth/verify");
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
      device_type: "web",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .lowercase()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required(t("password_required")),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      toast.dismiss();

      // try {
      //   const response = (await authService.login({
      //     ...values,
      //     device_type: "web",
      //   })) as { data: UserData & { token: string } };
      //   console.log("login res :", response);
      //   const { token } = response.data;

      //   setToken(token);
      //   setUserData(response.data);
      //   setFormData({});
      //   Cookies.set("token", token, { expires: 300 });
      //   Cookies.remove("store_selected_once");

      //   toast.success(t("login_successful"));
      //   router.push("/");
      // } catch (error) {
      //   console.error(error);
      //   toast.error(error?.response?.data?.message || t("login_failed"));
      // } finally {
      //   setLoading(false);
      // }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="space-y-2 gap-4">
          <Label htmlFor="email">Email</Label>
          <div className="relative mt-2">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...formik.getFieldProps("email")}
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-input border-gym-border focus:ring-gym-orange focus:border-gym-orange"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative mt-2">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...formik.getFieldProps("password")}
              className="pl-10 pr-10 bg-input border-gym-border focus:ring-gym-orange focus:border-gym-orange"
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              {...formik.getFieldProps("rememberMe")}
              className="border-gym-border data-[state=checked]:bg-gym-orange data-[state=checked]:border-gym-orange"
            />
            <Label htmlFor="remember" className="text-sm text-muted-foreground">
              Remember me
            </Label>
          </div>
          <Button
            variant="link"
            className="p-0 h-auto text-gym-orange hover:text-gym-orange-glow"
          >
            Forgot password?
          </Button>
        </div>
    </form>
  );
}
