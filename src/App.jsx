import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Error404 from './pages/Error404.jsx'
import NewSuperHeroes from './pages/NewSuperHeroes.jsx'
import CustomSuperHero from './pages/CustomSuperHero.jsx'
import CreateSuperHero from './pages/CreateSuperHero.jsx'
import SuperHeroDetails from './pages/SuperHeroDetails.jsx'
import CustomSuperHeroDetails from './pages/CustomSuperHeroDetails.jsx'
import ComicsPage from './pages/ComicsPage.jsx'
import ComicDetails from './pages/ComicDetails.jsx'
import SearchByNameInMarvelApiPage from './pages/SearchByNameInMarvelApiPage.jsx'

function App() {
  
  const [marvelSuperheroes, setMarvelSuperheroes] = useState([]);
  const [newSuperheroes, setNewSuperheroes] = useState([]);
  const [comics, setComics] = useState([]);


  return (
    <div className='app-page'>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home marvelSuperheroes={marvelSuperheroes} setMarvelSuperheroes={setMarvelSuperheroes} />} />
            <Route path="/new-superheroes" element={<NewSuperHeroes newSuperheroes={newSuperheroes} setNewSuperheroes={setNewSuperheroes} />} />
            <Route path="/custom-superhero/:id" element={<CustomSuperHero setNewSuperheroes={setNewSuperheroes} />} />
            <Route path="/create-superhero" element={<CreateSuperHero setNewSuperheroes={setNewSuperheroes} />} />
            <Route path="/superhero-details/:id" element={<SuperHeroDetails />} />
            <Route path="/custom-superhero-details/:id" element={<CustomSuperHeroDetails newSuperheroes={newSuperheroes} setNewSuperheroes={setNewSuperheroes} />} />
            <Route path="/search-marvel" element={<SearchByNameInMarvelApiPage marvelSuperheroes={marvelSuperheroes} setMarvelSuperheroes={setMarvelSuperheroes} />} />
            <Route path="/comics-page" element={<ComicsPage  comics={comics} setComics={setComics} />}  />
            <Route path="/comic-details/:id" element={<ComicDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
    </div>
  )
}

export default App

