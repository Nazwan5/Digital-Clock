let clock = document.querySelector('.clock')

function digitalClock(){
    let time = new Date()
    clock.innerHTML = time.toLocaleTimeString()
}

setInterval(digitalClock, 1000)    