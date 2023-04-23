import React from 'react';
import "./home.css"
import ProgBar from '../../Components/ProgBar/ProgBar';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaChevronCircleLeft, FaChevronCircleRight, FaQuoteLeft } from "react-icons/fa";
import people from "./benefactors"
import data from "./reviews"

export default function Home() {
  return (
    <div className='homeWrapper'>
       <div className='heroSection' style={{backgroundImage: `url(./assests/background1.jpeg)`}}>
            <div className='heroHeading'>
            <h2>Help <span>Today</span> for</h2>
            <h1>Brighter <span>Tomorrow</span></h1>
            </div>
            <p>Leaders across the country are tackling the most challenging and pressing issues<br/> of our time. Earth Let us all join to deal with unprecedented threats to Earth's life.</p>
            <div className='heroBtns'>
              <button>Donate Now</button>
              <button>Contact Us</button>
            </div>
       </div>
       <div className='assistanceProg'>
        <h1>Our Continued Project<br/> Assistance Programs</h1>
        <div className='progListContainer'>
          <div className='progSingleList'>
            <img src="./assests/earth.png" alt="" />
            <h2>Reduce Global Warming</h2>
            <p>The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide.</p>
          </div>
          <div className='progSingleList'>
            <img src="./assests/hand.png" alt="" />
            <h2>Protecting Ecosystems</h2>
            <p>Higher temperatures are shortening the seasons and, in some places, have already exceeded safe levels for ecosystems and humans.</p>
          </div>
          <div className='progSingleList'>
            <img src="./assests/lightbulb.png" alt="" />
            <h2>Shift Towards Clean Energy</h2>
            <p>This energy transition has the potential to impact many aspects of life, including the environment, society, the economy, and governance.</p>
          </div>
          <div className='progSingleList'>
            <img src="./assests/home.png" alt="" />
            <h2>Safe Coastal Livelihoods</h2>
            <p>Sustainable aquaculture, e.g. grouper aquaculture, meets the high demand for reef fish while potentially preserving coastal communities' livelihoods.</p>
          </div>
          <div className='progSingleList'>
            <img src="./assests/mask.png" alt="" />
            <h2>Stop Toxic Chemical in Air</h2>
            <p>Solubility is differentiated by whether the substance is easily dissolved in organic solvents under normal environmental conditions of temperature & pressure.</p>
          </div>
          <div className='progSingleList'>
            <img src="./assests/toxic.png" alt="" />
            <h2>Stop Toxic Chemical in Air</h2>
            <p>Radioactive materials released into the environment can contaminate the air, water, surfaces, soil, plants, buildings, people & animals.</p>
          </div>
        </div>
       </div>
       <div className='circleProgBar'>
          <div className='singleCircleBar'>
              <img src="./assests/circle1.png" alt="" />
              <h2>5,898</h2>
              <p>Tress Planted</p>
          </div>
          <div className='singleCircleBar'>
              <img src="./assests/circle2.png" alt="" />
              <h2>1994</h2>
              <p>Changing Life Since</p>
          </div>
          <div className='singleCircleBar'>
              <img src="./assests/circle3.png" alt="" />
              <h2>21+</h2>
              <p>Our Partners</p>
          </div>
          <div className='singleCircleBar'>
              <img src="./assests/circle4.png" alt="" />
              <h2>385</h2>
              <p>Volunteers</p>
          </div>
       </div>
       <div className='pollCardContainer'>
          <div className='pollCard'>
            <img src="./assests/polcard1.jpeg" alt="" />
              <div className='cardInfo'>
                <h1>AIR POLLUTION</h1>
                <p className='vsisbilep'>What's currently happening in Air Pollution all around the world? AQI.</p>
                <div className='cardInfoHover'>
                <p>Collaborating with local partners to implement community-owned clean drinking water projects in remote communities.</p>
                <div className='donationProgBar'>
                <ProgBar/>
                </div>
                <button>Donate</button>
                </div>
              </div>
          </div>
          <div className='pollCard'>
            <img src="./assests/polcard2.jpeg" alt="" />
              <div className='cardInfo'>
                <h1>WATER POLLUTANT</h1>
                <p className='vsisbilep'>Think up spending hours every day looking for drinking water.</p>
                <div className='cardInfoHover'>
                <p>Collaborating with local partners to implement community-owned clean drinking water projects in remote communities.</p>
                <div className='donationProgBar'>
                 <ProgBar/>
                </div>
                <button>Donate</button>
                </div>
              </div>
          </div>
          <div className='pollCard'>
            <img src="./assests/polcard3.jpeg" alt="" />
              <div className='cardInfo'>
                <h1>MELTING ICEBERGS</h1>
                <p className='vsisbilep'>Negative mass balances due to retiring glaciers is causing them to disappear.</p>
                <div className='cardInfoHover'>
                <p>Collaborating with local partners to implement community-owned clean drinking water projects in remote communities.</p>
                <div className='donationProgBar'>
                <ProgBar/>
                </div>
                <button>Donate</button>
                </div>
              </div>
          </div>
       </div>
       <div className='takeAction'> 
          <img src="./assests/boating.jpg" alt="" />
          <div className='takeActionBox'>
             <h1>Take Action. Let’s Get In Touch</h1>
             <p>Given the limited resources, the issues we address, from hunger & clean drinking water to disease prevention and homelessness, can be taxing.</p>
             <button>Donate Now</button>
          </div>
       </div>
        <div className='Benefactors'>
           <div className='beneTitle'><h1>Our Benefactors</h1><img src="./assests/bottomline.png" alt="" /></div> 
           <div className='benefactorsCont'>
               {
                 people.map((item, index) =>(
                  <div className='benefactorSingle' key={index}>
                   <img src={item.image} alt="" />
                   <h1>{item.name}</h1>
                   <p>{item.pos}</p>
                   <div className='smIcons'>
                   <FaLinkedinIn/> <FaTwitter/> <FaInstagram/>
                   </div>
               </div>
                 ))
               }
           </div>
        </div>
        <div className='CaseStudy'>
          <div className='caseStudyHead'><h1>Case Study</h1><img src="./assests/bottomline.png" alt="" /></div>
          <div className='caseCont'>
            <img src="./assests/casestudy.jpeg" alt="" />
            <div className='caseText'>
              <h1>DISASTER MITIGATION</h1>
              <div className='buttonBox'><h2>Switching to Clean Energy & Preserving our Abode, Earth.</h2>
              <button>Donate</button>
              </div>
              <p className='casetextP'>Planning and zoning are examples of mitigation actions, as are floodplain protection, property acquisition and relocation, and public outreach projects. Installing disaster warning systems, purchasing radio communications equipment, and conducting emergency response training are examples of preparedness actions. Disaster mitigation is at the heart of emergency management.</p>
              <ProgBar />
            </div>
          </div>
          <div className='arrowConatiner'>
            <a href="#/"><FaChevronCircleLeft/></a>
              <a href="#/"><FaChevronCircleRight/></a>
            </div>
        </div>
        <div className='review'>
        <div className='reviewCont'>
        {
          data.map((item, index) => (
          <div className='singleReview' key={index}>
            <h1><FaQuoteLeft/></h1>
            <p>{item.p}</p>
            <div className='reviewPreson'>
              <img src={item.image} alt="" />
              <div className='nameHolder'>
                <h1>{item.name}</h1>
                <p>{item.pos}</p>
              </div>
            </div>
          </div>))}
        </div>
        <img src="./assests/slider.png" alt="" className='sliderImg' />
        </div>
        <div className='Comapnies'>
          <div className='ComapniesText'>
            <h1>The Environment is All We Have In Common</h1>
            <p>Turning the ship around takes a lot of willpower and ingenuity.</p>
          </div>
          <div className='CompaniesLogos'>
            <img src="./assests/logos.png" alt="" />
          </div>
        </div>
        <div className='SignUpForm'>
          <div className='FormDetails'>
             <h1>Sign Up For Environment News & Alerts</h1>
             <p>We are bringing worldwide concerns and solutions fresh to your emails. As opposed to what others do, we make our contributions timely.</p>
             <input type="email" name="" placeholder='Enter your email address' /><br />
             <button>Subscribe</button>
          </div>
          <img src="./assests/video.png" alt="" />
        </div>
    </div>
  )
}
