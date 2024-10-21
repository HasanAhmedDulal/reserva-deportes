import Image from 'next/image'
import React from 'react'
export default function Header() {


    return (
        <div className='bg-black '>
            <div className="container px-5 mx-auto text-white ">
                <div className="grid grid-cols-1 lg:flex justify-between items-center lg:h-20 gap-5 lg:gap-10 py-5 ">

                    <input
                        type="text"
                        placeholder="search"
                        className="input text-black w-full lg:w-80 h-10  text-center bg-white" />

                    <div className='hidden lg:flex justify-center items-center gap-5 '>
                        <Image src='/header/flg/spain.png' alt="spain flg" width={45} height={45} />
                        <Image src='/header/flg/uk.png' alt="uk flg" width={45} height={45} />
                        <Image src='/header/flg/france.png' alt="france flg" width={45} height={45} />
                    </div>

                    <div className='flex justify-center items-center gap-5'>
                        <h1 className='text-2xl'>Reginstration Sports Event</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}
