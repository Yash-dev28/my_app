$(document).ready(function() {
    $('#userForm').on('submit', function(event) {
        event.preventDefault();

        // Gather form data
        const formData = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            mobileNo: $('#mobileNo').val(),
            email: $('#email').val(),
            address: {
                street: $('#street').val(),
                city: $('#city').val(),
                state: $('#state').val(),
                country: $('#country').val()
            },
            loginId: $('#loginId').val(),
            password: $('#password').val()
        };

        // Send data via AJAX POST request
        $.ajax({
            url: '/api/users',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                alert('User saved successfully!');
                $('#userForm')[0].reset(); // Reset form after successful submission
            },
            error: function(error) {
                alert('Error saving user!');
                console.log(error); // Log detailed error message to console
            }
        });
    });
});
