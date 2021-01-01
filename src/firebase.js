import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

firebase.initializeApp(config);
const firestore = new firebase.firestore();

export { firestore }