// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Get form
  const form = document.getElementById("verificationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop reload

    // Get all values
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmpassword").value.trim();

    // Name validation
    if (name.length < 5) {
      alert("Full name must be at least 5 characters long.");
      return;
    }

    // Email validation
    if (!email.includes("@")) {
      alert("Enter a valid email address.");
      return;
    }

    // Phone validation
    if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    // Password validation
    if (
      password.toLowerCase() === "password" ||
      password.toLowerCase() === name.toLowerCase() ||
      password.length < 8
    ) {
      alert("Password is not strong enough.");
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Success
    alert("✅ Form submitted successfully! You are verified as human.");
  });
});
