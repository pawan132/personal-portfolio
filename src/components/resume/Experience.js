import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  const description = (
    <ul>
      <li>Faculty Availability and Student Registration page created in MSL Portal.</li>
      <li>REST API for Faculty-Batch Mapping, Student Attendance, and Email Notifications.</li>
      <li>Unit Testing, Data Encryption, and Role Authorization.</li>
    </ul>
  );

  const desc = (
    <ul>
      <li>Socialmedia application(MERN)- Clone of existing social medias.</li>
      <li>Tudo List(React)- Enriching React Learning.</li>
      <li> PortFolio(React)- Personal portfolio Page.</li>
    </ul>
  );

  const des = (
    <ul>
      <li> Tribute Page(Html, Css)- Enriching React Learning.</li>
      <li>To do List(Html,css,javsscript).</li>
      <li>Calculator(Html,css,javsscript).</li>
    </ul>
  );
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="py-12 font-titleFont flex gap-20"
        >
            <div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">
                        2022 - Present
                    </p>
                    <h2 className="text-4xl font-bold">
                        Internship Experience
                    </h2>
                </div>
                <div className="mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                       title="Full Stack Intern"
  subTitle="Mittal Software Labs (Aug 2024 - Nov 2024)"
  result="Hybrid"
  des={description}
                    />
                     <ResumeCard
                       title="Web Development Intern"
  subTitle="Octanet (June 2023 - Aug 2023)"
  result="Remote"
  des={desc}
                    />

                </div>

               
            </div>
    
        </motion.div>
    );
};

export default Experience;
