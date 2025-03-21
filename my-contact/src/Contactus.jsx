import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "./Contactus.css";
import hero from "./assets/contact_hero.png"
const Contactus = () => {
    return (
        <div className="contact">
            <div className="contact_hero">
           <img src={hero}></img>
           <h1>Let’s <span>Connect </span>& Collaborate</h1>
                <p>Partner with Us for Innovative Solutions</p>
           </div>
           <div className="getin">
              <p>GET IN TOUCH</p>
              </div>
              <div className="box1">
              <div className='box-icon'><FaMapMarkerAlt size={40} /></div>    
              <h3>Office Location</h3>
              <p>unit:307, 3rd floor, APNRT Tech Park, Mangalagiri, Atmakur Rural, Andhra Pradesh 522503</p>
              </div>
              <div className="box2">
              <div className='box-icon'><FaHeadphones  size={40} /></div> 
              <h3>Communication</h3>   
              <div className='box2-icons'><FaPhoneAlt size={20} /></div>
              <div className="box2-no"><p>8639620754</p></div>
              <div className='box2-icons'><IoMail size={25} /></div>
              <div className="box2-mail"><p>sanjittechsolutions@outlook.com</p></div>
              
              </div>
              <div className="form-section">
                   <h2>Contact Us</h2>
                   <p>We’re here to answer your questions, discuss your ideas, 
                   and help you bring your vision to life. Whether you’re looking for custom solutions, technical support, or just want to say hello – we’re just a message away</p>
              </div>
             
              <div className="contact-container">
      <h1>Let’s Build Something Great Together</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone no" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Type Your Message" />
        <button type="button">Submit</button>
      </form>
    </div>
             
        </div>

    )
}
export default Contactus;
