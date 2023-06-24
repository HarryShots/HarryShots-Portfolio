import React from 'react'
import './contact.css'
import { TfiEmail } from 'react-icons/tfi'
import { FaFacebookMessenger } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lndlxeo', 'template_93lvr6f', form.current, 'IDlIA3dOiwKAYbNzu')
  
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bobgalaharrison8@gmail.com</h5>
            <a href="mailto:bobgalaharrison8@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
          <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Harrison Bobgala</h5>
            <a href="https://m.me/harryshots237" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
          <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+237 679 480 413</h5>
            <a href="https://wa.me/message/CK6QHV5DUBM3H1" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact