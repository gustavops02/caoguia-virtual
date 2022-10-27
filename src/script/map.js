
const result = document.querySelector("#voiceResult");

setInterval(function () {
    let position = ['esquerda', 'direita'];
    newPos = Math.floor(Math.random()*3) + 1;
    if(newPos == undefined){
        newPos = 1
    }
    let metros = Math.floor(Math.random() * 1000) + 1;
    result.innerHTML = ` A ${metros}m, vire a ${(newPos ==1)? position[0]:position[1]}`

}, 10000)