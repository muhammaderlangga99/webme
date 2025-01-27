interface InputLabelProps {
    className?: string;
    children: React.ReactNode;
    type: string;
    required?: boolean;
    htmlFor: string;
    placeholder?: string;
    value?: string | number;
    name: string;
    onChange?: (e: any) => void;    
}

export default function InputLabel({ className, children, type, required, htmlFor, placeholder, value, onChange, name }: InputLabelProps) {
    return (
        <div>
            <label className={`block text-sm font-medium text-zinc-800 dark:text-zinc-400 ${className}`} htmlFor={htmlFor}>
                {children}
            </label>
            <input id={htmlFor} type={type} className="mt-1 block w-full px-3 py-2 border-none rounded-md bg-zinc-200 dark:bg-zinc-900 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={placeholder} required={required} value={value} onChange={onChange} name={name} />
        </div>
    );
}