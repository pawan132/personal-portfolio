import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            {/* part one */}
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-2">
                    <p className="text-sm text-designColor tracking-[4px]">
                        2020 - 2024
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Education Timeline
                    </h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="B Tech - Computer Science and Engineering"
                        subTitle="KIET GROUP OF INSTITUTIONS (2020 - 2024)"
                        result="7.1 / 10"
                       
                        des=""
                    />
                       {/* <ResumeCard
                        title="Intermediate - PCM"
                        subTitle="Army Public School Ranchi (2016 - 2018)"
                        result="78.2 / 100"
                       
                        des=""
                    /> */}
                   
                   
                </div>
            </div>
          
        </motion.div>
    );
};

export default Education;
