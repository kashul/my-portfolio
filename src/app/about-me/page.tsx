import rootdata from "../../master-date/about-me.json";

export default function Page() {
  return (
    <>
      <div className="container mx-auto   md:h-screen w-full">
        <div className="flex flex-col md:flex-row h-full space-y-4">
          <div className="basis-1/2 self-center">
            <div className="text-6xl text-slate-50">Educations</div>

            <div className="text-2xl italic text-slate-200">
              {rootdata.educations.introduction}
            </div>
          </div>
          <div className="basis-1/2 w-full  self-center ">
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
      <div className="container mx-auto   md:h-screen w-full">
        <div className="flex flex-col  h-full space-y-8">
          
            <div className="text-6xl text-slate-50">Expireance</div>

          
          <div className="w-full   ">
            <div className="   grid grid-cols-2  md:grid-cols-3 gap-4">
              
              {rootdata.experiance.map((a, i) => {
                return (
                  <div key={"ex" + i} className="">
                    
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
      </div>
    </>
  );
}
