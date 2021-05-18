import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyB0TLRtk5ffMwhz9wEejN6QT0qvHhyCAFs",
        authDomain: "crwn-db-ad2ff.firebaseapp.com",
        projectId: "crwn-db-ad2ff",
        storageBucket: "crwn-db-ad2ff.appspot.com",
        messagingSenderId: "181736358661",
        appId: "1:181736358661:web:54c336c6f23828f3982d6c",
        measurementId: "G-F3YCPK5ZY5"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;