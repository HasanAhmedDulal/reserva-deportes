'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io';
import Swal from 'sweetalert2';
import SocialSignin from '../SocialSignin/SocialSignin';


export default function Signup() {
    const router = useRouter();
    const handleSignup = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmpassword = event.target.confirmpassword.value;

        if (password !== confirmpassword) {
            return alert('passwor not patch')
        }
        const newUser = {
            name,
            email,
            password,
            confirmpassword,
        }

        console.log(newUser)

        const result = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json'
            }
        })
        if (result) {
            event.target.reset();
            Swal.fire({
                position: "center-top",
                icon: "success",
                title: "Signup Succesfully",
                showConfirmButton: true,
                timer: 1500
            });
            router.push('/');
        }
    }
    return (

        <div className="container px-2 mx-auto text-white  p-10">
            <div className="flex items-center justify-center  ">
                <div className="space-y-5 lg:space-y-0 flex-row-reverse lg:flex  gap-5 bg-white text-black p-5 lg:p-10">
                    {/* Left Section */}
                    <div className="lg:w-[400px] p-5  border border-secondary rounded-[20px] ">
                        <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-600 mb-2 ">SIGNUP NOW</h2>

                        <form className="space-y-3" onSubmit={handleSignup}>
                            <div>
                                <p className='mb-2'>Name</p>
                                <input
                                    name='name'
                                    type="text"
                                    placeholder="Type your name"
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
                                    type="password"
                                    placeholder="Confirm password"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <button type='submit' className="btn w-full  text-white py-2 rounded-md bg-blue-600 hover:bg-blue-700">
                                LOGIN NOW
                            </button>
                        </form >

                        <div className="flex justify-between items-center mt-4 text-sm">
                            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                            <Link href="/login" className="text-blue-500 hover:underline">Have an account? Login</Link>
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




    )
}
