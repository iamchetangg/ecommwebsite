import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'; 
import {Route,Routes} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-component/header.component';
import SignInAndSignUpParentPage from './pages/signin-signup/signin-signup.component';
import { Fbs } from '.';


// async function test(){
//   const ffs = getFirestore(Fbs);
//   const coll= collection(ffs,'users');
//   const docss = await getDocs(coll);
//   const list = docss.docs.map(doc => doc.data());
//   console.log(list); 
// }


function App(props) {
 


  return (
    <div>
      <Header/>
<Routes>
  
  <Route exact path='/' element={<HomePage  props={props}/>}  />   
 
  <Route  path='/shop' element={<ShopPage/>} />  

  <Route  path='/signin' element={<SignInAndSignUpParentPage/>} />  


  </Routes>
 
  
    </div>
  );
}

export default App;
