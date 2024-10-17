document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const messageDiv = document.getElementById('message'); // Get the message div

    fetch('http://localhost:5000/api/data', {  // Ensure the URL matches your Flask route
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value1, value2 })
    })
    .then(response => response.json())
    .then(data => {
        // Display the message in the message div
        if (data.message) {
            messageDiv.innerHTML = `<span style="color: green;">${data.message}</span>`;
        } else if (data.error) {
            messageDiv.innerHTML = `<span style="color: red;">${data.error}</span>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        messageDiv.innerHTML = `<span style="color: red;">An error occurred while submitting data.</span>`;
    });
});
