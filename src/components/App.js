// import logo from './logo.svg';
// import './App.css';
import '../data.js';
import { Switch, Route } from "react-router-dom";
import Header from "./Header"
import Login from "./Login"
import Question from "./Question"
import Project from "./Project"

function App() {
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
          <Route path="/questions">
            <Question />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
