window.addEventListener('DOMContentLoaded', function() {
    
    window.playerTurn = 1;
    window.grid = [[0,0,0], [0,0,0], [0,0,0]];
    var notification = new Notification("Player " + window.playerTurn);
    
    function flip(event){
        
        var tile = event.target;
        var tile_id = tile.id;
        var xcoord = parseInt(tile_id[tile_id.length -2]);
        var ycoord = parseInt(tile_id[tile_id.length -1]);
        
        tile.className = 'tile';
        tile.classList.add('rotator');
        var str = "";
        if (window.playerTurn == 1){
            tile.classList.add('XElement');
            window.playerTurn = 2;
        } else {
            tile.classList.add('YElement');
            window.playerTurn = 1;
        }
        
        window.grid[xcoord - 1][ycoord - 1] = window.playerTurn;
        var notification = new Notification("Player " + window.playerTurn);
        check();
    }
    
    function check() {
        var isGameOver = false;
        for (var i=0; i < window.grid.length; i++){
            if ((window.grid[i][0] == window.grid[i][1]) && (window.grid[i][0] == window.grid[i][2]) && (window.grid[i][0] != 0)){
                isGameOver = true;
            }
        }
        for (var i=0; i < window.grid.length; i++){
            if ((window.grid[0][i] == window.grid[1][i]) && (window.grid[0][i] == window.grid[2][i]) && (window.grid[0][i] != 0)){
                isGameOver = true;
            }
        }
        if ((window.grid[0][0] == window.grid[1][1]) && (window.grid[0][0] == window.grid[2][2]) && (window.grid[0][0] != 0)) {
            isGameOver = true;
        }
        if ((window.grid[0][2] == window.grid[1][1]) && (window.grid[0][2] == window.grid[2][0]) && (window.grid[2][0] != 0)) {
            isGameOver = true;
        }
        if (isGameOver){
            alert('You Win !')
        }
    }
    
    
    var all_tiles = document.getElementsByClassName('tile');
    for( tileIndex in all_tiles ){
        var tile = all_tiles[tileIndex];
        tile.addEventListener('click', function (e) { flip(e) })
    }
    
});
