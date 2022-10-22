function writerTransition(element) {
    const arr = element.innerHTML.split('');
    element.innerHTML = '';
    arr.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 90 * i)
    });
}
const title = document.querySelector('.txt_transition');
writerTransition(title);

const btnMic = document.querySelector('.mic').addEventListener('click', () => {

    setInterval(() => {
        document.querySelector('.get_audio').value = "Gravando..."
    }, 12);
    setTimeout(() => {
        document.querySelector('.first_p').style.visibility = "visible"
        setTimeout(() => {
            document.querySelector('.second_paragraph').style.visibility = "visible"
            document.querySelector('.loader').style.visibility = "visible"
        }, 1000);
        
        setTimeout(() => {
            window.location.href = "../view/map.html";

        }, 5000);

    }, 5000);
})