import Image from "next/image";
import Link from "next/link";
import resumeSection from "../public/bg-images/resume-section.png";
import styles from "../styles/Resume.module.css";
import SectionContainer from "./SectionContainer";

export default function Resume() {
  return (
    <section id="resume" className="dark:text-gray-100 dark:bg-gray-700 py-20">
      <SectionContainer>
        <h2 className="text-3xl text-center font-bold sm:text-4xl xl:text-5xl mb-12">
          Resume
        </h2>
        <div className="grid auto-row-auto gap-10 justify-center md:grid-cols-2 lg:grid-cols-2">
          <div className="self-center relative bg-neutral-100 dark:bg-gray-500 rounded-full">
            <Image
              src={resumeSection}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              alt="Mojib Mohammad"
              title="Developer"
            />
            <div
              className={`${styles.resumeSocial} resume-social h-0 w-0 max-h-0`}
            >
              <Link href="https://twitter.com/mojib_mohammad1">
                <a
                  className="absolute flex items-center justify-center top-0 left-0 bg-[#FEF6E3] h-[120px] w-[120px] rounded-[50%] opacity-90"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Twitter"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter fa-2x xl:fa-4x text-dodgerblue"></i>
                </a>
              </Link>
              <Link href="https://github.com/mojib2014">
                <a
                  className="absolute flex items-center justify-center bottom-0 left-0 bg-[#FEF6E3] h-[120px] w-[120px] rounded-[50%] opacity-90"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Github"
                  aria-label="Github"
                >
                  <i className="fab fa-github fa-2x xl:fa-4x"></i>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/mojib-mohammad">
                <a
                  className="absolute flex items-center justify-center top-0 right-0 bg-[#FEF6E3] h-[120px] w-[120px] rounded-[50%] opacity-90"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Linkedin"
                  aria-label="Linkedin"
                >
                  <i className="fab fa-linkedin-in fa-2x xl:fa-4x text-dodgerblue"></i>
                </a>
              </Link>
              <Link href="/#facebook">
                <a
                  className="absolute flex items-center justify-center bottom-0 right-0 bg-[#FEF6E3] h-[120px] w-[120px] rounded-[50%] opacity-90"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook fa-2x xl:fa-4x text-dodgerblue"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="py-3 self-start sm:self-center md:pl-[120px] w-[100%]">
            <h4 className={`${styles.subTitle} text-pink mb-13`}>
              Educational qualification
            </h4>
            <h2 className="sction-title font-bold text-3xl mt-5 mb-20 leading-6">
              My Education
            </h2>
            <div className="relative w-[100%]">
              <ul className={`${styles.timeline} relative`}>
                <li className={`${styles.timelineIverted} ${styles.color1}`}>
                  <div className={`${styles.timelineBadge}`}></div>
                  <div className={styles.timelinePanel}>
                    <h3 className="text-pink">
                      Ghazanfar Institute of Health&Science
                    </h3>
                    <div className={styles.info}>Medicine</div>
                    <p>
                      Prepare medications by reviewing and interpreting
                      physician orders and detecting therapeutic
                      incompatibilities.
                    </p>
                  </div>
                </li>
                <li className={`${styles.timeline} ${styles.color2}`}>
                  <div className={styles.timelineBadge}></div>
                  <div className={styles.timelinePanel}>
                    <h3>Codecademy</h3>
                    <div className={styles.info}>Full-Stack Engineer</div>
                    <p>
                      A full-stack engineer can get a project done from start to
                      finish. This Career Path will start with the front-end,
                      move on to the back-end, then teach you how to connect the
                      two.
                    </p>
                  </div>
                </li>
                <li className={`${styles.timeline} ${styles.color3}`}>
                  <div className={styles.timelineBadge}></div>
                  <div className={styles.timelinePanel}>
                    <h3>Skill Share</h3>
                    <div className={styles.info}>UI & UX Design</div>
                    <p>
                      User experience (UX), user interface (UI) design is the
                      process design teams use to create products.
                    </p>
                  </div>
                </li>
              </ul>
              <div className={styles.downloadBtn}>
                <Link href="/#resume">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Download Resume"
                    aria-label="Download Resume"
                  >
                    Download Resume
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
