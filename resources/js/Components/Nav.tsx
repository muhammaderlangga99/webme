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


export default function Navigation({ auth }: { auth: { user: User }}) {
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
                <ul className='lg:justify-between gap-1 lg:gap-2 items-center flex'>
                    <SearchDialog />
                    <ModeToggle />
                    {auth.user ? (
                        <li className=''>
                            <Link href={route('dashboard')} className='text-sm bg-zinc-900 dark:bg-zinc-100 py-2 px-4 rounded-full text-white dark:text-black shadow-lg dark:shadow-zinc-600 font-bold'>Dashboard</Link>
                        </li>
                    ) : (
                        <ul className='flex space-x-2'>
                            <li>
                                <Link href={route('login')} className='text-sm bg-zinc-900 dark:bg-zinc-100 py-2 px-4 rounded-full text-white dark:text-black shadow-lg dark:shadow-zinc-600 font-bold'>Login</Link>
                            </li>
                            <li>
                                <Link href={route('register')} className='hidden md:inline text-zinc-900 dark:text-zinc-300 text-sm font-bold rounded-full py-2 px-4 border border-zinc-900 dark:border-zinc-300'>Register</Link>
                            </li>
                        </ul>
                    )}
                </ul>
            </div>
        </nav>
    );
}
