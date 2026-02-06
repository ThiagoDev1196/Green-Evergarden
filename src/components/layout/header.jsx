import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

    return (

    <nav className="nav__container flex flex-col bg-emerald-700  text-amber-100  fixed  w-full z-30">

          <div className="nav__image flex flex-row items-center justify-center text-[18px] lg:text-[20px] p-6 xl:hidden">
          <img src="./nav-img.webp" alt="Plant web logo" className="w-4 mr-2"/>
          <p>Green Evergarden</p>
          </div>


            <button className="xl:hidden absolute text-xl p-6" onClick={toggleMenu} id="menu-open" aria-label="Open navegation menu">☰</button>

        <ul className={`nav__ul ${isOpen ? 'flex-col' : 'hidden'} xl:flex xl:flex-row xl:justify-between xl:p-3 lg:text-[18px] lg:text-md xl:text-lg`} id="nav">

          <div className="nav__image hidden xl:flex flex-row items-center justify-center md:text-[14px] lg:text-md xl:text-lg">
            <img src="./nav-img.webp" alt="Plant web logo" className="w-4 mr-2"/>
            <p>Green Evergarden</p>
          </div>

          <li className="p-6 pl-4 md:p-6"><NavHashLink onClick={toggleMenu}  className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" to="/#home">Home</NavHashLink></li>
          <li className="p-6 pl-4 md:p-6"><NavHashLink onClick={toggleMenu} className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" to="/#about">About us</NavHashLink></li>
          <li className="p-6 pl-4 md:p-6"><NavHashLink onClick={toggleMenu} className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" to="/#featured">Featured products</NavHashLink></li>
          <li className="p-6 pl-4 md:p-6"><NavHashLink onClick={toggleMenu} className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" to="/#customers">Customers</NavHashLink></li>
          <li className="p-6 pl-4 md:p-6"><NavHashLink onClick={toggleMenu} className="lg:hover:text-white lg:px-6 lg:py-2 lg:rounded-3xl" to="/#subscription">Subscribe</NavHashLink></li>
        </ul>     
    </nav>

    )
}

export default Header