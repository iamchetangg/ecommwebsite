import { initializeApp } from "@firebase/app";




import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc, updateDoc } from "firebase/firestore";


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
export const firestore = getFirestore(app);

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (userAuth == null) return;


  const userDocRef = doc(firestore, 'users', `${userAuth.uid}`);

  const snapshot = await getDoc(userDocRef);
  if (snapshot.exists && snapshot.data() == null) {
    const { displayName, uid, email, photoURL, emailVerified } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userDocRef, { 'createdAt': createdAt, 'displayName': displayName, 'uid': uid, 'email': email, 'photoURL': photoURL, 'emailVerified': emailVerified, ...additionalData });
    }
    catch (err) {
      console.error('Error creating user', err);
    }

  } else {
    console.log('updating');
    const { displayName, uid, email, photoURL, emailVerified } = userAuth;
    updateDoc(userDocRef, { 'displayName': displayName, 'uid': uid, 'email': email, 'photoURL': photoURL, 'emailVerified': emailVerified, ...additionalData });
  }
  return userDocRef;

  // console.log(snapshot.data());

}
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export default app;