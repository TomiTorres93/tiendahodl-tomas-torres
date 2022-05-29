import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDm1zGG7O4gxa4gYRsUgehqkMa7zWH4OZ8",
  authDomain: "hodltienda-reactcoderhouse.firebaseapp.com",
  projectId: "hodltienda-reactcoderhouse",
  storageBucket: "hodltienda-reactcoderhouse.appspot.com",
  messagingSenderId: "948428715881",
  appId: "1:948428715881:web:7b6ca352edc5e141f32ff8"
};

const app = initializeApp(firebaseConfig);



export default function getFirestoreApp() {
    return app
}