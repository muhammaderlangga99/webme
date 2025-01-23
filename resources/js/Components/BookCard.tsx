import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { Eye } from "lucide-react";

export default function BookCard() {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-3xl border",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:bg-zinc-900",
            )}
        >
            <Link href={'asdasd'} target="_blank" rel="noreferrer">
                <div className="image">
                    <img src='img/jbp.png' alt="" className="[mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] hover:scale-110 transition-all duration-300" />
                </div>
                <div className="title p-3">
                    <div className="flex justify-between items-center">
                        <h1>buku</h1>
                        <Link
                            href={'asdda'}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block h-full" aria-label="Preview" title="Preview" >
                            <Eye size={20} className="m-auto" />
                        </Link>
                    </div>
                    <div className="">
                        <p className="text-sm text-zinc-600">{'asdsadsadsa'}</p>
                    </div>
                </div>
            </Link>
        </figure>
    );
}
