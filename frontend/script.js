document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Retrieve input values
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;

    // Create a payload object
    const data = {
        value1: value1,
        value2: value2
    };

    // Make a POST request to the backend
    fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        // Display success message
        document.getElementById('confirmation').innerText = 'Data submitted successfully!';
    })
    .catch(error => {
        // Display error message
        document.getElementById('confirmation').innerText = 'Error submitting data!';
        console.error('Error:', error);
    });
});
