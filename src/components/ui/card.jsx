import { cn } from "../../lib/utils"

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-excel/10 bg-white/80 shadow-soft backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl",
        className,
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col gap-2 rounded-t-3xl p-6", className)}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-4 px-6 pb-6", className)} {...props} />
  )
}

export function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col gap-3 px-6 pb-6 pt-0 sm:flex-row sm:items-center sm:justify-between", className)}
      {...props}
    />
  )
}









