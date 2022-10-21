function start() {
    autoPlay()
}

start()

// auto play caroulsel
function autoPlay() {
    var counter = 1;
    setInterval(function () {
        document.getElementById('btn-right-' + counter).checked = true;
        counter++;
        if (counter > 3) {
            counter = 1;
        }
    }, 3000)
}








