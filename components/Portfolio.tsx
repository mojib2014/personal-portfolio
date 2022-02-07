import { MouseEvent, MouseEventHandler, useState } from "react";
import Link from "@/components/Link";
import SliderImage from "./SliderImage";
import PROJECTS from "../data/projects";
import styles from "../styles/Portfolio.module.css";
import SectionContainer from "./SectionContainer";

const filters = ["JavaScript", "React", "Django/Docker", "Python", "All"];

export default function Portfolio() {
  const [projects, setProjects] = useState(PROJECTS);

  const handleFilter: MouseEventHandler = (event: MouseEvent) => {
    const filter = (event.target as HTMLButtonElement).dataset.filter;
    if (filter === "All") setProjects(PROJECTS);
    else setProjects(PROJECTS.filter((p) => p.technology === filter));
  };

  return (
    <section
      id="portfolio"
      className="py-section-y dark:bg-[#111827] dark:text-gray-100"
    >
      <SectionContainer>
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl xl:text-5xl">
          Portfolio
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3 py-16 md:justify-between md:gap-8">
          {filters.map((fitler) => (
            <button
              key={fitler}
              data-filter={fitler}
              onClick={handleFilter}
              className="rounded-md bg-cyan-500 py-1 px-3 text-lg text-gray-100 md:py-2 md:px-6"
            >
              {fitler}
            </button>
          ))}
        </div>
        <div className="slide-in grid w-full auto-rows-auto items-center justify-items-center gap-7 transition-all duration-500 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.length ? (
            projects.map((project) => (
              <div
                key={project.title}
                className={`pointer-events-auto relative w-full cursor-pointer rounded-lg shadow-md shadow-gray-500 ${styles.card}`}
              >
                <SliderImage images={project.images} alt={project.title} />
                <div
                  className={`absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-gray-900 text-gray-100 ${styles.cardBody}`}
                >
                  <div>
                    <h2 className="py-2 text-center text-5xl font-bold md:text-4xl">
                      {project.title}
                    </h2>
                    <p className="p-3 text-left">{project.detail}</p>
                  </div>
                  <div className="flex w-full items-center">
                    <Link
                      href={project.url}
                      title={project.title}
                      aria-label={project.title}
                      className="flex-rwo bg-dodgerblue flex items-center justify-between text-[1.2rem] font-semibold text-gray-100"
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
