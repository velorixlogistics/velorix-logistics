import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDJmEGjXjdYW8H3GgqRijmVRazZOi6kEqg",
  authDomain: "velorix-logistics.firebaseapp.com",
  projectId: "velorix-logistics",
  storageBucket: "velorix-logistics.firebasestorage.app",
  messagingSenderId: "363715256525",
  appId: "1:363715256525:web:fa7cb8914151ec01a94984"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


console.log("Velorix Logistics Firebase Connected");


document.getElementById("trackBtn").addEventListener("click", async function(){

    const trackingNumber = document
        .getElementById("trackingNumber")
        .value
        .trim();


    if(trackingNumber === ""){
        alert("Please enter your tracking number.");
        return;
    }


    try {

        const shipmentRef = doc(db, "shipment", trackingNumber);

        const shipmentSnap = await getDoc(shipmentRef);


        if(shipmentSnap.exists()){

            const shipment = shipmentSnap.data();

            alert(
                "Shipment Found!\n\n" +
                "Tracking Number: " + shipment.trackingNumber +
                "\nStatus: " + shipment.status +
                "\nLocation: " + shipment.location +
                "\nReceiver: " + shipment.receiver +
                "\nDate: " + shipment.date
            );


        } else {

            alert("No shipment found with this tracking number.");

        }


    } catch(error){

        console.error(error);
        alert("Unable to track shipment right now.");

    }

});
