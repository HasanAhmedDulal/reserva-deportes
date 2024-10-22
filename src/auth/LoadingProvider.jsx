'use client'

import { useSession } from "next-auth/react";

export default function LoadingProvider({ children }) {
    const session = useSession();
    console.log(session)
    if (session.status === 'loading') {
        return (

            <div className="hero min-h-screen bg-white">
                <span className="loading loading-spinner text-info w-[100px] h-[100px]"></span>
            </div >
        );
    }
    return (
        <> {children}</>
    )
}
