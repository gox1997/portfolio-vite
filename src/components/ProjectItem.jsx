import React from "react";

const ProjectItem = ({ img, title }) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
            <img
                src={img}
                alt="/"
                className="rounded-xl group-hover:opacity-10 w-full h-56 object-cover"
            />
            <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h3 className="text-2xl text-white font-bold text-center">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">ReactJS</p>
                <a href="/">
                    <p className="rounded-lg text-center p-3 bg-white font-bold text-gray-700 text-lg cursor-pointer">
                        More info
                    </p>
                </a>
            </div>
        </div>
    );
};

export default ProjectItem;
