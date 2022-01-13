import React from "react";

import "./sign-up.styles.scss";

class SignUpArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stateee: "s",
    };
  }

  render() {
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
      </div>
    );
  }
}

export default SignUpArea;
