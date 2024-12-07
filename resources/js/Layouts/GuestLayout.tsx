import ApplicationLogo from '@/Components/ApplicationLogo';
import { ThemeProvider } from '@/Components/theme-provider';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="h-20 w-20 fill-current text-zinc-500 dark:text-zinc-300" />
                    </Link>
                </div>

                <div className="mt-6 w-full overflow-hidden bg-zinc-50 dark:bg-zinc-900 px-6 py-4 border sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
}
