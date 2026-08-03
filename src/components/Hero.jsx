import Button from "./Button"

function Hero({ locale, language }) {
  return (
    <section className="py-28 md:py-40 transition-opacity duration-300">
      <div key={locale.hero.title} className={`max-w-7xl ${language === "jp" ? "font-jp" : "font-en"}`}>
        <p style={{animationDelay:"0.20s"}}
          className={`
            animate-float-in 
            ${language === "jp" ? "tracking-[0.75em]" : "tracking-[0.14em] text-sm uppercase"} 
            text-neutral-500 
            dark:text-neutral-500
            dark:drop-shadow-[0_0_10px_rgba(99,102,241,0.08)]
            `}>
              {locale.hero.label}
        </p>

        <h1
          style={{animationDelay:"0.45s"}}
          className={`
            animate-float-in
            mt-6
            text-5xl md:text-6xl lg:text-7xl
            font-medium
            max-w-5xl
            text-indigo-700/80
            dark:text-indigo-300/80
            dark:drop-shadow-[0_0_18px_rgba(99,102,241,0.10)]
            ${language === "jp" ? "tracking-[-0.01em] leading-[1.5]" : "tracking-[-0.03em] leading-[1.02]"}
          `}
        >
          {locale.hero.title}
        </h1>

        <p
          style={{animationDelay:"0.70s"}}
          className={`
            animate-float-in
            mt-8
            text-lg md:text-xl
            ${language === "jp" ? "tracking-[0.05em] leading-[1.5]" : "leading-relaxed"}  
            text-neutral-700
            dark:text-neutral-300
            max-w-3xl
            dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.03)]
          `}
        >
          {locale.hero.description}
        </p>

        <div style={{ animationDelay:"0.95s"}} className="animate-float-in mt-12 flex flex-wrap gap-4">
          <Button href="#projects">
            {locale.hero.buttons.work}
          </Button>

          <Button href="#contact">
            {locale.hero.buttons.contact}
          </Button>
        </div>

        <div style={{ animationDelay:"1.0s"}} className="animate-float-in mt-15">
         <div className="mt-10 w-full max-w-[610px]"> 
            <Button href="/Adesh Kr Sahoo Resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    w-full
                    justify-center
                    px-8
                    py-4
                    text-base
                    text-xl
                    font-medium
                    tracking-[0.01em]
                    border-indigo-200/70
                    dark:border-indigo-900/70
                    bg-indigo-50/60
                    dark:bg-indigo-950/35
                    hover:bg-indigo-700
                    hover:text-white
                    shadow-sm
                    hover:shadow-md
            ">
            📥{locale.hero.buttons.resume}
            </Button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero