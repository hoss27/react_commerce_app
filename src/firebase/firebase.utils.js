import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB2z0mDvFo-SYwwCI7Ksl9B50R29OQ7Yl4",
  authDomain: "ecmmerce-b779b.firebaseapp.com",
  databaseURL: "https://ecmmerce-b779b.firebaseio.com",
  projectId: "ecmmerce-b779b",
  storageBucket: "ecmmerce-b779b.appspot.com",
  messagingSenderId: "846615064548",
  appId: "1:846615064548:web:9bcc49a02618260973a1f1",
  measurementId: "G-SY5PX036FP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createDocumentUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("error creating user" + e.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
