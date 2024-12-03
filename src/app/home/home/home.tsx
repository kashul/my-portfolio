import "../../css/home.css";
import rootdata from "../../../master-data/home-data.json";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto   md:h-screen w-full">
        <div className="flex flex-col  md:flex-row h-full m-5">
          <div className="basis-1/2  w-full h-full">
            <Image
              width={600}
              height={(1560 / 1200) * 600}
              src={rootdata.intro.imageURL}
              alt={""}
              
            />
          </div>
          <div className="basis-1/2 self-center">
            <div className="text-6xl text-slate-50">{rootdata.intro.name}</div>
            <div className="text-4xl text-slate-100	">{rootdata.intro.role}</div>
            <div className="text-2xl italic text-slate-200">
              {rootdata.intro.selfIntro}
            </div>
            <div className="py-5 ">
            <a href={rootdata.pdf_url} target="_blank">
              <button className="  text-2xl px-3  rounded-full self-center cvbutton">
                Download CV
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto   md:mb-10">
        <div className="flex  flex-row h-full">
         
          <div className="md:basis-2/3 flex flex-col self-center m-5">
            <div className="text-6xl text-slate-50 my-10">Skills</div>
            <div className="basis-1/2 flex  flex-wrap gap-10 self-center content-center">
              {rootdata.skills.values.map((skill, i) => (
                <div
                  key={"skill" + i}
                  className="flex  flex-row bg-cyan-300 text-2xl px-3 rounded-full self-center box"
                >
                  
                  <img className="h-10" src={skill.icon} />
                  <div className="text-slate-100 self-center px-2">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
