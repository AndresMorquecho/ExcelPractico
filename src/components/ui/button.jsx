import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

const buttonVariants = {
  default: "bg-excel text-white hover:bg-excel-dark",
  outline: "border border-excel text-excel hover:bg-excel/10",
  ghost: "text-excel hover:bg-excel/10",
}

export function Button({ asChild = false, variant = "default", className, ...props }) {
  const Comp = asChild ? Slot : "button"
  const variantClasses = buttonVariants[variant] ?? buttonVariants.default

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excel focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses,
        className,
      )}
      {...props}
    />
  )
}

export default Button



