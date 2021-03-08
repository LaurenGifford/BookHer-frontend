import ModelCard from "./ModelCard";
import React, {useState} from "react"

function Project({models, project, currentUser, deleteProject}) {
    const [showProject, setShowProject] = useState(false)
    const {id, title, date, budget, city} = project
    
    const modelsarray = models.map((model) => (
    <ModelCard 
        key={model.id} 
        model={model} 
        exists={true}
    />))
    
    return (
        <div className="project-container">
            <h2 onClick={() => setShowProject(!showProject)}> Project: {title} </h2>
            {showProject ? <>
            <section>
            <p>Date: {date} </p>
            <p>City: {city} </p>
            <p>Casting Director: {currentUser} </p>
            <p>Budget: ${budget} </p>
            <button onClick={() => deleteProject(id)}>Delete Project</button>
            </section>
            <div className="models-container">
            {modelsarray}
            </div> </>
            : null }
        </div>
    )
    }

export default Project