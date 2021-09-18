import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const config = {
  apiKey: "REPLACE_APIKEY",
  authDomain: "REPLACE_AUTHDOMAIN",
  projectId: "REPLACE_PROJECTID",
  storageBucket: "REPLACE_STORAGEBUCKET",
  messagingSenderId: "REPLACE_MESSAGINGSENDERID",
  appId: "REPLACE_APIID",
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
