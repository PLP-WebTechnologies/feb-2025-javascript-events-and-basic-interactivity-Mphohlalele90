// 1. Event Handling

// Button click - Change text color
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
    colorButton.style.backgroundColor = colorButton.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
    colorButton.innerText = "Color Changed!";
});

// Hover effect
colorButton.addEventListener("mouseover", () => {
    colorButton.style.fontSize = "18px";
});

colorButton.addEventListener("mouseout", () => {
    colorButton.style.fontSize = "16px";
});

// Keypress detection
document.addEventListener("keypress", (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// Bonus: Double-click or long press
colorButton.addEventListener("dblclick", () => {
    alert("You double-clicked the button!");
});

// 2. Interactive Elements - Image gallery
const imageGallery = document.getElementById("imageGallery");
const nextImageButton = document.getElementById("nextImage");

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;

nextImageButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    imageGallery.src = images[currentIndex];
});

// 3. Form Validation

const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!nameInput.value || !emailInput.value || !passwordInput.value) {
        errorMessage.textContent = "All fields are required!";
        return;
    }
    
    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = "Please enter a valid email!";
        return;
    }

    // Validate password length
    if (passwordInput.value.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters!";
        return;
    }

    errorMessage.textContent = "Form submitted successfully!";
});