'use client'
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    const session = useSession();

    return (
        <div className='bg-black'>
            <div className="max-w-screen-2xl px-2 mx-auto text-white ">
                <div className="grid grid-cols-1 lg:flex justify-between items-center lg:h-24 gap-5 lg:gap-10 py-5">
                    {/* sm */}
                    <input
                        type="text"
                        placeholder="search"
                        className="input text-black" />

                    <div className='flex justify-center items-center gap-5'>
                        <Image src='/header/flg/spain.png' alt="spain flg" width={65} height={45} />
                        <Image src='/header/flg/uk.png' alt="uk flg" width={65} height={45} />
                        <Image src='/header/flg/france.png' alt="france flg" width={65} height={45} />
                    </div>

                    <div className='flex justify-center items-center gap-5'>
                        {!session.data && <Link href={'/signup'}><button className="btn btn-primary h-6 w-28 text-white">Signup</button></Link>}


                        <h1 className='text-xl'>Reginstration Sports Event</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}
