/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:items-center gap-[30px] min-h-screen container mx-auto">
      <div>
        <h4 className="text-sky-800 dark:text-body-color text-[22px] md:text-[25px] lg:text-[4xl] lg:leading-[1.5] font-bold mb-[1.5rem] xl:mb-[10px]">
          I am Morshed
        </h4>
        <h1 className="text-[35px] md:text-[38px] lg:text-[50px] xl:text-[6xl] 2xl:text-[65px] bg-gradient-to-r from-sky-800 to-sky-950 bg-clip-text xl:leading-[1.2] text-transparent mb-[15px] font-bold">
          Next-Level Web <br />
          Developer.
        </h1>
        <div className="flex md:hidden justify-center items-center my-[30px]">
          <Image
            src={"https://www.marketing-a2z.com/wp-content/uploads/2019/01/testimonial-1.jpg"}
            alt="banner image"
            className="rounded-[38px] border-2 border-sky-800 hover:border-sky-950 rotate-[4.29deg] hover:rotate-0 transition-all duration-300 max-w-[80%]"
            width={500}  // Add width and height for Next.js Image component optimization
            height={500}  // Add width and height for Next.js Image component optimization
          />
        </div>
        <p className="text-xl leading-[1.5] text-primary-color-light dark:text-body-color max-w-[540px]">
          My name is Morshed and a passionate backend engineer with a strong foundation in TypeScript, Node.js, and MongoDB. With expertise in building scalable applications, I'm currently working on projects like custom authentication systems, and e-commerce platforms. I enjoys solving complex challenges, writing functional code, and continuously improving his skills in system design and security.
        </p>
        {/* Action and social */}
        <div className="flex items-center gap-[30px] lg:gap-[25px] mt-5 flex-wrap lg:flex-nowrap md:mt-[30px] lg:mt-[50px]">
          <div className="flex">
            <a
              href="https://docs.google.com/document/d/1N8mkYC4Q1irUfjZsJRk56R1igiL0WR9LA2ZtdbogT98/export?format=pdf"
              className="text-[15px] font-medium text-sky-800 hover:text-body-color capitalize py-[17px] px-[35px] bg-transparent hover:bg-sky-800 rounded-full leading-[1] border border-sky-800 text-nowrap tracking-[1px] hover:text-white"
            >
              Download CV
              <FiDownload className="float-end ml-2 -mt-0.5 text-[17px]" />
            </a>
          </div>
          <div>
            <ul className="flex gap-x-5">
              <li>
                <a
                  href="https://www.facebook.com/themorshedctg"
                  target="_blank"
                  className="text-sky-800 hover:text-body-color border border-sky-800 w-[35px] h-[35px] rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-sky-800 hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full hover:text-white"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/themorshed/"
                  target="_blank"
                  className="text-sky-800 hover:text-body-color border border-sky-800 w-[35px] h-[35px] rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-sky-800 hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full hover:text-white"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/theMorshed"
                  target="_blank"
                  className="text-sky-800 hover:text-body-color border border-sky-800 w-[35px] h-[35px] rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-sky-800 hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full hover:text-white"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:justify-center md:items-center relative after:absolute after:bottom-0 after:left-0 after:w-[220px] after:h-[220px] after:blur-[150px] after:rounded-[50%] after:bg-gradient-circle after:-z-1 after:-mt-[5%] after:-mr-[5%]">
        <Image
          src={"https://www.marketing-a2z.com/wp-content/uploads/2019/01/testimonial-1.jpg"}
          alt="banner image"
          className="rounded-[38px] border-2 border-sky-800 hover:border-sky-950 rotate-[4.29deg] hover:rotate-0 transition-all duration-300"
          width={500}  // Add width and height for Next.js Image component optimization
          height={500}  // Add width and height for Next.js Image component optimization
        />
      </div>
    </div>
  );
};

export default Banner;
