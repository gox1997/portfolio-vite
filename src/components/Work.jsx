import React from "react";
import WorkItem from "./WorkItem";
/** array */
const data = [
    {
        year: 2023,
        title: "Entry Level",
        duration: "1 year",
        details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        year: 2024,
        title: "Medium Level",
        duration: "2 years",
        details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        year: 2025,
        title: "Senior Level",
        duration: "2 years",
        details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];

const Work = () => {
    return (
        <div id="work" className="container mx-auto px-4 py-16 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
                Work Experience
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
                {data.map((item, index) => (
                    <WorkItem
                        key={index}
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    );
};

export default Work;
