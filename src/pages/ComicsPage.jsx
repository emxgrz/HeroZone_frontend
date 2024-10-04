import ComicList from "../components/ComicList";

function ComicsPage({ comics, setComics }) {
  return (
    <div>
      <h1 className="home-title">Marvel comics</h1>
      <ComicList comics={comics} setComics={setComics} />
    </div>
  );
}

export default ComicsPage;
