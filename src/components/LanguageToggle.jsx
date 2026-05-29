function LanguageToggle({ language, setLanguage }) {
  return (
    <button
      onClick={() =>
        setLanguage(language === "en" ? "jp" : "en")
      }
      className="
        text-sm
        text-neutral-500
        hover:text-neutral-900
        dark:hover:text-neutral-100
        transition-colors
      "
    >
      {language === "en" ? "日本語" : "English"}
    </button>
  )
}

export default LanguageToggle