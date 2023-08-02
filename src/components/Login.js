import React, { useState } from "react";
import './login.css';
import Schedules from './TrainSchedule';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="Login"> 
      <form onSubmit={Schedules}>
        <section id ="uname"> Username <input type="text" placeholder="Enter username" /> </section>
        <section id="pass">password <input type="password" placeholder="Enter password"/> </section>
        <button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </button>
      </form>
    </div>
  );
}