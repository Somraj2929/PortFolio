"use client";
import Link from "next/link";
import projectsData from "/public/data/projectsData";
import { useEffect, useState } from "react";
import Image from "next/image";

const ProjectSection = () => {
  // const allProjects = projectsData.slice(0, 3);

  const [allProjects, setAllProjects] = useState([]);
  const [trendingProjects, setTrendingProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://somraj-bkd-prod-3f1a24c1d8a6.herokuapp.com/api/projects"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        //for filtering the tagged projects
        const tagged = data.filter((project) => {
          return (
            project.tag && project.tag.some((tag) => tag.toLowerCase() === "go")
          );
        });

        setAllProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-homepage-gradient relative text-white overflow-x-hidden overscroll-x-none shadow-2xl shadow-black  ">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl leading-tight font-bold mt-10">Top Projects</h1>
      </div>
      <span className="justify-center items-center flex">
        <Image
          src="https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/borderline1.svg"
          alt="underline"
          width={320}
          height={20}
          className="w-[20rem] mt-4"
        />
      </span>
      <div className="flex flex-wrap justify-center gap-6 mt-8 ">
        {allProjects.map((project, index) => (
          <div
            key={index}
            className="w-[22rem] hvr-glow h-auto bg-indigo-100 shadow shadow-indigo-600 rounded-[20px] flex flex-col p-2"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={360}
              className="w-full h-[200px] rounded-[20px] rounded-tr-[20px] object-fit"
            />
            <div className="flex justify-between items-center p-2">
              <h2 className="text-xl font-semibold text-black hover:text-[#ff972d]">
                {project.title}
              </h2>
              <p className="text-gray-700 text-sm font-light italic">
                {project.date}
              </p>
            </div>

            <p className="text-gray-900 px-2 pb-2 text-wrap">
              {project.description.slice(0, 145) + "..."}
            </p>

            <ul className="flex justify-evenly  mt-auto">
              {project.skills.slice(0, 3).map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="inline-block bg-gray-200 hover:bg-pink-300 text-gray-700 px-2 py-1 rounded m-2 "
                >
                  {skill}
                </li>
              ))}
            </ul>
            <div className="p-2 ">
              <Link href={project.repoLink} target="_blank">
                <button
                  className="block hvr-sweep-to-right w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  View Project
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 pt-3 justify-center flex">
        <Link href="https://github.com/somraj2929" target="_blank">
          <button
            className="block w-50% select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-black shadow-md  transition-all hover:shadow-lg hover:bg-indigo-600 hover:text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            View All Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
