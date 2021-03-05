import React, {useState, useEffect} from "react"
import Project from "./Project"

function Projects({currentUser}) {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/casting_directors/${currentUser}`)
        .then(response => response.json())
        .then(data => {
            setProjects(data.projects)
            console.log(data)})
    }, [])

    function deleteProject(id) {
        fetch(`http://localhost:3000/projects/${id}`, {
            method: "DELETE"
          })
          let notDeleted = projects.filter((project) => project.id !== id)
          setProjects(notDeleted)
        }

    const renderProjects = projects.map(project => (
        <li>
        <Project 
            project={project}
            models={project.models}
            currentUser={currentUser}
            deleteProject={deleteProject}
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