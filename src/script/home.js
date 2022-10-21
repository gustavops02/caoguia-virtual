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


})