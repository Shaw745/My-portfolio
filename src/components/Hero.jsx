import hero from "../assets/hero.jpg";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
const Hero = () => {
  return (
    <div>
      <div className="layout  flex flex-col md:flex-row items-center justify-between px-5 py-12 md:py-20">
        {/* Left: Text */}
        <div className=" layout md:text-left text-[#FFFFFF]">
          <h2 className="text-4xl md:text-5xl   font-bold leading-tight mb-4">
            HI, I AM <br />
            <span className="text-white">GODSPOWER SIKIRU.</span>
          </h2>
          <p className="text-[#C7C7C7] mb-6 text-lg max-w-lg">
            A Nigerian based front-end developer passionate about building
            accessible and user friendly websites.
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-4 mb-12">
            <button className="  ">
              <a
                href="#contact"
                className="bg-[#D3E97A] text-black px-6 flex items-center gap-3 py-3 rounded-full font-medium hover:bg-lime-300 transition"
              >
                Contact Me <GoDotFill className="inline-block" />
              </a>
            </button>
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
