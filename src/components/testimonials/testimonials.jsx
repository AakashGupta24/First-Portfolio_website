import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
  {key:"1",
    avatar:AVTR1,
    name:'Vaibhav Gupta',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti at illum fuga perspiciatis, quisquam in fugit, officiis maiores commodi similique nisi sed consectetur quasi error nostrum quis iusto! Dicta, aspernatur.'
  },
  {key:"2",
    avatar:AVTR1,
    name:'Vaibhav Gupta',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti at illum fuga perspiciatis, quisquam in fugit, officiis maiores commodi similique nisi sed consectetur quasi error nostrum quis iusto! Dicta, aspernatur.'
  },
  {key:"3",
    avatar:AVTR2,
    name:'Aakash Gupta',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti at illum fuga perspiciatis, quisquam in fugit, officiis maiores commodi similique nisi sed consectetur quasi error nostrum quis iusto! Dicta, aspernatur.'
  },
  {key:"4",
    avatar:AVTR3,
    name:'anand Gupta',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti at illum fuga perspiciatis, quisquam in fugit, officiis maiores commodi similique nisi sed consectetur quasi error nostrum quis iusto! Dicta, aspernatur.'
  },
  {key:"5",
    avatar:AVTR4,
    name:'Sanjana Gupta',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti at illum fuga perspiciatis, quisquam in fugit, officiis maiores commodi similique nisi sed consectetur quasi error nostrum quis iusto! Dicta, aspernatur.'
  },
]


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reveiew from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
     
    >
        {
          data.map(({avatar,name,review,key})=>{
            return(
              <SwiperSlide className='testimonials'>
          <div className="client_avatar" >
          key={key}
            <img src={avatar} alt="" />
          </div>
          <h5 className="client_nam">
              {name}
            </h5>
            <small className="client_review">{review}</small>
        </SwiperSlide>
            )
          })
        }
      
      </Swiper>
    </section>
  )
}

export default testimonials