import './App.scss'
import Layout from './components/Layout'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <HashRouter>
        <HashRouter path="/" element={<Layout />}>
          <HashRouter index element={<Home />} />
          <HashRouter path="contact" element={<Contact />} />
          <HashRouter path="about" element={<About />} />
      </HashRouter>
      </HashRouter>
  )
}

export default App;
