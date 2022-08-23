// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB5bJm5Kqb7HkqRuIa2ZQKjhAD7sfcgnAk",
	authDomain: "blog-posts-example-7ee1e.firebaseapp.com",
	projectId: "blog-posts-example-7ee1e",
	storageBucket: "blog-posts-example-7ee1e.appspot.com",
	messagingSenderId: "256326572039",
	appId: "1:256326572039:web:b312d659911ba1bbb172a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firbase = getFirestore();
export const auth = getAuth(app);
