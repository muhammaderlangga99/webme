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
                        <img src="/img/jbp.png" alt="Jakarta Book Party" className="w-20 object-cover m-auto" />
                    </Link>
                </div>

                <div className="mt-6 w-full overflow-hidden bg-zinc-50 dark:bg-zinc-900 px-6 py-4 border sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
}
