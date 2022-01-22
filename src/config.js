import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDxAx9cxHRK3FyQfoi5insTZKAZB-MUfIc",
    authDomain: "react-calendas-clients.firebaseapp.com",
    projectId: "react-calendas-clients",
    storageBucket: "react-calendas-clients.appspot.com",
    messagingSenderId: "545662672328",
    appId: "1:545662672328:web:c2e5ad79c67a0a563e74fd"
});

var db = firebaseApp.firestore();

export { db };