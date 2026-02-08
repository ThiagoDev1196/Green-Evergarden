function HeroImg() {



const scrollToSubscription = () => {
  const element = document.getElementById('subscription');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

    return (
        <div className="hero__container flex flex-col w-full h-[100vh]">
            <div className="dark-overlay md:h-[720px] h-[100vh]"></div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl md:mb-6 max-w-4xl z-10 font-bold text-white">Green Evergarden</h1>
            <p className="text-amber-100 z-11 p-5 text-[17px] sm:text-2xl">Inspired by nature, made for you</p>

            <div className="mt-2 flex flex-col sm:flex-row gap-4 z-20">
            <a href="./Catalog" className="px-8 py-4 flex items-center justify-center cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg sm:text-sm md:text-lg font-semibold transition-colors">
              Explore our products
            </a>
            <button onClick={scrollToSubscription} className="px-8 cursor-pointer py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg sm:text-sm md:text-lg font-semibold backdrop-blur-sm border-2 border-white/30 transition-colors">
              Subscribe to get a disscount
            </button>
          </div>

        </div>
    )
}

export default HeroImg