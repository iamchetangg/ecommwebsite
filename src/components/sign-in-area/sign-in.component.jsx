import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignInArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email);
    this.setState({ email: "" });

    console.log(this.state.password);
    this.setState({ password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={(event) => this.handleSubmit(event)}>
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
            handleChange={(v) =>
              this.setState({ [v.target.name]: v.target.value })
            }
            value={this.state.password}
            required={true}
          ></FormInput>

          <div className="sign-in-buttons">
            <CustomButton
              type="submit"
              label="Sign in with Email"
              _type="email"
            />
            <div className="or">Or</div>
            <CustomButton
              type="button"
              label="Sign in with Google"
              _type="google"
              _onClick={() => {
                signInWithGoogle();
                console.log("google sign in");
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignInArea;
