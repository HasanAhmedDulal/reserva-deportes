'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import { IoMdMenu } from "react-icons/io";
import Swal from 'sweetalert2';
import Header from './Header';

export default function Navbar() {

    const session = useSession();
    console.log(session)
    const handleSignout = () => {
        signOut();
        if (session)
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
        <div className='bg-white fixed top-0 left-0 right-0 '>

            <Header></Header>
            <div className="container px-5 mx-auto text-black ">
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
                    <div className="navbar-center hidden lg:flex  justify-center space-x-10 text-xl font-bold">
                        {menuItems.map((item, index) => <Link href={item.path} key={index} className='hover:bg-primary px-4 py-2 rounded  duration-[0.5s]  hover:text-white'>{item.name}</Link>
                        )}

                    </div>
                    <div className="navbar-end ">
                        {!session.data && <Link href={'/signup'}><button className="btn btn-primary h-3 w-28 text-white">Signup</button></Link>}
                        {session.data &&
                            <  >
                                <button onClick={handleSignout} className="btn btn-primary h-5 w-24  text-white">Sign Out</button>
                            </>

                        }
                    </div>
                </div>

            </div>
        </div >


    )
}
