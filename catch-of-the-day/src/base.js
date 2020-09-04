import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBLA6vJpwTrw08-vNxAA6wIefUVUHMvRIY",
  authDomain: "catch-of-the-day-clark-ngo.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-clark-ngo.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
