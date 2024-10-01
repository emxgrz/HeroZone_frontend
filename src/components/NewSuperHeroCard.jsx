function NewSuperHeroCard({ name, image, description }) { // pass 'onClick' if needed !!


  return (
    <div className="new-superhero-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}

export default NewSuperHeroCard