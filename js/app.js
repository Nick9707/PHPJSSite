var Enemy = function(place){
  this.dt = 0;
  this.position = [(-1) * Math.random() * 1000, place];
  this.sprite = "images/enemy-bug.png";
  this.speed = Math.random() * 10;
  // this.speed = 1;
  this.sqar = 0;
}
var allEnemies =
  [en1 = new Enemy(50),  // start position[1] for bugs
   en2 = new Enemy(50),
   en3 = new Enemy(125),
   en4 = new Enemy(125),
   en5 = new Enemy(220),
   en6 = new Enemy(220)]


Enemy.prototype.setStartPosition = function(){
  this.position[0] = (-1) * Math.random() * 1000;
}

Enemy.prototype.update = function(dt){
  this.dt = dt;
}

Enemy.prototype.render = function(ctx){
    ctx.drawImage(Resources.get(this.sprite), this.position[0], this.position[1]);
  }
Enemy.prototype.move = function(position){
    this.position[0] += this.speed;
    if(this.position[0] > -100) this.sqar = 1;
    if(this.position[0] > 0) this.sqar = 2;
    if(this.position[0] > 102) this.sqar = 3;
    if(this.position[0] > 203) this.sqar = 4;
    if(this.position[0] > 304) this.sqar = 5;
}

var Player = function(){
  this.dt = 0;
  this.position = [200, 400];
  this.sqar = 0;
  this.sprite = "images/char-boy.png";
  this.sqarRL = 3;
  this.won = false;
};

var player = new Player;

Player.prototype.render = function(ctx){
  ctx.drawImage(Resources.get(this.sprite), this.position[0], this.position[1]);
}
Player.prototype.update = function(ctx){
    this.render(ctx);
}

Player.prototype.setStartPosition = function(){
  this.sqar = 0;
  this.position = [200, 400];
  this.won = false;
}

Player.prototype.handleInput = function(num){
  switch (num) {
    case "left":
      this.position[0] -= 100;
      this.sqarRL--;
      if(this.sqarRL < 0){
        this.sqarRL = 0;
        this.position[0] += 100;
      }
      break;
    case "up":
      this.sqar++;
      if(this.sqar> 4){
        this.won = true;
        this.sqar= 0;
      }
      if(this.sqar=== 0) this.position[1] = 400;
      if(this.sqar=== 1) this.position[1] = 300;
      if(this.sqar=== 2) this.position[1] = 220;
      if(this.sqar=== 3) this.position[1] = 125;
      if(this.sqar=== 4) this.position[1] = 50;
      break;
    case "right":
      this.position[0] += 100;
      this.sqarRL++;
      if(this.sqarRL > 5){
        this.sqarRL = 5;
        this.position[0] -= 100;
      }
      break;
    case "down":
      this.sqar--;
      if(this.sqar < 0) this.sqar= 0;
      if(this.sqar=== 0) this.position[1] = 400;
      if(this.sqar=== 1) this.position[1] = 300;
      if(this.sqar=== 2) this.position[1] = 220;
      if(this.sqar=== 3) this.position[1] = 125;
      if(this.sqar=== 4) this.position[1] = 50;
      break;

  }
}
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
     // console.log(typeof allowedKeys[e.keyCode]);
     player.handleInput(allowedKeys[e.keyCode]);
});
