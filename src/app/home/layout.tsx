"use client";
import {  Suspense, useEffect, useState } from "react";
import Loading from "../loading";
import { ErrorBoundary } from "@/components/errorboundry";
import HomeError from "./error";

import rootdata from "../../master-data/home-data.json";



import "../css/home.css";

function reset() {
  console.log("Attempting to recover by re-rendering the segment...");
}

export default function HomeLayout({
  children,
  activityRecent,
  projectRecent,
  recommendation,
}: Readonly<{
  children: React.ReactNode;
  activityRecent: React.ReactNode;
  projectRecent: React.ReactNode;
  recommendation: React.ReactNode;
}>) {
  const [rootJsonData, setRootJsonData] = useState(rootdata);

  useEffect(() => {
    // Simulating data fetch
    setRootJsonData(rootdata);
  }, []);
 

  return (
    <ErrorBoundary
      fallback={
        <HomeError reset={reset} error={new Error("An error occurred")} />
      }
    >
      
      <Suspense fallback={<Loading />}>
        {/* <img
          className="homeimage sticky"
          src={rootJsonData.backgroundImageURL}
        /> */}
        {children}
        {projectRecent}
        {activityRecent}
    
        {recommendation}
      </Suspense>
    </ErrorBoundary>
  );
}
