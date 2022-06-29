import React from 'react';
import './Contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import {FaFacebookMessenger} from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from 'emailjs-com' 
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6kxg7pe', 'template_ixk5abm', form.current, 'CWIK1Jnan2l1Q_RbK').then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
    

   e.target.reset()
  };
  return (
    <section id='Contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>aakashgupta@gamil.com</h5>
            <a href="mailto:aakashgupta@gamil.com" target="_blank">send a message</a>
          </article>
          <article className='contact_option'>
            <FaFacebookMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>hello</h5>
            <a href="https://m.me/" target="_blank">send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>aakashgupta@gamil.com</h5>
            <a href="https://api.whatsapp.com/send?phone=918291588471" target="_blank">WhatsApp Me</a>
          </article>
        </div>
        <form ref={form}  onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name="message" id="" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact