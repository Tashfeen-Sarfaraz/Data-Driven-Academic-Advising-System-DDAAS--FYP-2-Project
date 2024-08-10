const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const sendBtn = document.getElementById('sendBtn');

loginBtn.addEventListener('click', (event) => {
    // Handle login button click (e.g., open login page in a new tab)
    window.open("Login Page.html", '_blank'); // Replace 'login.html' with your actual login page
});

registerBtn.addEventListener('click', (event) => {
    // Handle register button click (e.g., open registration page in a new tab)
    window.open('Registratiopage.html', '_blank'); // Replace 'register.html' with your actual registration page
});

sendBtn.addEventListener('click', (event) => {
    // Handle send button click (e.g., prompt for message content and send it using AJAX)
    const message = prompt('Enter your message:');
    if (message) {
        console.log(`Sending message: ${message}`); // Placeholder for actual sending functionality
    }
});
