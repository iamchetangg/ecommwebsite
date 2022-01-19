import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes, Navigate, } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header-component/header.component";
import SignInAndSignUpParentPage from "./pages/signin-signup/signin-signup.component";
import { connect, } from "react-redux";
import { createUserProfileDoc, auth } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { setCurrentUser } from "./redux/user/user.actions";


import { toggleCartVisibility, addItem } from "./redux/cart/cart.actions";

// async function test(){
//   const ffs = getFirestore(Fbs);
//   const coll= collection(ffs,'users');
//   const docss = await getDocs(coll);
//   const list = docss.docs.map(doc => doc.data());
//   console.log(list);
// }

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user != null) {

        const userRef = await createUserProfileDoc(user);
        onSnapshot(userRef, (doc) => {
          if (doc.exists) {
            setCurrentUser({

              uid: doc.id,
              ...doc.data()

            });
            console.log("Current data: ", doc.data());
          }

        });
      }
      setCurrentUser(user);



      //  this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage props={this.props} />} />

          <Route path="/shop" element={<ShopPage />} />


          <Route exact path="/signin" element={this.props.currentUser != null ? (<Navigate to="/" replace={true} />) : (<SignInAndSignUpParentPage />)} />
        </Routes>

      </div>
    );
  }
}

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  hidden: cart.hidden,
  cartItems: cart.cartItems,


});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  toggleCartVisibility: cart => dispatch(toggleCartVisibility(cart)),
  addItem: item => dispatch(addItem(item)),

});

export default connect(mapStateToProps, mapDispatchToProps)(App);

