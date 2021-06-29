import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoXxy5twXtTlF-xW_LOATyV7c-0kct1rk",
  authDomain: "chat-app-fe753.firebaseapp.com",
  projectId: "chat-app-fe753",
  storageBucket: "chat-app-fe753.appspot.com",
  messagingSenderId: "1065021972169",
  appId: "1:1065021972169:web:95f8b4f890e080f9603718",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
