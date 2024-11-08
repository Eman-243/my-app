import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 lg:h-12 miniphone:h-8 w-full rounded-md border  dark:bg-white   border-gray-200  px-3 py-2 text-sm text-black dark:text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black dark:placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
