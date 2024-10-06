window.onload=function () {
    // var minutes = 0;
    var seconds = 0;
    var milliseconds = 0;
    var appendmilliseconds = document.getElementById("milliseconds");
    var appendseconds = document.getElementById("seconds");
    // var appendminutes = document.getElementById("minutes");
    var buttonStart = document.getElementsById('button-start');
    var buttonStop = document.getElementsById('button-stop');
    var buttonReset = document.getElementsById('button-reset');
    var interval ;
}
buttonStart.onclick = function() {
    clearInterval(Interval)
    Interval = setInterval (startTimer, 10);
}
buttonStop.onclick = function(){
    clearInterval(Interval);
}
buttonReset.onclick = function() {
    clearInterval(Interval);
    milliseconds = 0 ;
    seconds = 0 ;
    minutes = 0 ;
    appendmilliseconds.innerHTML = milliseconds;
    appendseconds.innerHTML = seconds;
    // appendminutes.innerHTML = minutes;
}
function startTimer() {
    milliseconds++;
    if (milliseconds <= 9) {
        appendmilliseconds.innerHTML = "0" + milliseconds;
    }
    if (milliseconds > 9) {
        appendmilliseconds.innerHTML = milliseconds;
    }
    if (milliseconds > 99) {
        seconds++;
        appendseconds.innerHTML = "0" + seconds;
        milliseconds=0;
        appendmilliseconds.innerHTML= "0" + 0;
    }
    if (seconds > 9) {
        appendseconds.innerHTML = seconds;
    }
    // if (minutes > 9) {
    //     appendminutes.innerHTML = minutes;
    // }

}

+++++++++++++++++++++++++++++++++++++++++

window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }