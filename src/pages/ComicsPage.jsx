import ComicList from "../components/ComicList"

function ComicsPage({ comics, setComics }) {
  return (
    <div>
      <ComicList  comics={comics} setComics={setComics}/>
    </div>
  )
}

export default ComicsPage