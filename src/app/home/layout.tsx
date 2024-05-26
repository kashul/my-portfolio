"use client";
import { Suspense } from "react";
import Loading from "../loading";
import {ErrorBoundary} from "@/components/errorboundry";
import HomeError from "./homeerror";




function reset(){
console.log("Attempting to recover by re-rendering the segment...");
}

export default function HomeLayout({
  children,activityRecent,projectRecent,recommendation
}: Readonly<{
  children: React.ReactNode;
  activityRecent: React.ReactNode;
  projectRecent: React.ReactNode;
  recommendation: React.ReactNode;
}>) {
  return (
    <ErrorBoundary
      fallback={<HomeError  reset={reset} error={new Error("An error occurred")}/>} 
     
    >
      <Suspense fallback={<Loading />}>
        {children}
        {activityRecent}
        {projectRecent}
        {recommendation}
     
      </Suspense>
    </ErrorBoundary>
  );
}
