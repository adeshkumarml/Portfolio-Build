import Section from "./Section"
import { siteData } from "../data/site"
import LocaleFade from "./LocaleFade"

function ContactSection({ locale, language }) {
  return (
    <Section
      id="contact"
      title={locale.sections.contact}
      language={language}
    >
    <LocaleFade localeKey={locale.sections.contact}>  
      <div className="flex flex-col gap-4 text-neutral-700 dark:text-neutral-300">
        <a
          href={siteData.contact.github} target="_blank" rel="noopener noreferrer"
          className="
            group
            hover:text-indigo-700
            dark:hover:text-indigo-300
            transition-colors
            w-fit
            active:opacity-70
            active:scale-[0.98]
            active:text-indigo-700
            active:dark:text-indigo-300
          "
        >
          <span className="inline-flex items-center gap-2">
            {locale.contact.github}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
              ↗
            </span>
          </span>
        </a>

        <a
          href={siteData.contact.linkedin} target="_blank" rel="noopener noreferrer"
          className="
            group
            hover:text-indigo-700
            dark:hover:text-indigo-300
            transition-colors
            w-fit
            active:opacity-70
            active:scale-[0.98]
            active:text-indigo-700
            active:dark:text-indigo-300
          "
        >
          <span className="inline-flex items-center gap-2">
            {locale.contact.linkedin}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
              ↗
            </span>
          </span>
        </a>

        <a
          href={siteData.contact.email}
          className="
            group
            hover:text-indigo-700
            dark:hover:text-indigo-300
            transition-colors
            w-fit
            active:opacity-70
            active:scale-[0.98]
            active:text-indigo-700
            active:dark:text-indigo-300
          "
        >
          <span className="inline-flex items-center gap-2">
            {locale.contact.email}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
              ↗
            </span>
          </span>
        </a>
      </div>
    </LocaleFade>  
    </Section>
  )
}

export default ContactSection