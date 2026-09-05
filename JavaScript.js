const weddingDate = new Date("September 19, 2026 10:00:00").getTime();

setInterval(function(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

},1000);
const music = document.getElementById("bg-music");
const musicButton = document.getElementById("music-button");

let isPlaying = false;

musicButton.addEventListener("click", function(){

    if(isPlaying){

        music.pause();
        musicButton.textContent = "♫";
        isPlaying = false;

    }else{

        music.play();
        musicButton.textContent = "❚❚";
        isPlaying = true;

    }
    
});
function copyAccount(accountNumber, button){

    navigator.clipboard.writeText(accountNumber)

    .then(function(){

        button.textContent = "Copied ✓";

        setTimeout(function(){

            button.textContent = "Copy Account";

        }, 2000);

    })

    .catch(function(){

        alert("Unable to copy account number.");

    });

}
