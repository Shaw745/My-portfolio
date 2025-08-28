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
          <div className=" w-[95%]">
            <h3 className="text-2xl md:text-3xl  text-[#FFFFFF] font-semibold leading-snug hidden md:block  md:w-[550px] mb-4">
              I am a passionate{" "}
              <span className="text-[#D3E97A] font-medium">
                Full-Stack Developer
              </span>{" "}
              with a strong academic background in{" "}
              <span className="font-medium">Environmental Biology</span> {""}
              Based in Nigeria
            </h3>

            <p className="text-[#C7C7C7] leading-relaxed w-[550px] mb-12  hidden md:block">
              I’m a creative and analytical full-stack developer with a
              background in environmental sciences, now channeling my curiosity
              and adaptability into building accessible, visually engaging web
              applications. My experience in biology instilled a strong
              foundation in research, attention to detail, and
              sustainability values I bring into every tech project. I enjoy
              crafting intuitive user interfaces and writing clean, efficient
              code that transforms ideas into impactful digital solutions.
              Currently, I’m exploring React.js, Webflow, and design. Outside of
              coding, I unwind with golf, photography, and Valorant, always
              learning to sharpen my skills.
            </p>
            <p className="text-[#C7C7C7] mb-4 leading-relaxed md:hidden">
              I am a passionate{" "}
              <span className="text-[#D3E97A] font-medium">
                Full-Stack Developer
              </span>{" "}
              with a strong academic background in{" "}
              <span className="font-medium">Environmental Biology</span>. Based
              in Nigeria, I combine analytical problem solving skills with
              creativity to design and build accessible, usFull-Stackly, and
              visually engaging web applications.
            </p>
            <Link
              to="/about"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#D3E97A] font-medium border-b-2 border-[#D3E97A] uppercase  text-sm hover:underline"
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
