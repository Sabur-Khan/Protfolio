import React from "react";

const ProjectCard = (props) => {
  return (
    <div>
        <div key={props.id} className=" mt-16 border border-[#1f498a] hover:shadow-md hover:shadow-[#1f498a] rounded transition-all duration-500 hover:-translate-y-2">
          <img className="text-white" src={props.images} alt="cardImg" />
          <div className="py-4 px-4 ">
            <h2 className="py-2 capitalize relative text-white font-Montserrat text-2xl font-medium after:w-4 after:absolute after:h-[4px] after:bg-[#f3c623] after:left-0 after:bottom-[-3px]">
              {props.title}
            </h2>
            <p className="font-normal py-3 font-Montserrat text-white text-justify text-base my-4">
              {props.cardInfo}
            </p>
          </div>

          <div className="px-4">
            <ul className="flex flex-wrap justify-between gap-3">
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {props.tagOne}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {props.tagTwo}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {props.tagThree}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {props.tagFour}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {props.tagFive}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {props.tagSix}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {props.tagSeven}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {props.tagEight}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {props.tagNine}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {props.tagTen}
              </li>
              <li className="text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all font-bold">
                {props.tagEleven}
              </li>
            </ul>
          </div>

          <div className="px-4 py-2 my-9">
            <ul className="flex justify-between items-center flex-wrap">
              <li>
                <a
                  className="text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat"
                  href={props.linkOne}
                >
                  Live Link
                </a>
              </li>
              <li>
                <a
                  className="text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat"
                  href={props.linkTwo}
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default ProjectCard;
