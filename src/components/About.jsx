import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

const About = () => {
  return (
    <div>
      <section className="bg-black text-white md:pb-50  " id="about">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Heading */}
          <div className="hidden md:block">
            <h1 className="md:text-6xl text-[#FFFFFF]  font-bold uppercase">
              About Me
            </h1>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 w-[95%]">
            <h3 className="text-2xl md:text-3xl  text-[#FFFFFF] font-semibold leading-snug  w-[90%]">
              I am a passionate{" "}
              <span className="text-[#D3E97A] font-medium">
                Front-End Developer
              </span>{" "}
              with a strong academic background in{" "}
              <span className="font-medium">Environmental Biology</span> {""}
              Based in Nigeria
            </h3>

            <p className="text-[#C7C7C7] leading-relaxed hidden md:block">
              I combine analytical problem-solving skills with creativity to
              design and build accessible, user-friendly, and visually engaging
              web applications. My transition from environmental sciences to
              software development reflects my adaptability, curiosity, and
              commitment to continuous learning. Whether it's creating intuitive
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
            <p className="text-[#C7C7C7] leading-relaxed md:hidden">
              I am a passionate{" "}
              <span className="text-[#D3E97A] font-medium">
                Front-End Developer
              </span>{" "}
              with a strong academic background in{" "}
              <span className="font-medium">Environmental Biology</span>. Based
              in Nigeria, I combine analytical problem-solving skills with
              creativity to design and build accessible, user-friendly, and
              visually engaging web applications.
            </p>
            <Link
              to="/about"
              className="text-[#D3E97A] font-medium border-b-2 border-[#D3E97A] uppercase text-sm hover:underline"
            >
              More about me
            </Link>
            <img
              src={hero}
              alt="avatar"
              className="md:hidden display:block mt-15 rounded-2xl"
            />
          </div>
        </div>
      </section>

      <hr className="border  border-[#484848] mt-15" />
    </div>
  );
};

export default About;
