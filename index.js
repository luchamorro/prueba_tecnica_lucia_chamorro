  // function updateClock() {
  //   const now = new Date();
  //   const options = {
  //     weekday: 'short',
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //     hour: '2-digit',
  //     minute: '2-digit'
  //   };
  //   const dateHour = now.toLocaleString('en-En', options);
  //   document.getElementById('clock').textContent = dateHour;
  // }

  // updateClock(); 
  // setInterval(updateClock, 60000);

  //-------------

  const loginButton = document.getElementById("login-button");
  loginButton.addEventListener("click", openLoginModal);

  function openLoginModal(){
    const loginModal = document.getElementById("login-modal").style.display = "flex";
    
  }

 //-------------

 const closeModalButton = document.getElementById("close-modal");
 closeModalButton.addEventListener("click", closeLoginModal);

 function closeLoginModal(){
  const loginModal = document.getElementById("login-modal").style.display = "none";
 }

 // ------------
 const passwordEye = document.getElementById("password-eye");
 passwordEye.addEventListener("click", togglePasswordEye);
 
 function togglePasswordEye(){
      passwordEye.classList.toggle("password-eye-close");
      const loginPass = document.getElementById("passLogin");
          if (loginPass.type === 'password') {
            loginPass.type = 'text'; 
          } else {
            loginPass.type = 'password'; 
          }
}

// -------

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

    localStorage.setItem("logged", "true");
    localStorage.setItem("username", userName);
  } else {
    alert("Incorrect username or password");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const isLogged = localStorage.getItem("logged") === "true";
  const userName = localStorage.getItem("username");

  if (isLogged && userName === "Maria") {
    document.getElementById("userLog").style.display = "block";
    loginButton.style.display = "none";
  }
});


// ---

document.querySelectorAll(".img-gallery").forEach( item => {
  item.addEventListener('click', arrow => {

})})


document.querySelectorAll('.img-gallery').forEach(element => {

  const originalSrc = element.getAttribute('src');
  const hoverSrc = originalSrc.replace('.jpg', 'b.jpg');
 
  element.addEventListener('mouseenter', () => {
    element.setAttribute('src', hoverSrc);
  });

  element.addEventListener('mouseleave', () => {
    element.setAttribute('src', originalSrc);
  });
});

// -------

function activateButton() {

  const contactFormButton = document.getElementById("contact-form-button");
  const nameForm = document.getElementById("nameForm").value.trim();
  const emailForm = document.getElementById("emailForm").value.trim();
  const messageForm = document.getElementById("messageForm").value.trim();
  const acceptPolicies = document.getElementById("acceptPolicies").checked;

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailForm);

        if (nameForm && emailForm && messageForm && emailIsValid && acceptPolicies) {
              contactFormButton.disabled = false;
              contactFormButton.classList.add("submit-button2"); 
              contactFormButton.classList.remove("submit-button");
        } else {
              contactFormButton.disabled = true;
              contactFormButton.classList.remove("submit-button2");
              contactFormButton.classList.add("submit-button"); 
        }
      }


const welcome = document.getElementById('welcome');

function hideWelcomeOnce() {
  welcome.classList.add('hide');
  document.removeEventListener('click', hideWelcomeOnce);
  window.removeEventListener('scroll', hideWelcomeOnce);
}

document.addEventListener('click', hideWelcomeOnce);
window.addEventListener('scroll', hideWelcomeOnce);

// Datos de productos: nombre y precio por imagen
const products = {
  "img/sofa1b.jpg": { name: "Green Couch", price: "€1800" },
  "img/sofa2b.jpg": { name: "Red Couch", price: "€1300" },
  "img/sofa3b.jpg": { name: "White Couch", price: "€1480" },
  "img/sofa4b.jpg": { name: "Light Couch", price: "€1900" },
  "img/sofa5b.jpg": { name: "Grey Couch", price: "€900" },
  "img/sofa6b.jpg": { name: "Yellow Couch", price: "€880" }
};

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalImgb = document.getElementById("modal-imgb");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalClose = document.getElementById("modal-close");

document.querySelectorAll(".img-gallery").forEach(img => {
  img.addEventListener("click", () => {
    const src = img.getAttribute("src");
    const srcSinB = src.replace(/b(?=\.jpg$)/, ''); 
    modal.style.display = "flex";
    modalImg.src = srcSinB;
    modalImg.alt = img.alt;
    modalImgb.src =src;
    modalName.textContent = products[src]?.name || "Unknown";
    modalPrice.textContent = products[src]?.price || "";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal si clicas fuera de la imagen
modal.addEventListener("click", (e) => {
  if(e.target === modal) {
    modal.style.display = "none";
  }
});

const h1 = document.getElementById("h1");

h1.addEventListener("click",() =>{
  window.location.href = "index.html";

})



  document.addEventListener("DOMContentLoaded", () => {
      document.getElementById("nameForm").addEventListener("input", activateButton);
      document.getElementById("emailForm").addEventListener("input", activateButton);
      document.getElementById("messageForm").addEventListener("input", activateButton);
      document.getElementById("acceptPolicies").addEventListener("change", activateButton);
});



