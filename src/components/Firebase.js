import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCpGVBi6f0oKqLNwKwdUs1v5kGHvv6k-50",
  authDomain: "instagramclone-10feb.firebaseapp.com",
  databaseURL: "https://instagramclone-10feb.firebaseio.com",
  projectId: "instagramclone-10feb",
  storageBucket: "instagramclone-10feb.appspot.com",
  messagingSenderId: "901775382445",
  appId: "1:901775382445:web:f34f788bac4f297b0a7324",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
