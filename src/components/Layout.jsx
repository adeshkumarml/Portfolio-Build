function Layout({ children }) {
  return (
    <main 
      className="
      relative 
      min-h-screen 
      bg-stone-50 
      text-neutral-900 
      dark:bg-neutral-950 
      dark:text-neutral-100 
      transition-colors duration-300">
        {children}
    </main>
  )
}

export default Layout