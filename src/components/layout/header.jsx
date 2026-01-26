import { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

    return (

    <nav className="nav__container flex flex-col bg-emerald-700  text-amber-100  fixed  w-full z-30">

          <div className="nav__image flex flex-row items-center justify-center text-[18px] lg:text-[20px] p-8 xl:hidden">
          <img src="./nav-img.webp" alt="Plant web logo" className="w-4 mr-2"/>
          <p>Green Evergarden</p>
          </div>


            <button className="xl:hidden absolute text-xl p-8" onClick={toggleMenu} id="menu-open" aria-label="Open navegation menu">☰</button>

        <ul className={`nav__ul ${isOpen ? 'flex-col' : 'hidden'} xl:flex xl:flex-row xl:justify-between xl:p-3 lg:text-[18px] lg:text-md xl:text-lg`} id="nav">

          <div className="nav__image hidden xl:flex flex-row items-center justify-center md:text-[14px] lg:text-md xl:text-lg">
            <img src="./nav-img.webp" alt="Plant web logo" className="w-4 mr-2"/>
            <p>Green Evergarden</p>
          </div>

          <li className="p-6 pl-4 md:p-8"><a onClick={toggleMenu}  className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" href="#home">Home</a></li>
          <li className="p-6 pl-4 md:p-8"><a onClick={toggleMenu} className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" href="#about">About us</a></li>
          <li className="p-6 pl-4 md:p-8"><a onClick={toggleMenu} className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" href="#featured">Featured products</a></li>
          <li className="p-6 pl-4 md:p-8"><a onClick={toggleMenu} className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" href="#customers">Customers</a></li>
          <li className="p-6 pl-4 md:p-8"><a onClick={toggleMenu} className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" href="#subscription">Subscribe</a></li>
        </ul>     
    </nav>

    )
}

export default Header