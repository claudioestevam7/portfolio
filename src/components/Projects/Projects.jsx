import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./projects.css";

import { Autoplay, Pagination, Navigation } from "swiper";

import Slide from "./Slide";

const Projects = () => {
  return (
    <section className="project section" id="project">
      <h2 className="section__title">Projetos</h2>
      <span className="section__subtitle">Meus trabalhos</span>

      <div className="projects__container container grid">
      <Swiper className='alter project__Swiper'
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}
        modules={[Pagination, Navigation]}
      >
          <SwiperSlide><Slide index={0}/></SwiperSlide>
          <SwiperSlide><Slide index={1}/></SwiperSlide>
          <SwiperSlide><Slide index={2}/></SwiperSlide>
          <SwiperSlide><Slide index={3}/></SwiperSlide>
          {/* <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>

      </div>

    </section >
  )
}

export default Projects