const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  e.preventDefault();
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("bi-eye");
});

const submitBtn = document.querySelector("#submitBtn");
const submit = document.querySelector("#submit");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("user-details").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => (document.getElementById("spinner").style.display = "none"), 1000);
  setTimeout(() => (document.getElementById("complete").style.display = "block"), 1000);
});
