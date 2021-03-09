import ModelCard from "./ModelCard";
import React, {useState} from "react"

function Project({models, project, currentUser, deleteProject}) {
    const [showProject, setShowProject] = useState(false)
    const {id, title, date, budget, city} = project
    const [thisProjectsModels, setThisProjectsModels] = useState(models)
    
    const modelsarray = thisProjectsModels.map((model) => (
    <ModelCard 
        key={model.id} 
        model={model} 
        exists={true}
        deleteModelfromProject={deleteModelfromProject}
    />))

    function deleteModelfromProject(deleteModel) {
        let modelsToKeep = models.filter((model) => model.id !== deleteModel)
        setThisProjectsModels(modelsToKeep)
    }
    
    return (
        <div className="project-container">
            <h2 onClick={() => setShowProject(!showProject)}> Project: {title} </h2>
            {showProject ? <>
            <section>
            <p>Date: {date} </p>
            <p>City: {city} </p>
            <p>Casting Director: {currentUser.name} </p>
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