import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <div
            id="projects"
            className="flex flex-col items-center justify-center mx-auto px-4 mb-16 max-w-7xl min-h-screen"
        >
            <h1 className="text-4xl font-bold text-center text-[#001b5e] p-4">
                Projects
            </h1>
            <p className="text-center text-xl text-gray-600 mb-8">
                My frontend projects. Scaledrone chat app, QR code component,
                Portfolio (a custom website portfolio using React, Vite,
                Tailwind CSS), and many more projects to come!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <a
                    href="https://chat-app-scaledrone-six.vercel.app/"
                    target="_blank"
                >
                    <ProjectItem
                        img="/assets/scaledrone.png"
                        title="Chat app"
                    />
                </a>
                <a
                    href="https://qr-code-component-theta-ten.vercel.app/"
                    target="_blank"
                >
                    <ProjectItem
                        img="/assets/qr.png"
                        title="QR code component"
                    />
                </a>
                <a href="">
                    <ProjectItem
                        img="/assets/portfolio.png"
                        title="Portfolio"
                    />
                </a>
            </div>
        </div>
    );
};

export default Projects;
