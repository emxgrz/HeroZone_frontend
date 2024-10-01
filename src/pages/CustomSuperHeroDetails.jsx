// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function CustomSuperHeroDetails() {
//   const { id } = useParams(); // Get the ID from the URL
//   const [superHero, setSuperHero] = useState(null);

//   useEffect(() => {
//     const fetchSuperHeroDetails = async () => {
//       try {

//         const response = await axios.get(`http://localhost:4000/newsuperheroes/${id}`);

//         setSuperHero(response.data.data.results[0])
//       } catch (error) {
//         console.log("Error fetching hero details: ", error);
//       }
//     };

//     fetchSuperHeroDetails();
//   }, [id]);

//   if (!superHero) {
//     return <p>Loading...</p>; // add managing animations !!!
//   }

//   // const { name, description, thumbnail } = superHero;
//   // const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
//   // ADD INFO FROM NEW SH JSON

//   return (
//     <div className="container my-5" id="superhero-details">
//       <div className="row justify-content-center">
//         <div className="col-md-6 text-center">
//           <img src={imageUrl} alt={name} className="img-fluid rounded mb-4" />
//           <h2 className="mb-3">{name}</h2>
//           <p>{description || "No description available"}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomSuperHeroDetails;
