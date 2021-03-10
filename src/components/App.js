// import logo from './logo.svg';
// import './App.css';
import React, {useState, useEffect} from "react"
import {models, questions} from '../data.js';
import { Switch, Route } from "react-router-dom";
import Header from "./Header"
import Login from "./Login"
import Projects from "./Projects"
import SignUp from "./SignUp"
import Body from "./Body"

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title]);
}

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  console.log(currentUser)

  const [allModels, setAllModels] = useState([])
  const [backupModels, setBackupModels] = useState([])

  useDocumentTitle("BookHer")
  
  useEffect(() => {
    fetch('http://localhost:3000/models')
    .then(response => response.json())
    .then(data => {
      setAllModels(data)
      setBackupModels(data)
    })
}, [])


  // auto-login!
  // TODO: check if a user has already logged in (look for their token)
  // if they've already logged in, use that token to them in again

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     fetch("http://localhost:3000/me", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((r) => r.json())
  //       .then((casting_director) => {
  //         setCurrentUser(casting_director);
  //       });
  //   }
  // }, []);


//  function useHandleLogin() {
//   useEffect(() => {
//     fetch("http://localhost:3000/me")
//       .then((r) => r.json())
//       .then(setCurrentUser);
//   }, []);
// }

//   function handleLogout() {
//     setCurrentUser(null);
//   }


  return (
    <>
    <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <main>
        <Switch>
          <Route path="/signup">
            <SignUp setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path="/login">
            <Login 
            setCurrentUser={setCurrentUser} 
            />
          </Route>
      { currentUser && 
          <>
          <Route path="/new_project">
            <Body 
            allModels={allModels} 
            backupModels={backupModels} 
            setAllModels={setAllModels} 
            currentUser={currentUser}/>
          </Route>

           <Route path="/projects">
            <Projects 
            models={models.slice(0, 5)} 
            currentUser={currentUser}
            />
          </Route>
          </>
          }
        </Switch>
      </main>
    </>
  );
}

export default App;
