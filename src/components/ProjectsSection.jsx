import Section from "./Section"
import ProjectCard from "./ProjectCard"
import { siteData } from "../data/site"
import LocaleFade from "./LocaleFade"

function ProjectsSection({ locale, language }) {
  return (
    <Section
      id="projects"
      title={locale.sections.projects}
      language={language}
    >
    <LocaleFade localeKey={locale.sections.projects}>
     <div className="space-y-5"> 
      {siteData.projects.map((project) => (
        <ProjectCard
          key={project.title.en}
          title={project.title[language]}
          desc={project.desc[language]}
          tags={project.tags}
          github={project.github}
          demo={project.demo}
          language={language}
        />
      ))}
     </div> 
     </LocaleFade> 
    </Section>
  )
}

export default ProjectsSection