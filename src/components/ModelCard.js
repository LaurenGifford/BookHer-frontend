import React, {useState} from "react"

function ModelCard({model, project}) {
    const {id, name, image, agency, age, city, ranking, shows_walked, height, special_skills, fee, insta_followers} = model
    
    return (
        <div className={"model-card"}>
            <h3>{name} | Ranking: {ranking}</h3> 
            <img src={image} ></img><br/>
            <small> Agency: {agency} | {city}</small> 
            <p> Age: {age}</p>
            <p> Height: {height}cm</p>
            <p> Fee: ${fee}</p>
            <p> Number of Shows Walked: {shows_walked}</p>
            <p> Special Skills: {special_skills}</p>
            <p> Instagram Followers: {insta_followers}</p>
    </div>
    )
}

export default ModelCard