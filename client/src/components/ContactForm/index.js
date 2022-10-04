import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your Email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  
  return (
    <section>
      <h1>Get help</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">
            Name:
          </label>
          <div className="control">
            <input
              className="input is-info"
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="email">
            email address:
          </label>
          <div className="control">
            <input
              className="input is-info"
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="message">
            Message:
          </label>
          <textarea
            className="textarea is-info"
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="box warning-box">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="button is-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
