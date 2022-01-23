import React from "react";
import Image from "next/image";
import javascript from "../public/icons/javascript.gif";
import python from "../public/icons/python.svg";
import django from "../public/icons/django.svg";
import docker from "../public/icons/docker.svg";
import css3 from "../public/icons/css3.png";
import firebase from "../public/icons/firebase.png";
import git from "../public/icons/git.svg";
import github from "../public/icons/github.svg";
import heroku from "../public/icons/heroku.svg";
import html5 from "../public/icons/html5.png";
import nextjs from "../public/icons/nextjs.svg";
import nodejs from "../public/icons/nodejs.svg";
import postgresql from "../public/icons/postgresql.svg";
import reactjs from "../public/icons/reactjs.svg";
import mongodb from "../public/icons/mongodb.svg";
import sass from "../public/icons/sass.png";
import styles from "../styles/Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className="">
      <div className={styles.skillsSection}>
        <div className="container mx-w-xl">
          <h1 className="text-center font-bold text-4xl xl:text-5xl mb-10">
            Skills
          </h1>
          <div className="flex align-center justify-center flex-wrap">
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="JavaScript"
            >
              <Image
                src={javascript}
                alt="JavaScript"
                width={100}
                height={100}
              />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="Python3"
            >
              <Image src={python} alt="Python" width={100} height={100} />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="Django"
            >
              <Image src={django} alt="Django" width={100} height={100} />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="Docker"
            >
              <Image src={docker} alt="Docker" width={100} height={100} />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="Git version control"
            >
              <Image src={git} alt="Git" width={100} height={100} />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="Github"
            >
              <Image src={github} alt="Github" width={100} height={100} />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="Firebase"
            >
              <Image src={firebase} alt="Firebase" width={100} height={100} />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="CSS3"
            >
              <Image src={css3} alt="CSS3" width={100} height={100} />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="Nodejs"
            >
              <Image src={nodejs} alt="Node js" width={100} height={100} />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="HTML5"
            >
              <Image src={html5} alt="HTML5" width={100} height={100} />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="Heroku"
            >
              <Image src={heroku} alt="Heroku" width={100} height={100} />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="Postgres"
            >
              <Image
                src={postgresql}
                alt="Postgresql"
                width={100}
                height={100}
              />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="React js"
            >
              <Image src={reactjs} alt="React js" width={100} height={100} />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="Next js (Awesome tool)"
            >
              <Image src={nextjs} alt="Next js" width={100} height={100} />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="SASS"
            >
              <Image src={sass} alt="SASS" width={100} height={100} />
            </div>
            <div
              className="m-4 p-4 transition-all duration-300 ease-in-out hover:scale-150"
              title="MongoDB"
            >
              <Image src={mongodb} alt="Mongodb" width={100} height={100} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
