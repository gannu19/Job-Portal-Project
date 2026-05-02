import React from "react";
import { assets } from "../assets/assets";

const Footer=()=>{
    return (
        <footer className="bg-gray-950 text-gray-300 mt-20">
            <div className="container px-4 2xl:px-20 mx-auto py-12">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <img className="h-9 mb-5 brightness-0 invert" src={assets.logo} alt="Job portal logo" />
                        <p className="text-sm leading-6 text-gray-400 max-w-xs">
                            Find trusted job opportunities, apply faster, and manage your career journey in one place.
                        </p>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="Facebook">
                                <img className="w-4 h-4" src={assets.facebook_icon} alt="" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="Twitter">
                                <img className="w-4 h-4" src={assets.twitter_icon} alt="" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="Instagram">
                                <img className="w-4 h-4" src={assets.instagram_icon} alt="" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a className="hover:text-white transition-colors" href="#">About us</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">For Job Seekers</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a className="hover:text-white transition-colors" href="#">Browse jobs</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Browse companies</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Saved jobs</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Career advice</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>bhukyaganapathi00@gmail.com</li>
                            <li>+91 91821 20722</li>
                            <li>Hyderabad, Telangana</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>Copyright 2026 Job Portal. All rights reserved.</p>
                    <div className="flex items-center gap-5">
                        <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
