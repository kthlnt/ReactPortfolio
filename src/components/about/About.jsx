import React from 'react'
import './about.css';
import ABOUTME from '../../assets/aboutme.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {MdFolderCopy} from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
              <img src={ABOUTME} alt="About me image"/>
          </div>
        </div>
        <div className="about__content">
          < div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>UA Fullstack Flex Bootcamp 10/22-5/23</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Coming Soon!</small>
            </article>
            <article className='about__card'>
              <MdFolderCopy className='about__icon'/>
              <h5>Projects</h5>
              <small>Two fullstack projects completed in bootcamp, many more to come both personal and professional.</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
            fugiat voluptatem iusto nobis earum aliquam! Ipsa numquam quam 
            sed impedit iure, dolorem, illum perspiciatis magnam distinctio 
            facere pariatur autem ipsum?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's get in touch!</a>
        </div>
      </div>
    </section>
  )
}

export default About