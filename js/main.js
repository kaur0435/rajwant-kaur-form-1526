//PATTERN FOR EMAIL
let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// EVENT-TARGET OBJECT
let btn = document.getElementById("submit-btn");
let email = document.getElementById("email");
let fullName = document.getElementById("full-name");
let message = document.getElementById("msg");

// CLEAR THE DATA FROM HTML FORM
let testForm = document.querySelector("form");

// EVENT-HANDLER
function validateForm() {

    console.clear();

    // save data and errors in these initially empty "buckets":
    let errors = [];
    let data = {};

    // VALIDATING FULL NAME
    if (fullName.value === "") {
        errors.push("Full name is missing");
    } else {
        data.fullnameProp = fullName.value;
    }

    // VALIDATING EMAIL
    if (email.value === "") {
        errors.push("Email is missing");
    } else {
        if (pattern.test(email.value)) {
            data.emailProp = email.value;
        } else {
            errors.push("Invalid Email");
        }
    }

    //VALIDATING MESSAGE
    if (message.value === "") {
        errors.push("Message is missing");
    } else {
        data.messageProp = message.value;
    }


    // CREATE FEEDBACK
    if (errors.length === 0) {
        // clear your form here:
        testForm.reset();
        console.log(data);
    } else {
        console.log(errors);
    }
}

// REGISTERING EVENT
btn.addEventListener("click", validateForm);