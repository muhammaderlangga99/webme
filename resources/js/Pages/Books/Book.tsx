import BookCard from "@/Components/BookCard";
import TextGreen from "@/Components/TextGreen";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { BookPlus, BookPlusIcon, BookUp, LibraryBig, LibraryBigIcon, LucideBookHeadphones, PencilLine, Plus, PlusCircle } from "lucide-react";


export default function Book() {
    const { flash } = usePage().props;
    return (
        <AuthenticatedLayout>
            <Head title="Add Buku" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-3 lg:px-8">
                    <TextGreen className="text-3xl">Rekomendasikan Buku</TextGreen>
                    <span className="text-sm">Kami juga mau baca buku yang kamu suka, yuk rekomendasikan!</span>

                    <div className="mt-8">
                    <Link href={route('books.create')} className="inline-block shadow-2xl shadow-green-200 dark:shadow-green-500">
                        <div className="col-span-1 py-1 px-3 w-full flex items-center  rounded-lg bg-green-200 border border-green-300 dark:bg-zinc-900">
                                <h3 className="text-sm text-green-800 dark:text-green-500 mx-auto font-semibold flex items-center gap-2">
                                   Rekomendasikan <LibraryBigIcon size={15} strokeWidth={2} /> </h3>
                        </div>
                    </Link>
                    </div>


                    <div className="mt-8 grid lg:grid-cols-3 gap-4 rounded-xl">
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}