import React from "react";

function AboutUs () {
    return (
      <div id="about" className="about__container md:p-6 flex justify-center scroll-mt-10 md:scroll-mt-42  items-center flex-col md:flex-row  w-[100%] md:max-w-[1540px] mx-auto">

        <div className="about__text flex-[3] md:border-4 md:border-y-0 md:border-r-0 md:pl-4 lg:max-w-[70%] border-l-emerald-600 bg-cover bg-center text-black p-4 md:p-10 md:bg-none">
            <p className="text-center md:text-start text-2xl font-bold p-6 z-10 relative">Who are we?</p>
            <p className="p-6  ">
            At Green Evergarden, we believe that living sustainably is not just a choice but a <b>commitment to our planet</b>. Our mission is to bring you eco-friendly products that combine quality, innovation, and care for the environment. <br/>
           From reusable essentials to natural alternatives, every item we offer is thoughtfully crafted to help reduce waste and promote a <b>greener lifestyle</b>. <br/>
           We're passionate about making sustainability accessible for everyone. Whether you're just starting your journey or are already an eco-enthusiast, we're here to support you with <b>products you can trust and love</b>. <br/>
           Together, let's cultivate a world where green choices are second nature. 🌿                
            </p>
            <p className="hidden md:block font-semibold text-white text-center mx-5 bg-emerald-500 p-2">Take a look at our products below</p>
        </div>
        

        <div className="about__img w-[70%] flex md:flex-[2]">
            <img src="/aboutus1.jpeg" className="md:h-[450px] md:w-full md:object-cover"/>
        </div>

        <p  className="md:hidden font-semibold text-white text-center bg-emerald-500 my-10 mb-25 p-2">Take a look at our products below</p>
  

  </div>
    )
}

export default AboutUs