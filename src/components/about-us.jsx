import React from "react";

function AboutUs () {
    return (
        <div className="about__container flex flex-col justify-center lg:flex-row py-14 px-4 gap-10 items-center">

          <div className="about__text flex flex-col gap-4  md:border-4 md:border-y-0 md:border-r-0 md:pl-4  border-l-emerald-600">
            <p className="font-semibold text-3xl">Who are we?</p>
            <p>
            At Green Evergarden, we believe that living sustainably is not just a choice but a commitment to our planet. Our mission is to bring you eco-friendly products that combine quality, innovation, and care for the environment. <br/>
           From reusable essentials to natural alternatives, every item we offer is thoughtfully crafted to help reduce waste and promote a greener lifestyle. <br/>
           We're passionate about making sustainability accessible for everyone. Whether you're just starting your journey or are already an eco-enthusiast, we're here to support you with products you can trust and love. <br/>
           Together, let's cultivate a world where green choices are second nature. 🌿
            </p>
            <a href="" className="hidden lg:block font-semibold text-white text-center bg-emerald-500 p-2">Take a look at our products below</a>
          </div>

          <div className="about__img flex">
            <img className="w-[400px] md:w-[500px] lg:w-[750px] m-auto" src="/public/aboutus2.webp"></img>
          </div>
            <a href="" className="lg:hidden font-semibold text-white text-center bg-emerald-500 p-2">Take a look at our products below</a>

        </div>
    )
}

export default AboutUs