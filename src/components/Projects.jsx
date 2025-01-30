import React from "react";
import ProjectItem from "./ProjectItem";
import scaledroneImg from "../assets/scaledrone.png";
import qrImg from "../assets/qr.png";

const Projects = () => {
    return (
        <div id="projects" className="container mx-auto px-4 my-16 max-w-7xl">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] p-4">
                Projects
            </h1>
            <p className="text-center text-gray-600 mb-8">
                My frontend projects. Scaledrone chat app, Portfolio, QR code
                component and many more projects to come!
            </p>

            <div className="grid sm:grid-cols-2 gap-12 ">
                <ProjectItem img={scaledroneImg} title="Chat app" />
                <ProjectItem img={qrImg} title="QR code component" />
                <ProjectItem img={scaledroneImg} title="Chat app" />
            </div>
        </div>
    );
};

export default Projects;
