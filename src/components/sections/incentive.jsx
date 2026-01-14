function Incentive() {
    return (
        <div className="incentive__container p-6  flex justify-center items-center flex-row  w-[100%] md:max-w-[1470px] mx-auto md:bg-emerald-800">

            <div className="incentive__img hidden md:flex flex-[1] lg:flex-[2]">
                <img src="./incentive-img.jpg" className="h-[450px] w-full object-cover"/>
            </div>

            <div className="incentive__text flex-[1] relative bg-[url('/incentive-img.jpg')] bg-cover bg-center text-black p-10 md:bg-none">
             <div className="absolute inset-0 bg-black opacity-50 z-0 md:hidden"></div> 
                <p className="bg-[#ffffffE6] md:bg-emerald-800 md:text-white text-center text-2xl font-bold p-6 z-10 relative">Why green products?</p>
                <p className="p-6 bg-[#ffffffe6] md:text-md  md:bg-emerald-800 md:text-white z-10 relative">Every choice you make as a consumer impacts the environment. By choosing eco-friendly products, you help reduce pollution, minimize waste, and support sustainable practices. Green products use natural ingredients, biodegradable packaging, and ethical sourcing, making them safer for both people and the planet. Switching to sustainable alternatives means cleaner oceans, fresher air, and a healthier future for all. Small actions lead to big change—buy green and make a difference today! ♻️</p>
            </div>
        </div>
    );
}

export default Incentive