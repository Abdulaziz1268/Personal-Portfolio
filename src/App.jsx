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
      {/* <div className="w-full h-52 bg-amber-700 dark:bg-gray-950"></div> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
