import * as React from "react"
import { Search } from "lucide-react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/package/ui/lib/utils"

const inputVariants = cva(
  "flex h-10 w-full rounded-lg bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      type: {
        search: "pl-10",
      },
    },
    defaultVariants: {
      type: "search"
    },
  });

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "search", ...props }, ref) => {
    return (
      <div className="relative w-full">
        <Search className="text-muted-foreground absolute left-2 top-1/2 -translate-y-1/2" />
        <input
          type={type}
          className={cn(
            inputVariants({ type, className }),
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
