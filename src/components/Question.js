
import React, {useState} from "react"

function Question({question, onModelFilter, setCurrentQuestion, project}) {
const [filterTerm, setFilterTerm] = useState("")
const {id, text, model_attr} = question

function submitQuestion(e) {
    e.preventDefault()

    onModelFilter(filterTerm, model_attr)
    console.log(filterTerm, model_attr)

    fetch(`http://localhost:3000/questionnaires`, {
        method: "POST",
        headers: {
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify({question_id: id, project_id: project.id})
    }).then(response => response.json())
    .then(data => console.log(data))


    setTimeout(() => setCurrentQuestion(id + 1), 5000)
    // setCurrentQuestion(id + 1)
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