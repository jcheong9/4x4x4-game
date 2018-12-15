const PLAYERONE_TOKEN = 'X';
const PLAYERTWO_TOKEN = 'O';

let playerTurn = 0;
$(document).ready(function(){
  const grid = [
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ']
  ];

  $('.col').click(function(){
    $this = $(this);
    if (playerTurn == 0) {
      $this.html(PLAYERONE_TOKEN);
      const i = $this.data('i');
      const j = $this.data('j');
      grid[i][j] = PLAYERONE_TOKEN;
      playerTurn = 1;
    } else if (playerTurn == 1) {
      $this.html(PLAYERTWO_TOKEN);
      const i = $this.data('i');
      const j = $this.data('j');
      grid[i][j] = PLAYERTWO_TOKEN;
      playerTurn = 0;
    }
     if (isGameOver() === PLAYERONE_TOKEN){
      console.log('Player one Wins');
      alert('Player One Wins');
    } else if (isGameOver() === PLAYERTWO_TOKEN) {
      console.log('Player Two Wins');
      alert('Player Two Wins');
    }
  });

  $('#restart').click(function(){
    $('.col').html(" ");

  });

  function isGameOver(){
    //only check rows
    for(let i = 0; i < 4; i++){
      if(grid[i][0] !== ' ' && grid[i][0] === grid[i][1] && grid[i][0] === grid[i][2] && grid[i][0] === grid[i][3]) {
        return grid[i][0];
      }
    }
    //only check vertical
    for(let j = 0; j < 4; j++){
      if(grid[0][j] !== ' ' && grid[0][j] === grid[1][j] && grid[0][j] === grid[2][j] && grid[0][j] === grid[3][j]) {
        return grid[0][j];
    }
}


  }

});
