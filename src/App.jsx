import "./App.css"
import NavBar from "./Components/NavBar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="w-screen h-screen no-scrollbar">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Theme works!</h1>
      </div>
    </div>
  )
}

export default App
