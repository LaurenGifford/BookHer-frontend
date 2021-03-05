import ModelCard from "./ModelCard";

function Project({models, project, currentUser, deleteProject}) {

    const {id, title, date, budget, city} = project
    const modelsarray = models.map((model) => (
    <ModelCard 
        key={model.id} 
        model={model} 
        project={"old"}
    />))
    
    return (
        <div className="project-container">
            <h2> Project: {title} </h2>
            <section>
            <p>Date: {date} </p>
            <p>City: {city} </p>
            <p>Casting Director: {currentUser} </p>
            <p>Budget: ${budget} </p>
            <button onClick={() => deleteProject(id)}>Delete Project</button>
            </section>
            <div className="models-container">
            {modelsarray}
            </div>
        </div>
    )
    }

export default Project