import Question from "./Question"
import ModelCard from "./ModelCard";
import MonsterQ from "./MonsterQ"

import {project_questions} from '../data.js';
import React, {useState, useEffect} from "react"

function Body({currentUser}) {
    const [projectData, setProjectData] = useState({
        date:"", 
        title:"", 
        budget: 100000, 
        city:"", 
        agency: "",
        casting_director_id: currentUser.id
    })
    const [showModelQuestions, setShowModelQuestions] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [allQuestions, setAllQuestions] = useState([])
    const [popUpQuestions, setPopUpQuestions] = useState([])
    const [newProject, setNewProject] = useState(0)
    const [index, setIndex] = useState(0)
    const [random, setRandom] = useState(0)
    const [open, setOpen] = useState(false);
    const [exists, setExist] = useState(false)
    const [error, setError] = useState('')
    const [allModels, setAllModels] = useState([])
    const [backupModels, setBackupModels] = useState([])
    const [jobs, setJobs] = useState([])

    let randomizer, popupTimer

    useEffect(() => {
        fetch('http://localhost:3000/models')
        .then(response => response.json())
        .then(data => {
          setAllModels(data)
          setBackupModels(data)
        })
    }, [])

    const displayCurrentQuestion = allQuestions.filter((question) => question.id === currentQuestion)
    .map((question) => (
        < Question key={question.id} question={question} 
            onModelFilter={handleModelFilter} handleBudget={handleBudget} 
            setCurrentQuestion={setCurrentQuestion} newProject={newProject}
            currentQuestion={currentQuestion}
            stopIntervals={stopIntervals}
        />))
        
    const displayModels = allModels.slice(index, index + 4)
    .filter(model => model.agency !== newProject.data)
    .map((model) => (
        <ModelCard key={model.id} 
            model={model} 
            newProject={newProject} 
            handleBudget={handleBudget} 
            handleModelFilter={handleModelFilter}
            exists={false}
            setJobs={setJobs}
        />))

    const renderPopUp = popUpQuestions.filter(q => q.id === random)
    .map(question => jobs.length!==0 ?
            <MonsterQ 
                question={question}
                handleBudget={handleBudget}
                open={open}
                setOpen={setOpen}
                newProject={newProject}
            /> : <h3 className="choose">No Model, No Show!</h3>
        )


    function handlePopUps() {
        randomizer = setInterval(() => {
        setRandom(Math.floor(Math.random() * (12 - 8) + 8))}
        , 18000)

        popupTimer = setInterval(() => {
            setOpen(true)
        }, 20000)

    }

    function stopIntervals() {
        clearInterval(randomizer)
        clearInterval(popupTimer)
    }
    
    
    useEffect(() => {
        fetch('http://localhost:3000/questions')
        .then(response => response.json())
        .then(data => {
            setAllQuestions(data.slice(0,7));
            setPopUpQuestions(data.slice(8,12))
        })
    }, [])
    
    
    function handleFormSubmit(e) {
        e.preventDefault()
        setShowModelQuestions(true)
        handleModelFilter(projectData.agency, "agency")
        handlePopUps()
        
        fetch(`http://localhost:3000/projects`, {
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify(projectData)
        })
        .then(response => response.json())
        .then(data => {
            setNewProject(data)
        })

    }

    function handleChange(e) {
        setProjectData({
            ...projectData,
            [e.target.name]: e.target.value
        })
    }

    function handleBudget(fee) {
        if (newProject.budget > 0) {
        let newBudget = newProject.budget - fee
        setNewProject({
            ...newProject,
            budget: newBudget 
        })
        }
    } 


    function handleModelFilter(filterTerm, model_attr) {
        console.log(filterTerm, model_attr)
        let filteredModels
        if (model_attr === "age") {
            filteredModels = allModels.filter((model) => model.age > parseInt(filterTerm))
        }
        else if (model_attr === "height") {
             filteredModels = allModels.filter((model) => model.height > parseInt(filterTerm)) 
        }
        else if (model_attr === "shows_walked") {
            filteredModels = allModels.filter((model) => model.shows_walked > parseInt(filterTerm)) 
        }
        else if (model_attr === "fee") {
            filteredModels = allModels.filter((model) => model.fee > parseInt(filterTerm))
        }
        else if (model_attr === "insta_followers") {
            filteredModels = allModels.filter((model) => model.insta_followers > parseInt(filterTerm))
        }
        else if (model_attr === "city") {
            if (filterTerm === "all") {filteredModels = allModels}
            else {filteredModels = allModels.filter((model) => model.city === projectData.city)}
        }
        else if (model_attr === "special_skills") {
            filteredModels = allModels.filter((model) => model.special_skills.includes(filterTerm))
        }
        else if (model_attr === "agency") {
            filteredModels = allModels.filter((model) => model.agency !== filterTerm)
        }
        else if (model_attr === "id") {
            filteredModels = allModels.filter((model) => model.id !== filterTerm)
        }
        if (allModels.length === 0) {
            setAllModels([...backupModels]) 
        }
        else {setAllModels(filteredModels)}
    }


    function getMoreModels() {
        if (allModels.length !== 0){
        setIndex((index + 4 )% allModels.length)}
        else {setIndex((index + 4 )% backupModels.length)}
        console.log( index, backupModels.length)
    }


    return (
        <div id="choose-models">
            {/* <h4 className="welcome">Welcome, {currentUser.name}</h4> */}
            {showModelQuestions ? null :
            <form onSubmit={handleFormSubmit} autoComplete="off"> 
                <label>{project_questions[1].text}</label>
                <input name="date" value={projectData.date} type="text" onChange={handleChange}></input>
                <label>{project_questions[0].text}</label>
                <input name="title" value={projectData.title} type="text" onChange={handleChange}></input>
                <label>{project_questions[3].text}</label>
                <input name="budget" value={projectData.budget} type="number" onChange={handleChange}></input>
                <label>{project_questions[2].text}</label>
                <input name="city" value={projectData.city} type="text" onChange={handleChange}></input>

                <label>{project_questions[4].text}</label>
                <select name="agency" onChange={handleChange}>
                    <option></option>
                    <option value="Next">Next</option>
                    <option value="DNA">DNA</option>
                    <option value="The Society">The Society</option>
                    <option value="Ford">Ford</option>
                    <option value="Women">Women</option>
                    <option value="Elite">Elite</option>
                    <option value="IMG">IMG</option>
                    <option value="Heroes">Heroes</option>
                    <option value="The Industry">The Industry</option>
                </select>
                <input type="submit" value="Start!"></input>
            </form>
            }
            {showModelQuestions ? 
            <div className="models-container">
                {error && (
                    <p className="error"> {error} </p>
                )}
            <div id="budget" >${newProject.budget}</div>
                {open ? renderPopUp : null}
                {showModelQuestions ? displayCurrentQuestion : null}
                <button id="more"onClick={() => getMoreModels()} ></button>
                {allModels.length === 0 ? <h3 className="choose">No more Models to show</h3> : displayModels}
            </div>
            : null}
            
    </div>
    )
}

export default Body

