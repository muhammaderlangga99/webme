import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Loader } from 'lucide-react';
import { FormEventHandler } from 'react';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <a href="auth/redirect" className="mb-4 flex items-center gap-2 justify-center border-2  py-2 rounded-xl tracking-wide">
                <img src="/img/Google.png" className='w-4 h-4' alt="" />
                Sign in / Sign up with Google
            </a>
            <div className="flex items-center">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="mx-4 text-gray-600 text-xs font-semibold">OR</span>
                <div className="flex-grow border-t border-gray-600"></div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
                <p>
                    sign in with your email and password.
                </p>
            </div>
            <form onSubmit={submit} className='mt-4'>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full bg-zinc-200/80 dark:bg-zinc-900/40 border-none"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full bg-zinc-200/80 dark:bg-zinc-900/40 border-none"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="mt-4 gap-y-2 flex flex-col-reverse">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="rounded-md text-sm text-indigo-500 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="w-full text-center bg-indigo-600 flex justify-center py-2.5 rounded-lg" disabled={processing}>
                        Log in {processing && (<Loader size={18} className="ml-1 animate-spin" />)}
                    </PrimaryButton>
                </div>

                {/* login with google */}
                
            </form>
        </GuestLayout>
    );
}
