import Image from 'next/image'
import SectionContainer from './SectionContainer'

const skills: {skill: string; title: string}[] = [
  {skill: '/icons/javascript.gif', title: 'Javascript'},
  {skill: '/icons/python.svg', title: 'Python'},
  {skill: '/icons/django.svg', title: 'Django'},
  {skill: '/icons/docker.svg', title: 'Docker'},
  {skill: '/icons/css3.png', title: 'CSS3'},
  {skill: '/icons/firebase.png', title: 'Fierbase'},
  {skill: '/icons/github.svg', title: 'Github'},
  {skill: '/icons/heroku.svg', title: 'Heroku'},
  {skill: '/icons/html5.png', title: 'HTML5'},
  {skill: '/icons/nextjs.svg', title: 'Nextjs'},
  {skill: '/icons/nodejs.svg', title: 'Nodejs'},
  {skill: '/icons/postgresql.svg', title: 'Postgresql'},
  {skill: '/icons/reactjs.svg', title: 'React'},
  {skill: '/icons/mongodb.svg', title: 'MongoDB'},
  {skill: '/icons/sass.png', title: 'SASS'},
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="pb-section-pb pt-section-pt dark:bg-gray-400 dark:text-gray-100"
    >
      <SectionContainer>
        <h2 className="mb-12 text-center text-3xl font-extrabold sm:text-4xl xl:text-5xl">
          Skills
        </h2>
        <div className="align-center flex flex-wrap justify-center gap-10 md:justify-between">
          {skills.map(skill => (
            <div
              key={skill.title}
              className="transition-all duration-300 ease-in-out hover:scale-150"
              title="JavaScript"
            >
              <Image
                src={skill.skill}
                alt="JavaScript"
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
