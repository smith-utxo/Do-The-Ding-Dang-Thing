import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import Auth from "../../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      /*     Auth.login(data.login.token);*/
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="page">
      <div>
        <div>
          <h2 id="page-title">Login</h2>
          <div className="box sign-up-box container">
            <form className="field" onSubmit={handleFormSubmit}>
              <div className="control has-icons-left">
                <input
                  className='input is-small'
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
              <button className="button is-primary">Submit</button>
            </form>

            {error && <div className="error-msg">Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
