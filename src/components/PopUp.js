import React, {useState} from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PopUp ({question}) {
    const [pop, setPop] = useState(false)
    const {id, text, pop_up} = question


    return (
        <div>
            {text}
        </div>
    )
}

export default PopUp