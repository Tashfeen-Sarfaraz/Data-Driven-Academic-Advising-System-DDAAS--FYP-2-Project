document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const userType = document.querySelector('input[name="userType"]:checked').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please confirm your password.');
        return;
    }

    const data = {
        fullName,
        email,
        username,
        password,
        userType
    };

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                alert('Registration successful!');
                window.location.href = '/login.html'; // Redirect to login page after successful registration
            } else {
                return response.json().then(error => {
                    throw new Error(error.message);
                });
            }
        })
        .catch(error => {
            alert(`Error: ${error.message}`);
        });
});