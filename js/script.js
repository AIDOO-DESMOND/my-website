// ==========================================
// AKIMTRUST BANK
// MAIN JAVASCRIPT
// ==========================================


// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        navigation.classList.toggle("show");

        if (navigation.classList.contains("show")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

}


// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll("#navigation a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("show");

        if (menuToggle) {
            menuToggle.textContent = "☰";
        }

    });

});


// ===============================
// AKIMTRUST BANK - MAIN JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // CONTACT FORM
    // ===============================

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value.trim();

            // Check required fields
            if (!name || !email || !subject || !message) {
                formMessage.textContent = "Please fill in all required fields.";
                formMessage.className = "form-message error";
                return;
            }

            // Check email format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                formMessage.textContent = "Please enter a valid email address.";
                formMessage.className = "form-message error";
                return;
            }

            // Successful submission
            formMessage.textContent =
                "Thank you, " + name + "! Your message has been submitted successfully.";

            formMessage.className = "form-message success";

            // Clear form
            contactForm.reset();
        });
    }

});


// ===============================
// AKIMTRUST BANK - MAIN JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // MOBILE MENU
    // ===============================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }


    // ===============================
    // CONTACT FORM
    // ===============================

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {
                formMessage.textContent =
                    "Please fill in all required fields.";
                formMessage.className = "form-message error";
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                formMessage.textContent =
                    "Please enter a valid email address.";
                formMessage.className = "form-message error";
                return;
            }

            formMessage.textContent =
                "Thank you, " + name +
                "! Your message has been submitted successfully.";

            formMessage.className = "form-message success";

            contactForm.reset();
        });
    }

});