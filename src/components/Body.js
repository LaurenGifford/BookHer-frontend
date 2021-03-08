import Question from "./Question"
import ModelCard from "./ModelCard";
import MonsterQ from "./MonsterQ"
import 'reactjs-popup/dist/index.css';

import {project_questions} from '../data.js';
import React, {useState, useEffect} from "react"

function Body({allModels, setAllModels, currentUser}) {
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

    const displayCurrentQuestion = allQuestions.filter((question) => question.id === currentQuestion)
    .map((question) => (
        < Question key={question.id} question={question} 
            onModelFilter={handleModelFilter} handleBudget={handleBudget} 
            setCurrentQuestion={setCurrentQuestion} newProject={newProject}
            setRandomQuestion={setRandomQuestion}
            currentQuestion={currentQuestion}
            previousQuestion={question.id - 1}
        />))

    let displayModels = allModels.slice(index, index + 4)
    .filter(model => model.agency !== newProject.data)
    .map((model) => (
        <ModelCard key={model.id} model={model} 
            newProject={newProject} handleBudget={handleBudget} 
            handleModelFilter={handleModelFilter}
            exists={false}
        />))

    const renderPopUp = popUpQuestions.filter(question => question.id === 8)
    .map(question => 
            <MonsterQ 
                question={question}
                handleBudget={handleBudget}
            />
        )


    function setRandomQuestion() {
        setRandom(Math.floor(Math.random() * (12 - 8) + 8))
    }
    
    
    useEffect(() => {
        fetch('http://localhost:3000/questions')
        .then(response => response.json())
        .then(data => {
            setAllQuestions(data.slice(0,7));
            setPopUpQuestions(data.slice(8,12))
            console.log(data.slice(0,7))
        })
    }, [])
    
    // function chooseNextQuestion() {
    //     console.log("next question?")
    //     if (allQuestions < 1) { 
    //     Math.floor(Math.random() * allQuestions.length)}
    // }

    // let copy = allQuestions.slice(0)
    // return function() {
    //     if (copy.length < 1) { copy = allQuestions.slice(0); }
    //     var index = Math.floor(Math.random() * copy.length);
    //     var item = copy[index];
    //     copy.splice(index, 1);
    //     return console.log(item)
    //     // return item;
    // };
    
    
    
    
    function handleFormSubmit(e) {
        e.preventDefault()
        setShowModelQuestions(true)
        console.log(projectData)
        handleModelFilter(projectData.agency, "agency")
        
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
        console.log(newBudget)
        }

        // if (timeLeft === 0 ) {
        //     let penalty = newProject.budget - 1000
        //     setNewProject({
        //         ...newProject,
        //         budget: penalty
        //     })
        //     console.log(newProject)
        // }
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
            filteredModels = allModels.filter((model) => model.city === projectData.city)
        }
        else if (model_attr === "special_skills") {
            filteredModels = allModels.filter((model) => model.special_skills.includes(filterTerm))
        }
        else if (model_attr === "agency") {
            filteredModels = allModels.filter((model) => model.agency != filterTerm)
        }
        else if (model_attr === "id") {
            filteredModels = allModels.filter((model) => model.id !== filterTerm)
        }

        setAllModels( filteredModels.length > 0 && filteredModels)
        console.log(filteredModels)
    }
    console.log(allModels.length)


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
            <button onClick={() => setIndex(index + 4)} >See more Models</button>
            <div id="budget" >Budget {newProject.budget}</div>
                {showModelQuestions ? displayCurrentQuestion : null}
                {allModels.length === 0 ? <h3>No more Models to show</h3> : displayModels}
            </div>
            : null}
            {renderPopUp}
            {/* {popUp ? renderPopUp : null} */}
            
    </div>
    )
}

export default Body
