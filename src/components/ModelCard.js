import React, {useState} from "react"

function ModelCard({model}) {
    const {name, image, agency, age, city, ranking, shows_walked, height, special_skills, fee, insta_followers} = model
    
    return (
        <div>
            <h2>{name} | Ranking: {ranking}</h2> 
            <img src={image} height="20%" width="20%"></img>
            <p> Agency: {agency} | {city}</p> 
            <p> Age: {age}</p>
            <p> Height: {height}</p>
            <p> Fee: {fee}</p>
            <p> Number of Shows Walked:{shows_walked}</p>
            <p> Special Skills: {special_skills}</p>
            <p> Instagram Followers:{insta_followers}</p>
    </div>
    )
}

export default ModelCard