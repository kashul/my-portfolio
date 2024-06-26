"use client";
import rootdataprojects from "@/master-date/projects.json";
import rootdatactivties from "@/master-date/activities.json";
import Project from "@/app/view/[viewtype]/[id]/project/project";
import Activity from "@/app/view/[viewtype]/[id]/activity/activity";
import "@/app/css/project.css";
import { useState } from 'react'
import { Dialog} from '@headlessui/react'


import { useRouter } from 'next/navigation'




export default function Page({
  params,
}: {
  params: { viewtype: string; id: string };
}) {
  const router = useRouter()
console.log("working")
const [open, setOpen] = useState(true)
  if (params.viewtype === "project") {
    const project = rootdataprojects.projects.find(
      (project) => project.id === params.id
    )|| {
      id: "0",
      name: "Loading...",
      imageURLs: [],
      technology: [],
      date: "0",
      shortdescription: "Loading...",
      descriptions: [],
    };

    return (
      <>
       <Dialog className="relative z-10 " open={open} onClose={setOpen}>
     
      
      <div className="relative   z-10 mx-auto md:py-10   w-screen md:w-11/12 h-dvh  ">
      <div className=" w-full h-full overflow-y-auto view-background rounded-lg ">
      <div className="flex  pt-10">
         
         <Project project={project}></Project> 
           
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
      </div>
      </div>
      
    </Dialog>
      
       
      </>
    );
  } else if (params.viewtype === "activity") {
    const activity = rootdatactivties.activities.find(
      (activity) => activity.id === params.id
    )|| {
      id: "0",
      name: "Loading...",
      imageURLs: [],
      technology: [],
      date: "0",
      shortdescription: "Loading...",
      descriptions: [],
    };

    return (
      <>
        <Activity activity={activity}></Activity>
      </>
    );
  }
}
