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

            <p className="max-w-2xl text-center text-xl text-gray-600 mb-12">
                Explore my frontend development journey through these projects.
                From real-time applications to responsive components, each
                project demonstrates my growing expertise in modern web
                technologies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <a
                    href="https://chat-app-scaledrone-six.vercel.app/"
                    target="_blank"
                >
                    <ProjectItem
                        img="/assets/scaledrone.png"
                        title="Chat app"
                        description="Real-time messaging application with Scaledrone"
                    />
                </a>
                <a
                    href="https://qr-code-component-theta-ten.vercel.app/"
                    target="_blank"
                >
                    <ProjectItem
                        img="/assets/qr.png"
                        title="QR code component"
                        description="Clean QR code component with modern design"
                    />
                </a>
                <a href="">
                    <ProjectItem
                        img="/assets/portfolio.png"
                        title="Portfolio"
                        description="Personal portfolio built with React & Tailwind CSS"
                    />
                </a>
            </div>
        </div>
    );
};

export default Projects;
