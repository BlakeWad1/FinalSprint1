import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Tours from "./pages/Tours";
import { useState, useEffect } from "react";

function Home(props) {
  console.log(props);

  return (
    <div>
      <h1> Avalon Boat Tours! </h1>

      <p>{props.greeting}</p>
      <p>hello</p>
      {props.username ? (
        <p>I see you have chosen the username: {props.username}</p>
      ) : null}
    </div>
  );
}

function Images() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const helper = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const imageJson = await response.json();
      console.log(imageJson);
      setImageData(imageJson);
    };
    helper();
  }, []);

  return (
    <div>
      <h1>Images</h1>
      <output>
        {imageData.slice(1, 11).map((e, i) => (
          <img key={i} src={e.url} alt={e.title}></img>
        ))}
      </output>
    </div>
  );
}

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signin">SignIn</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/images">Images</Link>
        <Link to="/tours">Tours</Link>
        <span className="logo">Avalon Boat Tours</span>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              username={username}
              greeting="Hello and Welcome to Avalon Boat Tours!!"
            ></Home>
          }
        ></Route>
        <Route
          path="/signin"
          element={
            <SignIn username={username} setUsername={setUsername}></SignIn>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <SignUp username={username} setUsername={setUsername}></SignUp>
          }
        ></Route>
        <Route path="/images" element={<Images></Images>}></Route>
        <Route path="/tours" element={<Tours></Tours>}></Route>
      </Routes>
    </div>
  );
}

export default App;
