import { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

    return (

    <nav className="nav__container flex flex-col bg-emerald-700  text-amber-100 p-4 fixed  w-full z-30">
          
        <div className="nav__image flex flex-row justify-center md:text-xl">
          <img src="./nav-img.webp" alt="Plant web logo" className="w-4 mr-2"/>
          <p>Green Evergarden</p>
        </div>

           {/* <!-- Checkbox Hack --> */}

            <button className="md:hidden absolute text-xl " onClick={toggleMenu} id="menu-open" aria-label="Open navegation menu">☰</button>

        <ul className={`nav__ul ${isOpen ? 'flex-col' : 'hidden'}  md:flex md:flex-row md:justify-between md:p-5 md:text-[15.5px] lg:text-md xl:text-lg`} id="nav">
          <li className="p-4 pl-0 md:p-8"><a onClick={toggleMenu}  className="lg:hover:bg-emerald-900 lg:px-6 lg:py-2 lg:rounded-3xl" href="#home">Home</a></li>
          <li className="p-4 pl-0 md:p-8"><a onClick={toggleMenu} className="lg:hover:bg-emerald-900 lg:px-6 lg:py-2 lg:rounded-3xl" href="#about">About us</a></li>
          <li className="p-4 pl-0 md:p-8"><a onClick={toggleMenu} className="lg:hover:bg-emerald-900 lg:px-6 lg:py-2 lg:rounded-3xl" href="#featured">Featured products</a></li>
          <li className="p-4 pl-0 md:p-8"><a onClick={toggleMenu} className="lg:hover:bg-emerald-900 lg:px-6 lg:py-2 lg:rounded-3xl" href="#customers">Customers</a></li>
          <li className="p-4 pl-0 md:p-8"><a onClick={toggleMenu} className="lg:hover:bg-emerald-900 lg:px-6 lg:py-2 lg:rounded-3xl" href="#subscription">Subscribe</a></li>
        </ul>     
    </nav>

    )
}

export default Header