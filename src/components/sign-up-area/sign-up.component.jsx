import React from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUpArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password != confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfileDoc(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            label="Name"
            value={this.state.displayName}
            handleChange={(v) =>
              this.setState({ [v.target.name]: v.target.value })
            }
            required={true}
          ></FormInput>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={(v) =>
              this.setState({ [v.target.name]: v.target.value })
            }
            required={true}
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={(v) =>
              this.setState({ [v.target.name]: v.target.value })
            }
            required={true}
          ></FormInput>
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={this.state.confirmPassword}
            handleChange={(v) =>
              this.setState({ [v.target.name]: v.target.value })
            }
            required={true}
          ></FormInput>
          <CustomButton
            type="submit"
            label="Create Account"
            _type="createAcc"
          />
        </form>
      </div>
    );
  }
}

export default SignUpArea;
