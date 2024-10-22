let usernameInput = document.getElementById("username-input");
let passwordInput = document.getElementById("password-input");
let emailInput = document.getElementById("email-input");
let phoneNumberInput = document.getElementById("phone-number-input");

let usernameErrorMsg = document.getElementById("username-error-msg");
let passwordErrorMsg = document.getElementById("password-error-msg");
let emailErrorMsg = document.getElementById("email-error-msg");
let phoneNumberErrorMsg = document.getElementById("phone-number-error");

let submitBtn = document.getElementById("submit-btn");

let form = document.getElementById("form");

form.addEventListener("input", function (e) {
    let inputId = e.target.getAttribute("id");
    let inputValue = e.target.value;

    if (inputId === "username-input") {
        if (inputValue === "") usernameErrorMsg.innerText = "Please enter a username";
        else usernameErrorMsg.innerText = "";
    } else if (inputId === "password-input") {
        if (inputValue === "" || inputValue.length < 5) passwordErrorMsg.innerText = "Password must be at least 5 characters long";
        else passwordErrorMsg.innerText = "";
    } else if (inputId === "email-input") {
        if (inputValue === "" || inputValue.length < 3) emailErrorMsg.innerText = "Please enter a valid email address";
        else  emailErrorMsg.innerText = "";
    } else if (inputId === "phone-number") {
        if (inputValue === "" || inputValue.length < 10) phoneNumberErrorMsg.innerText = "Please enter a valid phone number (10 digits)";
        else phoneNumberErrorMsg.innerText = "";
    }
})

// usernameInput.addEventListener("input", function() {
//     if (usernameInput.value === "") usernameErrorMsg.innerText = "Please enter a username";
//     else usernameErrorMsg.innerText = "";
// })

// passwordInput.addEventListener("input", function() {
//     if (passwordInput.value === "" || passwordInput.value.length < 5) passwordErrorMsg.innerText = "Password must be at least 5 characters long";
//     else  passwordErrorMsg.innerText = "";
// })

// emailInput.addEventListener("input", function() {
//     if (emailInput.value === "" || emailInput.value.length < 3) emailErrorMsg.innerText = "Please enter a valid email address";
//     else emailErrorMsg.innerText = "";
// })

// phoneNumberInput.addEventListener("input", function() {
//     if (phoneNumberInput.value === "" || phoneNumberInput.value.length < 10) phoneNumberErrorMsg.innerText = "Please enter a valid phone number (10 digits)";
//     else phoneNumberErrorMsg.innerText = "";
// })


submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (
        !usernameInput.value ||
        !passwordInput.value || passwordInput.value.length < 5 ||
        !emailInput.value || emailInput.value.length < 3 ||
        !phoneNumberInput.value || phoneNumberInput.value.length < 10
    ) alert("Please enter the form details");

    else {
        console.log("Form submitted successfully");
        form.reset();
    }
})