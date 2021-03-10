import { Link, useHistory } from "react-router-dom";

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
                <Link id="new-project" to="/create_project">Create Project</Link>
                { currentUser.projects.length !== 0 && 
                <Link id="projects" to="/projects">Projects</Link>}
            </div> 
            <h4>Welcome, {currentUser.name}</h4>
            </>
            : null }

            <h1>BookHer</h1>
        {currentUser ? <button id="logout" onClick={handleLogout}>Logout</button> :
            <div>
                <Link id="signup" to="/signup">Signup</Link>
                <Link id="login" to="/login">Login</Link>
            </div>
        }
      </header>
    )
}

export default Header