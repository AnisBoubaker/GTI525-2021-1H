var board;

window.onload = function(){
    board = new Board(9);
    board.render();

    document.querySelector('#controls button').addEventListener('click', function(){
        board.clear();
    });
};