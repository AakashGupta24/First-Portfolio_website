import React from 'react';
import './services.css';
import {ImCheckmark} from 'react-icons/im'
const services = () => {
  return (
    <section id='services'>
      
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Designer</h3>
          </div>
          <ul className="service_list">
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
          </ul>
        </article>
        {/* end of designer  */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
          </ul>
        </article>
        {/* end of web development  */}
        <article className="service">
          <div className="service_head">
            <h3>Content Thinker</h3>
          </div>
          <ul className="service_list">
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
            <li>
              <ImCheckmark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!</p>
            </li>
          </ul>
        </article>
        {/* end of content  */}
      </div>
    </section>
  )
}

export default services