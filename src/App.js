import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header-component/header.component";
import SignInAndSignUpParentPage from "./pages/signin-signup/signin-signup.component";
import { Fbs } from ".";
import { auth } from "./firebase/firebase.utils";

// async function test(){
//   const ffs = getFirestore(Fbs);
//   const coll= collection(ffs,'users');
//   const docss = await getDocs(coll);
//   const list = docss.docs.map(doc => doc.data());
//   console.log(list);
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage props={this.props} />} />

          <Route path="/shop" element={<ShopPage />} />

          <Route path="/signin" element={<SignInAndSignUpParentPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
