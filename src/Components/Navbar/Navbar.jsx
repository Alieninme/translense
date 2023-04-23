import React from 'react'
import "./navbar.css"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaHandPointer } from "react-icons/fa";



export default function Navbar() {
  return (
    <header>
        <div className='socialIconBg'>
        <div className='socialIconCont'>
           <div className='socialIcons'>
             <a href="#/"><FaFacebookF/></a>
             <a href="#/"><FaLinkedinIn/></a>
             <a href="#/"><FaTwitter/></a>
             <a href="#/"><FaInstagram/></a>
           </div>
           <div className='socialRight'>
            <a href="#/"><FaHandPointer/></a>
            <p>Join the fight, Become a Volunteer</p>
           </div></div>
           </div>
        <div className='navConatiner'>
        <nav>
            <img src="./assests/logo1.png" alt="" />
            <div className='navLinks'>
                <a href="/">Home</a>
                <a href="/ourcause">Our Cause</a>
                <a href="">Contact Us</a>
                <a href="">Cases</a>
                <a href="">Our Benafactors</a>
            </div>
            <div className='buttonCont'>
                <img src="./assests/magGlass.png" alt="" />
                <button>Help us Fight</button>
            </div>
        </nav></div>
    </header>
  )
}
