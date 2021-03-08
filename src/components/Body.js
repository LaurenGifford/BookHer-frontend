import Question from "./Question"
import ModelCard from "./ModelCard";
import MonsterQ from "./MonsterQ"

import {project_questions} from '../data.js';
import React, {useState, useEffect} from "react"

function Body({allModels, setAllModels, currentUser, backupModels}) {
    const [projectData, setProjectData] = useState({
        date:"", 
        title:"", 
        budget: 100000, 
        city:"", 
        agency: "",
        casting_director_id: currentUser
    })
    const [showModelQuestions, setShowModelQuestions] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [allQuestions, setAllQuestions] = useState([])
    const [popUpQuestions, setPopUpQuestions] = useState([])
    const [newProject, setNewProject] = useState(0)
    const [index, setIndex] = useState(0)
    const [random, setRandom] = useState(0)
    const [open, setOpen] = useState(false);


    let randomizer, popupTimer

    const displayCurrentQuestion = allQuestions.filter((question) => question.id === currentQuestion)
    .map((question) => (
        < Question key={question.id} question={question} 
            onModelFilter={handleModelFilter} handleBudget={handleBudget} 
            setCurrentQuestion={setCurrentQuestion} newProject={newProject}
            currentQuestion={currentQuestion}
            stopIntervals={stopIntervals}
        />))
        
    
    const displayModels = getModels()
    .filter(model => model.agency !== newProject.data)
    .map((model) => (
        <ModelCard key={model.id} model={model} 
            newProject={newProject} handleBudget={handleBudget} 
            handleModelFilter={handleModelFilter}
            exists={false}
        />))

    function getModels () {
        
        let newSlice
        if (!!allModels) {
            if (allModels.length > 4) {
                newSlice = allModels.slice(index, index + 4)
            } else {newSlice = allModels.slice(index)}
        } else {
            // setAllModels(backupModels)
            newSlice = backupModels.slice(index, index + 4)
        }
        return newSlice
    }
    
    


    // function getModels () {
    //     let newSlice
    //     if (allModels && allModels.length > 4) {
    //         newSlice = allModels.slice(index, index + 4)
    //     } else {newSlice = allModels.slice(index)}
    //     return newSlice
    // }


    const renderPopUp = popUpQuestions.filter(q => q.id === random)
    .map(question => 
            <MonsterQ 
                question={question}
                handleBudget={handleBudget}
                open={open}
                setOpen={setOpen}
            />
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

        setAllModels(allModels.length === 0 ? [...backupModels] : [...filteredModels])
        console.log(filteredModels)
    }

    function getMoreModels() {
        console.log(allModels.length, index)
        if (index > allModels.length - 4) {
            setIndex(0)
            setAllModels(backupModels)
        } 
        if (allModels.length === 0 ) {
            setAllModels(backupModels)
            setIndex(0)
        }
        else {
            setIndex(index + 4)
        }
    }


    return (
        <div>
            {showModelQuestions ? null :
            <form onSubmit={handleFormSubmit}> 
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
                <input type="submit" value="Submit"></input>
            </form>
            }
            {showModelQuestions ? 
            <div className="models-container">
            <button onClick={() => getMoreModels()} >See more Models</button>
            <div id="budget" >Budget {newProject.budget}</div>
                {showModelQuestions ? displayCurrentQuestion : null}
                {allModels.length === 0 ? <h3>No more Models to show</h3> : displayModels}
            </div>
            : null}
            {open ? renderPopUp : null}
            
    </div>
    )
}

export default Body
