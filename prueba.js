const loginModalButton = document.getElementById("login-button-form");
loginModalButton.addEventListener("click", login);

function login() {
  const userName = document.getElementById("nameLogin").value;
  const password = document.getElementById("passLogin").value;
  const userLog = document.getElementById("userLog");

  if (userName === "Maria" && password === "1234") {
    alert("Welcome Maria!");
    userLog.style.display = "block";
    loginButton.style.display = "none";
    closeLoginModal();

    // Guardar sesión en localStorage
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", userName);
  } else {
    alert("Incorrect username or password");
  }
}

// Verificar sesión al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const userName = localStorage.getItem("username");

  if (isLoggedIn && userName === "Maria") {
    document.getElementById("userLog").style.display = "block";
    loginButton.style.display = "none";
  }
});
