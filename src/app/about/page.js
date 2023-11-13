'use client'
import Navebar from "../Navebar";
import { gsap } from "gsap";
import React from "react";
import { useLayoutEffect, useRef } from "react";
export default function Page() {
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
        <div className="card h-96 rounded-lg bg-[#FFEAD7] lg:flex" style={{opacity:0}}>
          <div className="w-3/6  flex justify-center items-center">
           
            <h1 className="fade" style={{opacity:0}}>About</h1>
          </div>
          <div className="w-3/6  flex justify-center items-center">
           
          </div>
        </div>
      </div>
    </>
  );
}
