import React, {useState} from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function MonsterQ ({question, handleBudget, open, setOpen }) {
    const closeModal = () => setOpen(false);

    const {id, text, pop_up} = question

    return (
        <div>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className="modal">
            <div className="header"> Monster Alert!!! </div>
                <div className="content">
                    {' '}
                    {question.text}
                <br />
                </div>
            <div className="actions">
                <button
                    className="button"
                    onClick={() => {
                        handleBudget(5000)
                        closeModal()
                    }}
                >
                $5000 Keep Her
                </button>
                <button
                    className="button"
                    onClick={() => {
                        handleBudget(2000)
                        closeModal()
                    }}
                >
                $2000 Fire Her
                </button>
            </div>
          </div>
        </Popup>
      </div>
    )
}

export default MonsterQ
