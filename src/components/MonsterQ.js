import React, {useState, useEffect} from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function MonsterQ ({question, handleBudget, open, setOpen, newProject }) {
    const closeModal = () => setOpen(false);
    const [randomJobs, setRandomJobs] = useState([])

    const {id, text, pop_up} = question


    useEffect(() => {
        fetch('https://book-her.herokuapp.com/jobs')
        .then(response => response.json())
        .then(data => {
            let jobs = data.filter((job) => job.project.id === newProject.id)
            setRandomJobs(jobs)
        })
    }, [])
    function removeRandom() {
        let randomNumber = Math.floor(Math.random() * (randomJobs.length))
        let foundRandomJob = randomJobs[randomNumber]
          fetch(`https://book-her.herokuapp.com/jobs/${foundRandomJob.id}`, {
          method: "DELETE" })
          console.log(foundRandomJob)
        }

    return (
        // <div>
        <Popup open={open}>
          <div className="modal">
            <div className="header"></div>
                <div className="content">
                    {' '}
                    {question.text}
                <br />
                </div>
            <div className="actions">
                <button id="monster-keep"
                    className="button"
                    onClick={() => {
                        handleBudget(5000)
                        closeModal()
                    }}
                >
                </button>
                <button id="monster-fire"
                    className="button"
                    onClick={() => {
                        handleBudget(2000)
                        closeModal()
                        removeRandom()
                    }}
                >
                </button>
                <div id="agent"></div>
            </div>
          </div>
        </Popup>
    //   </div>
    )
}

export default MonsterQ
