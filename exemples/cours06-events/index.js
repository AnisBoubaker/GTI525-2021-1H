var setupEvents = function(){
    var elements = document.querySelectorAll("div, p, a");

    var gestionnaireBubble = function(event){
        alert("Gestionnaire Bubble de: "+this.tagName + 
        " après un click sur "+event.target.tagName);
    }

    var gestionnaireCapture = function(event){
        alert("Gestionnaire Capture de: "+this.tagName + 
        " après un click sur "+event.target.tagName);
    }

    for(var e of elements){
        e.addEventListener('click', gestionnaireBubble, false);
        e.addEventListener('click', gestionnaireCapture, true);
    }

    document.getElementById('monCheck').addEventListener(
        'click', 
        function(event){
            alert("Case à cocher cliquée.");
            event.preventDefault();
        }, 
        false
    )
    document.getElementById('monCheck').addEventListener(
        'click', 
        function(){
            alert('allo');
        }
    );
}


window.onload = setupEvents;