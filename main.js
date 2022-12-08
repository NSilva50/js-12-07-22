function startTimer(duration) {
    let seconds = duration; // for user input
    let interval = setInterval(function(){
        seconds--; // To lower the timer
        document.getElementById('timer').innerHTML = seconds
        if (seconds === 0) {
            clearInterval(interval);
            let imgElement = document.querySelector('.doge');
            imgElement.setAttribute('src', 'https://unherd.com/wp-content/uploads/2021/09/doge-150x150.jpeg');
            document.getElementById('timer').innerHTML = "Thank you."
        }
    }, 1000)
}