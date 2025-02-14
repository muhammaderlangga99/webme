import { InputHTMLAttributes } from 'react';

export default function Checkbox({
    className = '',
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-zinc-400 dark:border-zinc-600 text-indigo-600 shadow-sm bg-transparent focus:ring-indigo-500 ' +
                className
            }
        />
    );
}
