import React from "react";

const Experience = () => {
  return (
    <div id="work">
      <div className="layout py-20">
        <div className=" layout flex flex-col md:flex-row items-start md:justify-between gap-2">
          <h1 className="uppercase  font-[400] md:text-[50px] text-[35px] mb-4 leading-[90%] tracking-[0%] text-[#FFFFFF] ">
            My Experience
          </h1>
          <div className="flex flex-col gap-8 md:w-[500px] w-[343px] ">
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-[#ffffff] text-[18px] md:text-[24px] font-medium">
                  Freelance Developer
                </h3>
                <p className="text-[#C7C7C7] text-[16px] md:text-[18px] font-[400]">
                  may 2025 — Present{" "}
                </p>
              </div>
              <p className="text-[#C7C7C7] font-[400] text-[16px] md:text-[18px] mt-[15px]">
                As a freelance developer, I design and build responsive,
                user-friendly websites and web applications. I collaborate
                closely with clients to deliver custom solutions that meet their
                specific needs, ensuring quality, functionality, and
                accessibility.
              </p>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-[#ffffff] text-[18px] md:text-[24px] font-medium">
                  Full-Stack Intern
                </h3>
                <p className="text-[#C7C7C7] text-[16px] md:text-[18px] font-[400]">
                  Aug 2025 — Present{" "}
                </p>
              </div>
              <p className="text-[#D3E97A] text-[16px] md:text-[18px] font-[600] my-[15px] ">
                Tech. Studio
              </p>
              <p className="text-[#C7C7C7] font-[400] text-[16px] md:text-[18px] ">
                Working as a full-stack intern, I contribute to both front-end
                and back-end development projects. I assist in implementing
                features, optimizing performance, and maintaining scalable
                codebases, while gaining hands-on experience with modern web
                technologies and development workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-[#484848] my-[50px]" />
    </div>
  );
};

export default Experience;
