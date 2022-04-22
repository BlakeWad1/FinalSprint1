import { useState } from "react";

function SignIn(props) {
  const username = props.username;
  const setUsername = props.setUsername;
  const [password, setPassword] = useState("");

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="SignIn">
      <form className="SignInForm">
        <h1>SignIn</h1>
        <label htmlFor="username">Username:</label>
        <input
          onChange={updateUsername}
          name="username"
          type="text"
          placeholder="username"
          value={username}
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          onChange={updatePassword}
          type="password"
          placeholder="password"
          value={password}
        ></input>
        <button
          onClick={() => {
            //alert(`${username} : ${password}`)
            console.log(`${username} : ${password}`);
            setUsername("");
            setPassword("");
            console.log("Welcome!");
            console.log("Come on in!");
          }}
          type="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
