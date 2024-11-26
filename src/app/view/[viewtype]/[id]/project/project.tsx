
import "@/app/css/project.css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, EffectFade, Thumbs } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Project({project}:{project: {
    id: string,
    name: string,
    link:string,
    imageURLs: string[];
    technology: string[];
    date: string;
    shortdescription: string;
    descriptions: string[];
  }}) {
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass|null>(null);
    const router = useRouter()
  return <> <div id="project"   className="container mx-auto px-2 mb-2 md:px-10">
  <div className="flex flex-col   space-y-4 ">
    <div className="text-6xl text-slate-50 ">{project?.name}</div>
    <div className="text-xl text-slate-50 ">{project?.date}</div>
    <div  className=" flex  flex-wrap "> {project?.technology.map((skill:string, i: number) => (
        <div
          key={"protech" + i}
          className=" bg-slate-500 text-2xl my-1 px-3 mr-3 rounded-full  "
        >
        
          <div className="text-slate-100  px-2" >{skill}</div>
          
        </div>
      ))}
      </div>

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
        {project?.imageURLs.map((imageURL: string, i: number) => {
                   return( <SwiperSlide key={"proimgbase" + i}>
                    <Image className="rounded" src={imageURL} alt={""} width={1000} height={1000}/>
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
        {project?.imageURLs.map((imageURL: string, i: number) => {
                   return( <SwiperSlide key={"proimgbottom" + i}>
                      <Image className="rounded" src={imageURL} alt={""} width={200} height={50}/>
                    </SwiperSlide>)
        })}
      </Swiper>
    </div>
    <div className=" ">
    <a href={project.link} className="no-underline hover:underline text-sky-400">{project.link}</a>
    
    </div>
    <div className=" ">
    {project?.descriptions.map((des:string, i: any) => (
        <p key={"prodes"+i} className="text-xl text-slate-50">
        
          {des}
          
        </p>
      ))}
    </div>
    
  </div>
  <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
           
           <button
             type="button"
             className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
             onClick={() => {
               router.back()
             }}
             data-autofocus
           >
             back
           </button>
         </div>
</div></>;
}
