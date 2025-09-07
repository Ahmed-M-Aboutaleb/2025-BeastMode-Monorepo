"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { Input } from "../ui/input";

// Services & Stores
// import { authService } from "@/services/ClientApiHandler";
// import { useAuthStore } from "@/stores/authStore";

export default function RegisterForm() {
  const t = useTranslations("REGISTER_FORM");
  const router = useRouter();

  const [loading, setLoading] = useState(false);
 const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const validationSchema = Yup.object({
    full_name: Yup.string().required(t("full_name_required")),
    email: Yup.string()
      .trim()
      .lowercase()
      .email(t("email_invalid"))
      .required(t("email_required")),
    password: Yup.string()
      .min(6, t("password_min_chars"))
      .required(t("password_required")),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password")], t("password_match"))
      .required(t("password_confirmation_required")),
  });

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      toast.dismiss();

      // const payload: RegisterPayload = {
      //   ...values,
      //   device_type: "web",
      // };

      try {
        // await authService.register(payload);

        // toast.success(t("registration_successful"));
        // router.push("/auth/verify");
      } catch (err) {
        // هنا ممكن تضيف Error handling حسب API بتاعك
        toast.error(t("registration_failed"));
      } finally {
        setLoading(false);
      }
    },
  });

  const InputField = ({
    name,
    type,
    placeholder,
  }: {
    name: keyof typeof formik.values;
    type: string;
    placeholder: string;
  }) => (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
        className={`w-full rounded-md border p-3 focus:outline-none focus:ring-2 ${
          formik.touched[name] && formik.errors[name]
            ? "border-red-500 focus:ring-red-400"
            : "focus:ring-blue-400"
        }`}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="mt-1 text-sm text-red-500">{formik.errors[name]}</div>
      )}
    </div>
  );

  return (
  <form onSubmit={formik.handleSubmit} className="lg:space-y-5 space-y-3">
          {/* <CardContent className="space-y-4"> */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="full_name"
                  type="text"
                  placeholder="Enter your full name"
                {...formik.getFieldProps('full_name')}
                  className="pl-10 bg-input border-gym-border focus:ring-gym-orange focus:border-gym-orange"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="register-email">Email</Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="register-email"
                  type="email"
                  placeholder="Enter your email"
                 {...formik.getFieldProps('email')}
                  className="pl-10 bg-input border-gym-border focus:ring-gym-orange focus:border-gym-orange"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="register-password">Password</Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="register-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  {...formik.getFieldProps('password')}
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

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password_confirmation"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  {...formik.getFieldProps('password_confirmation')}
                  className="pl-10 pr-10 bg-input border-gym-border focus:ring-gym-orange focus:border-gym-orange"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                  {...formik.getFieldProps('terms')}
                className="border-gym-border data-[state=checked]:bg-gym-orange data-[state=checked]:border-gym-orange"
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the{' '}
                <Button variant="link" className="p-0 h-auto text-gym-orange hover:text-gym-orange-glow">
                  Terms of Service
                </Button>
                {' '}and{' '}
                <Button variant="link" className="p-0 h-auto text-gym-orange hover:text-gym-orange-glow">
                  Privacy Policy
                </Button>
              </Label>
            </div>
          {/* </CardContent> */}

          {/* <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              disabled={!agreeToTerms}
              className="w-full bg-gradient-to-r from-gym-orange to-gym-orange-glow hover:from-gym-orange-glow hover:to-gym-orange text-gym-dark font-bold py-6 glow-orange transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Account
            </Button>
            
            <p className="text-center text-muted-foreground">
              Already have an account?{' '}
              <Button
                type="button"
                variant="link"
                className="p-0 h-auto text-gym-orange hover:text-gym-orange-glow font-semibold"
                onClick={onSwitchToLogin}
              >
                Sign in
              </Button>
            </p>
          </CardFooter> */}
        </form>
  );
}
