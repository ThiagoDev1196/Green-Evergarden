import { IoIosArrowForward } from "react-icons/io";


function Subscription() {
    return (
        <div id="subscription" className="sub__container bg-white p-6 pt-5 scroll-mt-18 md:scroll-mt-46 flex justify-center items-center flex-row  w-[97%] md:max-w-[1540px] mx-auto shadow-2xl shadow-black/50">


            <div className="sub__input__container flex flex-col items-center justify-end shadow-2xl md:shadow-none p-2  flex-[2] text-black md:bg-none">

              <div className="sub__input flex justify-center flex-col items-center bg-[#ffffffE6]">
                <img src="./sub-img5.jpg" className="w-full max-w-[400px] md:hidden"/>
                <p className=" text-lg font-semibold pt-6 relative">Subscribe to get <b className="text-emerald-500">10%</b> off your order! </p>
                <p className=" pb-4">And receive our latest products and sales in your inbox 📬</p>
                
                <form className="flex justify-center p-2 space-x-0">
                    <input type="email" placeholder="E-mail" className="bg-white md:w-[300px] px-4 py-2 rounded-l-full border-2 border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all" />
                     <button type="submit" className="bg-emerald-400 text-white px-4 py-2 rounded-r-full border-2 border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all">
                      <IoIosArrowForward />
                    </button>
                </form>

              </div>



            </div>

            <div className="sub__img hidden md:flex flex-[1] lg:flex-[2]">
                <img src="./sub-img5.jpg" className="h-[450px] w-full object-cover object-center"/>
            </div>
        </div>
    );
}

export default Subscription