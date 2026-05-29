import "@fontsource/caveat";
import LocaleFade from "./LocaleFade";
import { useEffect, useState } from "react";

function Navbar({ darkMode, setDarkMode, ThemeToggle, language, setLanguage, locale, LanguageToggle }) {
    
    const [activeSection, setActiveSection] = useState("")
    useEffect(() => {
    const sections =
        document.querySelectorAll("section[id]")

    const observer =
        new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id)
            }
            })
        },
        {
            threshold: 0.2,
            rootMargin: "-90px 0px -35% 0px",
        }
        )

    sections.forEach((section) =>
        observer.observe(section)
    )

    return () =>
        sections.forEach((section) =>
        observer.unobserve(section)
        )
    }, [])

    return (
    <nav className="animate-float-in sticky top-0 z-50 w-full backdrop-blur-lg bg-neutral-115/80 border-b border-neutral-200/10 dark:bg-neutral-950/80 dark:border-neutral-800/60">
    <div className="max-w-7xl mx-auto px-8 md:px-12">
    <LocaleFade localeKey={language}>
    <div className="flex flex-wrap justify-between items-center py-5">
      <div className="text-2xl md:text-3xl lg:text-5xl 
      tracking-wide text-neutral-600 dark:text-neutral-400 transition-colors">
        <span className="font-[Caveat] font-semibold hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
            <a href="#">Adesh Kumar Sahoo</a>
        </span>
      </div>

      <div className={`flex flex-wrap gap-5 md:gap-10 text-sm text-neutral-500 gap-y-5 py-6 md:py-8`}>
        <a
        href="#about"
        className={`
            relative
            transition-colors duration-300
            ${activeSection === "about" ? "text-indigo-600 dark:text-indigo-300 after:w-full": "text-neutral-500 hover:text-indigo-700 dark:hover:text-indigo-300 hover:after:w-full active:opacity-90 active:text-indigo-700 active:dark:text-indigo-300"}
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-px
            after:w-0
            after:bg-current
            after:transition-all
            `}
        >
            {locale.nav.about}
        </a>
        <a 
        href="#projects"
        className={`
            relative
            transition-colors duration-300
            ${activeSection === "projects" ? "text-indigo-600 dark:text-indigo-300 after:w-full": "text-neutral-500 hover:text-indigo-700 dark:hover:text-indigo-300 hover:after:w-full active:opacity-90 active:text-indigo-700 active:dark:text-indigo-300"}
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-px
            after:w-0
            after:bg-current
            after:transition-all
            `}
        >
            {locale.nav.projects}
        </a>
        <a 
        href="#contact"
        className={`
            relative
            transition-colors duration-300
            ${activeSection === "contact" ? "text-indigo-600 dark:text-indigo-300 after:w-full": "text-neutral-500 hover:text-indigo-700 dark:hover:text-indigo-300 hover:after:w-full active:opacity-90 active:text-indigo-700 active:dark:text-indigo-300"}
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-px
            after:w-0
            after:bg-current
            after:transition-all
            `}
        >
            {locale.nav.contact}
        </a>
        <ThemeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
        />
        <LanguageToggle
            language={language}
            setLanguage={setLanguage}
        />
      </div>

    </div>
    </LocaleFade>
    </div>
    </nav>
  )
}

export default Navbar