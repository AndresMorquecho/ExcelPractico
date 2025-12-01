import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const Input = forwardRef(function Input({ className, type = "text", ...props }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-12 w-full rounded-full border border-slate-200 bg-white px-5 text-sm font-medium text-slate-800 shadow-inner focus:border-excel focus:outline-none focus:ring-2 focus:ring-excel/40",
        className,
      )}
      {...props}
    />
  )
})

export { Input }









