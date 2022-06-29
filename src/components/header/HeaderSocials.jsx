import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs'
import {AiOutlineDribbble} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div>
        <div className="header_socials">
            <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank"><BsGithub/></a>
            <a href="https://dribble.com" target="_blank"><AiOutlineDribbble/></a>
        </div>
    </div>
  )
}

export default HeaderSocials