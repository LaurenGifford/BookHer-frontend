import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUp({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://book-her.herokuapp.com/signup", {
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
        setCurrentUser(data.casting_director)
        localStorage.setItem("token", data.token);
        history.push("/new_project");
      })
      .catch((data) => {
        setErrors(data.errors);
      });
  }

  const { name, password } = formData;

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Signup</h1>

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
          autoComplete="current-password"
          value={password}
          onChange={handleChange}
        />

        {errors.length !== 0 && errors.map((error) => (
          <p key={error} style={{ color: "red" }}>
            {error}
          </p>
        ))}
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
}

export default SignUp;


