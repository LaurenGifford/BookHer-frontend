import ModelCard from "./ModelCard";

function Project({allModels}) {
    const modelsarray = allModels.map((model) => <ModelCard key={model.id} model={model} />)
    return (
        <div>
        Project
        {modelsarray}
    </div>
    )
    }

export default Project