import Question from "./Question"
import ModelCard from "./ModelCard";
import {project_questions, models} from '../data.js';
import React, {useState, useEffect} from "react"

function Body() {
    const [projectData, setProjectData] = useState({
        date:"", 
        title:"", 
        budget: 100, 
        city:"", 
        agency: "",
        casting_director_id: 1
    })
    const [showModelQuestions, setShowModelQuestions] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [allModels, setAllModels] = useState(models)
    const [allQuestions, setAllQuestions] = useState([])

    const displayCurrentQuestion = allQuestions.filter((question) => question.id === currentQuestion)
    .map((question) => < Question key={question.id} question={question} allModels={allModels} onModelFilter={handleModelFilter} setCurrentQuestion={setCurrentQuestion}/>)

    useEffect(() => {
        fetch('http://localhost:3001/models')
        .then(response => response.json())
        .then(data => setAllModels(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/questions')
        .then(response => response.json())
        .then(data => setAllQuestions(data.slice(0,8)))
    }, [])



    function handleFormSubmit(e) {
        e.preventDefault()
        setShowModelQuestions(true)
        console.log(projectData)
        fetch(`http://localhost:3001/projects`, {
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify(projectData)
        })
    }

    function handleChange(e) {
        setProjectData({
            ...projectData,
            [e.target.name]: e.target.value
        })
    }


    function handleModelFilter(filterTerm, model_attr) {
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
        else if (model_attr === "city" && filterTerm === false) {
            filteredModels = allModels.filter((model) => model.city === projectData.city)
        }
        else if (model_attr === "special_skills") {
            filteredModels = allModels.filter((model) => model.special_skills.includes(filterTerm))
        }
        if (filteredModels > 0){
        setAllModels(filteredModels)
        console.log(filteredModels)
        }
    }


    return (
        <div>
        <form onSubmit={handleFormSubmit}> 
            <label>{project_questions[0].text}</label>
            <input name="date" value={projectData.date} type="text" onChange={handleChange}></input>
            <label>{project_questions[1].text}</label>
            <input name="title" value={projectData.title} type="text" onChange={handleChange}></input>
            <label>{project_questions[3].text}</label>
            <input name="budget" value={projectData.budget} type="number" onChange={handleChange}></input>
            <label>{project_questions[2].text}</label>
            <input name="city" value={projectData.city} type="text" onChange={handleChange}></input>

            <label>{project_questions[4].text}</label>
            <select name="agency" onChange={handleChange}>
                <option selected value="Next">Next</option>
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
        <div className="models-container">
            {showModelQuestions ? displayCurrentQuestion : null}
            < ModelCard model={allModels[0]} project={"new"}/>
            < ModelCard model={allModels[1]} project={"new"}/>
        </div>
    </div>
    )
}

export default Body
