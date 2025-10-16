import React from "react";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const styleIcon = { color: "white", fontSize: "1.5em" };

const Main = () => {
    return (
        <div id="main">
            <img
                className="w-full h-screen object-cover "
                src="/assets/withdarkshades-nfTVDjMaXYc-unsplash.jpg"
                alt="Professional background"
            />
            <div className="absolute w-full h-screen top-0 left-0">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center gap-2">
                    <h1 className="sm:text-5xl text-4xl text-bold font-mono">
                        Hi! I&apos;m Goran
                    </h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Front-End Developer",
                                2000, // wait 2s before replacing
                                "Tech enthusiast",
                                2000,
                                "Coder",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{
                                fontSize: "1em",
                                display: "inline-block",
                                paddingLeft: "5px",
                            }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex gap-16 justify-between pt-6 ">
                        <a
                            href="http://www.linkedin.com/in/goran-škaljac-0167432b4"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="cursor-pointer hover:scale-110 transition-transform"
                        >
                            <FaLinkedin className="text-white" size={30} />
                        </a>

                        <a
                            href="https://www.facebook.com/goran.skaljac.1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook Profile"
                            className="cursor-pointer hover:scale-110 transition-transform"
                        >
                            <FaFacebookF className="text-white" size={30} />
                        </a>
                        {/* GitHub */}
                        <a
                            href="https://github.com/gox1997"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="cursor-pointer hover:scale-110 transition-transform"
                        >
                            <FaGithub className="text-white" size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
