import { Link } from "react-router-dom";

function Header () {
    return (
        <header className="header">
            <h1>BookHer</h1>
            <div>
                <Link to="/projects">Projects</Link>
                <Link to="/questions">Create Project</Link>
            </div>
            <div>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                <button>Logout</button>
            </div>
      </header>
    )
}

export default Header