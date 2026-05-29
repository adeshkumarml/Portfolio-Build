function Button({ href, children, target, rel, className="", }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`
        inline-flex items-center gap-2
        px-5 py-3
        rounded-md
        text-sm
        border border-indigo-300/60
        dark:border-indigo-950/60
        hover:bg-indigo-700/80
        hover:text-white
        dark:hover:bg-indigo-900
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-sm
        font-medium
        tracking-[0.05em]
        active:opacity-70 
        active:scale-[0.98]
        active:text-white
        active:bg-indigo-700
        ${className}
      `}
    >
      {children}
    </a>
  )
}

export default Button