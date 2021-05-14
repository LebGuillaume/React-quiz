import app from "firebase/app";
const config = {
  apiKey: "AIzaSyDdcjgiPgz2Taha05mDEnqOcAeXvtwHyOg",
  authDomain: "marvel-quiz-f4f22.firebaseapp.com",
  projectId: "marvel-quiz-f4f22",
  storageBucket: "marvel-quiz-f4f22.appspot.com",
  messagingSenderId: "724510465232",
  appId: "1:724510465232:web:75b3593c2834426b08d2d5",
};
class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;
