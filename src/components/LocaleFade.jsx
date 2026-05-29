function LocaleFade({ localeKey, children }) {
  return (
    <div
      key={localeKey}
      className="
        animate-float-in
        transition-opacity
        duration-300
      "
    >
      {children}
    </div>
  )
}

export default LocaleFade