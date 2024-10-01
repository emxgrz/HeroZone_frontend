import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home.jsx'
import NewSuperHeroes from './pages/NewSuperHeroes.jsx'

function App() {


  return (
    <div className='app-page'>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/new-superheroes" element={<NewSuperHeroes />} />

          {/* <Route path="/custom-superhero/:id" element={<Edit... />} />
          <Route path="/new-superhero/:id" element={<Create... />} /> */}
    
        </Routes>

        <Footer />

    </div>
  )
}

export default App

