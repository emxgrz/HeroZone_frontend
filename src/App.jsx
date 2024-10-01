import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Error404 from './pages/Error404.jsx'
import NewSuperHeroes from './pages/NewSuperHeroes.jsx'
import CustomSuperHero from './pages/CustomSuperHero.jsx'
import CreateSuperHero from './pages/CreateSuperHero.jsx'


function App() {
  
  const [ marvelSuperheroes, setMarvelSuperheroes ] = useState([])
  const [ newSuperheroes, setNewSuperheroes ] = useState([])


  // console.log(newSuperheroes, setNewSuperheroes)


  return (
    <div className='app-page'>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home marvelSuperheroes={marvelSuperheroes} setMarvelSuperheroes={setMarvelSuperheroes} />} />
          <Route path="/new-superheroes" element={<NewSuperHeroes newSuperheroes={newSuperheroes} setNewSuperheroes={setNewSuperheroes} />} />
          {/* <Route path="/new-superheroes" element={<NewSuperHeroes />} /> */}
          <Route path="/custom-superhero/:id" element={<CustomSuperHero setNewSuperheroes={setNewSuperheroes} />} />
          <Route path="/create-superhero/:id" element={<CreateSuperHero setNewSuperheroes={setNewSuperheroes} />} />
          {/* <Route path="/custom-superhero/:id" element={<CustomSuperHero />} />
          <Route path="/create-superhero/:id" element={<CreateSuperHero />} /> */}

          {/* <Route path="/favorite-superheroes" element={<FavoriteSuperHeroes />} /> */}
          {/* <Route path="/comics-page" element={<ComicsPage />} /> */}
          {/* <Route path="/comic-details/:id" element={<ComicDetails />} /> */}
          {/* <Route path="/superhero-details/:id" element={<SuperHeroDetails />} /> */}

          {/* <Route path="/superhero-details" element={<SuperHeroDetails />} /> */}

          <Route path="/About" element={<AboutPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />

    </div>
  )
}

export default App

