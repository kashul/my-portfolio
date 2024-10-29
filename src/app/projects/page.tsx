"use client";
import rootdataprojects from "../../master-date/projects.json";
import rootdatactivties from "../../master-date/activities.json";
import "../../app/css/project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import 'swiper/css/grid';
import { Grid } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
export default function Page() {

  const router = useRouter()
  return (
    <>  
     {rootdataprojects.projects.length>0?<div className="container mx-auto h-screen   md:h-screen w-full py-10 ">
    <div className="flex flex-col   space-y-8 h-full">
      
        <div className="text-6xl text-slate-50 h-[10%]">Projects</div>
       
      
      <div className="w-full   h-[90%]">
        
        <Swiper
              loop={true}
              slidesPerView={3}
              spaceBetween={30}
              grid={{
                rows: 2,
              }}
              grabCursor={true}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                "@0.75": {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                "@1.5": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@2.00": {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              modules={[Grid]}
           
              className="mySwiper"
            >
              {rootdataprojects.projects.map((project, i) => {
                  return (
                    
                    <SwiperSlide key={"pro" + i} >
                      <article className="flex  flex-col items-start mx-3  h-full" onClick={() => {
                   router.push(`/view/project/${project.id}`)
                 }}>
                        <div className="flex flex-col items-center justify-center h-[80%] w-full cursor-pointer ">
                        <Image src={project.imageURLs[0]} alt={""} width={1000} height={1000}/>
                         
                        </div>
                        <div className=" relative w-full flex flex-col  h-[20%] ">
                        <div className=" px-2 group relative  w-full  ">
                        <h3 className="mt-1 text-lg font-semibold leading-6 text-slate-100 group-hover:text-gray-600 line-clamp-2">
                              
                               
                                {project.name}
                             
                            </h3>
                           
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
  </div>:<></>}
  {rootdatactivties.activities.length>0?<div  className="container mx-auto h-screen   md:h-screen w-full py-10 ">
    <div className="flex flex-col   space-y-8 h-full">
      
        <div className="text-6xl text-slate-50 h-[10%]">Activities</div>
       
      
      <div className="w-full   h-[90%]">
        
        <Swiper
              loop={true}
              slidesPerView={3}
              spaceBetween={30}
              grid={{
                rows: 2,
              }}
              grabCursor={true}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                "@0.75": {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                "@1.5": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@2.00": {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              modules={[Grid]}
           
              className="mySwiper"
            >
              {rootdatactivties.activities.map((activity:any, i) => {
                  return (
                    
                    <SwiperSlide key={"act" + i} >
                      <article className="flex  flex-col items-start mx-3  h-full" onClick={() => {
                   router.push(`/view/activity/${activity.id}`)
                 }}>
                        <div className="flex flex-col items-center justify-center h-[80%] w-full">
                        <Image src={activity.imageURLs[0]} alt={""} width={1000} height={1000}/>
                         
                        </div>
                        <div className=" relative w-full flex flex-col  h-[20%] ">
                        <div className=" px-2 group relative  w-full  ">
                        <h3 className="mt-1 text-lg font-semibold leading-6 text-slate-100 group-hover:text-gray-600 line-clamp-2">
                              
                               
                                {activity.name}
                             
                            </h3>
                           
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
  </div>:<></>}
  
  </>
  );
}
