import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#2A4D40] text-white py-12 px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-4xl font-bold mb-4 tracking-wide">KeenKeeper</h2>
                <p className="text-gray-300 text-sm md:text-base mb-8 max-w-3xl">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                
                <h3 className="text-lg mb-4">Social Links</h3>
                <div className="flex gap-4 mb-12">
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-[#2A4D40] flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <FaInstagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-[#2A4D40] flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <FaFacebookF className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-[#2A4D40] flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <FaXTwitter className="w-5 h-5" />
                    </a>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto border-t border-[#3A6052] pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#A0B3AC]">
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;