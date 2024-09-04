document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('userName').value;
    const password = document.getElementById('password1').value;
    const remember = document.getElementById('remember').checked;

    if (username === '') {
        alert('Please enter your username or email address.');
        return;
    }

    if (password === '') {
        alert('Please enter your password.');
        return;
    }

    const data = {
        username,
        password,
        remember
    };

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                alert('Login successful!');
                window.location.href = '/dashboard.html'; // Redirect to a dashboard or homepage after login
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
