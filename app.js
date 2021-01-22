function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");
  const warningMessage = document.getElementById("warning");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      if (input.type == "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
        warningMessage.textContent = "";
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
        warningMessage.textContent = "";
      } else if (input.type === "password" && validateUser(input)) {
        nextSlide(parent, nextForm);
        warningMessage.textContent = "";
      } else {
        parent.style.animation = "shake 0.5s ease";
        if (parent.classList[0] === "field-name") {
          warningMessage.textContent =
            "Username must be atleast 6 characters long.";
        } else if (parent.classList[0] === "field-email") {
          warningMessage.textContent = "Please provide a valid email.";
        } else if (parent.classList[0] === "field-password") {
          warningMessage.textContent =
            "Password must be atleast 6 characters long.";
        }
      }
      //get rid of animation
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
}

function validateUser(user) {
  if (user.value.length < 6) {
    error("rgb(189,87,87");
  } else {
    error("lightsalmon");
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (validation.test(email.value)) {
    error("lightsalmon");
    return true;
  } else {
    error("rgb(189,87,87");
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

function error(color) {
  document.body.style.backgroundColor = color;
}

animatedForm();
