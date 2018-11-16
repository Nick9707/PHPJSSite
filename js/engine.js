var Engine = (function(global){
  var doc = global.document,
      win = global.window,
      canvas = doc.createElement('canvas'),
      ctx = canvas.getContext('2d'),
      lastTime;

  canvas.width = 505;
  canvas.height = 606;
  doc.body.appendChild(canvas);



  function main(){
    var now = Date.now(),
        dt = (now - lastTime) / 1000;
    update(dt);
    if(player.won === true){
      alert("you won");
      reset();
    }
    render();
    lastTime = now;
    win.requestAnimationFrame(main);
  }


  function init() {
        reset();
        render();
        lastTime = Date.now();
        main();
    }
  function checkCollisions(){
        allEnemies.forEach(function(enemy){
          // if (enemy.sqar === player.sqarRL && enemy.position[1] === player.position[1]) {
          if(enemy.position[1] === player.position[1] && Math.abs(enemy.position[0] - player.position[0]) < 60){
              reset();
          }
        });
    }
    function reset() {
      player.setStartPosition();
      allEnemies.forEach(function(enemy){
        enemy.setStartPosition();
      });
      // noop
  }

    function update(dt) {
        updateEntities(dt);
        // checkCollisions();
    }

    function updateEntities(dt) {
    // allEnemies.forEach(function(enemy) {
    //     enemy.update(dt);
    // });
    // player.update();
}

      function render() {
        var rowImages = [
                  'images/water-block.png',   // Top row is water
                  'images/stone-block.png',   // Row 1 of 3 of stone
                  'images/stone-block.png',   // Row 2 of 3 of stone
                  'images/stone-block.png',   // Row 3 of 3 of stone
                  'images/grass-block.png',   // Row 1 of 2 of grass
                  'images/grass-block.png'    // Row 2 of 2 of grass
              ],
              numRows = 6,
              numCols = 5,
              row, col;

        ctx.clearRect(0,0,canvas.width,canvas.height)
        for (row = 0; row < numRows; row++) {
              for (col = 0; col < numCols; col++) {
                  ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
              }
          }
            renderEntities();
            checkCollisions();
      }


      function renderEntities(){
        var entitiesImage = 'images/enemy-bug.png';
        allEnemies.forEach(function(enemy){
          enemy.move();
          enemy.render(ctx);
          if (enemy.position[0] > 505) {
            enemy.setStartPosition();
          }
          player.update(ctx);
        })
        }

      Resources.load([
      'images/stone-block.png',
      'images/water-block.png',
      'images/grass-block.png',
      'images/enemy-bug.png',
      'images/char-boy.png'
  ]);
  Resources.onReady(init);


})(this);
