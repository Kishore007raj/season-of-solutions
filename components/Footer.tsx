"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaDiscord,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  const sections = [
    { href: "/#home", name: "Home" },
    { href: "/#timeline", name: "Timeline" },
    { href: "/#showcase", name: "Showcase" },
    { href: "/#faq", name: "FAQ" },
    { href: "/register", name: "Register" },
  ];

  return (
    <footer className="bg-gradient-to-r from-black  opacity-100 text-white w-full px-2 sm:px-6 pb-4">
      <div className="relative">
        <Image
          src="/footer-bg.svg"
          className="lg:w-full rounded-xl md:w-2/4  h-full object-cover absolute p-0 m-0 left-0 top-0"
          alt="/"
          width={100}
          height={100}
        />

        <div className="container  absolute mx-auto inset-0 opacity-50 bg-blue-500 rounded-sm blur-[50px]"></div>
        <div className="bg-black  tracking-wider relative border-2 rounded-xl opacity-80 backdrop-blur-md p-5">
          <div className="font-impact  relative  flex  justify-center flex-wrap gap-3 lg:justify-between">
            <div className="py-5 opacity-100 my-auto text-start tracking-wide flex flex-col space-y-2 md:items-start ml-5">
              <h2 className="text-start text-2xl font-bold">SITE MAP</h2>
              <div className="text-start flex flex-col gap-3 tracking-wide">
                {sections.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center my-auto lg:ml-14 lg:mr-5">
              <h2 className="text-xl font-bold my-4 w-fit text-center">
                Join Our Community to Get Further Updates
              </h2>
              <div className="flex justify-center text-lg mb-12">
                <button
                  onClick={() =>
                    window.open(
                      "https://gdsc.community.dev/srm-institute-of-science-and-technology-ramapuram-chennai-india/",
                      "_blank"
                    )
                  }
                  className="p-[2px] absolute mr-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FD7E47] via-[#7DBFC5] to-[#41CDF6] rounded-full" />
                  <div className="px-7 py-3 bg-black rounded-[30px]  relative group transition duration-300 ease-in-out text-white hover:bg-transparent hover:text-[1.2rem]">
                    Join Dashboard
                    <MdArrowOutward className="absolute right-2 top-2  group-hover:animate-aurora" />
                  </div>
                </button>
              </div>
            </div>

            <div className="mx-auto lg:mx-0 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold mt-4">SOCIALS</h2>
              <div className=" flex flex-wrap md:justify-center space-x-4 mt-2 lg:flex-nowrap">
                <a href="https://www.instagram.com/gdscsrmrmp/">
                  <FaSquareInstagram color="#00b0e7" size={35} />
                </a>
                <a href="https://www.linkedin.com/company/dsc-srm-ramapuram/mycompany/">
                  <FaLinkedin color="#00b0e7" size={35} />
                </a>
                <a href="https://twitter.com/gdscsrmrmp">
                  <FaSquareXTwitter color="#00b0e7" size={35} />
                </a>
                <a href="https://www.youtube.com/@gdscsrmrmp">
                  <FaYoutube color="#00b0e7" size={35} />
                </a>
                <a href="https://discord.gg/vjvGNpcCgU">
                  <FaDiscord color="#00b0e7" size={35} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-5 mt-10 items-center justify-center md:flex-col">
            <Image src="/logo.svg" alt="Logo" width={300} height={300} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;