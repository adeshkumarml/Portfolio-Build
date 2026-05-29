import Button from "./Button"

function ProjectCard({
  title,
  desc,
  tags,
  github,
  demo,
  language
}) {
  return (
    <div
      className={`
        px-6 py-7
        leading-relaxed
        rounded-lg
        border border-indigo-200/50
        dark:border-indigo-950/50
        transition-all duration-300 ease-out
        hover:bg-neutral-100
        dark:hover:bg-neutral-900
        hover:border-indigo-100
        dark:hover:border-neutral-800
        hover:shadow-md
        hover:-translate-y-2
        text-md
        font-md
      `}
    >
      <div className="flex flex-col gap-4">
        <h3 className={`text-xl font-medium ${language === "jp"?"tracking-[0.1em]":"tracking-[-0.02em]"}`}>
          {title}
        </h3>

        <p className={`text-neutral-600 dark:text-neutral-400 leading-relaxed ${language === "jp"?"tracking-[0.07em]":"tracking-[-0.02em]"}`}>
          {desc}
        </p>

        <div className="flex flex-wrap gap-8 text-sm text-neutral-500">
          {tags.map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-1">
          {github && (
            <Button href={github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </Button>
          )}

          {demo && (
            <Button href={demo} target="_blank" rel="noopener noreferrer">
              Demo ↗
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard