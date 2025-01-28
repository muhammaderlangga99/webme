import { Link } from '@inertiajs/react';
import React from 'react'
import { ModeToggle } from './mode-toggle';
import { User } from '@/types';
import { SearchDialog } from './SearchDialog';
import { Boxes, Equal } from 'lucide-react';
import MenuMobile from './MenuMobile';
const navItems = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'About',
        link: '/about'
    },
    {
        id: 3,
        name: 'Events',
        link: '/events'
    },
    {
        id: 4,
        name: 'Gallery',
        link: '/gallery'
    },
    {
        id: 5,
        name: 'Contact',
        link: '/contact'
    },
]


export default function Navigation({ auth }: { auth: { user: User } }) {
    console.log(auth);
    const pathName = window.location.pathname;
    return (
        <nav className='w-full'>
            <div className="container flex m-auto max-w-7xl py-3 px-3">
                <div className="left flex gap-5 lg:justify-normal w-full">
                    <MenuMobile Navigation={navItems} />
                    <div className="brand flex gap-x-1 items-center">
                        <Boxes strokeWidth={1} /> <span className='font-extrabold text-lg'>me.</span>
                    </div>

                    <ul className='lg:flex justify-between gap-5 items-center hidden'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link href={item.link} className={`hover:text-zinc-600 text-sm ${item.link == pathName && 'text-zinc-950 dark:text-blue-500 dark:hover:text-zinc-900 font-extrabold hover:text-zinc-950'}`}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className='lg:justify gap-1 lg:gap-2 items-center flex'>
                    <SearchDialog />    
                    <ModeToggle />
                    {auth.user ? (
                        <li className=''>
                            <Link href={route('dashboard')} className='text-sm bg-zinc-300 dark:bg-zinc-800 pr-5 md:pr-5 rounded-full text-zinc-800 border border-zinc-400 dark:border-zinc-700 flex items-center justify-center gap-2 dark:text-white font-bold lowercase tracking-wider'>
                                {/* avatar */}
                                {
                                    auth.user.avatar && <img src={auth.user.avatar} alt={auth.user.name} className='w-7 h-7 object-cover m-auto rounded-full' />
                                }
                            _{auth.user.name.length  > 0 ? auth.user.name.split(' ')[1] : auth.user.name}. 
                            </Link>
                        </li>
                    ) : (
                        <ul className='flex space-x-3'>
                            <li>
                                <Link href={route('login')} className='text-sm flex bg-zinc-900 dark:bg-zinc-100 py-2 px-4 rounded-full text-white dark:text-black shadow-lg dark:shadow-zinc-600 font-bold w-20 justify-center'>Sign in</Link>
                            </li>
                            <li>
                                    <a href="auth/redirect" className='hidden w-28 justify-center md:flex no-wrap items-center gap-1 text-zinc-900 dark:text-zinc-300 text-sm font-bold rounded-full py-2 px-4 border border-zinc-900 dark:border-zinc-300'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 25" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path fill="currentColor" d="M21.582 12.977q-.002-1.063-.182-2.045h-9.418v3.873h5.382a4.6 4.6 0 0 1-2.01 3.009v2.518H18.6c1.891-1.746 2.982-4.31 2.982-7.355"></path><path fill="currentColor" d="M11.981 22.75c2.7 0 4.964-.89 6.618-2.418l-3.245-2.518c-.891.6-2.027.963-3.373.963-2.6 0-4.81-1.754-5.6-4.118H3.054v2.582c1.645 3.264 5.018 5.51 8.927 5.51Z"></path><path fill="currentColor" d="M6.382 14.65a6 6 0 0 1-.318-1.9c0-.664.118-1.3.318-1.9V8.268H3.055a9.9 9.9 0 0 0-1.073 4.482c0 1.618.391 3.136 1.073 4.482l2.59-2.018z"></path><path fill="currentColor" d="M11.981 6.732c1.473 0 2.782.509 3.827 1.49l2.864-2.863C16.936 3.741 14.68 2.75 11.98 2.75c-3.91 0-7.282 2.245-8.927 5.518L6.38 10.85c.79-2.364 3-4.118 5.6-4.118Z"></path></svg>
                                        Sign up
                                    </a>
                            </li>
                        </ul>
                    )}
                </ul>
            </div>
        </nav>
    );
}
