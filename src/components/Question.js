import React, {useEffect, useState} from "react"
import { useHistory } from "react-router-dom";


function Question({question, onModelFilter, setCurrentQuestion, newProject, handleBudget, setRandomQuestion, currentQuestion, previousQuestion}) {
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

        if (parseInt(currentQuestion) === 7) {
            finishQuestions()
        } else {
        setCurrentQuestion(() => currentQuestion + 1)}

        console.log(id, currentQuestion)

        
        // if (id % 2 === 0) {
        //     setCurrentQuestion(id + 1)
        // } 
        // else if (id === 1 ){
        //     setCurrentQuestion(id + 1)
        // }
        // else {
        //     setRandomQuestion()
        // }

        // setCurrentQuestion(() => Math.floor(Math.random() * 7))
    }

    function finishQuestions() {
        console.log("finish triggered")
        let updatedBudget = parseInt(newProject.budget)

        fetch(`http://localhost:3000/projects/${newProject.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify({budget: updatedBudget})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            history.push('/projects')
        })
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