import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyD7VM4bYhDmaRi0BBdFIRBl-5fuVhkMBqM",
  authDomain: "fir-react-demo-c89c6.firebaseapp.com",
  projectId: "fir-react-demo-c89c6",
  storageBucket: "fir-react-demo-c89c6.appspot.com",
  messagingSenderId: "787622352364",
  appId: "1:787622352364:web:dd880369a6ea2ab3aa5cc9",
};

class Firebase {
  constructor() {
    const app = initializeApp(config);

    this.auth = getAuth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(this.auth, email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(this.auth, email, password);

  doSignOut = () => {
    signOut(this.auth);
  };

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
