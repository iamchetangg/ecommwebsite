import React from "react";

import "./signin-signup.styles.scss";

import SignInArea from "../../components/sign-in-area/sign-in.component";
import SignUpArea from "../../components/sign-up-area/sign-up.component";

const SignInAndSignUpParentPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      Sign IN / Sign UP
      <div className="area-holder">
        <SignInArea />
        <div className="divider"></div>
        <SignUpArea />
      </div>
    </div>
  );
};

export default SignInAndSignUpParentPage;
