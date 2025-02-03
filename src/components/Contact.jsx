import React from "react";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="mt-6 ">
            <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                <div>
                    <h1 className="text-gray-800 text-3xl font-bold">
                        Let's Talk
                    </h1>
                    <p className="text-sm text-gray-500 mt-4 ">
                        Have some big idea or brand to develop and need help?
                        Then reach out we'd love to hear about your project and
                        provide help.
                    </p>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-base font-bold">
                            Email
                        </h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0"></div>
                                <a
                                    href="javascript:void(0)"
                                    className="text-[#007bff] text-sm ml-4"
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
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)"></a>
                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)"></a>
                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)"></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form classNameName="ml-auo space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        classNameName="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
                    />
                    <textarea
                        placeholder="Message"
                        rows="6"
                        className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"
                    ></textarea>
                    <button
                        type="button"
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
