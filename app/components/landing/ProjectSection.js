import Link from "next/link";
import projectsData from "/public/data/projectsData"; // Adjust the path as needed

const ProjectSection = () => {
  const topProjects = projectsData.slice(0, 3);

  return (
    <div className="bg-homepage-gradient relative text-white overflow-x-hidden overscroll-x-none shadow-2xl shadow-black  ">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl leading-tight font-bold mt-10">Top Projects</h1>
      </div>
      <span className="justify-center items-center flex">
        <img
          src="https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/borderline1.svg"
          alt="underline"
          className="w-[20rem] mt-4"
        />
      </span>
      <div className="flex flex-wrap justify-center gap-6 mt-8 ">
        {topProjects.map((project, index) => (
          <div
            key={index}
            className="w-[22rem] hvr-glow h-auto bg-indigo-100 shadow shadow-indigo-600 rounded-[20px] flex flex-col p-2"
          >
            <img
              src={project.image}
              alt={project.title}
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
              <button
                className="block hvr-sweep-to-right w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 pt-3 justify-center flex">
        <button
          className="block w-50% select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-black shadow-md  transition-all hover:shadow-lg hover:bg-indigo-600 hover:text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
