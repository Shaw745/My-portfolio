import React from "react";

import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

const AboutHero = () => {
  return (
    <div>
      <section className="layout text-white py-20" id="about">
        <div className="layout  mx-auto  flex flex-col md:flex-row items-start md:gap-45 gap-5">
          {/* Left Title */}
          <h2 className="text-5xl font-bold uppercase md:w-1/3">About Me</h2>

          {/* Right Content */}
          <div className="md:w-2/3 space-y-2  ">
            {/* Headline */}
            <h3 className="text-2xl md:text-3xl  text-[#FFFFFF] font-semibold leading-snug  w-[90%] mb-3">
              I am a passionate{" "}
              <span className="text-[#D3E97A] font-medium">
                Full-Stack Developer
              </span>{" "}
              with a strong academic background in{" "}
              <span className="font-medium">Environmental Biology</span> {""}
              Based in Nigeria
            </h3>

            {/* Paragraph */}
            <p className="text-[#C7C7C7] leading-relaxed  w-[85%]">
              I combine analytical problem-solving skills with creativity to
              design and build accessible, user-friendly, and visually engaging
              web applications. My transition from environmental sciences to
              software development reflects my adaptability, curiosity, and
              commitment to continuous learning. Whether it’s creating intuitive
              user interfaces or writing clean, efficient code, I enjoy turning
              ideas into functional digital solutions. Beyond coding, my
              background in biology has given me a strong sense of
              <span className="font-medium">
                {" "}
                research, attention to detail, and sustainability
              </span>{" "}
              values I also bring into technology projects. I aspire to
              contribute to projects that not only solve problems but also have
              a meaningful impact. Currently, I’m exploring Reactjs, Webflow and
              a bit of Designing. While I am not programming, I enjoy playing
              golf, photography and playing Valorant. Learning more to improve
              skill.
            </p>

            {/* Buttons & Socials */}
            <div className="flex items-center gap-5 mt-6">
              {/* Resume Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 md:gap-5 bg-[#D3E97A] text-black font-semibold px-2 md:px-3 py-2 md:py-4 rounded-full uppercase hover:bg-lime-300 transition text-[14px]"
              >
                Download Resume
                <BsFillCircleFill className="text-xs hidden md:block " />
                <div className="flex items-center  bg-black rounded-full md:hidden  p-4">
                  <FiDownload color="white" className="text-lg  " />
                </div>
              </a>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sikiru-godspower-228394381/"
                  className="bg-[#222222] p-3 rounded-full hover:bg-gray-700 transition"
                >
                  <FaLinkedinIn color="#D3E97A" />
                </a>
                <a
                  href="https://github.com/Shaw745"
                  className="bg-[#222222] p-3 rounded-full hover:bg-gray-700 transition"
                >
                  <IoLogoGithub color="#D3E97A" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
