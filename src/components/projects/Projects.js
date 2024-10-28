import React from "react";
import Title from "../layouts/Title";
import {
  ai,
  IMS,
  fitness,
  blog,
  pokeapp,
  sharefile,
  tictac,
  typing,
  portfolio,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { mockComponent } from "react-dom/test-utils";

const Projects = () => {
  const projectsData = [
    {
      title: "Ai Mock Interview",
      desc: " (Next.js, Clerk, Drizzle ORM, Gemini AI): Developed an AI-driven mock interview website aimed at enhancing students interview skills, building confidence, and providing personalized feedback.",
      liveUrl:
        "https://ai-mock-interview-pawan-kumars-projects-39f58fe9.vercel.app/",
      githubUrl: "https://github.com/pawan132/Ai-mock-interview",
      image: ai,
    },
    {
      title: "IMS Portal",
      desc: " (React, Mysql, Node.js, Express.js, JWT Authentication,Role base Authorization, NodeMailer): Developed an IMS educational portal that integrates various features such as institute management, branches, departments, and courses.",
      liveUrl: "https://ims.msltech.ai/",
      githubUrl: "https://github.com/pawan132/IMS-Portal",
      image: IMS,
    },
    {
      title: "Fitsphere",
      desc: " (React, MongoDB, Node.js, Express.js, JWT Authentication): Developed a fitness social media at building a vibrant virtual community for fitness enthusiasts to share experiences, track progress, and exchange insights.",
      liveUrl: "",
      githubUrl: "https://github.com/pawan132/Fitsphere",
      image: fitness,
    },
    {
      title: "blog post",
      desc: "(React, MongoDB, Node.js, Express.js) A blog app allowing users to create, edit, and delete posts, comment on articles, and interact with a dynamic content feed.",
      liveUrl: "https://blog-app-tzb9.onrender.com/",
      githubUrl: "https://github.com/pawan132/blog-app",
      image: blog,
    },
    {
      title: "Share file",
      desc: "(React, MongoDB, Node.js, Express.js, API): Developed a file sharing application that allows users to upload files, generating a download link that can be shared with others for easy file access and sharing.",
      liveUrl: "https://share-care-front.onrender.com",
      githubUrl: "https://github.com/pawan132/fileshare",
      image: sharefile,
    },
    {
      title: "My portfolio",
      desc: "(Reactjs, Tailwind) personal portfolio showcasing projects, skills, and experience, featuring interactive design, project details, and contact options for potential collaborations.",
      liveUrl: "",
      githubUrl: "https://github.com/pawan132/personal-portfolio",
      image: portfolio,
    },
    {
      title: "Typing Master",
      desc: "(HTML, CSS, Javascript)Typing Master is an interactive app designed to improve typing speed and accuracy, featuring lessons, real-time feedback, and personalized typing exercises.",
      liveUrl: "https://pawan132.github.io/typing-master/",
      githubUrl: "https://github.com/pawan132/typing-master",
      image: typing,
    },
    {
      title: "Tic Tac",
      desc: "(HTML, CSS, Javascript)A classic Tic Tac Toe game where two players take turns marking Xs and Os, aiming to align three symbols in a row.",
      liveUrl: "https://pawan132.github.io/tic-tac-game/",
      githubUrl: "https://github.com/pawan132/tic-tac-game",
      image: tictac,
    },
    {
      title: "Poke app",
      desc: "(React, Pagination) PokeApp is a Pokémon-themed app that lets users explore Pokémon details, view stats, and search characters with a fun, interactive interface.",
      liveUrl: "https://pokesmapp.netlify.app/",
      githubUrl: "https://github.com/pawan132/Pokeapp",
      image: pokeapp,
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="THESE ARE SOME PROJECTS THAT I HAVE DEVELOPED SO FAR"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsData.map((data, id) => {
          return <ProjectsCard key={id} data={data} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
