import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaSquareInstagram, FaSquareXTwitter, } from "react-icons/fa6";
export default function Footer() {
    return (
        <div className='bg-[#202124] text-white '>
            <div className="max-w-screen-2xl px-3 mx-auto text-xl">
                <div className="w-full lg:flex justify-center  text-white py-10">
                    <div className='w-full lg:w-1/2 flex justify-start'>
                        <div >
                            <div className='flex gap-5 justify-center lg:justify-start'>
                                <div className='w-28'>
                                    <Image
                                        src="/footer/mastercard.png"
                                        alt="Google Play"
                                        width={112}
                                        height={112}
                                    />
                                </div>

                                <div className='w-28'>
                                    <Image
                                        src="/footer/visa.png"
                                        alt="Google Play"
                                        width={112}
                                        height={112}

                                    />
                                </div>

                            </div>
                            <div className='mt-5'>
                                <p className='mb-5'>Legal responsible: - Reservadeportes Demo </p>
                                <p>Accepted payment methods:</p>
                                <p>VISA/MASTERCARD</p>
                                <p>Cancellation policy:</p>
                                <p className='text-justify'>
                                    Refunds for cancellations will be made in the form of a wallet voucher that can be used for future sports reservations. No refunds will be made to your credit card.
                                </p>

                            </div>
                        </div>

                    </div>
                    <div className='w-full lg:w-1/2 flex lg:justify-end justify-center mt-10 lg:mt-0'>
                        <div className=''>
                            <div className='w-28  bg-white mx-auto md:mx-0 rounded-full'>
                                <Image
                                    src="/logo/logo.png"
                                    alt="logo"
                                    className='mb-5 p-1'
                                    width={112}
                                    height={112}

                                />
                            </div>
                            <div className='space-y-2 '>
                                <h6 className="text-white">Contact Us</h6>
                                <p>Email: info@reservadeportes.com</p>
                                <p> Phone: +983049171</p>
                                <div className="flex gap-8">
                                    <Link href={''} className='text-4xl'>
                                        <FaFacebook />
                                    </Link>
                                    <Link href={''} className='text-4xl'>
                                        <FaSquareXTwitter />
                                    </Link>
                                    <Link href={''} className='text-4xl'>
                                        <FaSquareInstagram />
                                    </Link>
                                    <Link href={''} className='text-4xl'>
                                        <FaLinkedin />
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="divider bg-white h-[2px]"></div>
            <div className=' footer-center pb-10'>
                <p>Copyright © {new Date().getFullYear()} powered by ReservaDeportes ® | Reservadeportes Demo | info@reservadeportes.com</p>
            </div>
        </div>
    )
}
