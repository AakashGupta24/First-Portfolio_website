import React from 'react';
import './nav.css';
import {AiTwotoneHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BsFillBookmarksFill} from 'react-icons/bs'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {IoIosContact} from 'react-icons/io'
import { useState } from 'react';
const Nav = () => {
  const [activeNow, setActiveNow] = useState('#');
  return (
<nav>


    <a href="#" onClick={()=>setActiveNow('#')} className={ activeNow ==='#'?'active' :"" }><AiTwotoneHome/></a>
    <a href="#about" onClick={()=>setActiveNow('#about')} className={ activeNow ==='#about'?'active' :"" } ><BiUserCircle/></a>
    <a href="#experience" onClick={()=>setActiveNow('#experience')} className={ activeNow ==='#experience'?'active' :"" }><BsFillBookmarksFill/></a>
    <a href="#services" onClick={()=>setActiveNow('#services')} className={ activeNow ==='#services'?'active' :"" }><RiCustomerService2Fill/></a>
    <a href="#Contact" onClick={()=>setActiveNow('#Contact')} className={ activeNow ==='#Contact'?'active' :"" }><IoIosContact/></a>






</nav>
  

    )
}

export default Nav