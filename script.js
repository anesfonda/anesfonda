document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("popup");
    var container = document.getElementById("booking-container");
    var form = document.getElementById("booking-form");
    var formInputs = document.querySelectorAll("#booking-form input");
    var paymentSection = document.getElementById("payment-section");
    var confirmPaymentButton = document.getElementById("confirm-payment");
  
    // Function to pause animation
    function pauseAnimation() {
      container.classList.add("paused");
      popup.classList.add("paused");
    }
  
    // Function to resume animation
    function resumeAnimation() {
      container.classList.remove("paused");
      popup.classList.remove("paused");
    }
  
    // Event listener for mouse entering the container
    container.addEventListener("mouseenter", function () {
      pauseAnimation();
    });
  
    // Event listener for mouse leaving the container
    container.addEventListener("mouseleave", function () {
      resumeAnimation();
    });
  
    // Submit form event listener
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // Pause animation while form is being submitted
      pauseAnimation();
  
      // Retrieve form values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var date = document.getElementById("date").value;
      var time = document.getElementById("time").value;
      var service = document.getElementById("service").value;
  
      // Simulate form submission (replace with actual implementation)
      setTimeout(function () {
        // Display payment section
        paymentSection.style.display = "block";
        window.scrollTo({
          top: paymentSection.offsetTop - 100, // Offset to scroll just above the section
          behavior: 'smooth' // Smooth scroll effect
        });
      }, 500); // Simulate a delay (can be adjusted or removed)
    });
  
    // Confirm payment event listener
    confirmPaymentButton.addEventListener("click", function () {
      // Simulate payment confirmation
      var message = "Your payment has been confirmed. Your appointment is booked!";
      var messageDiv = document.getElementById("message");
      messageDiv.innerHTML = message;
  
      // Show booking details after payment
      var confirmedName = document.getElementById("confirmed-name");
      var confirmedEmail = document.getElementById("confirmed-email");
      var confirmedService = document.getElementById("confirmed-service");
      var confirmedDate = document.getElementById("confirmed-date");
      var confirmedTime = document.getElementById("confirmed-time");
  
      confirmedName.textContent = document.getElementById("name").value;
      confirmedEmail.textContent = document.getElementById("email").value;
      confirmedService.textContent = document.getElementById("service").value;
      confirmedDate.textContent = document.getElementById("date").value;
      confirmedTime.textContent = document.getElementById("time").value;
  
      // Display the booking details
      var bookingDetails = document.getElementById("booking-details");
      bookingDetails.style.display = "block";
  
      // Hide the payment section
      paymentSection.style.display = "none";
    });
  });
  