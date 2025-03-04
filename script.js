document.addEventListener("DOMContentLoaded", function () {
        function getFormvalue(event) {
            event.preventDefault(); // Prevent default form submission
            
            let firstName = document.querySelector('#fname').value.trim();
            let lastName = document.querySelector('#lname').value.trim();
            
            if (firstName || lastName) {
                alert(firstName + ' ' + lastName);
            } else {
                alert('Please enter at least one name.');
            }
        }
        
        document.getElementById('form1').addEventListener('submit', getFormvalue);
    });

