import Image from 'next/image'
import SectionContainer from './SectionContainer'
import {skills} from '@/data/skills'

export default function Skills() {
  return (
    <section
      id="skills"
      className="pb-section-pb pt-section-pt dark:text-gray-100"
    >
      <SectionContainer>
        <h2 className="mb-12 text-center text-3xl font-extrabold sm:text-4xl xl:text-5xl">
          Skills
        </h2>
        <div className="align-center flex flex-wrap justify-between gap-10">
          {skills.map(skill => (
            <div
              key={skill.title}
              className="transition-all duration-300 ease-in-out hover:scale-150"
              title={skill.title}
            >
              <Image
                src={skill.skill}
                alt={skill.title}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
