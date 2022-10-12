import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import Auth from "../../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('inside signup formSubmit');
      console.log(data)
      const { data } = await addUser({
        variables: { ...formState },
      });

      //Auth.login(data.addUser.token);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="page">
      <div>
        <div className="sign-up-container">
          <h2 id="page-title">Sign Up</h2>
          <div className="box sign-up-box container">
            <form className="field" onSubmit={handleFormSubmit}>
              <div className="control has-icons-left">
                <input
                  className="input is-small"
                  placeholder="Your username"
                  name="username"
                  type="username"
                  id="username"
                  value={formState.username}
                  onChange={handleChange}
                />
                <span className="icon is-small is-left">
                  <AiOutlineUser/>
                </span>
              </div>
              <div className="control has-icons-left">
                <input
                  className="input is-small"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <span className="icon is-small is-left">
                  <AiOutlineMail />
                </span>
              </div>
              <div className="control has-icons-left">
                <input
                  className="input is-small"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <span className="icon is-small is-left">
                  <RiLockPasswordLine/>
                </span>
              </div>
              <button className="button is-primary" type="submit">
                Submit
              </button>
            </form>

            {error && <div className="error-msg">Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
