// Enemies our player must avoid
class Enemy {
  constructor(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;

    // Once bugs reach the end of the canvas, the x position
    // is reset to its initial value of -100, so bugs start coming again from
    // the begining of the canvas
    if (this.x > 600) {
      this.x = -100;
    }
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Now write your own player class
class Player {
  constructor() {
    this.x = 200;
    this.y = 405;

    this.sprite = 'images/char-boy.png';
  }

  // This class requires an update()  , render() and
  // a handleInput() method.
  update() {}

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput() {}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Create 4 enemy objects to store in the allEnemies Array
let allEnemies = [];

// Create an IIFE and pass to it a value of -100 corresponding to the initial x position of the enemy bugs
// these bugs are pushed into the alleEnemies array
(function createEnemy(x) {
  allEnemies.push(new Enemy(x, 55, 150));
  allEnemies.push(new Enemy(x, 150, 300));
  allEnemies.push(new Enemy(x, 235, 200));
  allEnemies.push(new Enemy(x, 320, 250));
})(-100);

// Place the player object in a variable called player
player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
