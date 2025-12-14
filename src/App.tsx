import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StarField from './components/StarField'

function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-x-hidden">
        {/* Space Background */}
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <StarField />
        <div className="relative z-10 text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Contact />
                </>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App