import { ArrowUpRight } from "lucide-react";
import work from "../assets/work.jpg";
import { IoLogoGithub } from "react-icons/io5";
import shortly from "../assets/shortly.jpg";
import trex from "../assets/trex.jpg";

const FeaturedProjects = () => {
  return (
    <section className=" layout text-white py-16 px-6 md:px-12" id="work">
      <div className=" layout max-w-6xl mx-auto md:w-1/2 w-full">
        {/* Section Header */}
        <div className="mb-12 md:w-1/2 w-full">
          <h2 className="md:text-6xl md:font-bold  text-4xl font-semibold">
            FEATURED PROJECTS
          </h2>
          <p className="text-[#C7C7C7] my-4 text-start w-[80%] font-medium">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>

        {/* Project Row */}
        <div className="flex flex-col gap-20">
          <div className="flex flex-col md:flex-row gap-15  items-center relative md:mt-2  -mt-18">
            {/* Left Side - Project Card */}
            <div className="md:bg-neutral-900 rounded-2xl py-20 px-8 md:shadow-lg  md:w-1/2 w-full">
              <span className=" absolute md:left-15 md:top-4 top-22 text-xs bg-[#0A0A0A] text-white px-3 py-1 rounded-full inline-block">
                Conceptual Work
              </span>
              <div className="  hidden md:block">
                <img
                  src={work}
                  alt="Adventure Time Project"
                  className="rounded-xl border border-gray-800"
                />
              </div>
              <div className=" flex justify-center items-center md:hidden">
                <img
                  src={work}
                  alt="Adventure Time Project"
                  className="w-[486px] h-[300px] rounded-2xl"
                />
              </div>
            </div>

            {/* Right Side - Project Info */}
            <div className="md:w-1/2 w-full">
              <h3 className="text-3xl font-semibold md:w-[90%]">
                BetaHouse – Real Estate Search Platform
              </h3>
              <p className="text-[#C7C7C7] mt-6 leading-relaxed">
                BetaHouse is a fully functional and responsive web app for
                property search. It features user authentication, real-time
                property filtering, and a clean, intuitive UI. Built with a
                focus on usability and performance, it showcases my ability to
                deliver both sleek front-end design and practical, user-focused
                functionality.
              </p>

              {/* Info Table */}
              <div className="flex justify-between  mt-6 py-2 ">
                <span className="text-[#FFFFFF] font-medium uppercase">
                  {" "}
                  Project info{" "}
                </span>
              </div>
              <div className=" border-t border-gray-700 py-2">
                <div className="flex justify-between text-[#FFFFFF7] py-2">
                  <span className="font-medium">Year</span>
                  <span className=" text-[#C7C7C7]">2025</span>
                </div>
                <div className="flex justify-between text-[#FFFFFF] py-2 border-t border-gray-700">
                  <span className="font-medium">Role</span>
                  <span className=" text-[#C7C7C7]">Front-end Developer</span>
                </div>
              </div>
              <div className=" border-t border-gray-700"></div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <div className=" border-b border-[#D3E97A] ">
                  <a
                    href="https://beta-house-frontend-beta.vercel.app/"
                    className="flex items-center uppercase  text-[#D3E97A]    rounded-lg font-medium hover:bg-lime-500 transition"
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                </div>
                <div className=" border-b border-[#D3E97A] ">
                  <a
                    href="https://github.com/Shaw745/Beta-house-Frontend-"
                    className="flex items-center   text-[#D3E97A]  gap-1.5   rounded-lg font-medium hover:bg-lime-500 transition uppercase"
                  >
                    See on GitHub <IoLogoGithub size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-15 items-center  md:mt-2  -mt-18">
            {/* Left Side - Project Card */}
            <div className="md:bg-neutral-900 rounded-2xl py-20 px-8 md:shadow-lg  md:w-1/2 w-full">
              <div className=" ">
                <img
                  src={shortly}
                  alt="Adventure Time Project"
                  className="rounded-xl border border-gray-800"
                />
              </div>
            </div>

            {/* Right Side - Project Info */}
            <div className="md:w-1/2 w-full">
              <h3 className="text-3xl font-semibold md:w-[90%]">
                Shortly – URL Shortener Landing Page
              </h3>
              <p className="text-[#C7C7C7] mt-6 leading-relaxed">
                This is a clean and responsive landing page I designed and built
                for Shortly, a web-based URL shortening tool. The page allows
                users to easily input and shorten long website links through a
                simple, intuitive interface. It also introduces the platform's
                key features, such as link tracking and brand recognition
                support, aimed at helping users manage and analyze their
                shortened URLs. With a modern design, clear call-to-actions, and
                a user-friendly layout, this project highlights my ability to
                create visually appealing and functional web interfaces.
              </p>

              {/* Info Table */}
              <div className="flex justify-between  mt-6 py-2 ">
                <span className="text-[#FFFFFF] font-medium uppercase">
                  {" "}
                  Project info{" "}
                </span>
              </div>
              <div className=" border-t border-gray-700 py-2">
                <div className="flex justify-between text-[#FFFFFF7] py-2">
                  <span className="font-medium">Year</span>
                  <span className=" text-[#C7C7C7]">2025</span>
                </div>
                <div className="flex justify-between text-[#FFFFFF] py-2 border-t border-gray-700">
                  <span className="font-medium">Role</span>
                  <span className=" text-[#C7C7C7]">Front-end Developer</span>
                </div>
              </div>
              <div className=" border-t border-gray-700"></div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <div className=" border-b border-[#D3E97A] ">
                  <a
                    href="https://shortly-rouge-nine.vercel.app/"
                    className="flex items-center uppercase  text-[#D3E97A]    rounded-lg font-medium hover:bg-lime-500 transition"
                  >
                    VIEW PROJECT <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-15 items-center relative md:mt-2  -mt-18">
            {/* Left Side - Project Card */}
            <div className="md:bg-neutral-900 rounded-2xl py-20 px-8 md:shadow-lg  md:w-1/2 w-full">
              <span className=" absolute md:left-20 md:top-17 top-22 text-xs bg-[#0A0A0A] text-white px-3 py-1 rounded-full inline-block">
                Conceptual Work
              </span>
              <div className=" pl-10 hidden md:block">
                <img
                  src={trex}
                  alt="trex"
                  className="rounded-xl border border-gray-800"
                />
              </div>
              <div className=" md:hidden">
                <img src={trex} alt="Adventure Time Project" />
              </div>
            </div>

            {/* Right Side - Project Info */}
            <div className="md:w-1/2 w-full">
              <h3 className="text-3xl font-semibold md:w-[90%]">
                Trex Cars – Car Rental Landing Page
              </h3>
              <p className="text-[#C7C7C7] mt-6 leading-relaxed">
                Trex Cars is a sleek and responsive landing page built for a
                modern car rental service. Designed with a strong e-commerce
                feel, this page introduces users to a stylish platform where
                they can explore vehicle options and easily get started with a
                rental. It features a bold hero section, clean navigation, and
                clear call-to-action elements that encourage user engagement.
                The layout and design mimic an online shopping experience,
                making it intuitive for users to browse, learn about services,
                and take action. This project highlights my ability to blend
                functional layout with visual appeal  ideal for businesses that
                want both impact and usability.
              </p>

              {/* Info Table */}
              <div className="flex justify-between  mt-6 py-2 ">
                <span className="text-[#FFFFFF] font-medium uppercase">
                  {" "}
                  Project info{" "}
                </span>
              </div>
              <div className=" border-t border-gray-700 py-2">
                <div className="flex justify-between text-[#FFFFFF7] py-2">
                  <span className="font-medium">Year</span>
                  <span className=" text-[#C7C7C7]">2025</span>
                </div>
                <div className="flex justify-between text-[#FFFFFF] py-2 border-t border-gray-700">
                  <span className="font-medium">Role</span>
                  <span className=" text-[#C7C7C7]">Front-end Developer</span>
                </div>
              </div>
              <div className=" border-t border-gray-700"></div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <div className=" border-b border-[#D3E97A] ">
                  <a
                    href="https://trex-eta.vercel.app/"
                    className="flex items-center uppercase  text-[#D3E97A]    rounded-lg font-medium hover:bg-lime-500 transition"
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                </div>
                <div className=" border-b border-[#D3E97A] ">
                  <a
                    href="https://github.com/Shaw745/trex"
                    className="flex items-center   text-[#D3E97A]  gap-1.5   rounded-lg font-medium hover:bg-lime-500 transition uppercase"
                  >
                    See on GitHub <IoLogoGithub size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border  border-[#484848] mt-15" />
    </section>
  );
};

export default FeaturedProjects;
