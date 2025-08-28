import React from 'react'
import hero from "../assets/hero.jpg";



const Capabilities = () => {
  return (
    <div>
      <section className=" layout bg-black text-white md:py-20 py-6">
        <div className="hidden md:flex justify-center mb-30">
          <img
            src={hero}
            alt="hero"
            className="mx-auto w-[980px] h-[700px] rounded-2xl"
          />
        </div>
        <div className=" mb-30 md:mb-0 flex justify-center md:hidden ">
          <img src={hero} alt="" 
          className='rounded-2xl' />
        </div>
        <div className="container  layout mx-auto flex flex-col md:flex-row gap-8 md:gap-80 px-6 md:px-2">
          {/* Left Heading */}
          <h2 className="text-4xl font-bold uppercase md:w-1/3">
            My capabilities
          </h2>

          {/* Right Experience List */}
          <div className="md:w-[40%] space-y-6">
            <p className="text-gray-300  mb-6 leading-relaxed">
              I am a passionate and adaptable web developer, constantly seeking
              opportunities to expand my skill set. I focus on creating clean,
              efficient, and accessible web solutions while staying up-to-date
              with modern development trends. My expertise spans both front-end
              development and UI/UX design, enabling me to deliver seamless
              digital experiences.
            </p>

            <div className="flex flex-wrap md:gap-6 gap-3">
              <span className="px-5 py-2 border border-gray-500 rounded-full text-sm">
                HTML
              </span>
              <span className="px-5 py-2 border border-gray-500 rounded-full text-sm">
                CSS
              </span>
              <span className="px-5 py-2 border border-gray-500 rounded-full text-sm">
                JAVASCRIPT
              </span>
              <span className="px-5 py-2 border border-gray-500 rounded-full text-sm">
                JQUERY
              </span>
              <span className="px-5 py-2 border border-gray-500 rounded-full text-sm">
                ACCESSIBILITY
              </span>
              <span className="px-5 py-2 border border-gray-500 rounded-full text-sm">
                FIGMA
              </span>
              <span className="px-5 py-2 border border-gray-500 rounded-full text-sm">
                TAILWIND CSS
              </span>
            </div>
          </div>
        </div>
        <hr className="border  border-[#484848] mt-15" />
      </section>
    </div>
  );
}

export default Capabilities