import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBd2t-S2ObGvjI8VVSRDgTAwh-Ahh_utH4',
  authDomain: 'graphiql-9314f.firebaseapp.com',
  projectId: 'graphiql-9314f',
  storageBucket: 'graphiql-9314f.appspot.com',
  messagingSenderId: '13114618696',
  appId: '1:13114618696:web:1833ad614fe284a627b97d',
  measurementId: 'G-PWG042EH87',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err);
  }
};

export const registerWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    alert(err);
  }
};

export const logout = () => {
  signOut(auth);
};
