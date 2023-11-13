'use client'
import React from "react";
import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { gsap } from "gsap";



const Navebar = () => {
 
  const ani = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".logo", {x:20,opacity:1,duration:1});
      gsap.to(".title", { x: 10,opacity:1, stagger: 0.1,});
    }, ani);

    return () => ctx.revert();
  }, []);
 
  return (
    <nav ref={ani} className=" flex justify-between" >
      {/* <Image
        width={160}
        height={20}
        src="/logo2.png"
      /> */}
      <div className="logo" style={{opacity:0}}> <h1 className=" m-4 font-bold text-[#FF8970]">Escape Candy Cottage</h1></div>
     
      <ul className="flex text-sm">
        <li className="title m-4"style={{opacity:0}}>
          <Link href="/">Home</Link>
        </li>
        <li className="title m-4" style={{opacity:0}}>
          <Link href="/about">About</Link>
        </li>
       
        <li className="title m-4"style={{opacity:0}}>
          <Link href="/contact">Links</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navebar;
