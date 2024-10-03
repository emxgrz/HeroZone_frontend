import MarvelApiSearch from "../components/MarvelApiSearch"

function SearchByNameInMarvelApiPage({ marvelSuperheroes, setMarvelSuperheroes }) {
  return (
    <div className="search-page">
      <h1>search Marvel characters by name</h1>
      <MarvelApiSearch marvelSuperheroes={marvelSuperheroes} setMarvelSuperheroes={setMarvelSuperheroes} />
    </div>
  )
}

export default SearchByNameInMarvelApiPage