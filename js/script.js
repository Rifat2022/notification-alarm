var startBtn = document.getElementById("btn-start")
var closeBtn = document.getElementById("btn-close")
var closingDiv = document.getElementById("closing-div")
var btnSet = document.getElementById("btn-set")
var inputEl = document.getElementById("input-el")
var spinner = document.getElementById("spinner")
var setting = document.getElementById("setting")

document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio('../media/mixkit-battleship-alarm-1001.wav');
    let intervalTime = 2000;
    btnSet.onclick = function(){
        if(inputEl.value.trim() != ''){ 
            intervalTime = inputEl.value * 60 * 1000;
            startBtn.style.display = ' flex';
            inputEl.style.display = ' none';
            btnSet.style.display = ' none';
            var text = document.getElementById("set-text")
        }
    }

    startBtn.onclick = function() {
        spinner.style.display = 'block';
        startBtn.style.background = "#2A4365"; 
        var strtText = document.getElementById("strt-text"); 
        // strtText.style.display = "none"; 
        strtText.innerHTML = "Started"; 
        setTimeout(function() {
            closingDiv.style.display = ' flex';
            setting.style.display = "none"; 
            audio.play();
        }, intervalTime); 
    };
    closeBtn.onclick = function(){
        closingDiv.style.display = ' none';
        audio.pause();
        audio.currentTime = 0;
        location.reload(); 


    }
});




