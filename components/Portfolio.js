import { useState } from "react";
import Link from "next/link";
import SliderImage from "./common/SliderImage";
import PROJECTS from "../data/projects";
import styles from "../styles/Portfolio.module.css";

const filters = ["JavaScript", "React", "Django/Docker", "Python", "All"];

export default function Portfolio() {
  const [projects, setProjects] = useState(PROJECTS);

  const handleFilter = ({ target }) => {
    const filter = target.dataset.filter;
    if (filter === "All") setProjects(PROJECTS);
    else setProjects(PROJECTS.filter((p) => p.technology === filter));
  };

  return (
    <section id="portfolio">
      <div className={styles.portfolioOuter}>
        <div className="container mx-w-xl">
          <h1 className="font-bold text-5xl text-center xl:text-5xl mb-12">
            Portfolio
          </h1>
          <div className="flex items-center flex-wrap gap-8 justify-center py-20">
            {filters.map((fitler) => (
              <button
                key={fitler}
                data-filter={fitler}
                onClick={handleFilter}
                className="bg-[dodgerblue] py-2 px-6 rounded-[5px] text-[#fff] text-xl"
              >
                {fitler}
              </button>
            ))}
          </div>
          <div className="grid gap-7 auto-rows-auto items-center justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-[100%]">
            {projects.length ? (
              projects.map((project) => (
                <div
                  key={project.title}
                  className={`${styles.card} relative w-[100%]`}
                >
                  <SliderImage images={project.images} alt={project.title} />
                  <div
                    className={`flex flex-col items-center justify-center text-[#fff] h-[100%] w-[100%] ${styles.cardBody}`}
                  >
                    <div>
                      <h2 className="text-center font-bold text-5xl md:text-4xl py-2">
                        {project.title}
                      </h2>
                      <p className="text-[1.2rem] py-2 text-center">
                        {project.detail}
                      </p>
                    </div>
                    <div className="flex items-center w-[100%]">
                      <Link href={project.url}>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          title={project.title}
                          aria-label={project.title}
                          className="bg-dodgerblue text-[1.2rem] font-semibold"
                        >
                          Live Demo
                        </a>
                      </Link>
                      <Link href={project.github}>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          title={project.title}
                          aria-label={project.title}
                          className="bg-dodgerblue text-[1.2rem] font-semibold"
                        >
                          Github <i className="fab fa-github"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>There are no projects!</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
