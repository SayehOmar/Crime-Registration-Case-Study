// script.js
function submitForm(event) {
    // Prevent the form from submitting if validation fails
    if (!validateForm()) {
        event.preventDefault();
    }
}

function validateForm() {
    // Get form elements
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var occupation = document.getElementById('occupation').value;
    var latitude = document.getElementById('latitude').value;
    var longitude = document.getElementById('longitude').value;

    // Simple validation for name and surname - letters only and max length 30
    if (!isLettersOnly(name) || name.length > 30) {
        alert('Please enter a valid name (letters only, max 30 characters).');
        return false;
    }

    if (!isLettersOnly(surname) || surname.length > 30) {
        alert('Please enter a valid surname (letters only, max 30 characters).');
        return false;
    }

    // Simple validation for date of birth - check if it is selected
    if (dob === '') {
        alert('Please select a valid date of birth.');
        return false;
    }

    // Simple validation - check if all fields are non-empty
    if (gender === '' || occupation === '' || latitude === '' || longitude === '') {
        alert('Please fill out all fields before submitting the form.');
        return false;
    }

    // Additional validation logic can be added here

    return true; // Form is valid
}

function isLettersOnly(str) {
    return /^[a-zA-Z]+$/.test(str);
}


    // Submit Handler

function submitForm(event) {
    event.preventDefault();

    // Fetch form data
    var formData = new FormData(document.getElementById('crimeForm'));

    // Call the function to submit data
    submitToGoogleForm(formData);
}




function submitToGoogleForm(formData) {
    fetch('https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwbGklgosmM3ULQq8Ntf72rQyCGEZPrOtrFsU0ybXaYyRMvu0HQZS9Fzvpb8YZa32lhWQ/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Error submitting form. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting form. Please try again later ! ');
    });
}


