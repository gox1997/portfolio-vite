import React from "react";

const WorkItem = ({ year, title, duration, details }) => {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 ">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -ml-6  border-white"></div>
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm ">
                    <span className="inline-block px-1 py-1 bg-[#001b5e] text-white font-semibold rounded-md">
                        {year}{" "}
                    </span>
                    <span className="font-semibold text-lg text-[#001b5e]">
                        {title}
                    </span>
                    <span className="my-1 text-sm font-normal text-stone-500 leading-none">
                        {duration}
                    </span>
                </p>
                <p className="my-2 text-base font-normal text-stone-600">
                    <span>{details}</span>
                </p>
            </li>
        </ol>
    );
};

export default WorkItem;
