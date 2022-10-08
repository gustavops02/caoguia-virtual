let user = { nome: "Cliente", password: "cliente123" };

const usernameInput = document.getElementById("username_login");
const passwordInput = document.getElementById("password_login");
const errorSpan = document.getElementById("errMsg");

document.getElementById("button_login").addEventListener("click", (event) => {
    if (usernameInput.value == user.nome && passwordInput.value == user.password) {
        window.location.href = "../view/home.html";
    } else if (usernameInput.value !== user.nome || passwordInput.value !== user.password) {
        passwordInput.style.border = "2px solid #f20001";
        usernameInput.style.border = "2px solid #f20001";
        errorSpan.innerHTML = "Usuário ou senha incorreto(s)";
        errorSpan.classList.add("error_msg");
    }

})