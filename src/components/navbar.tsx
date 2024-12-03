
"use client";


import { Disclosure,  } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation';
import Image from "next/image";
import React from 'react';
import'../app/css/navbar.css'; 
import Link from 'next/link';


const navigation = [
  { name: 'Home', href: 'home',},
  { name: 'About Me', href: 'about-me' },
  { name: 'Projects', href: 'projects' },
 
  { name: 'Contact Me', href: 'contact-me' },
 
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  
  const url= process.env.NEXT_PUBLIC_URL;

  

  const [isScrolling, setIsScrolling] = React.useState(false);

  


  React.useEffect(() => {
    function handleScroll() {

      if (window.scrollY > 0) {
        setIsScrolling(true);
      
      } else {
        setIsScrolling(false);
      
      }
    }

    window.addEventListener("scroll", handleScroll);
   
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);






  const pathname = usePathname();

  return (
    <Disclosure id='navbar' as="nav" className="sticky  top-0  ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                <Image className='h-8 w-auto rounded-full' src={'/navbar/myimage.png'} alt={'Your Company'} width={1000} height={1000} />

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name}  href={url+"/"+item.href}  className={classNames(
                        pathname === ('/'+item.href) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}  aria-current={pathname === ('/'+item.href) ? 'page' : undefined}>{item.name}</Link>
                    
                    ))}
                  </div>
                </div>
              </div>
      
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={url+"/"+item.href}
                  className={classNames(
                    pathname === ('/'+item.href) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={pathname === ('/'+item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
