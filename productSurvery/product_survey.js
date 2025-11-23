// Variable to store the reference to the submit button element
const submitButton = document.getElementById('submitBtn');

/**
 * Handles the feedback submission process:
 * 1. Fetches all user input values from the form.
 * 2. Displays a 'Thank You' alert.
 * 3. Populates the user information section on the webpage.
 * 4. Makes the user information section visible.
 */
function submitFeedback() {
    // 1. Fetch values from respective HTML input elements
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // 2. Display thank you message
    alert('Thank you for your valuable feedback');

    // 3. Display the fetched information back to the user on the webpage
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // 4. Make the user information section visible (it was initially display: none)
    document.getElementById('userInfo').style.display = 'block';
}

// Assigns the submitFeedback function to execute when the submit button is clicked
submitButton.onclick = submitFeedback;

// Event listener to submit the form when the 'Enter' key is pressed anywhere on the document
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
       