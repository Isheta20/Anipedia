import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='py-10 bg-gray-900 text-slate-300 mx-auto px-6 border-t border-accent'>
        <div id="footerBox" className='grid grid-cols-4'>
            <div className='pl-4'>
              <Link to={`/`} className=" text-xl text-secondary font-semibold">Anipedia</Link>
              <div id="copyright" className='font-light text-xs py-2'>© 2024 All rights Reserved by Anipedia</div>
            </div>
            
            <div className="linksfooter flex flex-col items-center gap-2">
                <div className='flex flex-col gap-2'>
                  
                  <Link to={`/`}>Anipedia - Home</Link>
                  <Link to="#">About Us</Link>
                  <Link to="#">Contact</Link>
                </div>
                
            </div>
            <div className="linksfooter flex flex-col items-center">
                <div className='flex flex-col gap-2'>
                  
                  <Link to="#">Privace Policy</Link>
                  <Link to="#">Terms of Use</Link>
                  <Link to="#">Help</Link>
                </div>
            </div>
            <div className="socials flex gap-2 justify-center">
                <Link to="#"><FaFacebookSquare size={42}/></Link>
                <Link to="#"><FaSquareInstagram size={42}/></Link>
                <Link to="#"><FaSquareXTwitter size={42}/></Link> 
            </div>
        </div>
    </footer>
  )
}

export default Footer

