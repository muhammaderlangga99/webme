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
                        <h3 className='text-5xl font-extrabold'>me.</h3>
                    </Link>
                </div>

                <div className="mt-6 w-full overflow-hidden px-6 py-4 sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            
            </div>
        </ThemeProvider>
    );
}
