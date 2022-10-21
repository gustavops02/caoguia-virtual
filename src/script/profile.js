const btnEmail = document.getElementsByClassName('email')[0];
const inputEmail = document.getElementById('emailInput');
const btnForEmail = document.getElementsByClassName('email_btn')[0];

btnEmail.addEventListener('click', handling);

function handling() {

    inputEmail.style.display = "block"; // Mostro o input
    btnEmail.classList.remove("email")
    btnEmail.innerHTML = null;

    btnForEmail.style.display = "block";
    btnForEmail.addEventListener('click', () => {
        if (inputEmail.value !== null || inputEmail.value.forEach((x)=> x.contains = '@')) {
            btnEmail.classList.remove("email"); // Removo o botao do email
            btnEmail.classList.add("btnForEmail"); //coloco o estilo para o email
            btnForEmail.style.display = "none";
            inputEmail.style.display = "none";
            btnEmail.innerHTML = inputEmail.value;
            document.getElementById('resultError').style.display = "none"

        } else {
            inputEmail.style.border = "1px solid red";
            document.getElementById('resultError').style.display = "inline-block"
        }

    })
    btnEmail.removeEventListener('click', handling)
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
        return (true)
    }
    return (false)
}