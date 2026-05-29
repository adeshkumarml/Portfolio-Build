function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        text-lg
        text-sm text-neutral-500
        hover:text-neutral-900
        dark:text-neutral-400
        dark:hover:text-neutral-100
        transition-colors
      "
      aria-label="Toggle theme"
    >
      {darkMode ? "☀" : "☾"}
    </button>
  )
}

export default ThemeToggle