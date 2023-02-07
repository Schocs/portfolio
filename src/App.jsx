import { useState } from 'react'
import About from './components/About'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div>
      <Sidebar />
      <Main />
      <About />
      <Projects />
    </div>
  )
}

export default App
