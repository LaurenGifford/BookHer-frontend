import React, {useState, useEffect} from "react"
import Project from "./Project"

function Projects({currentUser}) {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/casting_directors/${currentUser}`)
        .then(response => response.json())
        .then(data => {
            setProjects(data.projects)
            console.log(data)})
    }, [])

    const renderProjects = projects.map(project => (
        <li>
        <Project 
            project={project}
            models={project.models}
            currentUser={currentUser}
        />
        </li>
    ))

    return (
        <div>
            <ul>{renderProjects}</ul>
        </div>

    )
}


export default Projects