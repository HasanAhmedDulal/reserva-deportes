'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";


export default function Signup() {

    const handleSignup = async (event) => {
        event.preventDefault();

        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            confirmpassword: event.target.confirmpassword.value,
        }
        console.log(newUser)
        const resp = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json'
            }
        })
        console.log(resp)
        if (resp) {
            event.target.reset();
        }
    }
    return (

        <div className="flex items-center justify-center  py-16">
            <div className="space-y-5 lg:space-y-0 flex-row-reverse lg:flex overflow-hidden gap-5 ">
                {/* Left Section */}
                <div className="lg:w-[500px] p-8  border border-secondary rounded-[20px] ">
                    <h2 className="text-2xl lg:text-4xl font-bold text-center text-blue-600 mb-10 uppercase">Signup NOW</h2>

                    <form className="space-y-10" onSubmit={handleSignup}>
                        <div>
                            <p className='mb-2'>Name</p>
                            <input
                                name='name'
                                type="text"
                                placeholder="Type Name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <p className='mb-2'>Email</p>
                            <input
                                name='email'
                                type="email"
                                placeholder="Email address"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <p className='mb-2'>Password</p>
                            <input
                                name='password'
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <p className='mb-2'>Confirm Password</p>
                            <input
                                name='confirmpassword'
                                type="confirmpassword"
                                placeholder="Confirm Password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <button type='submit' className="btn w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 uppercase">
                            Signup NOW
                        </button>
                    </form >

                    <div className="flex justify-between items-center mt-4 text-sm">
                        <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                        <a href="#" className="text-blue-500 hover:underline">Dont have an account? Sign Up</a>
                    </div>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-t" />
                        <span className="mx-4 text-gray-500">or login with</span>
                        <hr className="flex-grow border-t" />
                    </div>

                    <div className="lg:flex justify-center gap-2 space-y-2 lg:space-y-0">
                        <Link href={''} className='flex justify-center items-center gap-2 border rounded-md px-5 py-1 border-secondary text-xl'> <FcGoogle />Google</Link>
                        <Link href={''} className='flex justify-center items-center gap-2 border rounded-md px-5 py-1 border-secondary text-xl '> <FaLinkedin className='text-secondary' />LinkedIn</Link>
                        <Link href={''} className='flex justify-center items-center gap-2 border rounded-md px-5 py-1 border-secondary text-xl '> <FaFacebook className='text-secondary' />Facebook</Link>

                    </div>

                    <div className="text-center mt-16">
                        <p className='text-2xl lg:text-4xl mb-5'>DOWNLOAD OUR APP</p>
                        <div className="flex justify-center items-center  ">

                            <Image
                                src="/qrcode/qrcode.png"
                                alt="qr code"
                                width={140}
                                height={140}

                            />

                            <div className='space-y-5 '>
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Google Play"

                                    width={180}
                                    height={250}

                                />
                                <Image
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="Google Play"

                                    width={180}
                                    height={50}

                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-[500px] p-8  border border-secondary rounded-[20px]">
                    <h2 className="text-4xl font-bold mb-6">Description</h2>

                    <ul className="space-y-4 text-xl">
                        <li className="flex items-start">
                            <span className="mr-2 text-blue-500">▶</span>
                            Create an account on ReservaDeportes by clicking here.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-blue-500">▶</span>
                            Check your email to activate your account (check spam/junk if not found).
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-blue-500">▶</span>
                            Identify yourself with your data.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-blue-500">▶</span>
                            [FOR MEMBERS] Clubs need to validate your data before accepting you.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-blue-500">▶</span>
                            Youll receive an email once accepted to book your court online.
                        </li>
                    </ul>

                </div>
            </div>
        </div>





    )
}
