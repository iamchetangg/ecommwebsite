import  { initializeApp }  from "@firebase/app" ;




import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";

const config = {

    apiKey: "AIzaSyAukA7jUPGuwTtGhRw3ccbYRqXSogKo1uw",
  
    authDomain: "mb-ecommwebsite.firebaseapp.com",
  
    projectId: "mb-ecommwebsite",
  
    storageBucket: "mb-ecommwebsite.appspot.com",
  
    messagingSenderId: "1096936944751",
  
    appId: "1:1096936944751:web:b43ce81688c361027b099a",
  
    measurementId: "G-QDNQZP705X"
  
  };
 const app = initializeApp(config);
  
  //const analytics = getAnalytics(Fbs);
  

  export const auth = getAuth(app);
  export const firestore=getFirestore(app);

  const provider=new GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>signInWithPopup(auth,provider);
  export default app;