import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyB_WwJfpXnCX3-XEvlRgtRUBoDPmE-sKZs",
    authDomain: "vikas-211f3.firebaseapp.com",
    projectId: "vikas-211f3",
    storageBucket: "vikas-211f3.appspot.com",
    messagingSenderId: "439022418035",
    appId: "1:439022418035:web:991f3d8f4ada735af91206"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export {db} 