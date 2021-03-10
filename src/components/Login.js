import React, { useState} from "react";
import { useHistory } from "react-router-dom";

function Login({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            throw data;
          });
        }
      })
      .then((data) => {
          console.log(data)
        setCurrentUser(data.casting_director);
        localStorage.setItem("token", data.token);
        history.push("/new_project");
      })
      .catch((data) => {
        setErrors(data.errors);
      });
  }

    const { name, password } = formData;

    return (
        <div className="login-form">
        <form onSubmit={handleSubmit} autoComplete="off">
          <h1>Login</h1>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
  
          {errors.map((error) => (
            <p key={error} style={{ color: "red" }}>
              {error}
            </p>
          ))}
          <input type="submit" value="Login" />
        </form>
      </div>
    )
}

export default Login