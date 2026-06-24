import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRjPaVOMaj4_7kyqmp2g9Phrz2y1w3LmA",
  authDomain: "placement-preparation-po-cb0e4.firebaseapp.com",
  projectId: "placement-preparation-po-cb0e4",
  storageBucket: "placement-preparation-po-cb0e4.firebasestorage.app",
  messagingSenderId: "125054762801",
  appId:"1:125054762801:web:70e630ddc4fc52a8c6fa10"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);