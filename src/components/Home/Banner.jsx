
import React from 'react'


export default function Banner() {

    return (

        <div
            className="hero h-80 lg:h-[460px] "
            style={{
                backgroundImage: "url(/banner/banner.jpg)",
            }}>

            <div className="container px-2 mx-auto text-white">
                <h1 className="mb-5 font-bold text-5xl lg:text-8xl
                 text-white tracking-wide text-shadow-[2px 2px black]
                ">
                    Sport Reservations
                    <br />Demo
                </h1>
                <p className="mb-5 md:text-2xl">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary text-white">Booking</button>

            </div>
        </div>
    )
}
