//your JS code here. If required.

const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

// Check for saved credentials when the page loads
function checkSavedCredentials() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername !== null && savedPassword !== null) {
        existing.hidden = false;
    } else {
        existing.hidden = true;
    }
}

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredUsername = username.value;
    const enteredPassword = password.value;

    alert("Logged in as " + enteredUsername);

    if (checkbox.checked) {
        localStorage.setItem("username", enteredUsername);
        localStorage.setItem("password", enteredPassword);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    checkSavedCredentials();
});

// Handle existing user login
existing.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");

    if (savedUsername !== null) {
        alert("Logged in as " + savedUsername);
    }
});

// Run when the page loads
checkSavedCredentials();
