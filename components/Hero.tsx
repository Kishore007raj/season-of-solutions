"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import { Meteors } from "./ui/meteors";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words =
  "a month-long innovation challenge, designed to take participants through the journey of ideation to execution.";

const Hero = () => {
  return (
    <div
      id="home"
      className="animate-fadeIn h-screen mx-5 md:mx-10  flex flex-col justify-center pb-20 font-righteous text-transparent  "
    >
      <Image
        src="/hero-bg-star.svg"
        className="w-full object-cover absolute p-0 m-0 left-0 top-0"
        alt="/"
        width={1000}
        height={1000}
      />
      <Image
        src="/hero-bg-line.svg"
        className="w-full object-cover absolute p-0 m-0 left-0 md:top-0"
        alt="/"
        width={1000}
        height={1000}
      />
      <div className="absolute z-0 top-5 mx-auto ">
        <Meteors number={20} />
      </div>
      <div className="font-righteous md:mb-10 sm:8xl text-[3.7rem] md:text-[7rem]  lg:text-[7.9rem] text-wrap  md:leading-[150px] bg-clip-text bg-gradient-to-r from-[#FEFEFE] to-[#8B8B8B]">
        SEASON OF SOLUTIONS
      </div>
      <TextGenerateEffect words={words}></TextGenerateEffect>
      <div className="flex justify-center md:justify-end mt-10 md:mr-28 text-xl">
        <button
          onClick={() => (window.location.href = "/register")}
          className="p-[2px] absolute mr-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#e16f4c] to-[#2a829f] rounded-full" />
          <div className="px-8 py-4  bg-black rounded-[30px]  relative group transition duration-300 ease-in-out text-white hover:bg-transparent hover:text-[1.5rem]">
            Register now
            <MdArrowOutward className="absolute right-2 top-2  group-hover:animate-aurora" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
