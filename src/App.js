import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skils from './components/skils/Skils'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className='app'>
      <Home />
      {/* <About /> */}
      <Projects />
      {/* <Skils /> */}
      {/* <Contact /> */}
    </div>
  )
}

export default App 
