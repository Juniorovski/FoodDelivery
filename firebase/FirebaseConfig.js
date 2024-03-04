
import { initializeApp } from "firebase/app";
import {getAuth,} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";


 const firebaseConfig = {
  apiKey: "AIzaSyAV4IuvOEqpNsQddS4MDo3hjZAceAo2N0s",
  authDomain: "fooddelivery-1da99.firebaseapp.com",
  projectId: "fooddelivery-1da99",
  storageBucket: "fooddelivery-1da99.appspot.com",
  messagingSenderId: "840743961847",
  appId: "1:840743961847:web:4b4317704ccbae49833ff2"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app,{
    dependencies:{
      AsyncStorage:AsyncStorage
    }
  });

  export default app;

