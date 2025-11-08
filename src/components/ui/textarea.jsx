import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const Textarea = forwardRef(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[140px] w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800 shadow-inner focus:border-excel focus:outline-none focus:ring-2 focus:ring-excel/40",
        className,
      )}
      {...props}
    />
  )
})

export { Textarea }



