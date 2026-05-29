import Section from "./Section"
import LocaleFade from "./LocaleFade"

function AboutSection({
  locale,
  language
}) {
  return (
    <Section
      id="about"
      title={locale.sections.about}
      language={language}
    >
      <LocaleFade localeKey={locale.about.paragraphs}>
        <div className="w-full max-w-5xl space-y-8">
        {locale.about.paragraphs.map((paragraph, i) => (
        <p 
          key={i}
          className="
            text-lg
            leading-8 md:leading-9
            text-neutral-600
            dark:text-neutral-400
            text-left
            tracking-[0.05em]
            text=pretty
          "
        >
          {paragraph}
        </p>
        ))}
        </div>
      </LocaleFade>
    </Section>
  )
}

export default AboutSection