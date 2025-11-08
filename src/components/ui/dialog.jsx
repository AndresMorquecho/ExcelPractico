import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "../../lib/utils"

export function Dialog({ ...props }) {
  return <DialogPrimitive.Root {...props} />
}

export const DialogTrigger = DialogPrimitive.Trigger
export const DialogPortal = DialogPrimitive.Portal
export const DialogClose = DialogPrimitive.Close

export function DialogContent({ className, children, ...props }) {
  return (
    <DialogPortal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
      <DialogPrimitive.Content
        className={cn(
          "fixed inset-x-4 top-[8vh] z-[70] mx-auto w-auto max-w-2xl rounded-3xl bg-white p-0 shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-top-10 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-8 sm:max-w-3xl",
          className,
        )}
        {...props}
      >
        <div className="max-h-[80vh] overflow-y-auto p-6">{children}</div>
        <DialogClose className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-excel/10 text-excel transition hover:bg-excel/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-excel focus-visible:ring-offset-2">
          <X className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Cerrar</span>
        </DialogClose>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

export function DialogHeader({ className, ...props }) {
  return (
    <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
  )
}

export function DialogTitle({ className, ...props }) {
  return (
    <DialogPrimitive.Title
      className={cn("text-2xl font-semibold leading-tight text-slate-900", className)}
      {...props}
    />
  )
}

export function DialogDescription({ className, ...props }) {
  return (
    <DialogPrimitive.Description
      className={cn("text-base text-slate-600", className)}
      {...props}
    />
  )
}

