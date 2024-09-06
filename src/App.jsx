import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-300 selection:text-blue-900'>
      
      <div className="fixed inset-0 -z-10 w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-center bg-cover"></div>
      
      
      <div className="container m-auto px-8">
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
