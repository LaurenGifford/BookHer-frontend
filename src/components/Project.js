import ModelCard from "./ModelCard";

function Project({models}) {
    const modelsarray = models.map((model) => (
    <ModelCard 
        key={model.id} 
        model={model} 
        project={"old"}
    />))
    
    return (
        <div className="project-container">
            <h2> Project Name</h2>
            <section>
            <p>Date</p>
            <p>City</p>
            <p>Casting Director</p>
            <p>Budget</p>
            </section>
            <div className="models-container">
            {modelsarray}
            </div>
        </div>
    )
    }

export default Project