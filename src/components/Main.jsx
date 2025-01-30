import React from "react";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const styleIcon = { color: "white", fontSize: "1.5em" };

const Main = () => {
    return (
        <div id="main">
            <img
                className="w-full h-screen object-cover "
                src="https://r4.wallpaperflare.com/wallpaper/385/220/840/space-clouds-aurorae-dark-wallpaper-18c68c8a1ffcb7e95e90c9c252198b20.jpg"
                alt=""
            />
            <div className="absolute w-full h-screen top-0 left-0">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-start items-center gap-2">
                    <h1 className="sm:text-5xl text-4xl font-mono">
                        Hi! I&apos;m Goran
                    </h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4">
                        a
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
                        <FaLinkedin
                            className="cursor-pointer"
                            style={styleIcon}
                            size={30}
                        />

                        <FaFacebookF
                            className="cursor-pointer"
                            style={styleIcon}
                            size={30}
                        />

                        <FaGithub
                            className="cursor-pointer"
                            style={styleIcon}
                            size={30}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
