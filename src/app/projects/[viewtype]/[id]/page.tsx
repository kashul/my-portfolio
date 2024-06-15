"use client";
import rootdataprojects from "../../../../master-date/projects.json";
import rootdatactivties from "../../../../master-date/activities.json";
import Project from "./project/project";
import Activity from "./activity/activity";






export default function Page({
  params,
}: {
  params: { viewtype: string; id: string };
}) {
 

 
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
      <Project project={project}></Project>
       
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
