import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC6NzfAnApF64h-_Vvu2Rh7HA5idMVnJOo",
    authDomain: "linkedin-project-9d9c9.firebaseapp.com",
    projectId: "linkedin-project-9d9c9",
    storageBucket: "linkedin-project-9d9c9.appspot.com",
    messagingSenderId: "292728490974",
    appId: "1:292728490974:web:42928dcc7b5ee34acf2b4f",
    measurementId: "G-1TZZ6GT288"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };