import React from "react";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
    return (
        <div
            id="contact"
            className="flex items-center justify-center min-h-screen py-16"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-6 md:gap-12 p-4 sm:p-8 mt-10 mx-auto w-full max-w-4xl bg-white shadow-lg rounded-md font-sans">
                <div>
                    <h1 className="text-[#001b5e] text-3xl font-bold">
                        Let's Talk
                    </h1>
                    <p className="text-sm sm:text-xl text-gray-500 mt-4 ">
                        Ready to bring your ideas to life? Whether you have a
                        project in mind, need a frontend developer, or just want
                        to connect - I'd love to hear from you. Let's discuss
                        how we can work together to build something
                        extraordinary.
                    </p>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-base font-bold">
                            Email
                        </h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <AiOutlineMail />
                                </div>
                                <a
                                    href="mailto:goran.skaljac97@gmail.com"
                                    className="text-[#007bff] text-sm ml-4 hover:underline"
                                >
                                    <small className="block">Mail</small>
                                    <strong>goran.skaljac97@gmail.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-base font-bold">
                            Socials
                        </h2>

                        <ul className="flex mt-4 space-x-4">
                            <li>
                                <a
                                    href="https://facebook.com/goran.skaljac.1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook Profile"
                                    className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:bg-blue-100 transition-colors"
                                >
                                    <FaFacebookF className="text-gray-700 hover:text-blue-600" />
                                </a>
                            </li>

                            {/* LinkedIn */}
                            <li>
                                <a
                                    href="https://linkedin.com/in/goran-škaljac-0167432b4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn Profile"
                                    className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:bg-blue-100 transition-colors"
                                >
                                    <FaLinkedin className="text-gray-700 hover:text-blue-600" />
                                </a>
                            </li>

                            {/* GitHub */}
                            <li>
                                <a
                                    href="https://github.com/gox1997"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Profile"
                                    className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:bg-blue-100 transition-colors"
                                >
                                    <FaGithub className="text-gray-700 hover:text-gray-900" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form
                    action="https://getform.io/f/apjjdzma"
                    method="POST"
                    encType="multipart/form-data"
                    className="ml-auto space-y-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
                    />
                    <textarea
                        placeholder="Message"
                        name="message"
                        rows="6"
                        className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-2.5 w-full !mt-6"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
