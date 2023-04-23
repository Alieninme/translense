import React from 'react'
import "./footer.css"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
        <div className='footerWrapper'>
            <div className='footerNav'>
               <h1>ENVIRONMENTAL</h1>
               <div className='footerLinks'>
                <a href="#/">Our Cause</a>
                <a href="#/">Contact Us</a>
                <a href="#/">Cases</a>
                <a href="#/">Our Benafactors</a>
               </div>
            </div>
            <div className='footerContact'>
               <div className='contactSM'>
               <a href="#/"><FaFacebookF/></a>
               <a href="#/"><FaLinkedinIn/></a>
               <a href="#/"><FaTwitter/></a>
               <a href="#/"><FaInstagram/></a>
               </div>
               <div className='contactForm'>
                <h4>Join our Cause, Become a Member</h4>
                <input type="text" placeholder='Enter your email address' />
                <button>JOIN</button>
               </div>
               <div className='contactAdd'>
                  <address>
                  4517 Washington Ave. Manchester, <br />
                  Kentucky 39495 <br />
                  (505) 555-0125, (406) 555-0120 <br />
                  binhan628@gmail.com <br />
                  manhhachkt08@gmail.com
                  </address>
               </div>
            </div>
            <div className='footerLine'></div>
            <div className='footerEnd'>
               <div><h4>All rights reserved Elysian Multipurpose Theme</h4></div>
               <div>
                <h4>Terms & Conditions</h4>
                <h4>Privacy & Cookies</h4>
               </div>
            </div>
        </div>
    </div>
  )
}
