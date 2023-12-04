import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDoPvotU6BtNliRU9UsLwaQ8uNXcyc39D8",
    authDomain: "technorun-2e45e.firebaseapp.com",
    databaseURL: "https://technorun-2e45e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "technorun-2e45e",
    storageBucket: "technorun-2e45e.appspot.com",
    messagingSenderId: "271662174585",
    appId: "1:271662174585:web:46483ff6682a5ab89c5fa8"
  };
 const firebaseApp = initializeApp(firebaseConfig);

 export default firebaseApp;