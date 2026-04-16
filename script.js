// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Photo Upload Preview
const photoInputs = document.querySelectorAll(".photo-input");

photoInputs.forEach((input) => {
  input.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const box = this.closest(".upload-box");
    const preview = box.querySelector(".preview-image");
    const placeholder = box.querySelector(".placeholder-content");

    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
      placeholder.style.display = "none";
    };
    reader.readAsDataURL(file);
  });
});

// Video Upload Preview
const videoInputs = document.querySelectorAll(".video-input");

videoInputs.forEach((input) => {
  input.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const box = this.closest(".upload-box");
    const preview = box.querySelector(".preview-video");
    const placeholder = box.querySelector(".placeholder-content");

    const videoURL = URL.createObjectURL(file);
    preview.src = videoURL;
    preview.style.display = "block";
    placeholder.style.display = "none";
  });
});
