"use client";
import rootdataprojects from "@/master-data/projects.json";
import rootdatactivties from "@/master-data/activities.json";
import Project from "@/app/view/[viewtype]/[id]/project/project";
import Activity from "@/app/view/[viewtype]/[id]/activity/activity";
import "@/app/css/project.css";
import { useState } from 'react'
import { Dialog,DialogBackdrop} from '@headlessui/react'


import { useRouter } from 'next/navigation'




export default function Page({
  params,
}: {
  params: { viewtype: string; id: string };
}) {
  const router = useRouter()

const [open, setOpen] = useState(true)
  if (params.viewtype === "project") {
    const project = rootdataprojects.projects.find(
      (project) => project.id === params.id
    )|| {
      id: "0",
      name: "Loading...",
      link: "",
      imageURLs: [],
      technology: [],
      date: "0",
      shortdescription: "Loading...",
      descriptions: [],
    };
if(project){
    return (
      <>
     
       <Dialog    className="top-20 z-10 px-2 " open={open} onClose={setOpen}>
       {/* <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      /> */}
      
   
      <div   className="relative max-w-full mx-auto md:py-10    w-screen md:w-11/12 h-dvh  ">
      <div   className=" w-full h-full overflow-y-auto view-background rounded-lg ">
      <div className="px-4 py-3 flex flex-row-reverse sm:px-6">
            
            <button
              type="button"
              className="mt-3   justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={() => {
                router.back()
              }}
              
            >
              X
            </button>
          </div>
      <div    className="">
       
         <Project project={project}></Project> 
           
         </div>
 
       
      </div>
      </div>
      
    </Dialog>
      
       
      </>
    );}else{return <></>}
  } else if (params.viewtype === "activity") {
    const activity = rootdatactivties.activities.find(
      (activity:any) => activity.id === params.id
    )|| {
      id: "0",
      name: "Loading...",
      imageURLs: [],
      technology: [],
      date: "0",
      shortdescription: "Loading...",
      descriptions: [],
    };
  if(activity){
    return (
      <>
       <Dialog className="relative z-10 " open={open} onClose={setOpen}>
     
      
     <div className="relative   z-10 mx-auto md:py-10   w-screen md:w-11/12 h-dvh  ">
     <div className=" w-full h-full overflow-y-auto view-background rounded-lg ">
     <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={() => {
                router.back()
              }}
              
            >
              X
            </button>
          </div>
     <div className="flex  pt-10">
        
     <Activity activity={activity}></Activity>
          
        </div>

    
     </div>
     </div>
     
   </Dialog>
       
      </>
    );}else{return <></>}
  }
}
