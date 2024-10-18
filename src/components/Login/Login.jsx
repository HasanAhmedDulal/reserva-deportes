import Image from 'next/image'
import React from 'react'

export default function Login() {
    return (

        <div className="flex items-center justify-center  py-16">
            <div className="space-y-5 lg:space-y-0 lg:flex overflow-hidden gap-5 ">
                {/* Left Section */}
                <div className="lg:w-96 p-8  border border-secondary rounded-[20px] ">
                    <h2 className="text-2xl font-bold mb-6">Description</h2>

                    <ul className="space-y-4">
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

                {/* Right Section */}
                <div className="lg:w-96 p-8  border border-secondary rounded-[20px]  ">
                    <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">LOGIN NOW</h2>

                    <form className="space-y-4">
                        <div>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                            LOGIN NOW
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

                    <div className="flex justify-around">
                        <button className="bg-gray-100 p-2 rounded-md">Google</button>
                        <button className="bg-gray-100 p-2 rounded-md">LinkedIn</button>
                        <button className="bg-gray-100 p-2 rounded-md">Facebook</button>
                    </div>

                    <div className="text-center mt-6">
                        <p>DOWNLOAD OUR APP</p>
                        <div className="flex justify-center mt-2">
                            <div className="w-[150px]  mx-2">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Google Play"

                                    width={1000}
                                    height={1000}

                                />
                            </div>
                            <div className="w-[150px]  mx-2">
                                <Image
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="Google Play"

                                    width={1000}
                                    height={1000}

                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>





    )
}
