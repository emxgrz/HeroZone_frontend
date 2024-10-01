// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function CustomSuperHeroDetails() {
//   const { id } = useParams(); 
//   const [superHero, setSuperHero] = useState(null);

//   useEffect(() => {
//     const fetchSuperHeroDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/newsuperheroes/${id}`);
//         setSuperHero(response.data) // fetch from JSON server

//       } catch (error) {
//         console.log("Error fetching hero details: ", error)
//       }
//     };

//     fetchSuperHeroDetails();
//   }, [id]);

//   if (!superHero) {
//     return <p>Loading...</p>; // add managing animations !!!
//   }

//   const { name, description, image } = superHero // JSON data
//   // ADD more info if needed !!!

//   return (
//     <div className="container my-5" id="superhero-details">
//       <div className="row justify-content-center">
//         <div className="col-md-6 text-center">
//           <img src={image} alt={name} className="img-fluid rounded mb-4" />
//           <h2 className="mb-3">{name}</h2>
//           <p>{description || "No description available"}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomSuperHeroDetails;
