function calcTime(x) {

    date = new Date(x).getTime();



    function updateTimer(date) {

        const now = new Date().getTime();
        const end = date - now;


        const days = Math.floor(end / (1000 * 60 * 60 * 24));
        const hours = Math.floor((end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((end % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((end % (1000 * 60)) / 1000);


        document.querySelector('.days-timer').innerHTML = days;
        document.querySelector('.hours-timer').innerHTML = hours;
        document.querySelector('.minutes-timer').innerHTML = minutes;
        document.querySelector('.seconds-timer').innerHTML = seconds;

        if (now >= date) {
            clearInterval(startTimer);
            document.querySelector('.days-timer').innerHTML = 'D';
            document.querySelector('.hours-timer').innerHTML = 'O';
            document.querySelector('.minutes-timer').innerHTML = 'N';
            document.querySelector('.seconds-timer').innerHTML = 'E';
        }
    }

    startTimer = setInterval(function() { updateTimer(date); }, 1000);
}