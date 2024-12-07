import { Link } from '@inertiajs/react';
import React from 'react'
import { ModeToggle } from './mode-toggle';
import { User } from '@/types';
import { SearchDialog } from './SearchDialog';
import { Equal } from 'lucide-react';
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
                    <div className="brand">
                        <img src="img/jbp.png" alt="Jakarta Book Party" className='w-14 object-cover m-auto' />
                    </div>

                    <ul className='lg:flex justify-between gap-5 items-center hidden'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link href={item.link} className={`hover:text-zinc-600 text-sm ${item.link == pathName && 'text-green-950 dark:text-green-900 dark:hover:text-green-900 font-extrabold hover:text-green-950'}`}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className='lg:justify-between gap-1 lg:gap-2 items-center flex'>
                    <SearchDialog />
                    <ModeToggle />
                    {auth.user ? (
                        <li className=''>
                            <Link href={route('dashboard')} className='text-sm bg-green-900 py-2 px-4 rounded-full text-white shadow-lg font-bold'>Dashboard</Link>
                        </li>
                    ) : (
                        <ul className='flex space-x-2'>
                            <li>
                                <Link href={route('login')} className='text-sm bg-green-900 py-2 px-4 rounded-full text-white shadow-lg font-bold'>Login</Link>
                            </li>
                            <li>
                                <Link href={route('register')} className='hidden md:inline text-green-900 text-sm font-bold rounded-full py-2 px-4 border border-green-900'>Register</Link>
                            </li>
                        </ul>
                    )}
                </ul>
            </div>
        </nav>
    );
}
