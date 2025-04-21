const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Simulated login/logout (you'll enhance this later)
const loginLink = document.getElementById("login-link");
const signupLink = document.getElementById("signup-link");
const logoutLink = document.getElementById("logout-link");

function checkLogin() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (isLoggedIn) {
    loginLink.style.display = "none";
    signupLink.style.display = "none";
    logoutLink.style.display = "inline-block";
  } else {
    loginLink.style.display = "inline-block";
    signupLink.style.display = "inline-block";
    logoutLink.style.display = "none";
  }
}

logoutLink.addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", "false");
  checkLogin();
  window.location.href = "login.html";
});

window.addEventListener("DOMContentLoaded", checkLogin);


document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Appointment booked successfully!");
  });
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent!");
  });
  document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-container");
  
    if (cartContainer) {
      // Simulated cart items (normally from localStorage or backend)
      const cart = [
        { name: "Dr. Alice Morgan", price: 100 },
        { name: "Dr. John Smith", price: 120 }
      ];
  
      if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      } else {
        cart.forEach((item) => {
          const div = document.createElement("div");
          div.classList.add("cart-item");
          div.innerHTML = `
            <h4>${item.name}</h4>
            <span>$${item.price}</span>
          `;
          cartContainer.appendChild(div);
        });
      }
    }
  
    // Form submission
    const form = document.getElementById("appointment-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Appointment confirmed! We’ll contact you soon.");
        form.reset();
      });
    }
  });
  const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    contactForm.reset();
  });
}
function toggleMobileMenu() {
  const navList = document.querySelector('.nav-list');
  navList.classList.toggle('active');
}
