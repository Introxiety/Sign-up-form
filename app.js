document.querySelector('.myForm').addEventListener('submit', (e) =>{
    e.preventDefault();

    let lastHasError = false;
    let firstHasError = false;
    let emailHasError = false;
    let passwordHasError = false;

    const firstName = document.querySelector('#firstNameInput');
    const lastName = document.querySelector('#lastNameInput');
    const emailInput = document.querySelector('#emailInput');
    const passwordInput = document.querySelector('#passwordInput');
    const errorMessageFirst = document.querySelector('.errorMessageFirst');
    const errorMessageLast = document.querySelector('.errorMessageLast');
    const errorMessageEmail =document.querySelector('.errorMessageEmail');
    const errorMessagePassword = document.querySelector('.errorMessagePassword');


    // FIRST NAME CHECKER
    if (firstName.value.trim().length <= 0 || !isValidName(firstName.value)) {
        errorMessageFirst.style.display = 'block';
        if (firstName.value.trim().length <= 0) {
            errorMessageFirst.innerText = 'First name cannot be empty';
        } else {
            errorMessageFirst.innerText = 'First name cannot contain numbers';
        }
        firstHasError = true;
        firstName.style.border = '1px solid red';
    } else {
        errorMessageFirst.style.display = 'none';
        firstName.style.border = '1px solid #5E54A4';
    }

    // Last Name Checker

    if (lastName.value.trim().length <= 0 || !isValidName(lastName.value)) {
        errorMessageLast.style.display = 'block';
        if (lastName.value.trim().length <= 0) {
            errorMessageLast.innerText = 'Last name cannot be empty';
        } else {
            errorMessageLast.innerText = 'Last name cannot contain numbers';
        }
        lastHasError = true;
        lastName.style.border = '1px solid red';
    } else {
        errorMessageLast.style.display = 'none';
        lastName.style.border = '1px solid #5E54A4';
    }

    // Email Checker

    if (emailInput.value.trim().length <= 0 || !isValidEmail(emailInput.value)) {
        errorMessageEmail.style.display = 'block';
        if (emailInput.value.trim().length <= 0) {
            errorMessageEmail.innerText = 'Email cannot be empty';
        } else {
            errorMessageEmail.innerText = 'Please provide a valid email';
        }
        emailHasError = true;
        emailInput.style.border = '1px solid red';
    } else {
        errorMessageEmail.style.display = 'none';
        emailInput.style.border = '1px solid #5E54A4';
    }
    
    // Password Checker
    if (passwordInput.value.trim().length <= 0 || !isValidPassword(passwordInput.value)) {
        errorMessagePassword.style.display = 'block';
        if (passwordInput.value.trim().length <= 0) {
            errorMessagePassword.innerText = 'Password cannot be empty';
        } else {
            errorMessagePassword.innerText = 'Minimum eight characters, at least one letter and one number';
        }
        passwordHasError = true;
        passwordInput.style.border = '1px solid red';
    } else {
        errorMessagePassword.style.display = 'none';
        passwordInput.style.border = '1px solid #5E54A4';
    }



    if (firstHasError || lastHasError || emailHasError || passwordHasError) {
        return;
    }

    document.querySelector('.myForm').submit()
});


function isEmpty(input){
    return input.length > 0;
}

function isValidName(name) {
    const namePattern = /^[a-zA-Z]+([- ][a-zA-Z]+)*$/;
    return namePattern.test(name) && !/\d/.test(name); // Ensure no numeric characters
}

function isValidEmail(email) {
    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  function isValidPassword(password){
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
  }