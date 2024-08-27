import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechList from "./components/techList";

export default function App() {
  return (
    <main className="font-light text-white selection:bg-lime-300 selection:text-black antialiased ">
      <Navbar/>
      <Hero/>
      <TechList/>
      <Projects/>
      <hr className="border-t border-gray-600 w-1/4 mx-auto"/>
      <About/>
      <hr className="border-t border-gray-600 w-1/4 mx-auto"/>
      <Experience/>
      <hr className="border-t border-gray-600 w-1/4 mx-auto"/>
      <Contact/>
    </main>
  )
}









// antialiased in tailwind css for text smoothing  and  improve the rendering of text