import SectionContainer from "./SectionContainer";

export default function Banner() {
  return (
    <section id="banner" className="mb-[-50px] text-gray-100">
      <div
        className="bg-fixed bg-cover bg-origin-content md:bg-center bg-no-repeat h-screen min-h-[600px] pt-44"
        style={{ backgroundImage: "url(/bg-images/01.png)" }}
      >
        <SectionContainer>
          <div className="text-left max-w-3xl">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 xl:text-7xl mb-8">
              Hi There,
              <br />
              I&apos;m Mojib Mohammad
            </h1>
            <p>Junior full stack developer</p>
            <div className="mt-10">
              <a
                href="#resume"
                target="_blank"
                rel="noopener noreferrer"
                title="Resumt"
                aria-label="Resume"
                className="transition-all duration-300 ease-in-out bg-banner-gradient inline-block py-5 px-10 sm:py-7 sm:px-16 hover:rounded-full"
              >
                Download Resume
              </a>
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  );
}
