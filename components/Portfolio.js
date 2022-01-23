import Image from "next/image";
import coderscorner from "../public/portfolio/coderscorner.gif";
import comfyhouse from "../public/portfolio/comfyhouse.png";
import crystalCollector from "../public/portfolio/crystalCollector.png";
import dentsoft from "../public/portfolio/dent-soft.gif";
import issueTracker from "../public/portfolio/issueTracker.png";
import vidly from "../public/portfolio/vidly.png";
import arrowRight from "../public/icons/arrow-right.svg";
import styles from "../styles/Portfolio.module.css";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container mx-w-xl">
        <h1 className="font-bold text-4xl text-center xl:text-5xl mb-12">
          Portfolio
        </h1>
        <div className={styles.grid}>
          <div className={`${styles.card} m-4 card`}>
            <Image
              className="rounded"
              src={coderscorner}
              alt="Coders Corner Project"
              width={350}
              height={250}
            />
            <div className={styles.cardBody}>
              <h2 className="text-center font-bold text-2xl md:text-1xl my-3">
                Coders Corner
              </h2>
              <p>
                Asimple application for improving coding(software development)
                Skills(for students and mentors).
              </p>
              <Link href="/projects/coders-corner">
                <a>Read more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.card} m-4 card`}>
            <Image
              className="rounded"
              src={comfyhouse}
              alt="Comfy House Project"
              width={350}
              height={250}
            />
            <div className={styles.cardBody}>
              <h2 className="text-center font-bold text-2xl md:text-1xl my-3">
                Comfy House
              </h2>
              <p>A simple ecomerce shopping cart</p>
              <Link href="/projects/comfy-house">
                <a>Read more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.card} m-4 card`}>
            <Image
              className="rounded"
              src={crystalCollector}
              alt="Crystal Collector Project"
              width={350}
              height={250}
            />
            <div className={styles.cardBody}>
              <h2 className="text-center font-bold text-2xl md:text-1xl my-3">
                Crystal Collector
              </h2>
              <p>
                You will be given a random number at the start of the game.
                There are four crystals below. By clicking on a crystal you will
                add a specific amount of points to your total score.
              </p>
              <Link href="/projects/crystall-collector">
                <a>Read more</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
