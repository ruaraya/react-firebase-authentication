import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updatePassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const config = {
  apiKey: "AIzaSyD7VM4bYhDmaRi0BBdFIRBl-5fuVhkMBqM",
  authDomain: "fir-react-demo-c89c6.firebaseapp.com",
  databaseURL: "https://fir-react-demo-c89c6-default-rtdb.firebaseio.com",
  projectId: "fir-react-demo-c89c6",
  storageBucket: "fir-react-demo-c89c6.appspot.com",
  messagingSenderId: "787622352364",
  appId: "1:787622352364:web:dd880369a6ea2ab3aa5cc9",
};

class Firebase {
  constructor() {
    const app = initializeApp(config);
    this.db = getDatabase();

    this.auth = getAuth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(this.auth, email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(this.auth, email, password);

  doSignOut = () => {
    signOut(this.auth);
  };

  doPasswordReset = (email) => sendPasswordResetEmail(this.auth, email);

  doPasswordUpdate = (password) =>
    updatePassword(this.auth.currentUser, password);

  doWriteUserData = (uid, username, email) => {
    set(ref(this.db, "users/" + uid), {
      username,
      email,
    });
  };

  doGetUsers = () => {
    const starCountRef = ref(this.db, "users/");
    return starCountRef;
  };
}

export default Firebase;
