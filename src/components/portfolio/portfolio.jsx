import React from 'react'
import './portfolio.css';
import ME1 from '../../assets/portfolio1.jpg';
import ME2 from '../../assets/portfolio2.jpg';
import ME3 from '../../assets/portfolio3.jpg';
import ME4 from '../../assets/portfolio4.jpg';
import ME5 from '../../assets/portfolio5.png';
import ME6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id:1,
    iamge:ME1,
    title:'Portfolio website',
    github:'https://github.com',
    demo:'https://dribble.com'
    },
    {
      id:2,
      iamge:ME2,
      title:'Portfolio website',
      github:'https://github.com',
      demo:'https://dribble.com'
      },
      {
        id:3,
        iamge:ME3,
        title:'Crypto Transaction website',
        github:'https://github.com',
        demo:'https://dribble.com'
        },
        {
          id:4,
          iamge:ME4,
          title:'MERN stack website',
          github:'https://github.com',
          demo:'https://dribble.com'
          },
         
]

const portfolio = () => {
  return (
    <section id='portolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id,iamge,title,github,demo})=>{
            return (
            <article key={id} className='portfolio_item'>   
        <div className="portfolio_item-image">
          <img src={iamge} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className="portfolio_item-cta">
        <a href={github} className='btn' target='_blank'>Github</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
        </div>
        </article>
        )
          })
        }    
      </div>
    </section>
  )
}

export default portfolio