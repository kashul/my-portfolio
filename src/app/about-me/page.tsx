import rootdata from "../../master-data/about-me.json";
import "../../app/css/aboutme.css";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <div className="container mx-auto px-2  py-20 w-full">
        <div className="flex flex-col md:flex-row h-full space-y-4">
          <div className="basis-1/2 self-center">
            <div className="text-6xl text-slate-50">Educations</div>

            <div className="text-2xl italic text-slate-200">
              {rootdata.educations.introduction}
            </div>
          </div>
          <div className="basis-1/2 w-full  self-center md:px-10">
            <div className="   flex flex-col  space-y-4">
              <div className="text-6xl text-slate-50 ">
                {rootdata.educations.range}
              </div>
              {rootdata.educations.roadmap.map((a, i) => {
                return (
                  <div key={"edu" + i} className="">
                    
                    <div className="text-xl text-slate-50">{a.achivement}</div>
                    <div className=" text-base text-slate-50 ">
                      {a.field} | {a.institute}
                    </div>
                    <div className=" text-sm text-slate-50 ">
                      {a.score} | {a.date}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {rootdata.experiance.length>0?<div className="container mx-auto py-10  my-10 w-full px-2">
        <div className="flex flex-col   space-y-8">
          
            <div className="text-6xl text-slate-50">Expireance</div>

          
          <div className="w-full   ">
            <div className="   grid grid-cols-1  md:grid-cols-3 gap-4 ">
              
              {rootdata.experiance.map((a, i) => {
                return (
                  <div key={"ex" + i} className="rounded-lg expireance-background p-[10px]">
                    
                    <div className="text-xl text-slate-50">{a.companyname}</div>
                    <div className=" text-base text-slate-50 ">
                      {a.role}
                    </div>
                    <div className=" text-base text-slate-50 ">
                      {a.tech}
                    </div>
                    <div className=" text-sm text-slate-50 ">
                      {a.duration} | {a.time}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>:""}
      {rootdata.certificates.length > 0? <div className="container mx-auto  py-10  ">
        <div className="flex flex-col   space-y-8">
          
            <div className="text-6xl text-slate-50 ">Certificates</div>

          
          <div className="w-full ">
            <div className="   grid grid-cols-1  md:grid-cols-3 gap-4 ">
              
              {rootdata.certificates.map((a:any, i) => {
                return (
                  <article className="flex  flex-col items-start mx-3  " key={"cert" + i}>
                         <div className="flex flex-col items-center justify-center  w-full">
                         <Image src={a.image} alt={""} width={300} height={100}/>
                          
                         </div>
                         <div className=" relative w-full flex flex-col   ">
                         <div className=" px-2  relative  w-full  ">
                         <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-100 hover:text-gray-600 line-clamp-2">
                               
                                
                                 {a.name}
                              
                             </h3>
                             <h4 className="mt-1 text-lg font-semibold leading-6 text-blue-600	  line-clamp-2">
                               
                              <a href={a.link} target="_blank" rel="noreferrer">More...</a>
                              
                            
                           </h4>
                            
                         </div>
                           
                          
                         </div>
                       </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>:""}
     
    </>
  );
}
