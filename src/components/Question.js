
import React, {useState} from "react"

function Question({allModels, question, onModelFilter, setCurrentQuestion}) {
const [filterTerm, setFilterTerm] = useState("")
const {id, text, model_attr} = question

function submitQuestion(e) {
    e.preventDefault()
    setCurrentQuestion(id + 1)
    onModelFilter(filterTerm, model_attr)
    console.log(filterTerm, model_attr)
}

        return (
        <div id="question">
            <h2> Question {id}: {text}</h2>
            <form onSubmit={submitQuestion} className="single-question">
            <input value={filterTerm} onChange={(e) => setFilterTerm(e.target.value)}></input>
            <input type="submit"></input>
            </form>
        </div>
        )
    }

export default Question