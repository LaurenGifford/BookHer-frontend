import React, {useState} from "react"

function ModelCard({model, project, newProject, handleBudget}) {
    const [showDetails, setShowDetails] = useState(false)
    const {id, name, image, agency, age, city, ranking, shows_walked, height, special_skills, fee, insta_followers} = model
    
    function handleConfirmModel(){
        let newJob = {model_id: parseInt(model.id), project_id: newProject.id}
        fetch("http://localhost:3000/jobs", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newJob)
        })
          .then((r) => r.json())
          .then((data) => {
            console.log(data)
          })
          handleBudget(fee)
        }

    return (
        <div className="model-card">
            <h3>{name} | Ranking: {ranking}</h3> 
            <img src={image} alt={name}></img><br/>
            <button onClick={handleConfirmModel}>Confirm</button>
            <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Hide Details" : "Show Details"}</button>
            {showDetails ?
            <div>
            <small> Agency: {agency} | {city}</small> 
            <p> Age: {age}</p>
            <p> Height: {height}cm</p>
            <p> Fee: ${fee}</p>
            <p> Number of Shows Walked: {shows_walked}</p>
            <p> Special Skills: {special_skills}</p>
            <p> Instagram Followers: {insta_followers}</p>
            </div>
        : null }
    </div>
    )
}

export default ModelCard