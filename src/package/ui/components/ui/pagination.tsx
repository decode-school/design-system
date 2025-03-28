import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/package/ui/lib/utils"
import { ButtonProps, buttonVariants } from "@/package/ui/components/ui/button"
import { Slot } from "@radix-ui/react-slot"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
  asChild?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, size = "icon", asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "a"
    return (
      <Component
        ref={ref}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          buttonVariants({
            variant: isActive ? "outline" : "ghost",
            size,
          }),
          className
        )}
        {...props}
      />
    )
  }
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    asChild={asChild}
    {...props}
    children={asChild ? props.children : <>
      <ChevronLeft className="h-4 w-4" />
      <span>Suivant</span>
    </>
    }
  />
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    asChild={asChild}
    className={cn("gap-1 pr-2.5", className)}
    {...props}
    children={asChild ? props.children : <>
      <span>Suivant</span>
      <ChevronRight className="h-4 w-4" />
    </>
    }
  />
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">Plus de pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
