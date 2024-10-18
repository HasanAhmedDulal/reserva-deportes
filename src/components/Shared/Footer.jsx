import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#202124] text-white'>
            <div className="max-w-screen-2xl px-2 mx-auto ">
                <div className="w-full lg:flex justify-center  text-white text-2xl p-10">
                    <div className='w-full lg:w-1/2 flex justify-start bg-red-200'>
                        <div className='lg:w-4/5 '>
                            <div className='flex gap-5 justify-center'>
                                <div className='w-40'>
                                    <Image
                                        src="/footer/mastercard.png"
                                        alt="Google Play"
                                        width={500}
                                        height={500}
                                    />
                                </div>

                                <div className='w-40'>
                                    <Image
                                        src="/footer/visa.png"
                                        alt="Google Play"
                                        width={500}
                                        height={500}

                                    />
                                </div>

                            </div>
                            <div className='mt-10 '>
                                <p className='mb-5'>Legal responsible: - Reservadeportes Demo </p>
                                <p>Accepted payment methods:</p>
                                <p>VISA/MASTERCARD</p>
                                <p>Cancellation policy:</p>
                                <p >
                                    Refunds for cancellations will be made in the form of a wallet voucher that can be used for future sports reservations. No refunds will be made to your credit card.
                                </p>

                            </div>
                        </div>

                    </div>
                    <div className='w-full lg:w-1/2 flex justify-end mt-10 lg:mt-0 bg-green-200'>
                        <div className=''>
                            <div className='w-48 mx-auto'>
                                <Image
                                    src="/logo/logo.png"
                                    alt="Google Play"
                                    className='mb-5'
                                    width={250}
                                    height={150}

                                />
                            </div>
                            <div className='space-y-5 '>
                                <h6 className="text-white">Contact Us</h6>
                                <p>Email: info@reservadeportes.com</p>
                                <p> Phone: +983049171</p>
                                <div className="flex gap-10">
                                    <Link href={''}><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="35"
                                        height="35"
                                        viewBox="0 0 24 24"
                                        className="fill-current">
                                        <path
                                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                    </svg></Link>
                                    <a>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 24 24"
                                            className="fill-current">
                                            <path
                                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                        </svg>
                                    </a>
                                    <a>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 24 24"
                                            className="fill-current">
                                            <path
                                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className=' footer-center  p-16 text-xl'>
                <p>Copyright © {new Date().getFullYear()} powered by ReservaDeportes ® Reservadeportes Demo | info@reservadeportes.com</p>
            </div>
        </div>
    )
}
