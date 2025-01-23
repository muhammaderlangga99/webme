import React from 'react'

export default function TextGreen({className, children} : {className: string, children: React.ReactNode}) {
    return (
        <div>
            <h3 className={`text-green-700 dark:text-green-600 ${className}`}>
                {children}
            </h3>
        </div>
    );
}
