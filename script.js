// script.js
const openPopupButton = document.getElementById("openPopupButton");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openPopupButton.addEventListener("click", () => {
  popup.style.display = "flex";  // Tampilkan pop-up
});

closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";  // Sembunyikan pop-up
});

