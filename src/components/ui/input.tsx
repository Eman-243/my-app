import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border dark:bg-[#dddddd] dark:hover:bg-[#dddddd] border-gray-200 px-3 py-2 text-sm text-black dark:text-black ring-offset-white  file:text-sm file:font-medium placeholder:text-black dark:placeholder:text-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 autofill:shadow-[inset_0_0_0px_1000px_rgb(221,221,221)]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
