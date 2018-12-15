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
      alert('You Win');
    }
  });

  $('#restart').click(function(){
    $('.col').html(" ");

  });

  function isGameOver(){
    //only check rows
    let count = 0;
    for(let i = 0; i<grid.length; i++){
      for(let j = 0; j<grid[0].length;j++){
        if(grid[i][j] == PLAYER_TOKEN){
          console.log(grid[i][j]);
          count++;
        }
        if (count == 4){
          return true;
        }
        console.log(count);
      }
      count = 0;
    }

    return false;

  }

});
