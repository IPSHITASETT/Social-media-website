import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCJDH4OHRdrXWpfPMLAIgFolFrF_Qm_33s",
  authDomain: "monkeykart-9dd87.firebaseapp.com",
  projectId: "monkeykart-9dd87",
  storageBucket: "monkeykart-9dd87.appspot.com",
  messagingSenderId: "714979473532",
  appId: "1:714979473532:web:5773786bcdc88c99ee71f9",
  measurementId: "G-7Z5Z9YEWBV"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
