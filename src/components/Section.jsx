import { motion } from "framer-motion"
import LocaleFade from "./LocaleFade"

function Section({ id, title, children, language }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75 }}
      className="py-20 md:py-24 border-t border-neutral-200/60 dark:border-neutral-800/60 scroll-mt-28"
    >
    <LocaleFade localeKey={title}>  
      <h2 className={`
      ${language === "jp"? "text-lg tracking-[0.25em]" : "text-md uppercase tracking-[0.18em]"} 
      text-indigo-500 
      dark:text-indigo-300`}>
        {title}
      </h2>
    </LocaleFade>
    <div className="mt-14 md:mt-16">
      {children}
    </div>
    </motion.section>
  )
}

export default Section