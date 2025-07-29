import { ReactNode } from 'react';

type ErrorMessageProps = {
    children: ReactNode;
}

export default function ErrorMessage({children} : ErrorMessageProps) {
    return (
        <p className="bg-red-500 text-white text-center p-2 font-bold text-sm">
            {children}
        </p>
    )
}