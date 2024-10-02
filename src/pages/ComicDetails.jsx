import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import GridLoader from "react-spinners/GridLoader"; 

function ComicDetails() {
  const { id } = useParams()
  const [detailComic, setDetailComic] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDetailComicDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/v1/public/comics/${id}`, {
          params: {
            apikey: import.meta.env.VITE_API_KEY,
            ts: import.meta.env.VITE_TIMESTAMP,
            hash: import.meta.env.VITE_HASH
          }
        });

        setDetailComic(response.data.data.results[0])
        setLoading(false)

      } catch (error) {
        console.log("Error fetching comic details: ", error);
        setLoading(false)
      }
    };

    fetchDetailComicDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
        <GridLoader height={50} color="#e23636" />
      </div>
    )
  }

  if (!detailComic) {
    return <p>oops, no comic found</p>
  }

 

  const { title, creators, thumbnail } = detailComic;
  const names = creators.items.map(item => item.name)
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className="container my-5" id="superhero-details">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <img src={imageUrl} alt={title} className="img-fluid rounded mb-4" />
          <h2 className="mb-3">{title}</h2>
          <p>{names[0] || "No description available"}</p>


        </div>
      </div>
    </div>
  );
}

export default ComicDetails;
