import Image from "next/image";
import Link from "next/link";
import resumeSection from "../public/bg-images/resume-section.png";
import styles from "../styles/Resume.module.css";

export default function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.resumeOuter}>
        <div className="container mx-w-xl">
          <h1 className="font-bold text-4xl text-center xl:text-5xl mb-20">
            Resume
          </h1>
          <div className="grid auto-row-auto gap-10 justify-center md:grid-cols-2 lg:grid-cols-2">
            <div className="self-center relative bg-[#FEF6E3] rounded-[50%]">
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
                <Link href="/#twitter">
                  <a
                    className="absolute flex items-center justify-center top-0 left-0 bg-[#FEF6E3] h-[120px] w-[120px] rounded-[50%] opacity-90"
                    title="Twitter"
                  >
                    <i className="fab fa-twitter fa-2x xl:fa-4x text-dodgerblue"></i>
                  </a>
                </Link>
                <Link href="/#github">
                  <a
                    className="absolute flex items-center justify-center bottom-0 left-0 bg-[#FEF6E3] h-[120px] w-[120px] rounded-[50%] opacity-90"
                    title="Github"
                  >
                    <i className="fab fa-github fa-2x xl:fa-4x"></i>
                  </a>
                </Link>
                <Link href="/#linkedin">
                  <a
                    className="absolute flex items-center justify-center top-0 right-0 bg-[#FEF6E3] h-[120px] w-[120px] rounded-[50%] opacity-90"
                    title="Linkedin"
                  >
                    <i className="fab fa-linkedin-in fa-2x xl:fa-4x text-dodgerblue"></i>
                  </a>
                </Link>
                <Link href="/#facebook">
                  <a
                    className="absolute flex items-center justify-center bottom-0 right-0 bg-[#FEF6E3] h-[120px] w-[120px] rounded-[50%] opacity-90"
                    title="Facebook"
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
                        A full-stack engineer can get a project done from start
                        to finish. This Career Path will start with the
                        front-end, move on to the back-end, then teach you how
                        to connect the two.
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
                  <Link href="/">
                    <a title="Download Resume" aria-label="Download Resume">
                      Download Resume
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
