import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Educations from './components/Educations'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {
  return (
    <main className='min-h-screen relative text-white'>
      <Navbar />
      <HeroSection />
      <div className='px-5'>
        <About />
        <Skills />
        <Educations />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

export default App
