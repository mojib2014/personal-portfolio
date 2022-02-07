import Image from "next/image";
import Link from "@/components/Link";
import styles from "../styles/Resume.module.css";
import SectionContainer from "./SectionContainer";

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-section-y dark:bg-[#111827] dark:text-gray-100"
    >
      <SectionContainer>
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl xl:text-5xl">
          Resume
        </h2>
        <div className="auto-row-auto grid justify-center gap-10 md:grid-cols-2 lg:grid-cols-2">
          <div className="relative self-center rounded-full bg-neutral-100 dark:bg-gray-500">
            <Image
              src="/bg-images/resume-section.png"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              alt="Mojib Mohammad"
              title="Developer"
            />
            <div
              className={`${styles.resumeSocial} resume-social h-0 max-h-0 w-0`}
            >
              <Link
                href="https://twitter.com/mojib_mohammad1"
                className="absolute top-0 left-0 flex h-16 w-16 items-center justify-center rounded-[50%] bg-[#FEF6E3] opacity-90 md:h-[120px] md:w-[120px]"
                title="Twitter"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter fa-2x xl:fa-4x text-dodgerblue"></i>
              </Link>
              <Link
                href="https://github.com/mojib2014"
                className="absolute bottom-0 left-0 flex h-16 w-16 items-center justify-center rounded-[50%] bg-[#FEF6E3] opacity-90 md:h-[120px] md:w-[120px]"
                title="Github"
                aria-label="Github"
              >
                <i className="fab fa-github fa-2x xl:fa-4x"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mojib-mohammad"
                className="absolute top-0 right-0 flex h-16 w-16 items-center justify-center rounded-[50%] bg-[#FEF6E3] opacity-90 md:h-[120px] md:w-[120px]"
                title="Linkedin"
                aria-label="Linkedin"
              >
                <i className="fab fa-linkedin-in fa-2x xl:fa-4x text-dodgerblue"></i>
              </Link>
              <Link
                href="/#facebook"
                className="absolute bottom-0 right-0 flex h-16 w-16 items-center justify-center rounded-[50%] bg-[#FEF6E3] opacity-90 md:h-[120px] md:w-[120px]"
                title="Facebook"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook fa-2x xl:fa-4x text-dodgerblue"></i>
              </Link>
            </div>
          </div>
          <div className="w-full self-start py-3 sm:self-center md:pl-[120px]">
            <h4 className={`${styles.subTitle} text-pink mb-13`}>
              Educational qualification
            </h4>
            <h2 className="sction-title mt-5 mb-20 text-3xl font-bold leading-6">
              My Education
            </h2>
            <div className="relative w-full">
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
                <Link
                  href="/#resume"
                  title="Download Resume"
                  aria-label="Download Resume"
                >
                  Download Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
