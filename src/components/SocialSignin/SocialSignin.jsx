'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";

export default function SocialSignin() {

    const router = useRouter();
    const session = useSession();
    console.log(session, 'session')
    const handleSocialLogin = async (provider) => {
        const resp = await signIn(provider, { redirect: false });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${provider} Login Successfuly`,
            showConfirmButton: false,
            timer: 1500
        });

    }


    return (
        <div className="md:flex justify-center space-y-2 gap-2 md:space-y-0">
            <button onClick={() => handleSocialLogin('google')} className='flex justify-center items-center gap-2 border rounded-md px-2 py-1 border-secondary text-xl w-full '> <FcGoogle />Google
            </button>
            <button onClick={() => handleSocialLogin('linkedin')} className='flex justify-center items-center gap-2 border rounded-md px-2 py-1 border-secondary text-xl w-full '> <FaLinkedin className='text-secondary' />LinkedIn</button>
            <button onClick={() => handleSocialLogin('facebook')} className='flex justify-center items-center gap-2 border rounded-md px-2 py-1 border-secondary text-xl w-full '> <FaFacebook className='text-secondary' />Facebook</button>

        </div>
    )
}
