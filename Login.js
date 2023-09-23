function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Replace these values with your actual username and password
    var correctUsername = "Ayushman Kalita-SpaceBird";
    var correctPassword = "database-spacebird";
    
    var failedAttempts = parseInt(localStorage.getItem("failedAttempts")) || 0;
    var lastAttemptTime = parseInt(localStorage.getItem("lastAttemptTime")) || 0;
    
    var currentTime = new Date().getTime();
    var fiveMinutesInMillis = 5 * 60 * 1000; // 5 minutes in milliseconds
    
    if (currentTime - lastAttemptTime > fiveMinutesInMillis) {
        // Reset failed attempts if 5 minutes have passed
        failedAttempts = 0;
    }
    
    if (failedAttempts >= 3) {
        alert("You have exceeded the maximum number of data enter attempts. Please wait for 5 minutes before trying again.");
    } else if (username === correctUsername && password === correctPassword) {
        window.location.href = "database.html";
    } else {
        failedAttempts++;
        localStorage.setItem("failedAttempts", failedAttempts);
        localStorage.setItem("lastAttemptTime", currentTime);
        alert(" You have provided incorrect or non-existant data. You have " + (3 - failedAttempts) + " attempts left." + " WARNING: " + ( failedAttempts));
    }
}
window.addEventListener('devtoolschange', function (e) {
if (e.detail.open) {
alert('Developer tools are open. Please refrain from inspecting the code.');
}
});