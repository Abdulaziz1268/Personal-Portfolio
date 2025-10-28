import { useEffect, useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  useEffect(() => {
    // Apply theme to <html> element
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="transition-all hover:scale-110 hover:cursor-pointer"
    >
      {theme === "dark" ? (
        <MdLightMode size={30} color="white" />
      ) : (
        <MdDarkMode size={30} color="black" />
      )}
    </div>
  )
}

export default ThemeToggle
