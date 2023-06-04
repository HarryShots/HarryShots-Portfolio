import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/Avatar 1.jpg";
import AVTR2 from "../../assets/Avatar 2.jpg";
import AVTR3 from "../../assets/Avatar 3.jpg";
import AVTR4 from "../../assets/Avatar 4.png";

// import Swiper core and required modules
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const data = [
  {
    avatar: AVTR1,
    name: "Kessy Durky",
    review:
      "I was so happy with the photos that HarryShots took of my wedding. He captured the day perfectly and I will cherish him forever.",
  },
  {
    avatar: AVTR2,
    name: "Brenda",
    review:
      "HarryShots is a true artist. He has a great eye for composition and lighting, and he knows how to capture the beauty in every moment.",
  },
  {
    avatar: AVTR3,
    name: "Malando Tina",
    review:
      "I was very happy with the work that HarryShots did on my website. He was able to take my vision and turn it into a reality. The website is exactly what I wanted and it looks great. I would definitely recommend HarryShots to anyone who is looking for a web developer.",
  },
  {
    avatar: AVTR4,
    name: "Makoun Glory",
    review:
      "Harry was very easy to work with. He was always responsive to my feedback and he was always willing to make changes to the content until I was happy with the results.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
