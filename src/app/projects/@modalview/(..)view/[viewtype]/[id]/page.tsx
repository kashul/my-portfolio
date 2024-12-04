"use client";
import rootdataprojects from "@/master-data/projects.json";
import rootdatactivties from "@/master-data/activities.json";
import Project from "@/app/view/[viewtype]/[id]/project/project";
import Activity from "@/app/view/[viewtype]/[id]/activity/activity";
import "@/app/css/project.css";
import { useState } from 'react'
import { Dialog,DialogBackdrop} from '@headlessui/react'


import { useRouter } from 'next/navigation'
import { Modal } from "./modal";




export default function Page({
  params,children
}: {
  params: { viewtype: string; id: string };
  children: React.ReactNode;
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
     
       <Modal>
    
      
   
  
       
         <Project project={project}></Project> 
           
     
      
    </Modal>
      
       
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
       <Modal>
     
      
 
        
     <Activity activity={activity}></Activity>
          
      
     
   </Modal>
       
      </>
    );}else{return <></>}
  }


// return <Modal>{children}</Modal>;
}
