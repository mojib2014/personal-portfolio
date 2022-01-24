import React from "react";
import styles from "../styles/Banner.module.css";

export default function Banner() {
  return (
    <section id="banner" className={styles.banner}>
      <div className={styles.bannerSection}>
        <div className="container">
          <div className="main-content mx-left text-left max-w-xl">
            <h1 className="text-5xl font-bold text-[#f8f8f8] xl:text-7xl mb-8">
              Hi There,
              <br />
              I&apos;m Mojib Mohammad
            </h1>
            <p className="text-[#f8f8f8]">Junior full stack developer</p>
            <div className={`${styles.downloadBtn} mt-10`}>
              <a href="public/resume.pdf" target="_blank">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
