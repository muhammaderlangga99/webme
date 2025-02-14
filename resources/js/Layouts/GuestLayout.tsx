import ApplicationLogo from '@/Components/ApplicationLogo';
import { ThemeProvider } from '@/Components/theme-provider';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <div className="flex min-h-screen flex-col items-center justify-center">
                <div className="mt-2 w-full overflow-hidden px-6 py-4 sm:max-w-md sm:rounded-lg">
                    <div className='mb-3'>
                        <span className='text-xs underline'>start with</span>
                        <Link href="/">
                            <h3 className='text-4xl font-extrabold -mt-3.5'>me.</h3>
                        </Link>
                        <p className='text-zinc-400 dark:text-zinc-700 text-sm'>langkah pertama membuat <span className='text-zinc-900 dark:text-zinc-200'>website bisnis</span>mu luar biasa.✨</p>
                    </div>

                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
}
