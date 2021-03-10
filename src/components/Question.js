import React, {useEffect, useState} from "react"
import { useHistory } from "react-router-dom";
import MonsterQ from "./MonsterQ"


function Question({question, onModelFilter, setCurrentQuestion, newProject, handleBudget, currentQuestion, stopIntervals}) {
    const [filterTerm, setFilterTerm] = useState("")
    const {id, text, model_attr} = question
    const [timeLeft, setTimeLeft] = useState(15)
    const history = useHistory()



    useEffect(() => {
        if (timeLeft > 0 ){
        const timer = setInterval(() => {
            setTimeLeft(() => (timeLeft - 1))
        }, 1000)
            return function cleanup() {
                clearInterval(timer)
            }
        }
        if (timeLeft === 0) {
            handleBudget(1000)
        }
    }, [timeLeft])


    function submitQuestion(e) {
        e.preventDefault()
        
        onModelFilter(filterTerm, model_attr)
        setNextQuestion()
    }

    function setNextQuestion() {
        if (parseInt(currentQuestion) === 7) {
            finishQuestions()
        } else {
        setCurrentQuestion(() => currentQuestion + 1)}
    }

    function finishQuestions() {
        let updatedBudget = parseInt(newProject.budget)
        
        fetch(`http://localhost:3000/projects/${newProject.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify({budget: updatedBudget})
        })

        history.push('/projects')
        stopIntervals()
    }



    return (
    <div id="question">
        <h2> Question {id}: {text}</h2>
        {id === 6 ? <div>
        <button onClick={() => {
            onModelFilter("all", model_attr)
            setNextQuestion()
            }} >
            Yes
        </button> 
        <button onClick={() => {
            onModelFilter("no", model_attr)
            setNextQuestion()
            }}>
            No
        </button>
        </div> : 
        <form onSubmit={submitQuestion} className="single-question">
            <input value={filterTerm} onChange={(e) => setFilterTerm(e.target.value)}></input>
            <input type="submit"></input>
        </form> }
        <p className="timer">Time Left: {timeLeft} seconds</p>
        
        </div>
        )
}
        

export default Question