'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import { IoMdMenu } from "react-icons/io";
import Swal from 'sweetalert2';

export default function Navbar() {

    const session = useSession();

    const handleSignout = () => {
        signOut();
        Swal.fire({
            position: "top-center",
            icon: "success",
            iconColor: "#EF4C53",
            title: 'Logout Successfuly',
            showConfirmButton: false,
            timer: 1500
        });
    }


    const menuItems = [

        { name: 'Join party', path: '/' },
        { name: 'Courses', path: '/' },
        { name: 'Tournament', path: '/' },
        { name: 'Reginstration for Custural event', path: '/' },

    ]

    return (
        <div className='bg-white'>
            <div className="max-w-screen-2xl px-2 mx-auto text-black">
                <div className="navbar px-0 ">
                    <div className="navbar-start relative">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden">
                                <IoMdMenu className="h-14 w-14 " />
                            </div>
                            <ul
                                tabIndex={0}
                                className="absolute inset-x-0 top-14 menu w-fit dropdown-content bg-primary rounded-box z-[1] mt-3 p-5 shadow gap-5 items-center text-white uppercase">
                                {menuItems.map((item, index) => <Link href={item.path} key={index}>{item.name}</Link>
                                )}
                            </ul>
                        </div>
                        <Link href={'/'}> <Image src='/logo/logo.png' alt="logo" width={60} height={60} /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex  justify-center space-x-10 text-md ">
                        {menuItems.map((item, index) => <Link href={item.path} key={index} className='hover:bg-primary px-4 py-2 rounded'>{item.name}</Link>
                        )}

                    </div>
                    <div className="navbar-end ">
                        {!session.data && <Link href={'/signup'}><button className="btn btn-primary h-6 w-28 text-white">Signup</button></Link>}
                        {session.data &&
                            <  >
                                <button onClick={handleSignout} className="btn btn-primary w-24  text-white">Sign Out</button>
                            </>

                        }

                    </div>
                </div>

            </div>
        </div >


    )
}
