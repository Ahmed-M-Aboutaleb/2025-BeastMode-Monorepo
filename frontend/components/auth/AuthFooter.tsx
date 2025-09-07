import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";

type Props = {
  isLogin: boolean;
  onSwitch: () => void;
};

export default function AuthFooter({ isLogin, onSwitch }: Props) {
  return (
    <CardFooter className="flex flex-col space-y-4">
      {/* <Button
        type="submit"
        className="w-full bg-gradient-to-r from-gym-orange to-gym-orange-glow hover:from-gym-orange-glow hover:to-gym-orange text-gym-dark font-bold py-6 glow-orange transition-all duration-300"
      >
        {isLogin ? "Sign In" : "Create Account"}
      </Button> */}
      <p className="text-center text-muted-foreground">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <Button
          type="button"
          variant="link"
          className="p-0 h-auto text-gym-orange hover:text-gym-orange-glow font-semibold"
          onClick={onSwitch}
        >
          {isLogin ? "Sign up now" : "Sign in"}
        </Button>
      </p>
    </CardFooter>
  );
}

