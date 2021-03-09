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

function App() {
  const [currentUser, setCurrentUser] = useState(1)
  const [allModels, setAllModels] = useState([])
  const [backupModels, setBackupModels] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/models')
    .then(response => response.json())
    .then(data => {
      setAllModels(data)
      setBackupModels(data)
    })
}, [])

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create_project">
            <Body allModels={allModels} backupModels={backupModels} setAllModels={setAllModels} currentUser={currentUser}/>
          </Route>
          <Route path="/projects">
            <Projects 
            models={models.slice(0, 5)} 
            currentUser={currentUser}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
