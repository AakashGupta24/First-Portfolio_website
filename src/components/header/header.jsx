import React from 'react'
import './header.css'
import CTA from './CTA';
import ME from '../../assets/me2.jpeg';
import HeaderSocial from './HeaderSocials';

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'am</h5>
        <h1>Aakash Gupta</h1>
        <h5 className="text-light">full stack Developer</h5>
        <CTA/>
        <HeaderSocial/>
      <div className="me">
        <img src={ME} alt="ME" />
      </div>

<a href="#Contact" className='scroll_down'>scroll_down</a>




      </div>
    </header>

    )
}

export default header