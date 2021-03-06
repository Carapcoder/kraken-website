function preload () {
  game.load.image('ship', '/views/krakengame/images/ship.png');
  game.load.image('bullet', '/views/krakengame/images/bullet.png');
  game.load.image('alien', '/views/krakengame/images/alien.png');
  game.load.image('bomb', '/views/krakengame/images/bomb.png');
  game.load.spritesheet('explosion', '/views/krakengame/images/explosion.png', 80, 80);

  game.load.audio('shoot', '/views/krakengame/sounds/shoot.wav');
  game.load.audio('explode', '/views/krakengame/sounds/explode.wav');
  game.load.audio('bomb', '/views/krakengame/sounds/bomb.wav');
  game.load.audio('backtrack', '/views/krakengame/sounds/backtrack.wav');
}
