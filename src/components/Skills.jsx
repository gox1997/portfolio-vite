import React from "react";
import { TiHtml5 } from "react-icons/ti";

const Skills = () => {
    return (
        <div id="skills">
            <div className="bg-white flex flex-col items-center mx-auto px-4 py-16 mb-16 min-h-screen">
                <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8 mt-4 z-50">
                    My skills
                </h1>
                <p className="max-w-7xl text-center text-semibold text-xl text-gray-500 mb-8 sm:text-xl">
                    I am a Frontend developer with a strong foundation in HTML,
                    CSS, JavaScript and React.js. While I don&apos;t have formal
                    work experience yet, I&apos;ve built several personal
                    projects, including a responsive portfolio, a chat-app. I am
                    proficient in Git and GitHub for version control.
                </p>
                <div className="flex gap-4">
                    <TiHtml5
                        size={100}
                        className="hover:scale-110 ease-in duration-300"
                    />
                    <img
                        src="/assets/icons/css-3.svg"
                        alt="css-icon"
                        width={80}
                        className="hover:scale-110 ease-in duration-300"
                    />
                    <img
                        src="/assets/icons/javascript-1.svg"
                        alt="css-icon"
                        width={80}
                        className="hover:scale-110 ease-in duration-300"
                    />
                    <img
                        src="/assets/icons/tailwind-css-1.svg"
                        alt="css-icon"
                        width={80}
                        className="hover:scale-110 ease-in duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;
