
import "@/app/css/project.css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, EffectFade, Thumbs } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import Image from "next/image";
export default function Activity({activity}:{activity: {
  id: string;
  name: string;
  imageURLs: string[];
  date: string;
  shortdescription: string;
  descriptions: string[];
}}) {

    const [swiperInstance, setSwiperInstance] = useState<SwiperClass|null>(null);
  return <>
   <div className="container mx-auto  ">
          <div className="flex flex-col   space-y-4 ">
            <div className="text-6xl text-slate-50 ">{activity?.name}</div>
            <div className="text-xl text-slate-50 ">{activity?.date}</div>
          

            <div className="w-full h-[400px] md:h-screen md:p-10 ">
              <Swiper
                style={
                  {
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  } as React.CSSProperties
                }
                spaceBetween={10}
                effect={'fade'}
                thumbs={{ swiper: swiperInstance }}
                modules={[FreeMode,EffectFade, Thumbs]}
                grabCursor={true}
                className="mySwiper2"
              >
                {activity?.imageURLs.map((imageURL, i) => {
                           return( <SwiperSlide key={"proimgbase" + i}>
                            <Image src={imageURL} alt={""} width={1000} height={1000}/>
                            {/* <img src={imageURL} /> */}
                            </SwiperSlide>)
                })}
               
               
              </Swiper>
              <Swiper
                // onSwiper={(swiper) => console.log('swiper')}
                onClick={(swiper,event) =>{setSwiperInstance(swiper)}}
                spaceBetween={10}
                centeredSlides={true}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                grabCursor={true}
                className="mySwiper1"
              >
                {activity?.imageURLs.map((imageURL, i) => {
                           return( <SwiperSlide key={"proimgbottom" + i}>
                              <Image src={imageURL} alt={""} width={1000} height={1000}/>
                            </SwiperSlide>)
                })}
              </Swiper>
            </div>
            <div className=" ">
            {activity?.descriptions.map((des, i) => (
                <p key={"actdec"+i} className="text-xl text-slate-50">
                
                  {des}
                  
                </p>
              ))}
            </div>
          </div>
        </div></>;
}
