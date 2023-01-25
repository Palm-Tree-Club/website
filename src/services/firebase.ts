import firebase from "firebase/compat/app";

const conf = {
  apiKey: "AIzaSyAk4-yfa5ll0v0PncfiV1ETbiXOKB7I3II",
  authDomain: "palm-tree-club.firebaseapp.com",
  projectId: "palm-tree-club",
  storageBucket: "palm-tree-club.appspot.com",
  messagingSenderId: "1025156690287",
  appId: "1:1025156690287:web:76a7aa741d546a0afc789a",
  measurementId: "G-4QMLY5KNST"
};

export default !firebase.apps.length ? firebase.initializeApp(conf) : firebase.app();