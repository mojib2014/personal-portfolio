import Link from "next/link";
import React from "react";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about">
      <div className={styles.aboutOuter}>
        <div className="container mx-w-xl">
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
              <Link href="/blog">
                <a className={styles.link}>articles.</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
