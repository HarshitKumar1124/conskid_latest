import React from 'react'
import "./Why.scss";
import Grid from "@material-ui/core/Grid"
import Template from "./Template"
import Guidance_ContentList from "./Guidance_List";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css"


import SwiperCore, {
  Pagination, Navigation, EffectCoverflow,Autoplay
} from 'swiper';

SwiperCore.use([Pagination, Navigation,Autoplay]);


const Why = () => {
  return (
    <>
      <Grid container xs={12} id="Why_Container">

        <Grid xs={12} item id="Why_Heading" >Why choose us?</Grid>
        <Grid container item id="Template_container" >

          <Swiper

            // effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, EffectCoverflow, Navigation,Autoplay]}
            
            className="mySwiper"
          >

            {Guidance_ContentList.map((e) => {
              return <SwiperSlide style={{ padding: "0rem" }}>
                {/* , border: "2px solid yellow" */}
                <Template id={e.id} Logo={e.Logo} Heading={e.Heading} Content={e.Content} /></SwiperSlide>
            })

            }

          </Swiper>




        </Grid>
      </Grid>
    </>
  )
}

export default Why


// <SwiperSlide>
// {
//   Guidance_ContentList.map((e) => {
//     return <Template id={e.id} Logo={e.Logo} Heading={e.Heading} Content={e.Content} />
//   })
// }



// </SwiperSlide>