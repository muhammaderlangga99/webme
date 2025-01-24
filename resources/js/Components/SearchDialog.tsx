"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/Components/ui/command"

import { cn } from "@/lib/utils"

export function SearchDialog({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

    return (
        <>
            <button
                className={`focus:outline-none hidden border w-48 p-1.5 lg:flex justify-between items-center rounded-lg bg-muted hover:bg-muted transition-colors duration-200 ease-in-out ${className}`}
                onClick={() => setOpen(true)}
                aria-label="Search"
            >
                <div className="placeholder">
                    <p className="text-xs text-zinc-500 px-1">search anyelse...</p>
                </div>
                
                <p className="text-sm text-muted-foreground">
                    {" "}
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </p>
            </button>
            {/* rounded button icon */}
            <button
                className={`focus:outline-none lg:hidden flex h-full px-2 justify-center items-center rounded-lg hover:bg-muted transition-colors duration-200 ease-in-out ${className}`}
                onClick={() => setOpen(true)}
                aria-label="Search"
            >
                <Search size={15} strokeWidth={2} className="dark:text-white" />
            </button>

            <CommandDialog open={open} onOpenChange={setOpen} >
                <CommandInput className="focus:ring-0" placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <Calendar />
                            <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Smile />
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem>
                            <Calculator />
                            <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <User />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <CreditCard />
                            <span>Billing</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Settings />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
