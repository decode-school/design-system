import * as React from "react"

import { cn } from "@/package/ui/lib/utils"
import { DynamicIcon, IconName } from "lucide-react/dynamic"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconName
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    if (icon) {
      return (
        <div className="relative w-full">
          <DynamicIcon name={icon} className="text-muted-foreground absolute left-2 top-1/2 -translate-y-1/2" />
          <input
            type={type}
            className={cn(
              "flex h-10 w-full rounded-lg bg-secondary px-3 pl-10 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      )
    }
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg bg-secondary px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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
