"use client";
import {  Suspense, useEffect, useState } from "react";
import Loading from "../loading";
import { ErrorBoundary } from "@/components/errorboundry";


import rootdata from "../../master-data/home-data.json";

import { useRouter } from 'next/navigation'

import "../css/home.css";
import ProjectError from "./error";
import Link from "next/link";

function reset() {
  console.log("Attempting to recover by re-rendering the segment...");
}

export default function ProjectLayout({
  children,

  modalview
}: Readonly<{
  children: React.ReactNode;

  modalview: React.ReactNode;
  
}>) {
  const [rootJsonData, setRootJsonData] = useState(rootdata);
  const router = useRouter()
  useEffect(() => {
    // Simulating data fetch
    setRootJsonData(rootdata);
  }, []);


  return (
    <ErrorBoundary
      fallback={
        <ProjectError reset={reset} error={new Error("An error occurred")} />
      }
    >
      
      <Suspense fallback={<Loading />}>
   
      
        {children}
      
        {modalview}
        <div id="modal-root" />
       
      </Suspense>
    </ErrorBoundary>
  );
}