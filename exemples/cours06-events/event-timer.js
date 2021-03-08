

var setup = function(){
  
  var counterNode = document.createElement("div");
  document.getElementsByTagName("body")[0].appendChild(counterNode);

  titleNode = document.createElement("span"); 
  titleNode.textContent = "Secondes écoulées: ";
  counterNode.appendChild(titleNode);

  timeNode = document.createElement("span");
  timeNode.textContent = "0";
  counterNode.appendChild(timeNode);

  timerButton = document.createElement("button");
  timerButton.textContent = "Démarrer";
  timerButton.style.margin = "0 10px";
  counterNode.appendChild(timerButton);
  
  resetButton = document.createElement("button");
  resetButton.textContent = "Reset";
  resetButton.style.margin = "0 10px";
  counterNode.appendChild(resetButton);
  

 /* Compléter ci-dessous */
  
    var timerValue = 0; 
    var timerInterval = null;


  var startStopTimer = function(){
    if(timerInterval){ //Stop
        clearInterval(timerInterval);
        timerInterval = null;
        timerButton.textContent = "Démarrer";
    } else { //Partir
        timerInterval = setInterval( 
            startStopTimer
            , 1000
        );
        timerButton.textContent = "Arrêter";
    }
  };
  
  timerButton.addEventListener("click", startStopTimer);
  resetButton.addEventListener("click", ()=>{
      timerValue = 0;
      timeNode.textContent = timerValue;
  }); 
    
};