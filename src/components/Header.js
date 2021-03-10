import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";


function Header ({currentUser, setCurrentUser}) {
    const history = useHistory()

    console.log(currentUser)


    function handleLogout() {
        setCurrentUser(null);
        localStorage.removeItem("token");
        history.push('/login')
      }


    return (
        <header className="header">
        {currentUser ?   
            <>
            <div>
                <Link id="new-project" to="/new_project"></Link>
                { currentUser.projects.length !== 0 && 
                <Link id="projects" to="/projects"></Link>}
            </div> 
            {/* <h4>Welcome, {currentUser.name}</h4> */}
            </>
            : null }
        {currentUser ? <button id="logout" onClick={handleLogout}></button> :
            <div className="login-signup">
                <Link id="signup" to="/signup"></Link>
                <Link id="login" to="/login"></Link>
            </div>
        }
        </header>
    )
}

export default Header