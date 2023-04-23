import React from 'react'
import "./ourCause.css"
import ProgBar from '../../Components/ProgBar/ProgBar';
import { FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";

export default function OurCause() {
  return (
    <div className='ourWrapper'>
      <div className='heroSections' style={{backgroundImage: `url(./assests/background2.jpeg)`}}>
      <div className='heroHeadings'>
            <h1><span>Who</span> We Are</h1>
            <h1 className='shift'><span>What</span> We Do</h1>
            </div>
        <div className='heroLines'></div>
        <div><p>HOME . OUR CAUSE</p></div>
      </div>
      <div className='ourStory'>
          <div className='osLeft'>
            <p className='osWho'>WHO WE ARE</p>
            <h1>Our Story</h1>
            <p className='osDesc'>Realizing the risk that environmental threats pose to humankind and the planet itself, we took this step to save ourselves and the planet. We reached our green goals by starting with a minimum number of volunteers, and now we are a massive family of volunteers. </p>
            <div className='osPoints'>
               <p>- Identifying all pertinent issues and factors of issues.</p>
               <p>- Facilitating meaningful public participation and review.</p>
               <p>- Choosing the EIA's appropriate time and space boundaries</p>
            </div>
          </div>
          <div>
            <img src="./assests/ourstory.png" alt="" />
          </div>
      </div>
      <div className='Sustain'>
            <img src="./assests/sustain.jpg" alt="" />
        <div className='sustainCont'>
            <img src="./assests/sustaindots.png" alt="" />
            <div className='sustainText'>
            <h4>HOW WE WORK</h4>
            <h1>Sustainability & Climate Change Concerns</h1>
            <p>Scoping identifies the issues that will be most important during the Environment Impact Assessment and eliminates those that will be of little concern.</p>
            <button>Get Started</button></div>
        </div>
      </div> 
      <div className='ourWonders'>
        <div className='owHeading'>
          <h4>OUR MISSION</h4>
          <h1>Our Green Wonders</h1>
          <img src="./assests/bottomline.png" alt="" />
        </div>
            <div className='owLinks'>
                <a href="#/">All</a>
                <a href="#/">Pollution</a>
                <a href="#/">Waste Disposal</a>
                <a href="#/">Population</a>
            </div>
        <div className='owCardCont'>
             <div className='owCard'>
                 <img src="./assests/ourmission1.jpeg" alt="" /><br />
                 <button>Donate</button>
                 <div className='owCardText'>
                    <h1>POLLUTION</h1>
                    <h4>Carbon Monoxide Released Indicates Massive Fossil Fuel Burning.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laboriosam aliquid excepturi quasi voluptatum nisi.</p>
                    <ProgBar/>
                 </div>
                
             </div>
             <div className='owCard'>
                 <img src="./assests/ourmission2.jpeg" alt="" /><br />
                 <button>Donate</button>
                 <div className='owCardText'>
                    <h1>DEFORESTATION</h1>
                    <h4>Burning stubble & farm residue contributes significantly to wildfires.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laboriosam aliquid excepturi quasi voluptatum nisi.</p>
                    <ProgBar/>
                 </div>
                
             </div>
             <div className='owCard'>
                 <img src="./assests/ourmission3.jpeg" alt="" /><br />
                 <button>Donate</button>
                 <div className='owCardText'>
                    <h1>POPULATION</h1>
                    <h4>How Harmful are Volatile Organic Compounds for Us?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laboriosam aliquid excepturi quasi voluptatum nisi.</p>
                    <ProgBar/>
                 </div>
                
             </div>
        </div>
      </div>
      <div className='getStarted'>
          <button className='gsBtn'>Get Started</button>
          <div className='gsHands'>
            <div className='gshandsText'>
                <h1>Meet our Helping Hands</h1>
                <p>They do not behave like waves, they do not behave like particles, they do not behave like clouds....</p>
                <div className='btnCont'><FaChevronCircleLeft/> <FaChevronCircleRight/></div>
            </div>
            <div className='gshandsList'>
                <div className='gsPeople'>
                    <img src="./assests/benafac6.png" alt="" />
                    <h4>Crystal Logan</h4>
                    <p>Project Management Specialist</p>
                </div>
                <div className='gsPeople'>
                    <img src="./assests/benafac2.png" alt="" />
                    <h4>Esther Howard</h4>
                    <p>Frontend Developer</p>
                </div>
                <div className='gsPeople'>
                    <img src="./assests/benafac3.png" alt="" />
                    <h4>Ted Horton</h4>
                    <p>Gaming Director</p>
                </div>
            </div>
          </div>
          <div className='gsFooter'>
        <h1>Interested? Let's get in touch!</h1>
        <p>What looked like a small patch of purple grass, above five feet <br/>square, was moving across the sand in their direction.</p>
        <button className='gsBtn'>Get Started</button>
      </div>
      </div>
      <div className='compFacts'>
        <div className='cfText'>
            <h1>Some Compulsive Facts</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum neque ligula elementum convallis cursus. Nunc dignissim mi pellentesque mattis posuere faucibus. </p>
        </div>
        <div className='cfList'>
            <div className='cfSingle'>
                <img src="./assests/facts1.png" alt="" />
                <h1>5,898</h1>
                <h4>Trees Planted</h4>
            </div>
            <div className='cfSingle'>
                <img src="./assests/facts2.png" alt="" />
                <h1>21+</h1>
                <h4>OUR PARTNERS</h4>
            </div>
            <div className='cfSingle'>
                <img src="./assests/facts3.png" alt="" />
                <h1>1994</h1>
                <h4>Changing Life Since</h4>
            </div>
            <div className='cfSingle'>
                <img src="./assests/facts4.png" alt="" />
                <h1>385</h1>
                <h4>VOLUNTEERS</h4>
            </div>
        </div>
      </div>
      <div className='SignUpForm'>
          <div className='FormDetails'>
             <h1>Interested? Let's get in touch!</h1>
             <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>
             <input type="email" name="" placeholder='Enter your email address' /><br />
             <button>Subscribe</button>
          </div>
          <img src="./assests/video.png" alt="" />
        </div>
    </div>
  )
}
