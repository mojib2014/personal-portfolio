import { useState } from "react";
import Image from "next/image";
import Link from "@/components/Link";
import SliderImage from "./common/SliderImage";
import PROJECTS from "../data/projects";
import styles from "../styles/Portfolio.module.css";
import SectionContainer from "./SectionContainer";

const filters = ["JavaScript", "React", "Django/Docker", "Python", "All"];

export default function Portfolio() {
  const [projects, setProjects] = useState(PROJECTS);

  const handleFilter = ({ target }) => {
    const filter = target.dataset.filter;
    if (filter === "All") setProjects(PROJECTS);
    else setProjects(PROJECTS.filter((p) => p.technology === filter));
  };

  return (
    <section
      id="portfolio"
      className="dark:text-gray-100 py-section-y bg-gradient-to-tl dark:from-gray-500 from-gray-200"
    >
      <SectionContainer>
        <h2 className="text-3xl text-center font-bold sm:text-4xl xl:text-5xl mb-12">
          Portfolio
        </h2>
        <div className="flex items-center flex-wrap gap-3 justify-center md:justify-between md:gap-8 py-16">
          {filters.map((fitler) => (
            <button
              key={fitler}
              data-filter={fitler}
              onClick={handleFilter}
              className="bg-cyan-500 py-1 px-3 md:py-2 md:px-6 rounded-md text-gray-100 text-lg"
            >
              {fitler}
            </button>
          ))}
        </div>
        <div className="grid gap-7 auto-rows-auto items-center justify-items-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full transition-all slide-in duration-500">
          {projects.length ? (
            projects.map((project) => (
              <div
                key={project.title}
                className={`relative w-full rounded-lg shadow-md shadow-gray-500 cursor-pointer pointer-events-auto ${styles.card}`}
              >
                <SliderImage images={project.images} alt={project.title} />
                <div
                  className={`flex flex-col items-center justify-center bg-gray-900 text-gray-100 h-full w-full absolute rounded-lg ${styles.cardBody}`}
                >
                  <div>
                    <h2 className="text-center font-bold text-5xl md:text-4xl py-2">
                      {project.title}
                    </h2>
                    <p className="text-left p-3">{project.detail}</p>
                  </div>
                  <div className="flex items-center w-full">
                    <Link
                      href={project.url}
                      title={project.title}
                      aria-label={project.title}
                      className="flex flex-rwo items-center justify-between bg-dodgerblue text-[1.2rem] font-semibold text-gray-100"
                    >
                      Live Demo{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="mercado-match inline-flex items-center"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                      </svg>
                    </Link>
                    <Link
                      href={project.github}
                      title={`${project.title} Github`}
                      aria-label={project.title}
                      className="bg-dodgerblue text-[1.2rem] font-semibold"
                    >
                      Github <i className="fab fa-github"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>There are no projects!</p>
          )}
        </div>
      </SectionContainer>
    </section>
  );
}
