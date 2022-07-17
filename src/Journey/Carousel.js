import React, { useState,useEffect } from 'react'
import "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css"
import "./Journey.css"
import SwiperCore, { Autoplay } from 'swiper';
import Card from "./Card"


import UserTestimonialList from './UserTestimonialList';


import { Swiper, SwiperSlide } from "swiper/react";


import  {
    Pagination, Navigation
} from 'swiper';




const Carousel = () => {

    const [slides,setslide] = useState(3);

    useEffect(() => {
        (window.innerWidth <=800)?setslide(1):setslide(3)
    })
    
    SwiperCore.use([Pagination, Navigation]);
    return (
        <>
          

            <Swiper  slidesPerView={slides} spaceBetween={-50} slidesPerGroup={(window.innerWidth <=800)?1:3} loop={true} loopFillGroupWithBlank={false} pagination={{
                "clickable": true
            }} navigation={true} modules={[ Pagination, Navigation]} className="mySwiper">

                {
                         
                  UserTestimonialList.map((element)=>{
                    return <SwiperSlide><Card Id={`Card${element.id}`} Content={element.Content} Company={element.Company} Name={element.Name} Institute={element.Institute} Image={element.Image}/></SwiperSlide>
                  })
                }

            
            </Swiper>

        </>
    )
}

export default Carousel
