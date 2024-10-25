function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values of the username and password input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (username === 'Lordy' && password === '12345') {
        // Redirect to another page (e.g., dashboard.html)
        window.location.href = 'dashboard.html';
    } else {
        // Display an error message and reload the page
        document.getElementById('error-message').textContent = 'Incorrect username or password.';
        setTimeout(() => {
            location.reload(); // Reload the page after 2 seconds
        }, 2000);
    }
}