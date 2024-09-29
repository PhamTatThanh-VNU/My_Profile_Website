(function () {
  emailjs.init({
    publicKey: "epDiH0_GUFGsmGkEj",
  });
})();
window.onload = function () {
  "use strict";

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      document.getElementById("contact-form").reset();
      emailjs.sendForm("service_79yk9qn", "template_pwdvzdi", this).then(
        function (response) {
          const successAlert = document.getElementById("success-alert");
          successAlert.style.display = "block"; // Show the alert

          setTimeout(() => {
            successAlert.style.display = "none"; // Hide after 5 seconds
          }, 3000);
        },
        function (error) {
          const errorAlert = document.getElementById("error-alert");
          errorAlert.style.display = "block"; // Show the alert

          document.getElementById("contact-form").reset();

          setTimeout(() => {
            errorAlert.style.display = "none"; // Hide after 5 seconds
          }, 3000);
        }
      );
    });
};
