import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        < footer className="bg-gray-200 text-center lg:text-left" >
            <div className="footer__content text-gray-500 text-center p-4 bg-black">
                © 2023 Copyright:
                <a className="text-gray-600" href="https://tailwind-elements.com/"> DEV. Bahaa Eskif</a>
            </div>
        </footer >
    );
}

export default Footer;