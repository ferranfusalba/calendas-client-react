/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxAx9cxHRK3FyQfoi5insTZKAZB-MUfIc",
    authDomain: "react-calendas-clients.firebaseapp.com",
    projectId: "react-calendas-clients",
    storageBucket: "react-calendas-clients.appspot.com",
    messagingSenderId: "545662672328",
    appId: "1:545662672328:web:c2e5ad79c67a0a563e74fd"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

export { db };
*/
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