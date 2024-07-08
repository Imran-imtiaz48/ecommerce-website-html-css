// Focus the cursor on the email address input field without scrolling the page
const emailField = document.getElementById("email-address-input");
if (emailField) {
    emailField.focus({ preventScroll: true });
} else {
    console.warn("Email address input field not found.");
}
