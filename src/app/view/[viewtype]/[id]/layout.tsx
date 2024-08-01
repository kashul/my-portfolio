"use client";
import {  Suspense, useEffect, useState } from "react";

import { ErrorBoundary } from "@/components/errorboundry";






import ViewError from "./error";
import Loading from "@/app/loading";



function reset() {
  console.log("Attempting to recover by re-rendering the segment...");
}

export default function ViewLayout({
  children,

  modalview
}: Readonly<{
  children: React.ReactNode;

  modalview: React.ReactNode;
  
}>) {
 


  return (
    <ErrorBoundary
      fallback={
        <ViewError reset={reset} error={new Error("An error occurred")} />
      }
    >
      
      <Suspense fallback={<Loading />}>
   
      
        {children}
      
        {modalview}
    
       
      </Suspense>
    </ErrorBoundary>
  );
}