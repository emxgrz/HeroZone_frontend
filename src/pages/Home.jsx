import SuperHeroesList from "../components/SuperHeroesList"
import Carousel from 'react-bootstrap/Carousel';
import marvelLogo from "../assets/logos/images/marvel-comics-logo.jpg"
import image1 from "../assets/logos/images/image1.jpg"
import image2 from "../assets/logos/images/image2.jpg"
import image3 from "../assets/logos/images/image3.jpg"
import image4 from "../assets/logos/images/image4.jpg"
import image5 from "../assets/logos/images/image5.jpg"
import image6 from "../assets/logos/images/image6.jpg"
import image7 from "../assets/logos/images/image7.jpg"
import "./carousel.css"


function Home({ marvelSuperheroes, setMarvelSuperheroes }) {
  return (

    <div>
      <div className="carousel-container">
      <h1 className="home-title" id="new-releases">New releases!</h1>
      
      <Carousel className="carousel">
      
      <Carousel.Item>
        <img src={marvelLogo} alt="First slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={image1} alt="second slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="third slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="fourth slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={image4} alt="fifth slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={image5} alt="sixth slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={image6} alt="seventh slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={image7} alt="eighth slide" />
        
      </Carousel.Item>
      
    </Carousel>
    </div>
      <h1 className="home-main-title">choose your superhero</h1>
      <p className="hero-message">
        Pick your favorite superhero and shape their destiny.<br></br>
        The Marvel universe is yours to command.
      </p>
      <SuperHeroesList marvelSuperheroes={marvelSuperheroes} setMarvelSuperheroes={setMarvelSuperheroes} />
    </div>

  )
}

export default Home