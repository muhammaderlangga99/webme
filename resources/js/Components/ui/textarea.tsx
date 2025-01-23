import * as React from "react"

import { cn } from "@/lib/utils"
import { useState } from "react";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
  >(({ className, children, name, ...props }, ref) => {
  return (
    <>
      <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-400">
        {children}
      </label>
      <textarea name={name}
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 dark:bg-zinc-900 bg-zinc-200 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    </>
  )
});
Textarea.displayName = "Textarea"

export { Textarea }
