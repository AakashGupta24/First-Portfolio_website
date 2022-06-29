import React from 'react';
import './about.css';
import ME from '../../assets/me1.jpeg';
import {IoMedalSharp} from 'react-icons/io5';
import {FaUsers} from 'react-icons/fa';
import {IoFolderSharp} from 'react-icons/io5'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <IoMedalSharp className="about_icon"/>
              <h5>Experience</h5>
                 <small>Beginner</small>
            </article>
            <article className='about_card'>
              <FaUsers className="about_icon"/>
              <h5>Client</h5>
                 <small>OWN</small>
            </article>
            <article className='about_card'>
              <IoFolderSharp className="about_icon"/>
              <h5>Projects</h5>
                 <small>3+</small>
            </article>
          </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dolores amet. Dolor aliquid repellat tenetur illum, saepe animi cupiditate iusto illo dicta neque ea voluptate suscipit possimus voluptates odit placeat. Laudantium tempore laborum atque. Ad odio similique debitis iste repellendus voluptate sit reiciendis. Fuga consequatur facilis voluptates! Porro praesentium quam suscipit? Deleniti excepturi ipsa saepe.</p>
           <a href="#" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about