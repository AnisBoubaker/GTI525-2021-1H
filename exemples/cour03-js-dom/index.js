var Board = function(size){
    this.size = size;
    this.boxes = Array(size);
    for(var i=0; i<size; i++){
        this.boxes[i] = new Box(i);
    }
}

/* Afficher le board à l'écran */
Board.prototype.render = function(){
    var domBoard = document.querySelector("#board");
    var nbRows = Math.sqrt(this.size);

    for(var i=0; i<nbRows; i++){
        var domRow = document.createElement("div");
        domRow.className = "board-row";
        domBoard.appendChild(domRow);
        for(var j=0; j<nbRows; j++){
            domRow.appendChild( this.boxes[ i*nbRows + j].getNode() );
        }
    }
}



var Box = function(idBox){
    this.idBox = idBox;
    this.value = "?"; 
}

Box.prototype.getNode = function(){
    var domBox = document.createElement("button");
    domBox.className = "square";
    domBox.id = this.idBox;
    domBox.innerHTML = this.value;

    domBox.addEventListener("click", function(){ alert("On a pressé le bouton num. "+this.id); }  )

    return domBox;
}