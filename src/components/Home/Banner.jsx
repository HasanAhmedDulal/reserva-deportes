import Image from 'next/image'
import React from 'react'
import banner from '/public/banner/banner.png'

export default function Banner() {
    return (

        <div
            className="hero h-96 lg:h-[600px]"
            style={{
                backgroundImage: "url(/banner/banner.png)",
            }}>

            <div className="min-w-screen-2xl px-2 mx-auto text-white ">
                <h1 className="mb-5 font-bold text-5xl lg:text-8xl">
                    Sport Reservations
                    <br />Demo
                </h1>
                <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary text-white">Booking</button>

            </div>
        </div>
    )
}
