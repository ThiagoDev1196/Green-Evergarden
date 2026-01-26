function AboutUs () {
    return (
      <div className="about__container md:p-6 flex justify-center scroll-mt-10 md:scroll-mt-42  items-center flex-col md:flex-row  w-[97%] md:max-w-[1600px] mx-auto">

        <div className="about__text flex-[3] md:border-r-0 md:border-4 md:border-y-0 border-r-0 md:pl-4 lg:max-w-[70%] border-l-emerald-600 bg-cover bg-center text-black p-4 md:p-10 md:bg-none">
            <p className="text-center md:text-start text-3xl font-bold p-6 z-10 relative">Who are we?</p>
            <p className="p-6  bg-gray-300 md:bg-white">
            At Green Evergarden, we believe that living sustainably is not just a choice but a <b>commitment to our planet</b>. Our mission is to bring you eco-friendly products that combine quality, innovation, and care for the environment. <br/>
           From reusable essentials to natural alternatives, every item we offer is thoughtfully crafted to help reduce waste and promote a <b>greener lifestyle</b>. <br/>
           We're passionate about making sustainability accessible for everyone. Whether you're just starting your journey or are already an eco-enthusiast, we're here to support you with <b>products you can trust and love</b>. <br/>
           Together, let's cultivate a world where green choices are second nature. 🌿                
            </p>
        </div>
        

        <div className="about__img hidden md:flex md:flex-[2]">
            <img src="./about-img.jpg" alt="Beautiful green plant in the dark" className="md:h-[450px] m-auto h-[400px] md:w-full md:object-cover"/>
        </div>  

  </div>
    )
}

export default AboutUs