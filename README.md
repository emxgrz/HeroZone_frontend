# HeroZone
![HeroZone Logo](https://logos-world.net/wp-content/uploads/2020/12/Marvel-Entertainment-Logo.png)

## See the App!
[HeroZone Deployment](https://herozone.netlify.app/)


## Description
HeroZone is an interactive app where users can explore a vast collection of Marvel characters, comics, and related information. Additionally, users can create their own custom superheroes with unique abilities and attributes.

[Client Repo here](#)  
[Server Repo here](#)

## Technologies, Libraries & APIs used
- Frontend: HTML, CSS, JavaScript, React
- Backend: Node.js
- API: Marvel API
- Libraries: Axios, React Router, Bootstrap

## Backlog Functionalities
- **Favorite Characters**: Option to save favorite characters or comics to a personal list.
- **Comics Search Filter**: Add advanced search filters for comics (by year, writer, etc.).
- **Community Heroes**: Showcase the top custom superheroes created by the community.

## Client Structure
### User Stories

### User Stories

1. **404 Page**: Users encounter a visually appealing 404 page when navigating to a non-existent page, providing clarity and a touch of creativity.
2. **Homepage**: The homepage presents an engaging introduction to the app and the Marvel universe.

3. **Character List**: Users can easily browse through an extensive list of all Marvel characters available in the app, enhancing their exploration experience.

4. **Character Detail**: Detailed information about selected Marvel characters is readily accessible, enriching user knowledge and engagement.

5. **Comic List**: Users enjoy the ability to browse all comics with comprehensive details available for each one, making comic exploration seamless.

6. **Create Custom Superhero**: Users experience the excitement of creating their own superhero, complete with custom powers and unique attributes.

7. **Edit Superhero**: Users can effortlessly customize and refine the superheroes details, enhancing their overall experience and connection to their imagination.


8. **Delete Superhero**: Users can easily remove their custom superhero if they choose, providing full control over their creations.
.

## Client Routes
| Method | Endpoint                             | Purpose                       | Description                                                           |
|--------|--------------------------------------|-------------------------------|-----------------------------------------------------------------------|
| GET    | /newsuperheroes                      | Fetch New Superheroes          | Fetch new superheroes from JSON server                                |
| POST   | /newsuperhero                        | Create New Superhero           | Create a new superhero and store it on the JSON server                |
| PUT    | /newsuperhero/:newsuperheroid        | Edit New Superhero             | Edit a superhero that already exists in the JSON server               |
| DEL    | /newsuperhero/:newsuperheroid        | Delete New Superhero           | Delete a superhero that already exists in the JSON server             |
| GET    | /v1/public/characters                | Fetch Marvel Superheroes       | Fetch list of all characters from the Marvel API                      |
| GET    | /v1/public/comics                    | Fetch Marvel Comics            | Fetch list of all comics from the Marvel API                          |
| GET    | /v1/public/characters/:id            | Fetch Marvel Superheroes by ID | Fetch a character from the Marvel API by ID                           |
| GET    | /v1/public/comics/:id                | Fetch Marvel Comics by ID      | Fetch a comic from the Marvel API by ID                               |


## Other Components
- **Navbar**: Contains links to the homepage, search character filter, new superheroes, comic list, create character, about us. 
- **Footer**: Displays app credits, social media links, and other resources.

## Links
### Collaborators
- Developer 1: [Clara Seijo LinkedIn](https://www.linkedin.com/in/claraseijo/)
- Developer 2: [Emma Martinez Garcia LinkedIn](https://www.linkedin.com/in/emma-martinez-garcia/)


### Project
- [Repository Link Client](https://github.com/emxgrz/HeroZone_frontend)
- [Repository Link Server](https://github.com/emxgrz/HeroZone_backend)
- [Deploy Link](https://herozone.netlify.app/)


### Trello
[Link to Figma Board](https://www.figma.com/board/UR2PcQlkXaz0ddGHwGnYO8/HeroZone?node-id=0-1&t=c6dZ4v5jSiqJZgII-1)

### Slides
[Slides Link](#)
