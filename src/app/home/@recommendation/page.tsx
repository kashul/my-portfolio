"use client";
import recommendationdata from "../../../master-date/recommendation.json";

import "../../css/home.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";



export default function RecommendationRoute() {
    
  return  <div className=" container mx-auto  h-screen ">
  <div className="flex flex-col h-full ">
    <div className=" text-5xl  md:text-6xl text-slate-50  	w-full pt-5 h-1/6">Recomendations</div>
    <div className="zindex  h-5/6 flex items-center">
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={15}
        centeredSlides={true}
        grabCursor={true}
      
        className="mySwiper"
      >
        {recommendationdata.recommendations.map(
          (  recommendation: {
              name: string;
              role:string;
              imageURLs: string;
             company: string;
              shortdescription: string;
             
            },
            index
          ) => {
            return (
              <SwiperSlide key={"project" + index}>
                {" "}
                <article className="flex  flex-col items-center  mx-3  h-full   md:flex-row md:mx-10 md:py-10 ">
                  <div className=" items-center justify-center h-[40%] w-full rounded-t-[24px] md:h-full project-background  md:rounded-l-[24px] md:rounded-tr-[0px]">
                    <img
                      className=" h-full w-auto py-1 md:p-5 w-auto rounded-full"
                      src={recommendation.imageURLs}
                    />{" "}
                  </div>
                  <div className=" relative w-full flex  project-background h-[50%] rounded-b-[24px] md:h-full md:rounded-r-[24px] md:rounded-l-[0px] items-center">
                  
                   
                    <div className=" px-4 group relative  w-full md:flex-col text-center">
                   
                      <p className="mt-2 line-clamp-8 font-serif italic text-lg leading-6 text-gray-600">
                        {recommendation.shortdescription}
                      </p>
                      <p className="mt-2 line-clamp-5 text-sm leading-4 text-gray-600">
                        {recommendation.name}
                      </p>
                      <p className=" line-clamp-5 text-sm leading-4 text-gray-600">
                        {recommendation.role}
                      </p>
                      <p className=" line-clamp-5 text-sm leading-4 text-gray-600">
                        {recommendation.company}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  </div>
</div>
  }