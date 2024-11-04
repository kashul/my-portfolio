import "@/css/footer.css"
import socialdata from "@/master-data/social.json"

const navigation = [
    { name: 'Home', href: 'home',},
    { name: 'About Me', href: 'about-me' },
    { name: 'Projects', href: 'projects' },
   
    { name: 'Contact Me', href: 'contact-me' },
   
  ]
export default function Footer() {
  return (
    <footer className="bg-slate-600  ">
      <div className="container mx-auto p-4">
        <div className="flex flex-col justify-center">
            <div className="flex flex-wrap justify-center space-y-4">
            <div className="w-full flex flex-col    md:w-1/2 xl:w-1/3 md:px-4 space-y-4">
            <div className="w-full flex flex-row items-center justify-center  px-4 space-x-4">
            {socialdata.socials.map((social, i) => {

return  <a key={"soci"+i}  href={social.link}>  <img className="h-10" src={social.iconUrl}  /></a>
})}
            </div>
         <div className="w-full flex flex-row "><img className="h-5 pr-2" src="/others/mobile-phone.png"  /> {socialdata.mobile}</div>
         <div className="w-full flex flex-row "><img className="h-5 pr-2" src="/others/email.png" /> {socialdata.email} </div>
          
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <h5 className="uppercase font-bold mb-2">Quick Links</h5>
            <div className="flex flex-col justify-center">
            <a href="/home" className="hover:text-gray-900">
                Home
              </a>
              <a href="/about-me" className="hover:text-gray-900">
              About Me
              </a>
              <a href="/projects" className="hover:text-gray-900">
              Projects
              </a>
              <a href="/contact-me" className="hover:text-gray-900">
              Contact Me
              </a>
            </div>
           
          </div>
            </div>
          
            <div className="w-full border mt-5 border-gray-950"></div>
            <div className="self-center	">@ 2024 Kashul All rights reserved.</div>
        </div>
        
      </div>
      
    </footer>
  );
}
