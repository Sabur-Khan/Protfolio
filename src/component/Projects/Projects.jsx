import React from "react";
import projectData from "../../projectData/projectData";
const Projects = () => {
  console.log(projectData);
  return (
    <div className=" my-[100px]">
      <div className=" text-center ">
        <h2 className="relative before:w-6 before:h-6 before:bg-[#f3c623] before:z-50 before:absolute before:bottom-[-12px] before:rounded-full before:shadow-2xl before:ring-inset before:ring-[#0a182e] before:ring-8 lg:before:left-[49%] md:before:left-[50%] sm:before:left-[50%] before:left-[45%] after:w-[250px] after:h-[2px] after:bg-white after:absolute after:bottom-0 lg:after:left-[42%] md:after:left-[34%] sm:after:left-[32%] after:left-[16%] font-Montserrat text-white pb-6 font-medium text-3xl">
          MY <span className=" text-[#e9af1d]">PROJECTS</span>
        </h2>
      </div>

      <div className="lg:px-0 md:px-0 sm:px-5 px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

        {/* First Card */}

        <div className=" mt-16 border border-[#1f498a] hover:shadow-md hover:shadow-[#1f498a] rounded transition-all duration-500 hover:-translate-y-2">
          <img
            className="text-white"
            src={projectData[0].images}
            alt="cardImg"
          />
          <div className="py-4 px-4 ">
            <h2 className="py-2 capitalize relative text-white font-Montserrat text-2xl font-medium after:w-4 after:absolute after:h-[4px] after:bg-[#f3c623] after:left-0 after:bottom-[-3px]">
              {projectData[0].title}
            </h2>
            <p className="font-normal py-3 font-Montserrat text-white text-justify text-base my-4">
              {projectData[0].cardInfo}
            </p>
          </div>

          <div className="px-4">
            <ul className="flex flex-wrap justify-between gap-3">
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[0].tagOne}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[0].tagTwo}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[0].tagThree}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[0].tagFour}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[0].tagFive}
              </li>
            </ul>
          </div>

          <div className="px-4 py-2 my-9">
            <ul className="flex justify-between items-center flex-wrap">
              <li>
                <a className="text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat"
                  href="https://sabur-khan.github.io/finesweet-project/index.html"
                >
                  Live Link
                </a>
              </li>
              <li>
                <a className="text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat"
                  href="https://github.com/Sabur-Khan/finesweet-project"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Secon Card */}
        <div className=" mt-16 border border-[#1f498a] hover:shadow-md hover:shadow-[#1f498a] rounded transition-all duration-500 hover:-translate-y-2">
          <img
            className="text-white"
            src={projectData[1].images}
            alt="cardImg"
          />
          <div className="py-4 px-4 ">
            <h2 className="py-2 capitalize relative text-white font-Montserrat text-2xl font-medium after:w-4 after:absolute after:h-[4px] after:bg-[#f3c623] after:left-0 after:bottom-[-3px]">
              {projectData[1].title}
            </h2>
            <p className="font-normal py-3 font-Montserrat text-white text-justify text-base my-4">
              {projectData[1].cardInfo}
            </p>
          </div>

          <div className="px-4">
            <ul className="flex flex-wrap justify-between gap-3">
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[1].tagSix}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[1].tagSeven}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[1].tagEight}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[1].tagNine}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[1].tagTen}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[1].tagEleven}
              </li>
            </ul>
          </div>

          <div className="px-4 py-2 my-9">
            <ul className="flex justify-between items-center flex-wrap">
              <li>
                <a className="text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat"
                  href="https://sabur-khan.github.io/Cameron/#Testimonial"
                >
                  Live Link
                </a>
              </li>
              <li>
                <a className="text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat"
                  href="https://github.com/Sabur-Khan/Cameron"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Thard Card */}
        <div className=" mt-16 border border-[#1f498a] hover:shadow-md hover:shadow-[#1f498a] rounded transition-all duration-500 hover:-translate-y-2">
          
          <img
            className="text-white"
            src={projectData[2].images}
            alt="cardImg"
          />

          <div className="py-4 px-4 ">
            <h2 className="py-2 capitalize relative text-white font-Montserrat text-2xl font-medium after:w-4 after:absolute after:h-[4px] after:bg-[#f3c623] after:left-0 after:bottom-[-3px]">
              {projectData[2].title}
            </h2>
            <p className="font-normal py-3 font-Montserrat text-white text-justify text-base my-4">
              {projectData[2].cardInfo}
            </p>
          </div>

          <div className="px-4">
            <ul className="flex flex-wrap justify-between gap-3">
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[2].tagSix}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[2].tagSeven}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[2].tagEight}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[2].tagNine}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[2].tagTen}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[2].tagEleven}
              </li>
            </ul>
          </div>

          <div className="px-4 py-2 my-9">
            <ul className="flex justify-between items-center flex-wrap">
              <li>
                <a className="text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat"
                  href="https://kotha-barta-rho.vercel.app/"
                >
                  Live Link
                </a>
              </li>
              <li>
                <a className="text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat"
                  href="https://github.com/Sabur-Khan/kotha-barta"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Four Card */}
        <div className=" mt-16 border border-[#1f498a] hover:shadow-md hover:shadow-[#1f498a] rounded transition-all duration-500 hover:-translate-y-2">

          <img
            className="text-white"
            src={projectData[3].images}
            alt="cardImg"
          />

          <div className="py-4 px-4 ">
            <h2 className="py-2 capitalize relative text-white font-Montserrat text-2xl font-medium after:w-4 after:absolute after:h-[4px] after:bg-[#f3c623] after:left-0 after:bottom-[-3px]">
              {projectData[3].title}
            </h2>
            <p className="font-normal py-3 font-Montserrat text-white text-justify text-base my-4">
              {projectData[3].cardInfo}
            </p>
          </div>

          <div className="px-4">
            <ul className="flex flex-wrap justify-between gap-3">
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[3].tagSix}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[3].tagSeven}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[3].tagEight}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[3].tagNine}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {projectData[3].tagTen}
              </li>
            </ul>
          </div>

          <div className="px-4 py-2 my-9">
            <ul className="flex justify-between items-center flex-wrap">
              <li>
                <a className="text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat"
                  href="https://sabur-khan.github.io/Innovate-secon-project/#"
                >
                  Live Link
                </a>
              </li>
              <li>
                <a className="text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat"
                  href="https://github.com/Sabur-Khan/Innovate-secon-project"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
