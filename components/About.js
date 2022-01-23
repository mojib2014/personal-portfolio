import Link from "next/link";
import React from "react";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.bannerSection}>
        <div className="container">
          <div className="main-content mx-left text-left">
            <h1 className="text-4xl text-center font-bold xl:text-5xl mb-12">
              I&apos;m a junior full-stack developer
            </h1>
            <p>
              I have an associate degree in medicine. I&apos;m really interested
              in technology & solving technical problems. I create responsive
              and interactive web apps, With focus on back-end. In my free times
              I play volleball and enjoy family time with my lovely dauther,
              watch movies and learn new stuff. You can know more about me by
              reading my{" "}
              <Link href="/blog/posts">
                <a className="text-blue p-2 hover:bg-[#ddd] hover:p-2 hover:rounded">
                  articles.
                </a>
              </Link>
            </p>
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
