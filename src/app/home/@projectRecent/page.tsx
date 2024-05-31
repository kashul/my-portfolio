"use client";

import projectsdata from "../../../master-date/projects.json";
import { useState, useEffect } from "react";
import "../../css/home.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

export default function ProjectRoute() {
  const [projects, setRootJsonData] = useState(projectsdata);

  useEffect(() => {
    // Simulating data fetch
    setRootJsonData(projectsdata);
  }, []);

 

  const products: any[] | undefined = [];
  projects.projects.forEach((project) => {
    products.push(project);
  });

  return (
    <>
      <div className=" container mx-auto  h-screen ">
        <div className="flex flex-col h-full ">
          <div className="text-6xl text-slate-50 pt-5 h-1/6">Projects</div>
          <div className="zindex  h-5/6 flex items-center">
            <Swiper
              loop={true}
              slidesPerView={3}
              spaceBetween={30}
              grabCursor={true}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.5": {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                "@2.00": {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
              // modules={[

              //   Autoplay
              // ]}
              className="mySwiper"
            >
              {products.map(
                (
                  project: {
                    name: string;
                    imageURLs: string[];
                    technology: string[];
                    date: string;
                    shortdescription: string;
                    descriptions: string[];
                  },
                  index
                ) => {
                  return (
                    <SwiperSlide key={"project" + index}>
                      {" "}
                      <article className="flex  flex-col items-start mx-3  h-full">
                        <div className="flex flex-col items-center justify-center h-[30%] w-full">
                          <img
                            className=" h-full w-full rounded-t-[24px]"
                            src={project.imageURLs[0]}
                          />{" "}
                        </div>
                        <div className=" relative w-full flex flex-col project-background h-[60%] rounded-b-[24px]">
                        <div className=" px-2 group relative  w-full  ">
                        <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                              <a href="" className="line-clamp-2">
                               
                                {project.name}
                              </a>
                            </h3>
                            <time
                              dateTime={project.date}
                              className="text-xs text-gray-500  "
                            >
                              <p>{project.date}</p>
                            </time>
                        </div>
                          <div className="relative  flex flex-wrap items-center px-2 gap-x-4 text-xs  w-full ">
                            {project.technology.map((tech, i) => (
                              <div
                                key={"tech" + i}
                                className="relative z-10 rounded-full bg-gray-50 px-3 my-1 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                          <div className=" px-2 group relative  w-full  ">
                         
                            <p className="mt-2 line-clamp-5 text-sm leading-6 text-gray-600">
                              {project.shortdescription}
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
    </>
  );
}
