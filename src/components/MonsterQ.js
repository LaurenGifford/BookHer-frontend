import React, {useState} from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function MonsterQ ({question, handleBudget}) {
    const [pop, setPop] = useState(false)
    const {id, text, pop_up} = question

//     <Popup trigger={<button className="button"> See Message </button>} nested modal>
//     {close => (
//         <div className="modal">
//         <button className="close " onClick={close}>
//           &times;
//         </button>
//         <div className="header"> Monster Alert!!! </div>
//         <div className="content">
//           {' '}
//           {question.text}
//           <br />
//         </div>
//         <div className="actions">
//         <button
//             className="button"
//             onClick={() => {
//                 handleBudget(5000)
//               close();
//             }}
//           >
//             $5000 Keep Her
//           </button>
//           <button
//             className="button"
//             onClick={() => {
//                 handleBudget(2000)
//               close();
//             }}
//           >
//             $2000 Fire Her
//           </button>
//         </div>
//       </div>
//     )}
//   </Popup>








    return (
            <div className="modal">
                {pop && 
                <section className="model-main">
                <button className="close ">
                &times;
                </button>
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
                    //   close();
                    }}
                >
                    $5000 Keep Her
                </button>
                <button
                    className="button"
                    onClick={() => {
                        handleBudget(2000)
                    //   close();
                    }}
                >
                    $2000 Fire Her
                </button>
                </div>
            </section>
            }
          </div>
    )
}

export default MonsterQ