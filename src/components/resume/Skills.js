import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            <div className="w-full lgl:w-1/2">
                <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">
                    World winning skills
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Coding & Problem solving
                    </h2>
                </div>
                <div className='className="mt-14 w-full flex flex-col gap-6'>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">
                            Data Structure
                        </p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    95%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">
                            Algorithms
                        </p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    90%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">
                            CPP
                        </p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    90%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">
                            Javascript
                        </p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    90%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Java</p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    80%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">SQL</p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    80%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Python</p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    70%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                </div>
            </div>

            <div className="w-full lgl:w-1/2">
                <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">
                        World changing skills
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Development
                    </h2>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Next JS</p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    80%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">
                            React JS
                        </p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    90%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Node JS</p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    90%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                 
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Spring Boot</p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    70%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Git</p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    70%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">My SQL</p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    90%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">
                            Mongo DB
                        </p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    95%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
