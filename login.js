// Get form elements
const usernameInput = document.getElementById('userName');
const passwordInput = document.getElementById('password1');
const loginButton = document.querySelector('.log button');

// Add event listener to login button
loginButton.addEventListener('click', (event) => {
    // Prevent default form submission behavior (if applicable)
    event.preventDefault();

    // Basic validation checks
    if (usernameInput.value === '') {
        alert('Please enter your username or email address.');
        return;
    }

    if (passwordInput.value === '') {
        alert('Please enter your password.');
        return;
    }

    // If validation passes (replace with actual login logic)
    alert('Login successful!');
});
