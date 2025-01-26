import React, { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

    return (

        <div className="nav__container flex flex-col bg-emerald-700 text-amber-100 p-4 fixed w-full">
          
        <div className="nav__image flex flex-row justify-center md:text-xl">
          <img src="./public/nav-img.webp" className="w-4 mr-2"/>
          <p>Green Evergarden</p>
        </div>

           {/* <!-- Checkbox Hack --> */}

            <label className="md:hidden absolute text-xl " onClick={toggleMenu} id="menu-open">☰</label>

        <ul className={`nav__ul ${isOpen ? 'flex-col' : 'hidden'}  md:flex md:flex-row md:justify-between md:p-5 md:text-md lg:text-lg`} id="nav">
          <li className="p-4 pl-0 md:p-8"><a className="md:hover:underline decoration-amber-100" href="#home">Home</a></li>
          <li className="p-4 pl-0 md:p-8"><a className="md:hover:underline decoration-amber-100" href="#about">About us</a></li>
          <li className="p-4 pl-0 md:p-8"><a className="md:hover:underline decoration-amber-100" href="#">Featured products</a></li>
          <li className="p-4 pl-0 md:p-8"><a className="md:hover:underline decoration-amber-100" href="#">Customers</a></li>
          <li className="p-4 pl-0 md:p-8"><a className="md:hover:underline decoration-amber-100" href="#">Subscribe</a></li>
        </ul>     
    </div>

    )
}

export default Header