import { firebaseConfig } from './config';
export const firebase = require("firebase/app");
require("firebase/database");

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebaseApp.database();