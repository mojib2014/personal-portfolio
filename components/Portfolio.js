import React from "react";
import Image from "next/image";
import coderscorner from "../public/portfolio/coderscorner.gif";
import comfyhouse from "../public/portfolio/comfyhouse.png";
import crystalCollector from "../public/portfolio/crystalCollector.png";
import dentsoft from "../public/portfolio/dent-soft.gif";
import issueTracker from "../public/portfolio/issueTracker.png";
import vidly from "../public/portfolio/vidly.png";
import styles from "../styles/Portfolio.module.css";

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <h1 className="font-bold text-4xl text-center xl:text-5xl mb-12">
          Portfolio
        </h1>
        <div className={`${styles.flex} flex align-center justify-center`}>
          <div className={`${styles.card} m-4 w-[33.3%] flex-[33.3%] card`}>
            <Image
              className="rounded"
              src={coderscorner}
              alt="Coders Corner Project"
              width={300}
              height={300}
            />
            <div className="card-body">
              <h2 className="text-center font-bold text-2xl md:text-1xl my-3">
                Coders Corner
              </h2>
              <p>
                Asimple application for improving coding(software development)
                Skills(for students and mentors).
              </p>
            </div>
          </div>
          <div className={`${styles.card} m-4 w-[33.3%] flex-[33.3%] card`}>
            <Image
              className="rounded"
              src={comfyhouse}
              alt="Comfy House Project"
              width={300}
              height={300}
            />
            <div className="card-body">
              <h2 className="text-center font-bold text-2xl md:text-1xl my-3">
                Comfy House
              </h2>
            </div>
          </div>
          <div className={`${styles.card} m-4 w-[33.3%] flex-[33.3%] card`}>
            <Image
              className="rounded"
              src={crystalCollector}
              alt="Crystal Collector Project"
              width={300}
              height={300}
            />
            <div className="card-body">
              <h2 className="text-center font-bold text-2xl md:text-1xl my-3">
                Crystal Collector
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
