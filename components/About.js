import Link from "@/components/Link";
import React from "react";
import SectionContainer from "./SectionContainer";

export default function About() {
  return (
    <section
      id="about"
      className="dark:text-gray-100 dark:bg-gray-700 py-section-y"
    >
      <SectionContainer>
        <div className="text-left">
          <h2 className="text-3xl text-center font-bold sm:text-4xl xl:text-5xl mb-12">
            I&apos;m a junior full-stack developer
          </h2>
          <p>
            I have an associate degree in medicine. I&apos;m really interested
            in technology & solving technical problems. I create responsive and
            interactive web apps, With focus on back-end. In my free times I
            play volleball and enjoy family time with my lovely dauther, watch
            movies and learn new stuff. You can know more about me by reading my{" "}
            <Link href="/blog" className="text-anchor p-3 hover:underline">
              articles.
            </Link>
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
