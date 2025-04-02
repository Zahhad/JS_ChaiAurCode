document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Email validation
    let email = document.getElementById("email");
    let emailError = email.nextElementSibling;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        emailError.textContent = "Invalid email format";
        emailError.style.visibility = "visible";
        isValid = false;
    } else {
        emailError.style.visibility = "hidden";
    }

    // Password validation
    let password = document.getElementById("password");
    let passwordError = password.nextElementSibling;
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        passwordError.style.visibility = "visible";
        isValid = false;
    } else {
        passwordError.style.visibility = "hidden";
    }

    // Phone number validation
    let phone = document.getElementById("phone");
    let phoneError = phone.nextElementSibling;
    let phonePattern = /^[0-9]{10}$/;
    if (!phone.value.match(phonePattern)) {
        phoneError.textContent = "Phone number must be 10 digits";
        phoneError.style.visibility = "visible";
        isValid = false;
    } else {
        phoneError.style.visibility = "hidden";
    }

    // If form is valid, submit
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }
});
