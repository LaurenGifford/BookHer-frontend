
import React, {useEffect, useState} from "react"

function Question({question, onModelFilter, setCurrentQuestion, newProject, handleBudget}) {
const [filterTerm, setFilterTerm] = useState("")
const {id, text, model_attr} = question
const [timeLeft, setTimeLeft] = useState(15)


useEffect(() => {
    setTimeout(() => setCurrentQuestion(id + 1), 15000)

    if (timeLeft > 0 ){
    const timer = setInterval(() => {
        setTimeLeft(() => (timeLeft - 1))
    }, 1000)
    return function cleanup () {
        clearInterval(timer)
    }}
    // else {
        // handleBudget(1000)
        // debugger
        // console.log()
    // }

}, [timeLeft])


function submitQuestion(e) {
    e.preventDefault()
    
    onModelFilter(filterTerm, model_attr)
    console.log(filterTerm, model_attr, newProject)
    
    // setCurrentQuestion(id + 1)

    setCurrentQuestion(() => Math.floor(Math.random() * 7))
    // fetch(`http://localhost:3000/questionnaires`, {
        //     method: "POST",
        //     headers: {
            //         "Content-Type" : 'application/json'
            //     },
            //     body: JSON.stringify({question_id: id, project_id: newProject.id})
            // }).then(response => response.json())
            // .then(data => console.log(data))
            
            
}

        return (
        <div id="question">
            <h2> Question {id}: {text}</h2>
            <form onSubmit={submitQuestion} className="single-question">
            <input value={filterTerm} onChange={(e) => setFilterTerm(e.target.value)}></input>
            <input type="submit"></input>
            </form>
            <p className="timer">Time Left: {timeLeft}</p>
        </div>
        )
    }

export default Question