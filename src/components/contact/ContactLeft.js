import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={contactImg}
                alt="contactImg"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">Pawan Kumar</h3>
                <p className="text-lg font-normal text-gray-400">
                    Full Stack Developer
                </p>
                <p className="text-base text-gray-400 tracking-wide">
                    Hey, Good to see you here.
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Phone:{" "}
                    {/* <span className="text-lightText">+91 7081263001</span> */}
                    <span className="text-lightText">+91 8252268398</span>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Email:{" "}
                    <span className="text-lightText">
                        kumar.732496@gmail.com
                    </span>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                    Connect me on
                </h2>
                <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/pawan-kumar-b37915238/"
                        rel="noreferrer"
                        target="_blank"
                        title="LinkedIn"
                        className="bannerIcon"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://github.com/pawan132"
                        rel="noreferrer"
                        target="_blank"
                        title="Github"
                        className="bannerIcon"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://leetcode.com/u/Pawan_1kumar/"
                        rel="noreferrer"
                        target="_blank"
                        title="Github"
                        className="bannerIcon"
                    >
                        <SiLeetcode />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactLeft;
