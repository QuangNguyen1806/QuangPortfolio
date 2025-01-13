import './App.scss'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <Routes> 
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} path = 'https://quangnguyen1806.github.io/QuangPortfolio/'/>
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
      </Route>
      </Routes>
  )
}

export default App;
