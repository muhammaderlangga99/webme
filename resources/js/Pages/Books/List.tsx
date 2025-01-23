import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function List() {
    return (
        <AuthenticatedLayout>
            <Head title="List" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    List Books
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
