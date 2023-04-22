import React from 'react'
import './footer.css';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Katherine</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/katherine-lantto-3b327a168/"><BsLinkedin /></a>
        <a href="https://github.com/kthlnt"><BsGithub/></a>
      </div>

      

      <div className="footer__copyright">
      <a href="#" className='scroll__up'>Scroll Up</a>
        <small>&copy; Katherine Lantto</small>
      </div>
    </footer>
  )
}

export default Footer