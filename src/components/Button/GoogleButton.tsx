import { ButtonHTMLAttributes } from "react";
import { Button } from "./Button";
import { FaGoogle } from "react-icons/fa";

export const GoogleButton = (props: ButtonHTMLAttributes<any>) => {
  return (
    <Button
      {...props}
      className="w-full flex justify-center align-center gap-4"
      variant="secondary"
    >
      <FaGoogle className="mt-0.5" />{" "}
      <span className="text-sm text-black">Continue with Google</span>
    </Button>
  );
};
