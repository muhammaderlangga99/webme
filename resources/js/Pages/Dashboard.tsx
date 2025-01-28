import { Alert } from '@/Components/ui/alert';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { clear } from 'console';
import { useState, useEffect } from 'react';
import { set } from 'react-hook-form';

export default function Dashboard() {
    const { flash } = usePage<{ flash: { message?: string } }>().props;
    const [flashMessage, setFlashMessage] = useState(flash.message);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFlashMessage('');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, [flashMessage]);

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            {flashMessage && (
                <Alert variant="success" className="mb-4 mt-3 w-11/12 mx-auto">
                    {flashMessage}
                </Alert>
            )}

            <div className="py-12">
                <div className="mx-auto max-w-7xl px-3 lg:px-8">                   
                    You're logged in!
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
