import React, { useState } from "react";
import {
    AiOutlineMenu,
    AiOutlineHome,
    AiOutlineProject,
    AiOutlineMail,
    AiOutlineClose,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

const Sidenav = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu
                onClick={handleNav}
                className="md:hidden fixed top-4 right-4 z-50 cursor-pointer text-blue-200 w-10 h-10"
            />
            {nav && (
                <div className="md:hidden fixed w-full h-screen bg-white/95 flex flex-col justify-center items-center z-50">
                    <AiOutlineClose
                        onClick={handleNav}
                        className="absolute top-4 right-4 cursor-pointer w-10 h-10"
                    />
                    <a
                        href="#main"
                        onClick={handleNav}
                        className="w-[90%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Home</span>
                    </a>
                    <a
                        href="#projects"
                        onClick={handleNav}
                        className="w-[90%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineProject size={20} />
                        <span className="pl-4">Projects</span>
                    </a>
                    <a
                        href="#skills"
                        onClick={handleNav}
                        className="w-[90%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <FaCode size={20} />
                        <span className="pl-4">Skills</span>
                    </a>
                    <a
                        href="/pdfs/Resume_Goran_Skaljac.pdf"
                        onClick={handleNav}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[90%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <BsPerson size={20} />
                        <span className="pl-4">Resume</span>
                    </a>
                    <a
                        href="#contact"
                        onClick={handleNav}
                        className="w-[90%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiOutlineMail size={20} />
                        <span className="pl-4">Contact</span>
                    </a>
                </div>
            )}
            <div className="hidden md:block fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a
                        href="#main"
                        className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <AiOutlineHome size={20} />
                    </a>
                    <a
                        href="#projects"
                        className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <AiOutlineProject size={20} />
                    </a>
                    <a
                        href="#skills"
                        className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <FaCode size={20} />
                    </a>
                    <a
                        href="/pdfs/Resume_Goran_Skaljac.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <BsPerson size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
