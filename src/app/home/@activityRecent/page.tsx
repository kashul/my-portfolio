
"use client";
import activitiesdata from "../../../master-data/activities.json";

import "../../css/home.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import { useRouter } from "next/navigation";
 


export default function ActivityRoute() {


  // const [activities, setActivityJsonData] = useState(activitiesdata);

  // useEffect(() => {
  
  //   setActivityJsonData(activitiesdata);
  // }, []);



  // const activities: any[] | undefined = [];
  // activities.activitis.forEach((activity) => {
  //   activities.push(activity);
  // });

  const router = useRouter()

  return  activitiesdata.activities.length>0?<div className=" container mx-auto  h-screen ">
  <div className="flex flex-col h-full m-2">
    <div className="text-6xl text-slate-50 pt-5 h-1/6">Activities</div>
    <div className="zindex  h-4/6 flex items-center">
      <Swiper
        centeredSlides={true}
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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[

          Autoplay
        ]}
        className="mySwiper"
      >
        {activitiesdata.activities.map(
          (  avtivity: {
              id: string;
              name: string;
              imageURLs: string[];
              date: string;
              shortdescription: string;
              descriptions: string[];
            },
            index
          ) => {
            return (
              <SwiperSlide key={"activity" + index}>
                {" "}
                <article className="flex max-w-xl flex-col items-start mx-3  h-full cursor-pointer" onClick={() => {
                   router.push(`/view/activity/${avtivity.id+"#body"}`,{scroll:true})
                 }}>
                  <div className="flex flex-col items-center justify-center h-[30%] w-full">
                    <img
                      className=" h-full w-full rounded-t-[24px]"
                      src={avtivity.imageURLs[0]}
                    />{" "}
                  </div>
                  <div className=" relative w-full flex flex-col project-background min-h-[45%] max-h-[60%] rounded-b-[24px]">
                  <div className=" px-2 group relative  w-full  ">
                  <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <div className="line-clamp-2">
                         
                          {avtivity.name}
                        </div>
                      </h3>
                      <time
                        dateTime={avtivity.date}
                        className="text-xs text-gray-500  "
                      >
                        <p>{avtivity.date}</p>
                      </time>
                  </div>
                   
                    <div className=" px-2 group relative  w-full  ">
                   
                      <p className="mt-2 line-clamp-5 text-lg leading-6 text-gray-600">
                        {avtivity.shortdescription}
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
</div>:""
}