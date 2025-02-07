import * as React from "react"

import { cn } from "@/package/ui/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { CurlyLine, ZigzagLine } from "../../assets/svg"
import { DynamicIcon, IconName } from "lucide-react/dynamic"

const cardVariants = cva(
  "relative z-0 rounded-lg border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "light",
        dark: "dark bg-secondary",
      },
      decoration: {
        none: "group/default",
        tr: "group/tr",
        bl: "group/bl",
        both: "group/tr group/bl",
      }
    },
    defaultVariants: {
      variant: "default",
      decoration: "none",
    },
  }
)

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ variant, decoration, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      cardVariants({ variant, decoration }),
      className
    )}
    {...props}
  >
    <CurlyLine className="hidden group-[]/tr:block -z-10 absolute right-0 top-0 [&_path]:stroke-muted-foreground" />
    <ZigzagLine className="hidden group-[]/bl:block -z-10 absolute left-0 bottom-0 [&_path]:stroke-muted-foreground" />
    {props.children}</div>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { icon?: IconName }
>(({ icon, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative flex flex-col space-y-1.5 p-6", className)}
    {...props}
  >
    {icon && <div className=" absolute -top-6 left-1/2 -translate-x-1/2 rounded-full p-2 bg-primary"><DynamicIcon size={32} name={icon} /></div>}
    {props.children}
  </div>
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-lg font-bold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-4 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
