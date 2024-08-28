import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ml-14">
          <div>
            <h4 className="font-bold text-lg mb-4">Abstract</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Branches</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Release Notes</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Community</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Twitter</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">LinkedIn</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Facebook</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Dribbble</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Podcast</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Legal</a></li>
            </ul>
            <h4 className="font-bold text-lg mt-4">Contact Us</h4>
            <p className="mt-2">info@abstract.com</p>
          </div>
        </div>
        
        {/* Footer Bottom Section */}
        <div className="mt-8 pt-6">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            {/* Image Icon */}
            <div>
              <img src={logo} alt="Footer Icon" className="h-8 w-8"/>
            </div>
            {/* Copyright Text */}
            <div className="text-sm text-gray-400">
              <p>&copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
