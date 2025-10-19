import React from "react";
import { TiHtml5 } from "react-icons/ti";
import {
    SiCss3,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiVite,
} from "react-icons/si";

const Skills = () => {
    const skills = [
        {
            name: "HTML5",
            icon: <TiHtml5 size={50} />,
            color: "text-orange-500",
        },
        { name: "CSS3", icon: <SiCss3 size={50} />, color: "text-blue-500" },
        {
            name: "JavaScript",
            icon: <SiJavascript size={50} />,
            color: "text-yellow-400",
        },
        { name: "React", icon: <SiReact size={50} />, color: "text-blue-400" },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss size={50} />,
            color: "text-teal-400",
        },
        { name: "Git", icon: <SiGit size={50} />, color: "text-orange-600" },
        {
            name: "GitHub",
            icon: <SiGithub size={50} />,
            color: "text-gray-800",
        },
        { name: "Vite", icon: <SiVite size={50} />, color: "text-purple-500" },
    ];

    return (
        <div id="skills">
            <div className="bg-white flex flex-col items-center mx-auto px-4 py-16 mb-16 min-h-screen">
                <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8 mt-4">
                    My Skills
                </h1>

                <p className="max-w-2xl text-center text-lg text-gray-600 mb-12">
                    I am a Frontend developer with a strong foundation in HTML,
                    CSS, JavaScript and React.js. I've built several personal
                    projects and I'm proficient in modern development tools and
                    version control.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group"
                        >
                            <div
                                className={`mb-3 ${skill.color} group-hover:scale-110 transition-transform`}
                            >
                                {skill.icon}
                            </div>
                            <h3 className="font-semibold text-gray-800 text-center">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Progress Section */}
                <div className="mt-16 max-w-2xl w-full">
                    <h3 className="text-2xl font-bold text-center text-[#001b5e] mb-8">
                        Technical Proficiency
                    </h3>
                    <div className="space-y-4">
                        {[
                            { skill: "HTML/CSS", level: 90 },
                            { skill: "JavaScript", level: 80 },
                            { skill: "React", level: 75 },
                            { skill: "Tailwind CSS", level: 85 },
                            { skill: "Git/GitHub", level: 90 },
                        ].map((item, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="font-medium text-gray-700">
                                        {item.skill}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {item.level}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${item.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
