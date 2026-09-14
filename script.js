// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


// Velorix Logistics Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJmEGjXjdYW8H3GgqRijmVRazZOi6kEqg",
  authDomain: "velorix-logistics.firebaseapp.com",
  projectId: "velorix-logistics",
  storageBucket: "velorix-logistics.firebasestorage.app",
  messagingSenderId: "363715256525",
  appId: "1:363715256525:web:fa7cb8914151ec01a94984"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Database
const db = getFirestore(app);


console.log("Velorix Logistics Firebase Connected");


// Tracking Button
document.getElementById("trackBtn").addEventListener("click", function(){

    const trackingNumber = document.getElementById("trackingNumber").value.trim();

    if(trackingNumber === ""){
        alert("Please enter your tracking number.");
        return;
    }

    alert(
        "Tracking request received for: " + trackingNumber +
        "\n\nTracking system is connected."
    );

});
