import React from 'react'
import './testimonials.css';
import img1 from '../../assets/vaibhav.jpeg';
import img2 from '../../assets/vipul.jpeg';
import img3 from '../../assets/jaskaran.jpeg';
import img4 from '../../assets/abhishek.jpeg';
import img5 from '../../assets/shivam.jpeg';

import {  Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data= [
{
avatar: img1,
name: "Vaibhav, Software Engineer(Micron)",
review: 'Anant is always been a good person . He is always ready to help.anant is a great communicator. His work ethics is always admirable.anant handles work stress very well that is a very good thing about him.It was an honour being your friend , a person that does what he says, a man of his words and most importantly fully dedicated to his work. Anant is a vibrant, confident, spirited person , a person who always inspires me to do better and a person to who i can ways look up to. Anant is a smart and very quick learner in addition hard work of this man is on anothe level'
},
{
avatar: img2,
name: 'Vipul, Software Engineer(NPCI)',
review: 'Anant is a person, worth working with on any project. A great initiator who adores working on cultivating ideas and executing them. He is the one who carries responsibility for giving the best by addressing unapproachable ways. Whether it is personal or professional, he is always willing to support and encourage.'
},
{
avatar: img3,
name: 'Jaskaran, Project Engineer(Wipro)',
review: 'Modi alias animi dolorcm aliquam ca cum pcatac maiorcs, consectetur pracsentium quibusdam, commodi velit porro o blanditiis conscquatur qui molestiac. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
},
{
  avatar: img4,
name: 'Abhishek, System Engineer(TCS)',
review: 'I worked with Anant Singh Raghuwanshi on several Full stack Projects from Jan 2022 to April 2022. In that time, I observed that meeting someone as organised and calm as Anant was rare. He always knew exactly where every file and codes exists and what needed to be done. Nothing seemed to faze him, no matter how frantic the rest of the situation was. He was a sea of calm amongst the chaos, tackling each task with a smile.I particularly remember one time when we had an impossible error while setting up the server. During our discussion, Anant came up with a left-field suggestion that not only helped us to fix the problem but also helped us to complete an awesome project. He can definitely think outside the box!'
},
{
  avatar: img5,
name: 'Shivam, Project Engineer(Wipro)',
review: 'Excellent team worker and one of the main player of the team. He has great communication and writing skills. Good grasping power and always enthusiastic towards work. Working with him is always a smooth task. Anant has good understanding of frontend, backend tools and works according to the need of project.'
}
];

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>
        Review from Collegues
      </h5>
      <h2>
        Testimonials
      </h2>
      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}

      >
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src= {avatar} />
          </div>
          <h5 className="client__review">{name}</h5>
            <small className="collegue__review">{review}
            </small>
        </SwiperSlide>
            )

          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials
