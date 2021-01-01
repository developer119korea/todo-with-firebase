import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAQiJedV4YFXMz0U_YtTdZv7RObQaAP1OM",
  authDomain: "todo-react-firebase-154d6.firebaseapp.com",
  databaseURL: "https://todo-react-firebase-154d6-default-rtdb.firebaseio.com",
  projectId: "todo-react-firebase-154d6",
  storageBucket: "todo-react-firebase-154d6.appspot.com",
  messagingSenderId: "80388273671",
  appId: "1:80388273671:web:a11097d2bfc178614a1ca2",
  measurementId: "G-PNPBN7KR0M"
};

class firebase {
  constructor() {
    app.initializeApp(config);
    this.firestore = app.firestore();
    this.auth = app.auth();
  }

  doSignInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
}

export default new firebase();