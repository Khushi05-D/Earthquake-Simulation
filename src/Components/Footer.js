import React from 'react'
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper" >
        <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        {/* <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div> */}
      </div>
      {/* <div>
      <h2   style={{ color: 'black' }}>For more questions</h2>
      <br></br>
      <a href="mailto:ritikaagarwal111222@gmail.com">our mail</a>
      </div> */}
      <div className="footer-section-two">
        
        <div className="footer-section-columns">
          <span>khushi.dadheech05@gmail.com</span>
          <span>deepika9017.saxena@gmail.com</span>
        <span>ritikaagarwal111222@gmail.com</span>
          <span>toralsharma2003@gmail.com</span>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
