import React from "react";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.bannerSection}>
        <div className="container">
          <div className="main-content mx-left text-left">
            <h1 className="text-4xl text-center font-bold xl:text-5xl mb-12">
              I&apos;m a full-stack junior developer
            </h1>
            <p>I have an associate degree in medicine.</p>
            <p>
              In my free times I play volleball and enjoy family time with my
              lovely dauther, watch movies and learn new stuff.
            </p>
            <p className="">I create responsive and interactive web apps</p>
            <p>
              With passion for building user friendly, performent SPAs in
              MERNstack, PERNstack sites.
            </p>
            <p>With focus on back-end.</p>
            <div className="download-btn mt-10">
              <a
                href="public/resume.pf"
                target="_blank"
                className="inline-block px-5 py-5 rounded-lg hover:bg-blue text-[#fff] font-inherit"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
