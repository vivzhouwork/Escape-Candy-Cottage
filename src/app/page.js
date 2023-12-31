'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navebar from "./Navebar";
import Image from "next/image";
import { gsap } from "gsap";
import React from "react";
import { useLayoutEffect, useRef } from "react";
export default function Home() {
  const ani = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".card", {opacity:1,duration:1});
      gsap.to(".fade", {opacity:1,duration:1});
      gsap.to(".pic", { y: -30,opacity:1, stagger: 0.1,duration:1},">");
    }, ani);

    return () => ctx.revert();
  }, []);
  return (
    
    <>
      <Navebar />
      <div className="w-screen lg:w-4/5 mx-auto h-screen p-5 " ref={ani}>
        <div className="card h-96 rounded-lg bg-[#FFDBB8] lg:flex" style={{opacity:0}}>
          <div className="w-3/6  flex justify-center items-center">
           
            <h1 className="fade" style={{opacity:0}}>Happy Fun Game</h1>
          </div>
          <div className="w-3/6  flex justify-center items-center">
            <Image width={160} height={20} src="/intro.png" className="pic mt-5" style={{opacity:0}}/>
            <Image width={160} height={20} src="/first.png" className="pic mt-5" style={{opacity:0}}/>
          </div>
        </div>
      </div>
    </>
  );
}
