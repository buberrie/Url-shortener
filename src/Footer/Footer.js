import React from 'react'
import './style/footer.css'
import instagram from '../images/icon-instagram.svg'
import facebook from '../images/icon-facebook.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'

const Footer = (props) => {
  return (
    <footer>
        <div className="footer-logo">
          <img src={props.img} alt="" />
        </div>
        <div className="div">
          <p className='heading'>Features</p>
          <a href='#link-shortening' target='_blank'>Link Shortening</a>
          <a href='#branded-links' target='_blank'>Branded Links</a>
          <a href='#analytics' target='_blank'>Analytics</a>
        </div>
        <div className="div">
          <p className='heading'>Resources</p>
          <a href='#blog' target='_blank' >Blog</a>
          <a href='#developers' target='_blank'>Developers</a>
          <a href='#support' target='_blank'>Support</a>        </div>
        <div className="div">
          <p className='heading'>Company</p>
          <a href='#about' target='_blank'>About</a>
          <a href='#our-teams' target='_blank'>Our Team</a>
          <a href='#careers' target='_blank'>Careers</a>
          <a href='#contact'>Contact</a>
        </div>
        <div id='contact' className="socials">
          <a href="www.facebook.com" target='_blank'><img src={facebook} alt="" /></a>
          <a href="www.twitter.com" target='_blank'><img src={twitter} alt="" /></a>
          <a href="www.pintrest.com" target='_blank'><img src={pinterest} alt="" /></a>
          <a href="www.instagram.com" target='_blank'><img src={instagram} alt="" /></a>
        </div>
    </footer>
  )
}

export default Footer