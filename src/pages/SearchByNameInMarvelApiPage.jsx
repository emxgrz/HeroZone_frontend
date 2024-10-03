import MarvelApiSearch from "../components/MarvelApiSearch"

function SearchByNameInMarvelApiPage({ marvelSuperheroes, setMarvelSuperheroes }) {
  return (
    <div className="search-page">
      <h1 className="new-super-title">search Marvel characters</h1>
      <MarvelApiSearch marvelSuperheroes={marvelSuperheroes} setMarvelSuperheroes={setMarvelSuperheroes} />
    </div>
  )
}

export default SearchByNameInMarvelApiPage