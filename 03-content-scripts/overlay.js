
const closeButton = document.getElementById("closeButton");

const overlay = document.getElementById("overlay");

closeButton.addEventListener("click", function() {
    alert('chimbs rocked');
    formContainer.style.display = "none";
    overlay.style.display = "none";
});
