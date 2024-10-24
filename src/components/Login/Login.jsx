'use client'

import { signIn } from "next-auth/react"
import SocialSignin from '../SocialSignin/SocialSignin'
import { IoMdArrowDropright } from 'react-icons/io';
import Link from 'next/link';


export default function Login() {
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const result = signIn('credentials', {
            email,
            password,
            redirect: true,
            callbackUrl: '/',
        });

    };




    return (
        <>

            <div className="container px-2 mx-auto text-white py-10 ">
                <div className="flex items-center justify-center">
                    <div className="space-y-5 lg:space-y-0 flex-row-reverse lg:flex  gap-5 bg-white text-black p-5 lg:p-10">
                        {/* Left Section */}
                        <div className="lg:w-[400px] p-5  border border-secondary rounded-[20px] ">
                            <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-600 mb-2 ">LOGIN NOW</h2>

                            <form className="space-y-3" onSubmit={handleLogin}>
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
                                <button type='submit' className="btn w-full  text-white py-2 rounded-md bg-blue-600 hover:bg-blue-700">
                                    LOGIN NOW
                                </button>
                            </form >

                            <div className="flex justify-between items-center mt-4 text-sm">
                                <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                                <Link href="/signup" className="text-blue-500 hover:underline">Dont have an account? Sign Up</Link>
                            </div>

                            <div className="flex items-center my-6">
                                <hr className="flex-grow border-t" />
                                <span className="mx-4 text-gray-500">or login with</span>
                                <hr className="flex-grow border-t" />
                            </div>

                            <SocialSignin></SocialSignin>
                        </div>

                        {/* Right Section */}
                        <div className="lg:w-[400px] p-5  border border-secondary rounded-[20px]">
                            <h2 className="text-4xl font-bold mb-6 text-center">Description</h2>

                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start ">
                                    <span className="mr-2 text-blue-500"><IoMdArrowDropright className='text-4xl' /></span>
                                    Create an account on ReservaDeportes by clicking here.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-blue-500"><IoMdArrowDropright className='text-4xl' /></span>
                                    Check your email to activate your account (check spam/junk if not found).
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-blue-500"><IoMdArrowDropright className='text-4xl' /></span>
                                    Identify yourself with your data.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-blue-500"><IoMdArrowDropright className='text-4xl' /></span>
                                    [FOR MEMBERS] Clubs need to validate your data before accepting you.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-blue-500"><IoMdArrowDropright className='text-4xl' /></span>
                                    Youll receive an email once accepted to book your court online.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>



            </div>

        </>

    )
}
