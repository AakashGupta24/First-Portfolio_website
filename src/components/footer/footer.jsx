import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs'
const footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'>Aakash</a>
    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#Contact'>Contact</a></li>
    </ul>
    <div className="footer_socials">
      <a href="https://facebook.com"><BsFacebook/>
        </a><a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
    </div>

<div className="footer_copyright">
  <small>&copy; Aakash Gupta</small>
</div>
   </footer>
  )
}

export default footer