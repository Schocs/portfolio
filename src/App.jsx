import { useState } from 'react'
import About from './components/About'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div>
      <Sidebar />
      <Main />
      <About />
    </div>
  )
}

export default App
