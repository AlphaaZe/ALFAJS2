const inputPassword = document.getElementById('passwordku');
const errorMess = document.getElementById('errorku');
const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener("click", () => {
    const password = inputPassword.value;
    if (password.length > 8){
        errorMess.textContent = "password is valid";
        errorMess.style.color = "green";
    } else {
        errorMess.textContent = "password is invalid";
        errorMess.style.color = "red";
    }
});
