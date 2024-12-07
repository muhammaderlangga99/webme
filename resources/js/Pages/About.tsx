import Main from '@/Layouts/Main'
import { User } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react'

export default function About({auth}: {auth: {user: User}}) {
    return (
        <Main auth={auth}>
            <Head title="About" />
            <div>
                <h1>About</h1>
                <p>Welcome to the about page</p>
            </div>
        </Main>
    );
}
