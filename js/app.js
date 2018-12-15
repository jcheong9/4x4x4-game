const PLAYER_TOKEN = 'X';

$(document).ready(function(){
  const grid = [
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ']
  ];

  $('.col').click(function(){
    $this = $(this);
    $this.html(PLAYER_TOKEN);
    const i = $this.data('i');
    const j = $this.data('j');
    grid[i][j] = PLAYER_TOKEN;
    console.log(grid);
    if (isGameOver()){
      console.log('winner');
      // alert('You Win');
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
