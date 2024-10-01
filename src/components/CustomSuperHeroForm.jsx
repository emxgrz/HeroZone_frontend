import { useState } from "react";

function CreateSuperHeroForm({setNewSuperheroes}) {
  // function CreateSuperHeroForm() {
  const [name, setName] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  //crear variable para que vuelva a home con navigate

  const handleNameChange = (event) => setName(event.target.value)
  const handleAuthorChange = (event) => setAuthor(event.target.value)
  const handleDescriptionChange = (event) => setDescription(event.target.value)
  const handleImageChange = (event) => setImge(event.target.value)

  const handleAddSuperhero = (event) => {
    event.preventDefault()

    const newSuperhero = {
      //id:
      name,
      author,
      description,
      image,

    }

      //aquí estaría el set data que viene de app para actualizar el estado con el nuevo personaje. Se usaría así:
  // setData((actualSuperheroes) => [newSuperhero, ...actualSuperheroes])
  }



  return (
    <div>CreateOrUpdateForm</div>
  )
}

export default CreateSuperHeroForm