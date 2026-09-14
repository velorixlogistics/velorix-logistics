document.getElementById("trackBtn").addEventListener("click", function(){

    const trackingNumber = document.getElementById("trackingNumber").value.trim();

    if(trackingNumber === ""){
        alert("Please enter your tracking number.");
        return;
    }

    alert(
        "Tracking request received for: " + trackingNumber +
        "\n\nTracking system is being connected."
    );

});
