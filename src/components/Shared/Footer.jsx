import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaSquareInstagram, FaSquareXTwitter, } from "react-icons/fa6";
export default function Footer() {
    return (
        <div className='bg-[#202124] text-white pt-5'>
            <div className="container  mx-auto md:px-10 px-14 lg:px-24 ">
                <div className="grid md:grid-cols-1 lg:grid-cols-3   ">
                    <div className=' flex justify-start '>
                        <div >
                            <div className='flex gap-5 justify-center lg:justify-start'>
                                <div className='w-14'>
                                    <Image
                                        src="/footer/mastercard.png"
                                        alt="Google Play"
                                        width={80}
                                        height={80}
                                    />
                                </div>

                                <div className='w-14'>
                                    <Image
                                        src="/footer/visa.png"
                                        alt="Google Play"
                                        width={80}
                                        height={80}

                                    />
                                </div>

                            </div>
                            <div className='mt-2'>
                                <p >Legal responsible: - Reservadeportes Demo </p>
                                <p>Accepted payment methods:</p>
                                <p>VISA/MASTERCARD</p>
                                <p>Cancellation policy:</p>
                                <p className='text-justify'>
                                    Refunds for cancellations will be made in the form of a wallet voucher that can be used for future sports reservations. No refunds will be made to your credit card.
                                </p>

                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center mt-5 lg:mt-0 '>
                        <div className="text-center ">
                            <p className='text-3xl'>DOWNLOAD OUR APP</p>
                            <div className="flex justify-center items-center mt-2">

                                <Image
                                    src="/qrcode/qrcode.png"
                                    alt="qr code"
                                    width={110}
                                    height={110}

                                />

                                <div className='ml-2'>
                                    <Image
                                        className='mb-2'
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Google Play logo"

                                        width={150}
                                        height={45}

                                    />
                                    <Image
                                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                        alt="apple store logo"
                                        width={150}
                                        height={45}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='flex lg:justify-end justify-center mt-5 lg:mt-0 '>
                        <div>
                            <div className='w-20  bg-white mx-auto md:mx-0 rounded-full'>
                                <Image
                                    src="/logo/logo.png"
                                    alt="logo"
                                    className='mb-2 p-1'
                                    width={80}
                                    height={80}

                                />
                            </div>
                            <h6 className="text-white">Contact Us</h6>
                            <p>Email: info@reservadeportes.com</p>
                            <p> Phone: +983049171</p>
                            <div className="flex gap-8 mt-2 text-3xl">
                                <Link href={''} >
                                    <FaFacebook />
                                </Link>
                                <Link href={''}>
                                    <FaSquareXTwitter />
                                </Link>
                                <Link href={''}>
                                    <FaSquareInstagram />
                                </Link>
                                <Link href={''} >
                                    <FaLinkedin />
                                </Link>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className=' footer-center pb-5 mt-5'>
                <p>Copyright © {new Date().getFullYear()} powered by ReservaDeportes ® | Reservadeportes Demo | info@reservadeportes.com</p>
            </div>
        </div>
    )
}
