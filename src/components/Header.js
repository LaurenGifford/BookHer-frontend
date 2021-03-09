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
                <Link to="/create_project">Create Project</Link>
                { currentUser.projects.length !== 0 && 
                <Link to="/projects">Projects</Link>}
            </div> 
            <h4>Welcome, {currentUser.name}</h4>
            </>
            : null }

            <h1>BookHer</h1>
        {currentUser ? <button onClick={handleLogout}>Logout</button> :
            <div>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
            </div>
        }
      </header>
    )
}

export default Header