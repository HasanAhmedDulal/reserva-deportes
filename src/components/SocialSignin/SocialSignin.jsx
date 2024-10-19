'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";

export default function SocialSignin() {

    const router = useRouter();
    const session = useSession();

    const handleSocialLogin = async (provider) => {
        const resp = await signIn(provider, { redirect: false });
        if (session.status === 'authenticated') {
            router.push('/course')
        }

    }


    return (
        <div className="lg:flex justify-center gap-2 space-y-2 lg:space-y-0">
            <button onClick={() => handleSocialLogin('google')} className='flex justify-center items-center gap-2 border rounded-md px-5 py-1 border-secondary text-xl'> <FcGoogle />Google
            </button>
            <button onClick={() => handleSocialLogin('linkedin')} className='flex justify-center items-center gap-2 border rounded-md px-5 py-1 border-secondary text-xl '> <FaLinkedin className='text-secondary' />LinkedIn</button>
            <button onClick={() => handleSocialLogin('facebook')} className='flex justify-center items-center gap-2 border rounded-md px-5 py-1 border-secondary text-xl '> <FaFacebook className='text-secondary' />Facebook</button>

        </div>
    )
}
