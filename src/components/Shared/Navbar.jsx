'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {

    const session = useSession();
    console.log(session);



    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Join party', path: '/' },
        { name: 'Courses', path: '/' },
        { name: 'Tournament', path: '/' },
        { name: 'Reginstration for Custural event', path: '/' },

    ]

    return (
        <div className='bg-base-100'>
            <div className="max-w-screen-2xl px-2 mx-auto text-black">
                <div className="navbar px-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden">
                                <IoMdMenu className="h-14 w-14 " />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-fit p-5 shadow gap-5 items-center text-white uppercase">
                                {menuItems.map((item, index) => <Link href={item.path} key={index}>{item.name}</Link>
                                )}
                            </ul>
                        </div>
                        <Link href={'/'}> <Image src='/logo/logo.png' alt="spain flg" width={65} height={45} /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex gap-20  text-xl">
                        {menuItems.map((item, index) => <Link href={item.path} key={index}>{item.name}</Link>
                        )}



                    </div>
                    <div className="navbar-end ">
                        {!session.data ?
                            <  >
                                <Link href={'/login'}>
                                    <button className="btn btn-primary h-6 w-28 text-white">
                                        Signin
                                    </button>
                                </Link>
                            </>
                            :
                            <button onClick={() => signOut()} className="btn btn-primary h-6 w-28 text-white">Sign Out</button>
                        }


                    </div>
                </div>

            </div>
        </div >


    )
}
