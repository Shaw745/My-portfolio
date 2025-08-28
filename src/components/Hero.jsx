import hero from "../assets/hero.jpg";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ArrowUpRight } from "lucide-react";



const Hero = () => {
  return (
    <div>
      <div className="layout  flex flex-col md:flex-row items-center justify-between px-5 py-12 md:py-20">
        {/* Left: Text */}
        <div className=" layout md:text-left text-[#FFFFFF]">
          <h2 className="text-2xl md:text-5xl   font-bold leading-tight mb-4">
            HI, I AM <br />
            <span className="text-white">GODSPOWER SIKIRU.</span>
          </h2>
          <p className="text-[#C7C7C7] mb-6 text-lg max-w-lg">
            A Nigerian based Full-Stack developer passionate about building
            accessible and user friendly websites.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 my-6">
            <AnchorLink
              href="#contact"
              style={{ fontFamily: "'Manrope', sans-serif" }}
              className="bg-[#D3E97A] font-[700] text-[12px] text-[#0A0A0A] md:text-[16px]  uppercase rounded-[100px] w-[163px] h-[48px] md:w-[187px] md:h-[54px] flex items-center justify-center pl-[18px] py-[20px] pr-[6px] gap-4 "
            >
              Contact Me <GoDotFill size={20} className="hidden md:block" />{" "}
              <div className="w-[40px] h-[40px] rounded-full bg-[#0A0A0A] flex items-center justify-center md:hidden">
                <ArrowUpRight color="white" />
              </div>
            </AnchorLink>
            <a
              to="https://www.linkedin.com/in/sikiru-godspower-228394381"
              target="_blank"
              className="bg-[#222222] rounded-full w-[48px] cursor-pointer h-[48px] md:w-[54px] md:h-[54px] flex justify-center items-center "
            >
              <FaLinkedinIn color="#D3E97A" size={20} />
            </a>
            <a
              to="https://github.com/Shaw745"
              target="_blank"
              className="bg-[#222222] rounded-full w-[48px] h-[48px] cursor-pointer md:w-[54px] md:h-[54px] flex justify-center items-center "
            >
              <IoLogoGithub color="#D3E97A" size={20} />
            </a>
                      
          </div>
        </div>

        {/* Right: Image */}
        <div className="mb-8 md:mb-0">
          <img
            src={hero}
            alt="lisa shaw hero"
            className="rounded-2xl max-w-sm md:max-w-md"
          />
        </div>
      </div>
      <hr className="border  border-[#484848] " />
    </div>
  );
};

export default Hero;
