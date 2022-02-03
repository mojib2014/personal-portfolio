import React from "react";
import Image from "next/image";
import SectionContainer from "./SectionContainer";
const skills = [
  { skill: "/icons/javascript.gif", title: "Javascript" },
  { skill: "/icons/python.svg", title: "Python" },
  { skill: "/icons/django.svg", title: "Django" },
  { skill: "/icons/docker.svg", title: "Docker" },
  { skill: "/icons/css3.png", title: "CSS3" },
  { skill: "/icons/firebase.png", title: "Fierbase" },
  { skill: "/icons/github.svg", title: "Github" },
  { skill: "/icons/heroku.svg", title: "Heroku" },
  { skill: "/icons/html5.png", title: "HTML5" },
  { skill: "/icons/nextjs.svg", title: "Nextjs" },
  { skill: "/icons/nodejs.svg", title: "Nodejs" },
  { skill: "/icons/postgresql.svg", title: "Postgresql" },
  { skill: "/icons/reactjs.svg", title: "React" },
  { skill: "/icons/mongodb.svg", title: "MongoDB" },
  { skill: "/icons/sass.png", title: "SASS" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="dark:bg-gray-400 dark:text-gray-100 py-section-y"
    >
      <SectionContainer>
        <h2 className="text-3xl text-center font-extrabold sm:text-4xl xl:text-5xl mb-12">
          Skills
        </h2>
        <div className="flex align-center justify-center md:justify-between flex-wrap gap-10">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="transition-all duration-300 ease-in-out hover:scale-150"
              title="JavaScript"
            >
              <Image
                src={skill.skill}
                alt="JavaScript"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
