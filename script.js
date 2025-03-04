function getFormvalue(event) {
    //Write your code here
            event.preventDefault(); // Prevent default form submission behavior
            
            // Get input values and trim any extra spaces
            let firstName = document.querySelector('#fname').value.trim();
            let lastName = document.querySelector('#lname').value.trim();
            
            // Concatenate full name and display alert
            if (firstName || lastName) { // Ensure at least one field is filled
                alert(firstName + ' ' + lastName);
            } else {
                alert('Please enter at least one name.');
            }
        }
        
        // Attach event listener to the form
        document.getElementById('form1').addEventListener('submit', getFormvalue);
}
