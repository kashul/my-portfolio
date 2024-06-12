import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ToTop } from "@/components/to-top";

import rootdata from "../master-date/home-data.json";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My PortFolio web",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const [rootJsonData, setRootJsonData] = useState(rootdata);
  // useEffect(() => {
  //   // Simulating data fetch
  //   setRootJsonData(rootdata);
  // }, []);
  return (
    <html lang="en" >
      <body id="body" className={inter.className}>
      <img
          className="homeimage sticky"
          src={rootdata.backgroundImageURL}
        />
        <Navbar />
        {/* we can us ith other layout to partily loading */}

      
        {/* loading component cant be added to any the layout component  */}
        {/* <Suspense fallback={<Loading/>}>{children}</Suspense>*/}

      {children}


        <ToTop />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
