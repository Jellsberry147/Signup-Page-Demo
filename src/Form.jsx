import React, { useState } from "react";

function Form() {
  const [submissionText, setSubmissionText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleCPasswordChange(event) {
    setCPassword(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    if (cPassword !== password) {
      alert("Passwords do not match.");
    } else {
      setName("");
      setEmail("");
      setPassword("");
      setCPassword("");
      console.log(name + ", " + email + ", " + password + ", " + cPassword);
      setSubmissionText(
        "Thank you for signing up! We look forward to getting to know you!"
      );
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleClick}>
        <input
          className="input"
          onChange={handleNameChange}
          type="text"
          placeholder="Username"
          value={name}
          title="Pick something unique!"
          required
        />
        <input
          className="input"
          onChange={handleEmailChange}
          type="email"
          placeholder="Email"
          value={email}
          title="Must contain an @ symbol and content before and after."
          required
        />
        <input
          className="input"
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
          value={password}
          pattern="(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$"
          required
        />
        <input
          className="input"
          onChange={handleCPasswordChange}
          type="password"
          placeholder="Confirm Password"
          value={cPassword}
          title="Passwords must match to continue."
        />
        <button
          className="submitButton"
          type="submit"
          title="Click to submit your information."
        >
          Register
        </button>
      </form>
      <h4>{submissionText}</h4>
    </div>
  );
}

export default Form;
