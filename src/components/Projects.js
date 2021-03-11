import React, {useState, useEffect} from "react"
import Project from "./Project"

function Projects({currentUser}) {
    const [projects, setProjects] = useState([])
    const [showProject, setShowProject] = useState(false)



    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
        fetch(`https://book-her.herokuapp.com/casting_directors/${currentUser.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            setProjects(data.projects)
            console.log(data)
            })
        }
    }, [currentUser])

    function deleteProject(id) {
        fetch(`https://book-her.herokuapp.com/projects/${id}`, {
            method: "DELETE"
          })
          let notDeleted = projects.filter((project) => project.id !== id)
          setProjects(notDeleted)
        }

    const renderProjectList = projects.map(project => (
        <Project 
            key={project.id}
            project={project}
            models={project.models}
            currentUser={currentUser}
            deleteProject={deleteProject}

        />
    ))
    
    return (
        <div id="all-projects">
            <ul>{renderProjectList}</ul>
        </div>

    )
}


export default Projects