// import logo from './logo.svg';
// import './App.css';
import React, {useState} from "react"
import {models, questions} from '../data.js';
import { Switch, Route } from "react-router-dom";
import Header from "./Header"
import Login from "./Login"
import Question from "./Question"
import Project from "./Project"
import SignUp from "./SignUp"
import Body from "./Body"

function App() {
  const [allQuestions, setAllQuestions] = useState(questions)
  
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
            <Body allQuestions={allQuestions}/>
          </Route>
          <Route path="/projects">
            <Project models={models.slice(0, 5)} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
