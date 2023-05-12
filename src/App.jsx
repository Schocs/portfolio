import { useState } from 'react'
import About from './components/About'
import Contact from './components/ItemContato/Contact'
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
      <Contact />
    </div>
  )
}

export default App
