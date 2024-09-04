document.getElementById('forgotPasswordForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('mail').value;

    if (email === '') {
        alert('Please enter your email address.');
        return;
    }

    const data = { email };

    fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                alert('Reset link sent to your email!');
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

