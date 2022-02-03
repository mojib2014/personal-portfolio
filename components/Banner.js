import Link from "./Link";
import SectionContainer from "./SectionContainer";
import PageTitle from "./PageTitle";

export default function Banner() {
  return (
    <section id="banner" className="mb-[-50px] text-gray-100">
      <div
        className="bg-fixed bg-cover bg-origin-content md:bg-center bg-no-repeat h-screen pt-44"
        style={{ backgroundImage: "url(/bg-images/01.png)" }}
      >
        <SectionContainer>
          <div className="text-left max-w-3xl">
            <PageTitle>
              Hi There,
              <br />
              I&apos;m Mojib Mohammad
            </PageTitle>
            <p>Junior full stack developer</p>
            <div className="mt-10">
              <Link
                href="/Mojib-Mohammad-resume.pdf"
                title="Resumt"
                aria-label="Resume"
                className="transition-all duration-300 ease-in-out bg-banner-gradient inline-block py-5 px-10 sm:py-7 sm:px-16 hover:rounded-full"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  );
}
