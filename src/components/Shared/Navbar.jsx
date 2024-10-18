import Image from 'next/image'
import Link from 'next/link'



export default function Navbar() {
    const menuItems = [
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
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-5 shadow gap-5 items-center">
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
                        <button className="btn btn-primary h-6 w-28 text-white">Signin</button>
                    </div>
                </div>

            </div>
        </div>


    )
}
