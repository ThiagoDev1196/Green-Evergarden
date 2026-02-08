import React from "react";

function Footer() {
    return(
        <div className="footer__container bg-emerald-700 text-amber-100 flex-col justify-center space-y-7 mt-10">

            <div className="footer__items flex flex-col md:flex-row md:justify-between md:items-start p-6 space-y-7">

            <ul className="f__about  space-y-1 md:px-8 lg:p-6">
                <h3 className="font-semibold">About us</h3>
                <li><a href="">Terms and conditions</a></li>
                <li><a href="">Privacy politics</a></li>
            </ul>

            <ul className="f__shop  space-y-1 md:px-8 lg:p-6">
                <h3 className="font-semibold">Shop</h3>
                <li><a href="">Online catalog</a></li>
                <li><a href="">Nearby shops</a></li>
            </ul>

            <ul className="f__community space-y-1 md:px-8 lg:p-6">
                <h3 className="font-semibold">Community</h3>
                <li><a href="">Blog</a></li>
                <li><a href="">Eco-friendly practices</a></li>
                <li><a href="">FAQ's</a></li>
                <li><a href="">Community's achievements</a></li>
            </ul>

            <ul className="f__contact  space-y-1 md:px-8 lg:p-6">
                <h3 className="font-semibold">Contact</h3>
                <li><a href="">✉️ greenevergardenshop@gmail.com</a></li>
                <li><a href="">📍 123 Greenway Avenue, Eco City, Earth 10010</a></li>
                <li><a href="">📞 +12 3456 7890</a></li>
                <li><a href=""><img className="w-6 invert-80" alt="instagram logo" src="./icons/instagram.png"/></a></li>
                <li><a href=""><img className="w-6 invert-80" alt="x logo" src="./icons/x.png"/></a></li>
            </ul>

            </div>

            <div className="bg-emerald-900 p-8 text-center md:text-lg">© 2025 Green Evergarden. Making sustainability possible. Images from Unsplash and Pexels.</div>

            
        </div>
    );
}

export default Footer            
