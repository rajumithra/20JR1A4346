import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import TrainSchedule from "./components/TrainSchedule";
import "./Style/App.css";

function App() {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.myjson.com/bins/18p5wd")
      .then((response) => response.json())
      .then((data) => {
        setTrains(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <div className="App">
      <TrainSchedule trains={trains} loading={loading} /><br/>
      <center>
      
          <a href="/">Home</a> &ensp;
          <a href="/schedule">Schedule</a> &ensp;
          <a href="/stations">Stations</a> &ensp;
          <a href="/about">About</a> &ensp;
          <a href="/Register">Register</a> &ensp;
          <a href="/login">Login</a> &ensp;

      </center>
      <br></br>
      <Login/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <center><footer>&#169;General Madnit &#174; with Afford Train schedules</footer> </center>
    </div>
        </>
  );
}

export default App;
